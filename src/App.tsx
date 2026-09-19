import { useState } from 'react';
import { MONUMENTS } from './data/monuments';
import { SACRED_CREATURES } from './data/creatures';
import type { Monument, SacredCreature } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { Monument3DViewer } from './components/Monument3DViewer';
import { TimeMachineSlider } from './components/TimeMachineSlider';
import { MonumentsExplorer } from './components/MonumentsExplorer';
import { CreatureLoreSection } from './components/CreatureLoreSection';
import { HeritagePassport } from './components/HeritagePassport';
import { CameraARViewer } from './components/CameraARViewer';
import { VR360Tour } from './components/VR360Tour';
import { ModelViewerWebXR } from './components/ModelViewerWebXR';
import { MobileBottomNav } from './components/MobileBottomNav';
import { Footer } from './components/Footer';
import { soundEngine } from './services/soundEngine';
import { triggerHaptic } from './utils/haptics';
import { Camera, Compass, Sparkles, MapPin, Smartphone } from 'lucide-react';
import confetti from 'canvas-confetti';

export function App() {
  const [selectedMonument, setSelectedMonument] = useState<Monument>(MONUMENTS[0]);
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);
  const [isAROpen, setIsAROpen] = useState<boolean>(false);
  const [isVROpen, setIsVROpen] = useState<boolean>(false);
  const [isWebXROpen, setIsWebXROpen] = useState<boolean>(false);

  // Gamification: Unlocked badges in Smarak AR Passport
  const [unlockedBadges, setUnlockedBadges] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('smarak_ar_badges');
      return saved ? JSON.parse(saved) : ['Taj Mahal Marble Guardian'];
    } catch {
      return ['Taj Mahal Marble Guardian'];
    }
  });

  const handleUnlockBadge = (badge: string) => {
    if (!unlockedBadges.includes(badge)) {
      const updated = [...unlockedBadges, badge];
      setUnlockedBadges(updated);
      try {
        localStorage.setItem('smarak_ar_badges', JSON.stringify(updated));
      } catch {
        // ignore
      }
      triggerHaptic('success');
      // Confetti burst
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#f59e0b', '#f97316', '#10b981'],
      });
    }
  };

  const handleToggleAudio = () => {
    triggerHaptic('tap');
    const isNowPlaying = soundEngine.toggleDrone();
    setIsAudioPlaying(isNowPlaying);
  };

  const handleSelectMonument = (m: Monument) => {
    triggerHaptic('tap');
    setSelectedMonument(m);
    handleUnlockBadge(`Visited ${m.name}`);
    const viewer = document.getElementById('viewer');
    if (viewer) {
      viewer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenARWithCreature = (creature: SacredCreature) => {
    triggerHaptic('tap');
    handleUnlockBadge(`Encountered ${creature.name}`);
    setIsAROpen(true);
  };

  return (
    <div className="min-h-screen bg-[#080912] text-[#f1ede4] selection:bg-[#f59e0b] selection:text-black overflow-x-hidden font-outfit relative pb-20 md:pb-0">
      {/* Royal Header */}
      <Navbar
        isAudioPlaying={isAudioPlaying}
        onToggleAudio={handleToggleAudio}
        onOpenAR={() => setIsAROpen(true)}
        onOpenPassport={() => {
          const el = document.getElementById('passport');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Hero Section */}
      <HeroSection
        onStartAR={() => setIsWebXROpen(true)}
        onExploreClick={() => {
          const el = document.getElementById('viewer');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onCreaturesClick={() => {
          const el = document.getElementById('creatures');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        isAudioPlaying={isAudioPlaying}
        onToggleAudio={handleToggleAudio}
      />

      {/* 3D Sanctum Viewport Section */}
      <section id="viewer" className="w-full py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Interactive 3D Architectural Sandbox</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-cinzel font-black text-white">
              {selectedMonument.name} <span className="text-amber-400 font-yatra">({selectedMonument.hindiName})</span>
            </h2>
            <p className="text-xs sm:text-sm text-amber-200/70 font-outfit mt-1">
              {selectedMonument.location} • {selectedMonument.period} • {selectedMonument.dynasty}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                triggerHaptic('success');
                setIsWebXROpen(true);
              }}
              className="flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black text-xs font-bold shadow-lg shadow-amber-500/25 transition-all cursor-pointer"
            >
              <Smartphone className="w-4 h-4" />
              <span>Native Floor AR</span>
            </button>

            <button
              onClick={() => {
                triggerHaptic('tap');
                setIsAROpen(true);
              }}
              className="flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-black/60 hover:bg-black/90 text-amber-300 border border-amber-500/30 text-xs font-semibold transition-all cursor-pointer backdrop-blur-md"
            >
              <Camera className="w-4 h-4" />
              <span>Camera AR</span>
            </button>

            <button
              onClick={() => {
                triggerHaptic('tap');
                setIsVROpen(true);
              }}
              className="flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-indigo-950/80 hover:bg-indigo-900 border border-indigo-400/40 text-amber-300 text-xs font-semibold transition-all cursor-pointer backdrop-blur-md"
            >
              <Compass className="w-4 h-4 text-amber-400" />
              <span>360° VR</span>
            </button>
          </div>
        </div>

        {/* 3D WebGL Canvas */}
        <div className="mb-8">
          <Monument3DViewer
            monument={selectedMonument}
            onOpenAR={() => setIsAROpen(true)}
            onOpenVR={() => setIsVROpen(true)}
          />
        </div>

        {/* Two Columns: Full History & Kala-Chakra Time Machine */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Architectural Storytelling & Cultural Etiquette */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="p-6 rounded-3xl glass-royal border border-amber-500/30 shadow-2xl">
              <h3 className="font-cinzel font-bold text-xl text-white mb-3">
                Architectural Genesis & Sacred Lore
              </h3>
              <p className="text-sm text-amber-100/90 leading-relaxed font-outfit mb-5">
                {selectedMonument.fullHistory}
              </p>

              <div className="space-y-3 pt-4 border-t border-white/10 text-xs">
                <div className="flex items-start gap-2">
                  <span className="font-bold text-amber-400">Architectural Style:</span>
                  <span className="text-gray-300">{selectedMonument.architecturalStyle}</span>
                </div>

                <div className="flex items-start gap-2">
                  <span className="font-bold text-amber-400">Associated Creatures:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedMonument.featuredCreatures.length > 0 ? (
                      selectedMonument.featuredCreatures.map((cid) => {
                        const c = SACRED_CREATURES.find((item) => item.id === cid);
                        return (
                          <span
                            key={cid}
                            className="px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 text-[11px] font-semibold"
                          >
                            ✨ {c ? c.name : cid}
                          </span>
                        );
                      })
                    ) : (
                      <span className="text-gray-400">Geometric & Epigraphic Motifs</span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Practical Visiting & Aarti Tips */}
            <div className="p-6 rounded-3xl glass-royal border border-amber-500/30 shadow-2xl">
              <h4 className="font-cinzel font-bold text-lg text-white mb-4 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>On-Site Visitor Guidelines</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3 rounded-2xl bg-black/40 border border-white/10">
                  <span className="font-bold text-amber-300 block mb-1">🌅 Best Light Hour:</span>
                  <span className="text-amber-100/80">{selectedMonument.visitTips.bestTime}</span>
                </div>
                <div className="p-3 rounded-2xl bg-black/40 border border-white/10">
                  <span className="font-bold text-orange-300 block mb-1">🕯️ Aarti / Sound & Light:</span>
                  <span className="text-amber-100/80">{selectedMonument.visitTips.aartiHours}</span>
                </div>
                <div className="p-3 rounded-2xl bg-black/40 border border-white/10">
                  <span className="font-bold text-emerald-300 block mb-1">📸 Photo Spots:</span>
                  <span className="text-amber-100/80">{selectedMonument.visitTips.photography}</span>
                </div>
                <div className="p-3 rounded-2xl bg-black/40 border border-white/10">
                  <span className="font-bold text-cyan-300 block mb-1">🥻 Dress Etiquette:</span>
                  <span className="text-amber-100/80">{selectedMonument.visitTips.dressCode}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Kala-Chakra Time Machine Slider */}
          <div className="lg:col-span-6">
            <TimeMachineSlider monument={selectedMonument} />
          </div>
        </div>
      </section>

      {/* Monuments Explorer Catalog */}
      <MonumentsExplorer
        selectedMonument={selectedMonument}
        onSelectMonument={handleSelectMonument}
        onOpenAR={(m) => {
          setSelectedMonument(m);
          setIsAROpen(true);
        }}
        onOpenVR={(m) => {
          setSelectedMonument(m);
          setIsVROpen(true);
        }}
      />

      {/* Sacred Creatures Lore & Bestiary Section */}
      <div id="creatures">
        <CreatureLoreSection
          onOpenARWithCreature={handleOpenARWithCreature}
          onClaimBadge={(badgeTitle) => handleUnlockBadge(badgeTitle)}
        />
      </div>

      {/* Heritage Passport Gamification */}
      <HeritagePassport unlockedBadges={unlockedBadges} />

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Bottom Navigation */}
      <MobileBottomNav
        onOpenAR={() => setIsWebXROpen(true)}
      />

      {/* Modals: AR Camera Overlay */}
      {isAROpen && (
        <CameraARViewer
          monument={selectedMonument}
          onClose={() => setIsAROpen(false)}
          onUnlockBadge={(badge) => handleUnlockBadge(badge)}
          onOpenNativeAR={() => {
            setIsAROpen(false);
            setIsWebXROpen(true);
          }}
        />
      )}

      {/* Modals: 360 VR Photosphere Tour */}
      {isVROpen && (
        <VR360Tour
          monument={selectedMonument}
          onClose={() => setIsVROpen(false)}
        />
      )}

      {/* Modals: Phone Native WebXR & Scene Viewer Quick Look */}
      {isWebXROpen && (
        <ModelViewerWebXR
          monument={selectedMonument}
          onClose={() => setIsWebXROpen(false)}
          onSwitchToCameraAR={() => {
            setIsWebXROpen(false);
            setIsAROpen(true);
          }}
        />
      )}
    </div>
  );
}

export default App;
