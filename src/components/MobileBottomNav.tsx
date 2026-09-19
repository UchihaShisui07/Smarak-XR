import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Compass, Clock, HeartHandshake, Plus } from 'lucide-react';
import { useHeritage } from '../context/HeritageContext';

export const MobileBottomNav: React.FC = () => {
  const location = useLocation();
  const { openPreserveModal } = useHeritage();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/discover', label: 'Discover', icon: Compass },
    { path: 'PRESERVE_ACTION', label: 'Preserve', icon: Plus, isAction: true },
    { path: '/time-machine', label: 'Time', icon: Clock },
    { path: '/adopt', label: 'Adopt', icon: HeartHandshake }
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0C0D14]/95 backdrop-blur-lg border-t border-[#D4AF37]/20 px-2 py-1.5 shadow-[0_-8px_20px_rgba(0,0,0,0.6)]">
      <div className="flex items-center justify-around">
        {navItems.map(item => {
          if (item.isAction) {
            return (
              <button
                key="preserve-floating"
                type="button"
                onClick={() => openPreserveModal('story')}
                className="-mt-5 w-12 h-12 rounded-full bg-gradient-to-tr from-[#C85A32] to-[#E5B842] flex items-center justify-center text-[#FBF9F5] shadow-lg shadow-[#C85A32]/40 active:scale-95 transition-transform border-2 border-[#0C0D14]"
                aria-label="Preserve Heritage"
              >
                <Plus className="w-6 h-6 stroke-[2.5]" />
              </button>
            );
          }

          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center py-1 px-3 rounded-lg transition-colors ${
                isActive ? 'text-[#E5B842]' : 'text-[#8E92A4] hover:text-[#C5C8D4]'
              }`}
            >
              <item.icon className="w-5 h-5 mb-0.5" />
              <span className="text-[10px] font-medium tracking-tight">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
