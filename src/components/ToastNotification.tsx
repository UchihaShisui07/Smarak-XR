import React from 'react';
import { Award, CheckCircle2, Sparkles } from 'lucide-react';
import { useHeritage } from '../context/HeritageContext';

export const ToastNotification: React.FC = () => {
  const { toastMessage } = useHeritage();

  if (!toastMessage) return null;

  return (
    <div className="fixed top-24 right-4 sm:right-6 z-50 animate-in slide-in-from-top duration-300 pointer-events-none">
      <div
        className={`flex items-center gap-3 px-4 py-3 rounded-xl shadow-2xl border backdrop-blur-xl ${
          toastMessage.type === 'points'
            ? 'bg-[#181B2A]/95 border-[#E5B842]/60 text-[#FBF9F5] shadow-[#D4AF37]/20'
            : toastMessage.type === 'success'
            ? 'bg-[#12231A]/95 border-emerald-400/50 text-[#FBF9F5] shadow-emerald-500/20'
            : 'bg-[#12141F]/95 border-white/20 text-[#FBF9F5]'
        }`}
      >
        {toastMessage.type === 'points' && (
          <div className="w-8 h-8 rounded-lg bg-[#E5B842] text-[#0C0D14] flex items-center justify-center font-black">
            <Award className="w-5 h-5 fill-current" />
          </div>
        )}
        {toastMessage.type === 'success' && (
          <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
        )}
        {toastMessage.type === 'info' && (
          <Sparkles className="w-5 h-5 text-[#D4AF37] shrink-0" />
        )}

        <div>
          <p className="text-xs font-semibold">{toastMessage.text}</p>
        </div>
      </div>
    </div>
  );
};
