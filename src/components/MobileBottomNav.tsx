import React from 'react';
import { Eye, Camera, Compass, Award, Sparkles } from 'lucide-react';
import { soundEngine } from '../services/soundEngine';
import { triggerHaptic } from '../utils/haptics';

interface Props {
  onOpenAR: () => void;
}

export const MobileBottomNav: React.FC<Props> = ({ onOpenAR }) => {

  const scrollTo = (id: string) => {
    triggerHaptic('tap');
    soundEngine.playTempleBell(600, 1.0);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#090a14]/95 backdrop-blur-2xl border-t border-amber-500/30 px-2 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-2xl">
      <div className="flex items-center justify-around max-w-md mx-auto">
        <button
          onClick={() => scrollTo('viewer')}
          className="flex flex-col items-center gap-1 p-1 text-gray-300 hover:text-amber-400 active:scale-95 transition-all cursor-pointer"
        >
          <Eye className="w-5 h-5" />
          <span className="text-[10px] font-semibold">3D Sanctum</span>
        </button>

        <button
          onClick={() => scrollTo('explore')}
          className="flex flex-col items-center gap-1 p-1 text-gray-300 hover:text-amber-400 active:scale-95 transition-all cursor-pointer"
        >
          <Compass className="w-5 h-5" />
          <span className="text-[10px] font-semibold">Explore</span>
        </button>

        {/* Highlighted Central AR Button */}
        <button
          onClick={() => {
            triggerHaptic('success');
            soundEngine.playTempleBell(659, 1.8);
            onOpenAR();
          }}
          className="flex flex-col items-center -mt-5 group cursor-pointer"
        >
          <div className="w-13 h-13 rounded-full bg-gradient-to-tr from-amber-500 via-orange-500 to-amber-400 flex items-center justify-center text-black shadow-xl shadow-amber-500/40 border-2 border-amber-300 transform group-active:scale-90 transition-all">
            <Camera className="w-6 h-6" />
          </div>
          <span className="text-[10px] font-bold text-amber-400 mt-1">Smarak AR</span>
        </button>

        <button
          onClick={() => scrollTo('creatures')}
          className="flex flex-col items-center gap-1 p-1 text-gray-300 hover:text-amber-400 active:scale-95 transition-all cursor-pointer"
        >
          <Sparkles className="w-5 h-5" />
          <span className="text-[10px] font-semibold">Creatures</span>
        </button>

        <button
          onClick={() => scrollTo('passport')}
          className="flex flex-col items-center gap-1 p-1 text-gray-300 hover:text-amber-400 active:scale-95 transition-all cursor-pointer"
        >
          <Award className="w-5 h-5" />
          <span className="text-[10px] font-semibold">Passport</span>
        </button>
      </div>
    </nav>
  );
};
