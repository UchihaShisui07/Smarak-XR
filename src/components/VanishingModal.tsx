import React from 'react';
import {
  X,
  AlertTriangle,
  Volume2,
  HeartHandshake,
  ShieldCheck,
  CheckCircle2,
  Radio,
  Sparkles
} from 'lucide-react';
import { useHeritage } from '../context/HeritageContext';

export const VanishingModal: React.FC = () => {
  const {
    selectedVanishingDetail,
    closeVanishingModal,
    playSimulatedAudio,
    isHeritageAdopted,
    toggleAdoptHeritage
  } = useHeritage();

  if (!selectedVanishingDetail) return null;

  const item = selectedVanishingDetail;
  const isAdopted = isHeritageAdopted(`adopt-${item.id}`);

  const handlePlayAudio = () => {
    if (item.audioPreview) {
      playSimulatedAudio(item.audioPreview.title, item.name, item.audioPreview.duration);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-[#12141F] border border-[#D4AF37]/40 rounded-2xl w-full max-w-3xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
        {/* Header with Image Banner */}
        <div className="relative h-56 sm:h-64 w-full shrink-0 overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#12141F] via-[#12141F]/40 to-transparent" />

          {/* Close Button */}
          <button
            type="button"
            onClick={closeVanishingModal}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors border border-white/20"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title and Badges */}
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-end justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span
                  className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                    item.urgency === 'Critical'
                      ? 'bg-rose-500/30 text-rose-300 border border-rose-500/50'
                      : 'bg-amber-500/30 text-amber-300 border border-amber-500/50'
                  }`}
                >
                  Urgency: {item.urgency}
                </span>
                <span className="text-xs text-[#E5B842] font-mono">{item.nativeScript}</span>
                <span className="text-xs text-[#A3A8B8]">• {item.state}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#FBF9F5]">
                {item.name}
              </h2>
            </div>

            {/* Adopt Button in Banner */}
            <button
              type="button"
              onClick={() => toggleAdoptHeritage(`adopt-${item.id}`, item.name)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-lg flex items-center gap-2 ${
                isAdopted
                  ? 'bg-[#1A3026] text-[#64D2B1] border border-[#2D6A4F]'
                  : 'bg-gradient-to-r from-[#C85A32] to-[#E5B842] text-[#0C0D14] hover:brightness-110'
              }`}
            >
              <HeartHandshake className="w-4 h-4" />
              <span>{isAdopted ? 'Adopted (Guardian)' : 'Adopt This Heritage (+50)'}</span>
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-5">
          {/* Key Danger Card */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-rose-950/30 to-[#0C0D14] border border-rose-500/30 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-rose-300 mb-0.5">
                Threat Status & Demographics
              </h4>
              <p className="text-xs text-[#C5C8D4] leading-relaxed mb-1">
                <strong>Living Practitioners:</strong> {item.practitionersRemaining}
              </p>
              <p className="text-xs text-[#A3A8B8] leading-relaxed">
                <strong>Threat Factor:</strong> {item.threatFactor}
              </p>
            </div>
          </div>

          {/* Audio Preview Feature */}
          {item.audioPreview && (
            <div className="p-4 rounded-xl bg-[#0C0D14] border border-[#D4AF37]/30 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#E5B842]">
                  <Radio className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-[#E5B842] tracking-wider">
                    Intangible Sound Archive
                  </div>
                  <h4 className="text-xs font-bold text-[#FBF9F5]">{item.audioPreview.title}</h4>
                  <p className="text-[11px] text-[#A3A8B8]">{item.audioPreview.description}</p>
                </div>
              </div>

              <button
                type="button"
                onClick={handlePlayAudio}
                className="px-3.5 py-2 rounded-lg bg-[#E5B842] hover:bg-[#F3C456] text-[#0C0D14] font-bold text-xs flex items-center gap-1.5 transition-transform active:scale-95 shrink-0"
              >
                <Volume2 className="w-4 h-4" />
                <span>Listen ({item.audioPreview.duration})</span>
              </button>
            </div>
          )}

          {/* Narrative & History */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#E5B842] mb-2">
              The Living Story & Ancient Technique
            </h3>
            <p className="text-sm text-[#C5C8D4] leading-relaxed font-sans">
              {item.fullStory}
            </p>
          </div>

          {/* Why It Matters */}
          <div className="p-4 rounded-xl bg-[#0C0D14] border border-white/5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#64D2B1] mb-1.5 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              Why Humanity Cannot Afford to Lose This
            </h3>
            <p className="text-xs text-[#A3A8B8] leading-relaxed">
              {item.whyItMatters}
            </p>
          </div>

          {/* Actionable How To Help Checklist */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#FBF9F5] mb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#E5B842]" />
              Actionable Preservation Steps
            </h3>
            <div className="space-y-2">
              {item.howToHelp.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-2.5 rounded-lg bg-white/5 border border-white/5 text-xs text-[#C5C8D4]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#E5B842] shrink-0 mt-0.5" />
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-[#0C0D14]/80 border-t border-white/10 flex items-center justify-between text-xs">
          <span className="text-[#8E92A4]">Heritage Alive Endangered Registry</span>
          <button
            type="button"
            onClick={closeVanishingModal}
            className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-[#FBF9F5] font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
