import React, { useState } from 'react';
import {
  Compass,
  Camera,
  Sparkles,
  Volume2
} from 'lucide-react';
import { MONUMENTS } from '../data/monuments';
import type { Monument } from '../types';
import { Monument3DViewer } from '../components/Monument3DViewer';
import { CameraARViewer } from '../components/CameraARViewer';
import { VR360Tour } from '../components/VR360Tour';
import { useHeritage } from '../context/HeritageContext';

export const MonumentsARPage: React.FC = () => {
  const [selectedMonument, setSelectedMonument] = useState<Monument>(
    MONUMENTS.find(m => m.id === 'capitol-complex') || MONUMENTS[0]
  );
  const [isAROpen, setIsAROpen] = useState(false);
  const [isVROpen, setIsVROpen] = useState(false);
  const { addPoints, showToast } = useHeritage();

  const handleSelectMonument = (monument: Monument) => {
    setSelectedMonument(monument);
    addPoints(10, `Explored ${monument.name} 3D model`);
  };

  const handleOpenAR = () => {
    setIsAROpen(true);
    addPoints(25, `Launched Camera AR for ${selectedMonument.name}`);
    showToast(`Camera AR active for ${selectedMonument.name}! Point camera at flat surface.`, 'info');
  };

  const handleOpenVR = () => {
    setIsVROpen(true);
    addPoints(25, `Launched 360° VR Tour for ${selectedMonument.name}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 pb-24">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E5B842]/20 border border-[#E5B842]/40 text-[#E5B842] text-xs font-bold uppercase tracking-wider">
          <Camera className="w-4 h-4" />
          <span>Spatial Architectural Holograms</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#FBF9F5]">
          Smarak 3D & Camera AR Studio
        </h1>
        <p className="text-xs sm:text-sm text-[#A3A8B8] leading-relaxed">
          Inspect 10 iconic Indian architectural monuments in full interactive 3D WebGL with day/night lighting, X-ray wireframe blueprints, acoustic hotspots, and camera Web-AR.
        </p>
      </div>

      {/* Monument Horizontal Carousel Selector */}
      <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
        {MONUMENTS.map(m => {
          const isSelected = selectedMonument.id === m.id;
          return (
            <button
              key={m.id}
              type="button"
              onClick={() => handleSelectMonument(m)}
              className={`p-3 rounded-2xl border text-left transition-all shrink-0 w-64 flex items-center gap-3 ${
                isSelected
                  ? 'bg-gradient-to-br from-[#181B2A] to-[#0C0D14] border-[#E5B842] shadow-xl shadow-[#D4AF37]/20 scale-105'
                  : 'bg-[#12141F] border-white/10 hover:border-white/25 hover:bg-white/5'
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#C85A32] to-[#E5B842] p-[1.5px] shrink-0">
                <div className="w-full h-full bg-[#0C0D14] rounded-[10px] flex items-center justify-center font-serif font-bold text-sm text-[#E5B842]">
                  {m.name.charAt(0)}
                </div>
              </div>
              <div className="overflow-hidden">
                <h4
                  className={`text-xs font-bold truncate ${
                    isSelected ? 'text-[#E5B842]' : 'text-[#FBF9F5]'
                  }`}
                >
                  {m.name}
                </h4>
                <p className="text-[10px] text-[#A3A8B8] truncate">{m.location}</p>
                {m.unesco && (
                  <span className="text-[9px] font-mono text-blue-400 font-bold uppercase">
                    UNESCO
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* 3D Interactive Stage */}
      <div id="monument-ar-viewer" className="rounded-3xl bg-[#0B0C13] border-2 border-[#D4AF37]/40 shadow-2xl overflow-hidden">
        <Monument3DViewer
          monument={selectedMonument}
          onOpenAR={handleOpenAR}
          onOpenVR={handleOpenVR}
        />
      </div>

      {/* Monument Deep Architectural Dossier */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Architectural History & Acoustic Hotspots */}
        <div className="lg:col-span-8 space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-[#12141F] border border-white/10 shadow-xl space-y-4">
            <div className="flex items-center justify-between text-xs">
              <span className="px-3 py-1 rounded-full bg-[#D4AF37]/20 text-[#E5B842] font-mono font-bold uppercase">
                {selectedMonument.period} • {selectedMonument.dynasty}
              </span>
              <span className="text-[#8E92A4]">{selectedMonument.architecturalStyle}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#FBF9F5]">
              {selectedMonument.name}
            </h2>
            <p className="text-xs text-[#E5B842] font-mono">{selectedMonument.hindiName}</p>

            <p className="text-xs sm:text-sm text-[#C5C8D4] leading-relaxed">
              {selectedMonument.fullHistory}
            </p>
          </div>

          {/* Architectural Hotspots Breakdown */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#12141F] border border-white/10 shadow-xl space-y-4">
            <h3 className="text-lg font-serif font-bold text-[#FBF9F5] flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#E5B842]" />
              <span>Architectural Secrets & Structural Physics</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {selectedMonument.hotspots.map(spot => (
                <div
                  key={spot.id}
                  className="p-4 rounded-2xl bg-[#0C0D14] border border-white/5 space-y-2 text-xs"
                >
                  <span className="text-[9px] uppercase font-bold text-[#E5B842] tracking-wider">
                    {spot.category.toUpperCase()}
                  </span>
                  <h4 className="font-bold text-[#FBF9F5]">{spot.title}</h4>
                  <p className="text-[11px] text-[#8E92A4] leading-relaxed">
                    {spot.description}
                  </p>
                  <div className="p-2 rounded-lg bg-white/5 text-[10px] text-emerald-300 font-medium border border-white/5">
                    <strong>Hidden Fact:</strong> {spot.fact}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Audio Guide & Practical Visit Secrets */}
        <div className="lg:col-span-4 space-y-6">
          {/* Audio Guide Box */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-[#181B2A] to-[#0C0D14] border border-[#D4AF37]/30 shadow-xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E5B842]">
              <Volume2 className="w-4 h-4" />
              <span>Official Audio Narration</span>
            </div>

            <h4 className="text-base font-serif font-bold text-[#FBF9F5]">
              {selectedMonument.audioGuide.titleEn}
            </h4>

            <p className="text-xs text-[#C5C8D4] italic bg-[#0C0D14] p-3.5 rounded-xl border border-white/5 leading-relaxed">
              &ldquo;{selectedMonument.audioGuide.transcriptEn}&rdquo;
            </p>

            <div className="flex items-center justify-between text-xs text-[#8E92A4]">
              <span>Duration: {Math.floor(selectedMonument.audioGuide.durationSeconds / 60)}m {selectedMonument.audioGuide.durationSeconds % 60}s</span>
              <span className="text-[#E5B842] font-semibold">Bilingual (EN / HI)</span>
            </div>
          </div>

          {/* Practical Visit Tips */}
          <div className="p-6 rounded-3xl bg-[#12141F] border border-white/10 shadow-xl space-y-3 text-xs">
            <h4 className="font-bold uppercase tracking-wider text-[#FBF9F5] text-xs flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#E5B842]" />
              <span>Architectural Photography & Visit Secrets</span>
            </h4>

            <div className="space-y-2 text-[#A3A8B8]">
              <div className="p-2.5 rounded-xl bg-[#0C0D14] border border-white/5">
                <strong className="text-[#E5B842]">Golden Hour Lighting:</strong>
                <p className="text-[11px] mt-0.5">{selectedMonument.visitTips.bestTime}</p>
              </div>

              <div className="p-2.5 rounded-xl bg-[#0C0D14] border border-white/5">
                <strong className="text-[#64D2B1]">Acoustics & Rituals:</strong>
                <p className="text-[11px] mt-0.5">{selectedMonument.visitTips.aartiHours}</p>
              </div>

              <div className="p-2.5 rounded-xl bg-[#0C0D14] border border-white/5">
                <strong className="text-[#FF8C66]">Lens Recommendations:</strong>
                <p className="text-[11px] mt-0.5">{selectedMonument.visitTips.photography}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AR Camera Modal */}
      {isAROpen && (
        <CameraARViewer
          monument={selectedMonument}
          onClose={() => setIsAROpen(false)}
        />
      )}

      {/* VR 360 Tour Modal */}
      {isVROpen && (
        <VR360Tour
          monument={selectedMonument}
          onClose={() => setIsVROpen(false)}
        />
      )}
    </div>
  );
};
