import React from 'react';
import type { Monument } from '../types';
import { Smartphone, X, CheckCircle2 } from 'lucide-react';


interface Props {
  monument: Monument;
  onClose: () => void;
}

export const ModelViewerWebXR: React.FC<Props> = ({ monument, onClose }) => {
  // Mobile AR Quick Link URL (pointing to current window host)
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(
    currentUrl
  )}&bgcolor=0b0c1a&color=f59e0b`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4">
      <div className="relative w-full max-w-lg rounded-3xl p-6 sm:p-8 glass-royal border border-amber-500/40 shadow-2xl animate-in fade-in zoom-in-95">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-black/60 hover:bg-black text-gray-300 hover:text-white border border-white/15"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center mx-auto mb-3">
            <Smartphone className="w-6 h-6" />
          </div>
          <h3 className="font-cinzel font-black text-2xl text-white mb-1">
            Living Room Mobile AR
          </h3>
          <p className="text-xs text-amber-200/70 font-outfit">
            Scan to place {monument.name} directly onto your floor or table using Google Scene Viewer or Apple Quick Look.
          </p>
        </div>

        {/* QR Code Container */}
        <div className="p-4 rounded-2xl bg-black/70 border border-amber-500/30 flex flex-col items-center justify-center mb-6">
          <img
            src={qrUrl}
            alt="AR QR Code"
            className="w-48 h-48 rounded-xl border border-amber-500/40 shadow-lg shadow-amber-500/15"
          />
          <span className="mt-3 text-[11px] font-mono text-amber-300/80">
            Scan with iPhone Camera or Android Google Lens
          </span>
        </div>

        {/* Feature List */}
        <div className="space-y-2 text-xs text-amber-100/80 font-outfit mb-6">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Zero app download required — runs directly in mobile browser</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>True 1:1 real-world physical scale inspection</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Real-time environmental lighting & floor shadow occlusion</span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold text-xs shadow-xl shadow-amber-500/25 hover:from-amber-400 hover:to-orange-400 transition-all cursor-pointer"
        >
          Return to 3D Inspection
        </button>
      </div>
    </div>
  );
};
