import React, { useState } from 'react';
import {
  BookOpen,
  Volume2,
  Heart,
  PlusCircle,
  Sparkles,
  MapPin,
  Award
} from 'lucide-react';
import { useHeritage } from '../context/HeritageContext';
import { ORAL_STORIES, type OralStory } from '../data/storiesData';

export const StoriesPage: React.FC = () => {
  const {
    openPreserveModal,
    playSimulatedAudio,
    userPreservedItems,
    addPoints,
    showToast
  } = useHeritage();

  const [selectedStory, setSelectedStory] = useState<OralStory>(ORAL_STORIES[0]);
  const [pledges, setPledges] = useState<Record<string, number>>({});

  const handlePledgeArtisan = (storyId: string, artisanName: string) => {
    setPledges(prev => ({
      ...prev,
      [storyId]: (prev[storyId] || 0) + 1
    }));
    addPoints(25, `Pledged support for master artisan ${artisanName}`);
    showToast(`Pledged support for ${artisanName}! (+25 PTS)`, 'points');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 pb-24">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-6 border-b border-white/10">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#E5B842] text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-4 h-4" />
            <span>Intangible Heritage Audio-Visual Archive</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#FBF9F5]">
            Living Storytellers Vault
          </h1>
          <p className="text-xs sm:text-sm text-[#A3A8B8] leading-relaxed">
            Unfiltered oral narratives recorded directly in village courtyards, mountain kitchens, and desert looms. Listen to master custodians before their wisdom dissolves into silence.
          </p>
        </div>

        <button
          type="button"
          onClick={() => openPreserveModal('story')}
          className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#C85A32] to-[#E5B842] text-[#0C0D14] font-bold text-xs flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all shadow-lg shrink-0"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Record an Elder’s Story (+100 PTS)</span>
        </button>
      </div>

      {/* Featured Master Narrative Spotlight */}
      <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#181B2A] via-[#12141F] to-[#0C0D14] border border-[#D4AF37]/40 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Portrait & Media */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden border-2 border-[#D4AF37]/40 shadow-xl">
              <img
                src={selectedStory.coverImage}
                alt={selectedStory.artisanName}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D14] via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 flex items-end gap-3">
                <img
                  src={selectedStory.avatar}
                  alt={selectedStory.artisanName}
                  className="w-14 h-14 rounded-xl object-cover border-2 border-[#E5B842] shadow-lg"
                />
                <div>
                  <h3 className="text-lg font-serif font-bold text-[#FBF9F5]">
                    {selectedStory.artisanName}
                  </h3>
                  <p className="text-xs text-[#E5B842]">{selectedStory.role}</p>
                </div>
              </div>
            </div>

            {/* Audio Button */}
            <button
              type="button"
              onClick={() =>
                playSimulatedAudio(
                  selectedStory.audioTitle,
                  `${selectedStory.artisanName} • ${selectedStory.heritageName}`,
                  selectedStory.audioDuration
                )
              }
              className="w-full py-3 rounded-xl bg-[#E5B842] hover:bg-[#F3C456] text-[#0C0D14] font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-95"
            >
              <Volume2 className="w-4 h-4" />
              <span>Listen to Oral Recording ({selectedStory.audioDuration})</span>
            </button>
          </div>

          {/* Oral Transcript */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-xs text-[#A3A8B8]">
              <MapPin className="w-4 h-4 text-[#E5B842]" />
              <span>{selectedStory.location}</span>
              <span>•</span>
              <span className="text-[#E5B842] font-semibold">{selectedStory.heritageName}</span>
            </div>

            <div className="p-4 rounded-xl bg-[#0C0D14] border border-[#D4AF37]/30 text-sm font-serif italic text-[#FBF9F5] leading-relaxed">
              &ldquo;{selectedStory.quote}&rdquo;
            </div>

            <div className="space-y-3 text-xs text-[#C5C8D4] leading-relaxed">
              {selectedStory.fullNarrative.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-xs text-[#E5B842]">
              <strong>Generational Wisdom:</strong> {selectedStory.keyWisdom}
            </div>

            {/* Action Support Bar */}
            <div className="flex items-center justify-between pt-3 border-t border-white/10">
              <div className="text-xs text-[#A3A8B8]">
                <strong>{selectedStory.preservationPledgeCount + (pledges[selectedStory.id] || 0)}</strong> Community Pledges
              </div>

              <button
                type="button"
                onClick={() =>
                  handlePledgeArtisan(selectedStory.id, selectedStory.artisanName)
                }
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#C85A32] to-[#E5B842] text-[#0C0D14] font-bold text-xs flex items-center gap-1.5 hover:brightness-110 active:scale-95 transition-all shadow"
              >
                <Heart className="w-3.5 h-3.5 fill-current" />
                <span>Pledge Artisan Patronage (+25 PTS)</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Story Selector Grid */}
      <div className="space-y-4">
        <h3 className="text-xl font-serif font-bold text-[#FBF9F5]">
          Browse Master Custodians
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ORAL_STORIES.map(story => {
            const isSelected = selectedStory.id === story.id;
            return (
              <div
                key={story.id}
                onClick={() => setSelectedStory(story)}
                className={`p-4 rounded-2xl border cursor-pointer transition-all duration-300 flex flex-col justify-between space-y-3 ${
                  isSelected
                    ? 'bg-[#181B2A] border-[#E5B842] shadow-xl shadow-[#D4AF37]/20 scale-[1.02]'
                    : 'bg-[#12141F] border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-start gap-3">
                  <img
                    src={story.avatar}
                    alt={story.artisanName}
                    className="w-12 h-12 rounded-xl object-cover border border-white/10 shrink-0"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-[#FBF9F5]">{story.artisanName}</h4>
                    <p className="text-[11px] text-[#E5B842]">{story.role}</p>
                    <p className="text-[10px] text-[#8E92A4] mt-0.5">{story.location}</p>
                  </div>
                </div>

                <p className="text-xs text-[#A3A8B8] italic line-clamp-2">
                  &ldquo;{story.quote}&rdquo;
                </p>

                <div className="flex items-center justify-between text-[11px] pt-2 border-t border-white/5">
                  <span className="text-[#8E92A4]">{story.heritageName}</span>
                  <span className="text-[#E5B842] font-semibold">{story.audioDuration}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* User Preserved Stories Vault */}
      {userPreservedItems.length > 0 && (
        <div className="space-y-4 pt-6 border-t border-white/10">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-serif font-bold text-[#FBF9F5] flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#E5B842]" />
              <span>Memories Preserved by You ({userPreservedItems.length})</span>
            </h3>
            <span className="text-xs text-[#A3A8B8]">Saved in Local Heritage Vault</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {userPreservedItems.map(item => (
              <div
                key={item.id}
                className="p-5 rounded-2xl bg-[#12141F] border border-[#D4AF37]/40 shadow-xl space-y-3"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2 py-0.5 rounded-full bg-[#D4AF37]/20 text-[#E5B842] font-bold text-[10px] uppercase">
                    {item.type.toUpperCase()} • {item.heritageCategory}
                  </span>
                  <span className="text-[#8E92A4] text-[11px]">{item.timestamp}</span>
                </div>

                <h4 className="text-base font-serif font-bold text-[#FBF9F5]">
                  {item.title}
                </h4>

                <p className="text-xs text-[#C5C8D4] leading-relaxed italic bg-[#0C0D14] p-3 rounded-xl border border-white/5">
                  &ldquo;{item.content}&rdquo;
                </p>

                <div className="flex items-center justify-between text-[11px] text-[#A3A8B8] pt-1">
                  <div>
                    <span>Archived by: </span>
                    <strong className="text-[#FBF9F5]">{item.contributor}</strong>
                  </div>
                  <div className="flex items-center gap-1 text-[#E5B842]">
                    <Award className="w-3.5 h-3.5" />
                    <span>{item.badgeEarned || 'Culture Guardian Token'}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
