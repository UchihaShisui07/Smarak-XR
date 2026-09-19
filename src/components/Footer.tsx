import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShieldCheck } from 'lucide-react';
import { useHeritage } from '../context/HeritageContext';

export const Footer: React.FC = () => {
  const { openPreserveModal, showToast } = useHeritage();
  const [pledgeEmail, setPledgeEmail] = useState('');

  const handlePledgeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pledgeEmail) {
      showToast('Preservation Pledge Registered! Welcome, Culture Guardian.', 'success');
      setPledgeEmail('');
    }
  };

  return (
    <footer className="bg-[#08090E] border-t border-[#D4AF37]/20 pt-14 pb-20 md:pb-12 text-[#A3A8B8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/5">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C85A32] via-[#D4AF37] to-[#1A3026] p-[2px]">
                <div className="w-full h-full bg-[#0C0D14] rounded-[10px] flex items-center justify-center">
                  <span className="text-lg">🪔</span>
                </div>
              </div>
              <span className="font-serif text-2xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#FBF9F5] via-[#E5B842] to-[#FBF9F5]">
                Heritage Alive
              </span>
            </Link>
            <p className="text-xs text-[#C5C8D4] leading-relaxed max-w-sm">
              We don&apos;t just show people heritage — we let them experience it and actively help preserve it before it becomes a silent memory.
            </p>

            <div className="p-4 rounded-xl bg-[#12141F] border border-[#D4AF37]/20 max-w-sm space-y-2">
              <div className="flex items-center gap-2 text-[#E5B842] text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Culture Guardian Pledge</span>
              </div>
              <p className="text-[11px] text-[#A3A8B8]">
                Commit to recording one elder story or learning one heirloom craft this year.
              </p>
              <form onSubmit={handlePledgeSubmit} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={pledgeEmail}
                  onChange={e => setPledgeEmail(e.target.value)}
                  placeholder="Enter email for weekly folklore..."
                  className="flex-1 px-3 py-1.5 rounded-lg bg-[#0C0D14] border border-white/10 text-xs text-[#FBF9F5] focus:outline-none focus:border-[#E5B842]"
                />
                <button
                  type="submit"
                  className="px-3 py-1.5 rounded-lg bg-[#E5B842] hover:bg-[#F3C456] text-[#0C0D14] font-bold text-xs shrink-0 transition-transform active:scale-95"
                >
                  Join
                </button>
              </form>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FBF9F5] mb-4">
              Explore Platform
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/discover" className="hover:text-[#E5B842] transition-colors">
                  Cultural Explorer & Map
                </Link>
              </li>
              <li>
                <Link to="/time-machine" className="hover:text-[#E5B842] transition-colors">
                  Time Machine (1950 - 2050)
                </Link>
              </li>
              <li>
                <Link to="/vanishing" className="hover:text-[#E5B842] transition-colors text-rose-400">
                  Vanishing Registry (Endangered)
                </Link>
              </li>
              <li>
                <Link to="/adopt" className="hover:text-[#E5B842] transition-colors">
                  Adopt a Heritage Challenge
                </Link>
              </li>
              <li>
                <Link to="/ai-storyteller" className="hover:text-[#E5B842] transition-colors">
                  Talk to Your Heritage (AI)
                </Link>
              </li>
            </ul>
          </div>

          {/* Community & Stories */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FBF9F5] mb-4">
              Preservation Commons
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/stories" className="hover:text-[#E5B842] transition-colors">
                  Living Storytellers Vault
                </Link>
              </li>
              <li>
                <Link to="/community" className="hover:text-[#E5B842] transition-colors">
                  Preserver Leaderboard
                </Link>
              </li>
              <li>
                <button
                  onClick={() => openPreserveModal('story')}
                  className="hover:text-[#E5B842] transition-colors text-left"
                >
                  Submit Family Memory (+100 PTS)
                </button>
              </li>
              <li>
                <button
                  onClick={() => openPreserveModal('recipe')}
                  className="hover:text-[#E5B842] transition-colors text-left"
                >
                  Document Grandma&apos;s Recipe
                </button>
              </li>
              <li>
                <Link to="/profile" className="hover:text-[#E5B842] transition-colors">
                  Guardian Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Regions Covered */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FBF9F5] mb-4">
              Regions Mapped
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <span className="text-[#C5C8D4]">Majha & Malwa (Punjab)</span>
              </li>
              <li>
                <span className="text-[#C5C8D4]">Marwar & Shekhawati (Rajasthan)</span>
              </li>
              <li>
                <span className="text-[#C5C8D4]">Malabar & Travancore (Kerala)</span>
              </li>
              <li>
                <span className="text-[#C5C8D4]">Changthang & Leh (Ladakh)</span>
              </li>
              <li>
                <span className="text-[#C5C8D4]">Purulia & Sundarbans (Bengal)</span>
              </li>
              <li>
                <span className="text-[#C5C8D4]">Nilgiris Highland (Tamil Nadu)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E92A4]">
          <div className="flex items-center gap-2">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" />
            <span>for National Heritage Preservation • Frontend Hackathon Project</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#E5B842] cursor-pointer">Open Cultural Data License</span>
            <span className="hover:text-[#E5B842] cursor-pointer">Artisan Verification</span>
            <span className="font-mono text-[#E5B842]">v2.0-STABLE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
