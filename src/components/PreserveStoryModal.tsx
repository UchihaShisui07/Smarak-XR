import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  X,
  Mic,
  Video,
  Image as ImageIcon,
  BookOpen,
  Utensils,
  Award,
  Sparkles,
  CheckCircle,
  Clock,
  MapPin,
  ShieldCheck,
  Radio
} from 'lucide-react';
import { useHeritage } from '../context/HeritageContext';

export const PreserveStoryModal: React.FC = () => {
  const {
    isPreserveModalOpen,
    preserveModalInitialType,
    closePreserveModal,
    addUserPreservedItem,
    userLevel
  } = useHeritage();

  const [activeTab, setActiveTab] = useState<'story' | 'audio' | 'photo' | 'recipe' | 'video'>('story');
  const [title, setTitle] = useState('');
  const [contributor, setContributor] = useState('You (Culture Guardian)');
  const [location, setLocation] = useState('Punjab, India');
  const [category, setCategory] = useState('Folk Traditions');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('Tradition, Oral Lore');

  // Simulated Voice Recording State
  const [isRecording, setIsRecording] = useState(false);
  const [recordingSeconds, setRecordingSeconds] = useState(0);

  // Success minted state
  const [isMinted, setIsMinted] = useState(false);
  const [mintedId, setMintedId] = useState('');

  useEffect(() => {
    if (preserveModalInitialType) {
      setActiveTab(preserveModalInitialType);
    }
    setIsMinted(false);
    setIsRecording(false);
    setRecordingSeconds(0);
  }, [isPreserveModalOpen, preserveModalInitialType]);

  // Voice recording timer simulation
  useEffect(() => {
    let interval: any = null;
    if (isRecording) {
      interval = setInterval(() => {
        setRecordingSeconds(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  if (!isPreserveModalOpen) return null;

  const handleStartStopRecording = () => {
    if (!isRecording) {
      setIsRecording(true);
      setRecordingSeconds(0);
    } else {
      setIsRecording(false);
      if (!title) setTitle('Oral Recording of Matriarch Blessing');
      if (!content)
        setContent(
          'Captured 45 seconds of traditional oral recitation describing seasonal harvest prayers and ancient dialect phrases.'
        );
    }
  };

  const handleMintArchive = (e: React.FormEvent) => {
    e.preventDefault();
    const finalTitle = title.trim() || 'Preserved Cultural Memory';
    const finalContent =
      content.trim() ||
      'Recorded ancestral family knowledge and wisdom for the open-source decentralized heritage ledger.';

    const tagArray = tags
      .split(',')
      .map(t => t.trim())
      .filter(Boolean);

    addUserPreservedItem({
      type: activeTab,
      title: finalTitle,
      contributor: contributor || 'Culture Guardian',
      location: location || 'India',
      heritageCategory: category,
      content: finalContent,
      badgeEarned: 'Oral Archivist Emblem',
      tags: tagArray.length ? tagArray : ['Preserved Heritage']
    });

    const archiveCode = 'HA-2026-' + Math.floor(1000 + Math.random() * 9000);
    setMintedId(archiveCode);
    setIsMinted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // fallback if canvas-confetti not loaded
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-[#12141F] border border-[#D4AF37]/40 rounded-2xl w-full max-w-4xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#0C0D14]/70">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#C85A32] to-[#E5B842] flex items-center justify-center text-[#FBF9F5] shadow-md">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold font-serif text-[#FBF9F5]">
                Preserve a Cultural Memory
              </h2>
              <p className="text-xs text-[#A3A8B8]">
                Mint your family oral lore, recipe, or elder’s voice to the permanent Digital Heritage Archive (+100 PTS)
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={closePreserveModal}
            className="p-1.5 text-[#8E92A4] hover:text-[#FBF9F5] rounded-lg hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {!isMinted ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column: Form & Modalities */}
              <div className="lg:col-span-7 space-y-4">
                {/* Modality Selector Tabs */}
                <div>
                  <label className="block text-xs font-semibold text-[#C5C8D4] mb-2 uppercase tracking-wider">
                    Select Preservation Medium:
                  </label>
                  <div className="grid grid-cols-5 gap-1.5 bg-[#0C0D14] p-1.5 rounded-xl border border-white/5">
                    {[
                      { id: 'story', label: 'Story', icon: BookOpen },
                      { id: 'audio', label: 'Audio', icon: Mic },
                      { id: 'recipe', label: 'Recipe', icon: Utensils },
                      { id: 'photo', label: 'Heirloom', icon: ImageIcon },
                      { id: 'video', label: 'Video', icon: Video }
                    ].map(tab => (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveTab(tab.id as any)}
                        className={`flex flex-col items-center justify-center py-2 px-1 rounded-lg text-xs font-medium transition-all ${
                          activeTab === tab.id
                            ? 'bg-[#D4AF37] text-[#0C0D14] font-bold shadow'
                            : 'text-[#8E92A4] hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <tab.icon className="w-4 h-4 mb-1" />
                        <span className="text-[10px]">{tab.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Specific Modality Interactive Elements */}
                {activeTab === 'audio' && (
                  <div className="p-4 rounded-xl bg-[#0C0D14]/80 border border-[#D4AF37]/30 text-center space-y-3">
                    <div className="flex items-center justify-center gap-2">
                      <Radio className="w-4 h-4 text-[#E5B842] animate-pulse" />
                      <span className="text-xs font-semibold text-[#E5B842] uppercase tracking-wider">
                        Microphone Voice Recorder
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={handleStartStopRecording}
                      className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center transition-all shadow-lg ${
                        isRecording
                          ? 'bg-rose-600 text-white animate-pulse scale-110 shadow-rose-600/50'
                          : 'bg-gradient-to-tr from-[#C85A32] to-[#E5B842] text-[#0C0D14] hover:scale-105'
                      }`}
                    >
                      <Mic className="w-7 h-7" />
                    </button>

                    <div className="text-xs text-[#C5C8D4]">
                      {isRecording ? (
                        <div className="space-y-1">
                          <p className="text-rose-400 font-bold">Recording in progress...</p>
                          <p className="font-mono text-base text-[#FBF9F5]">00:{recordingSeconds < 10 ? '0' : ''}{recordingSeconds}</p>
                          <p className="text-[11px] text-[#8E92A4]">Click button again to finalize waveform</p>
                        </div>
                      ) : (
                        <p className="text-[#A3A8B8]">Tap to record an elder’s folk song, idiom, or oral history</p>
                      )}
                    </div>
                  </div>
                )}

                {activeTab === 'photo' && (
                  <div className="p-4 rounded-xl bg-[#0C0D14]/80 border border-dashed border-[#D4AF37]/30 text-center space-y-2">
                    <ImageIcon className="w-8 h-8 text-[#E5B842] mx-auto opacity-70" />
                    <p className="text-xs text-[#C5C8D4] font-medium">
                      Upload Heirloom Photograph or Artifact Scan
                    </p>
                    <p className="text-[11px] text-[#8E92A4]">
                      Simulated local preview: 1948 Silver Choker / Brass Lota / Phulkari Shawl
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setTitle('1952 Ancestral Brass Grain Measure');
                        setContent('Hand-carved brass Ser used in my great-grandfather’s village grocery in Gurdaspur.');
                      }}
                      className="px-3 py-1 bg-white/5 hover:bg-white/10 text-[11px] text-[#E5B842] rounded-lg border border-white/10"
                    >
                      Load Sample Heirloom
                    </button>
                  </div>
                )}

                {activeTab === 'video' && (
                  <div className="p-4 rounded-xl bg-[#0C0D14]/80 border border-dashed border-[#D4AF37]/30 text-center space-y-2">
                    <Video className="w-8 h-8 text-[#E5B842] mx-auto opacity-70" />
                    <p className="text-xs text-[#C5C8D4] font-medium">
                      Video Demonstration of Technique / Craft
                    </p>
                    <p className="text-[11px] text-[#8E92A4]">
                      Simulated direct upload: 1080p WebM / MP4 artisan capture
                    </p>
                  </div>
                )}

                {/* Form Fields */}
                <form onSubmit={handleMintArchive} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-[#C5C8D4] mb-1">
                        Tradition / Memory Title *
                      </label>
                      <input
                        type="text"
                        required
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder={
                          activeTab === 'recipe'
                            ? 'e.g. Grandmother’s Fermented Kanji Recipe'
                            : activeTab === 'audio'
                            ? 'e.g. Kumaoni Hurkiya Bol Song Fragment'
                            : 'e.g. The Story of the Great Desert Tanka Well'
                        }
                        className="w-full px-3.5 py-2 rounded-xl bg-[#0C0D14] border border-white/10 text-sm text-[#FBF9F5] focus:outline-none focus:border-[#E5B842]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#C5C8D4] mb-1">
                        Preserver / Contributor Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={contributor}
                        onChange={e => setContributor(e.target.value)}
                        placeholder="e.g. Harpreet Kaur / Culture Guardian"
                        className="w-full px-3.5 py-2 rounded-xl bg-[#0C0D14] border border-white/10 text-sm text-[#FBF9F5] focus:outline-none focus:border-[#E5B842]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-[#C5C8D4] mb-1">
                        Origin Location / Village *
                      </label>
                      <input
                        type="text"
                        required
                        value={location}
                        onChange={e => setLocation(e.target.value)}
                        placeholder="e.g. Nirona, Kutch, Gujarat"
                        className="w-full px-3.5 py-2 rounded-xl bg-[#0C0D14] border border-white/10 text-sm text-[#FBF9F5] focus:outline-none focus:border-[#E5B842]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#C5C8D4] mb-1">
                        Cultural Category
                      </label>
                      <select
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl bg-[#0C0D14] border border-white/10 text-sm text-[#FBF9F5] focus:outline-none focus:border-[#E5B842]"
                      >
                        <option value="Folk Traditions">Folk Traditions</option>
                        <option value="Culinary Traditions">Culinary Traditions</option>
                        <option value="Endangered Crafts">Endangered Crafts</option>
                        <option value="Music & Oral Songs">Music & Oral Songs</option>
                        <option value="Sacred Architecture">Sacred Architecture</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#C5C8D4] mb-1">
                      Narrative / Transcript / Ingredients *
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={content}
                      onChange={e => setContent(e.target.value)}
                      placeholder="Write down the details, words spoken by your elders, ingredients, or cultural wisdom..."
                      className="w-full px-3.5 py-2 rounded-xl bg-[#0C0D14] border border-white/10 text-sm text-[#FBF9F5] focus:outline-none focus:border-[#E5B842] resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#C5C8D4] mb-1">
                      Keywords / Tags (comma separated)
                    </label>
                    <input
                      type="text"
                      value={tags}
                      onChange={e => setTags(e.target.value)}
                      placeholder="Handloom, Cast Iron, Kutch, Oral History"
                      className="w-full px-3.5 py-2 rounded-xl bg-[#0C0D14] border border-white/10 text-xs text-[#FBF9F5] focus:outline-none focus:border-[#E5B842]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-[#C85A32] via-[#E5B842] to-[#C85A32] text-[#0C0D14] font-bold text-sm shadow-lg shadow-[#C85A32]/25 hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span>Mint & Archive to Heritage Ledger (+100 PTS)</span>
                  </button>
                </form>
              </div>

              {/* Right Column: Live Digital Heritage Card Preview */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="text-center mb-2">
                  <span className="text-[10px] uppercase tracking-widest text-[#E5B842] font-semibold">
                    Live Digital Heritage Card Preview
                  </span>
                </div>

                {/* Simulated Certificate Card */}
                <div className="relative p-5 rounded-2xl bg-gradient-to-br from-[#181B2A] to-[#0C0D14] border-2 border-[#D4AF37]/50 shadow-2xl overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4AF37]/10 rounded-full blur-2xl" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#C85A32]/10 rounded-full blur-2xl" />

                  {/* Corner Ornaments */}
                  <div className="flex justify-between items-center border-b border-[#D4AF37]/30 pb-3 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">🪔</span>
                      <div>
                        <h4 className="text-xs font-serif font-bold text-[#FBF9F5] tracking-wider uppercase">
                          Heritage Alive Archive
                        </h4>
                        <p className="text-[9px] text-[#A3A8B8]">Digital Intangible Heritage Token</p>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-mono bg-[#D4AF37]/20 text-[#E5B842] border border-[#D4AF37]/40">
                      TOKEN #HA-DRAFT
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="text-[10px] text-[#E5B842] uppercase font-bold tracking-wider mb-0.5">
                        {category} • {activeTab.toUpperCase()}
                      </div>
                      <h3 className="text-base font-serif font-bold text-[#FBF9F5] leading-snug">
                        {title || 'Untitled Ancestral Memory'}
                      </h3>
                    </div>

                    <div className="flex items-center gap-4 text-[11px] text-[#C5C8D4]">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#E5B842]" />
                        <span>{location || 'India'}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#E5B842]" />
                        <span>Just now</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-[#0C0D14]/80 border border-white/5 text-xs text-[#A3A8B8] italic line-clamp-4 min-h-[70px]">
                      &ldquo;{content || 'Enter your story to preview the immutable archival certificate...'}&rdquo;
                    </div>

                    <div className="border-t border-[#D4AF37]/20 pt-3 flex items-center justify-between text-[10px]">
                      <div>
                        <div className="text-[#8E92A4]">Documented by:</div>
                        <div className="font-bold text-[#FBF9F5]">{contributor}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[#8E92A4]">Archivist Level:</div>
                        <div className="font-bold text-[#E5B842]">{userLevel}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Success Screen */
            <div className="text-center py-8 px-4 max-w-lg mx-auto space-y-5 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle className="w-10 h-10" />
              </div>

              <div>
                <span className="px-3 py-1 rounded-full bg-[#D4AF37]/20 text-[#E5B842] text-xs font-mono font-bold border border-[#D4AF37]/40">
                  {mintedId}
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#FBF9F5] mt-3">
                  Memory Preserved For Posterity!
                </h3>
                <p className="text-xs text-[#C5C8D4] mt-2">
                  Congratulations! Your contribution has been securely recorded to the Heritage Alive vault and awarded to your guardian profile.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0C0D14] border border-[#D4AF37]/30 flex items-center justify-center gap-3">
                <Award className="w-8 h-8 text-[#E5B842]" />
                <div className="text-left">
                  <div className="text-sm font-bold text-[#E5B842]">+100 Heritage Points Added</div>
                  <div className="text-xs text-[#A3A8B8]">Badge Unlocked: Oral Archivist Emblem</div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={closePreserveModal}
                  className="flex-1 py-2.5 rounded-xl bg-[#D4AF37] text-[#0C0D14] font-bold text-xs hover:brightness-110 transition-all"
                >
                  Done & Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    closePreserveModal();
                    window.location.href = '#/profile';
                  }}
                  className="flex-1 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-[#FBF9F5] font-semibold text-xs transition-all border border-white/10"
                >
                  View in My Profile
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
