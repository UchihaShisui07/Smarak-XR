import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Compass,
  Clock,
  AlertTriangle,
  HeartHandshake,
  Bot,
  BookOpen,
  Users,
  Search,
  PlusCircle,
  Award,
  Menu,
  X,
  Sparkles,
  Camera
} from 'lucide-react';
import { useHeritage } from '../context/HeritageContext';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const {
    userPoints,
    userLevel,
    openPreserveModal,
    openSearchModal,
    language,
    setLanguage
  } = useHeritage();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home', icon: Sparkles },
    { path: '/monuments', label: '3D & AR', icon: Camera, badge: 'Spatial' },
    { path: '/discover', label: 'Discover', icon: Compass },
    { path: '/time-machine', label: 'Time Machine', icon: Clock },
    { path: '/vanishing', label: 'Vanishing', icon: AlertTriangle, badge: 'Endangered' },
    { path: '/adopt', label: 'Adopt', icon: HeartHandshake },
    { path: '/ai-storyteller', label: 'Ask AI', icon: Bot, badge: 'AI' },
    { path: '/stories', label: 'Stories', icon: BookOpen },
    { path: '/community', label: 'Guilds', icon: Users }
  ];

  const languages = ['EN', 'हिन्दी', 'ਪੰਜਾਬੀ', 'தமிழ்', 'বাংলা', 'मराठी'];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0C0D14]/95 backdrop-blur-md border-b border-[#D4AF37]/20 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#C85A32] via-[#D4AF37] to-[#1A3026] p-[2px] shadow-lg shadow-[#C85A32]/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#0C0D14] rounded-[10px] flex items-center justify-center">
                <span className="text-xl">🛕</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-2xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#FBF9F5] via-[#E5B842] to-[#FBF9F5]">
                  Smarak AR
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] uppercase font-bold tracking-widest bg-[#C85A32]/20 text-[#E5B842] border border-[#C85A32]/40 rounded">
                  XR 2.0
                </span>
              </div>
              <p className="text-[11px] text-[#A3A8B8] tracking-wider hidden md:block">
                Spatial Heritage • Preserve • Pass It On
              </p>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navLinks.map(item => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'text-[#FBF9F5] bg-[#D4AF37]/15 border border-[#D4AF37]/30 shadow-sm'
                      : 'text-[#C5C8D4] hover:text-[#FBF9F5] hover:bg-white/5'
                  }`}
                >
                  <item.icon className={`w-4 h-4 ${isActive ? 'text-[#E5B842]' : 'text-[#8E92A4]'}`} />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span
                      className={`text-[9px] px-1 py-0.2 rounded font-semibold uppercase tracking-wider ${
                        item.badge === 'Endangered'
                          ? 'bg-[#C85A32]/30 text-[#FF7A59] border border-[#C85A32]/40'
                          : 'bg-[#1A3026] text-[#64D2B1] border border-[#2D6A4F]'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center space-x-3">
            {/* Quick Search */}
            <button
              type="button"
              onClick={openSearchModal}
              className="p-2 text-[#C5C8D4] hover:text-[#FBF9F5] hover:bg-white/5 rounded-lg transition-colors border border-white/5"
              title="Search Traditions (Ctrl+K)"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Language Selector */}
            <div className="relative hidden md:block">
              <select
                value={language}
                onChange={e => setLanguage(e.target.value)}
                className="bg-[#12141F] text-xs text-[#C5C8D4] border border-[#D4AF37]/30 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-[#E5B842] cursor-pointer"
              >
                {languages.map(lang => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
              </select>
            </div>

            {/* Gamification Level / Points Badge */}
            <Link
              to="/profile"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#D4AF37]/20 to-[#C85A32]/20 border border-[#D4AF37]/40 text-[#FBF9F5] hover:border-[#D4AF37] transition-all group"
              title={`Your Rank: ${userLevel}`}
            >
              <Award className="w-4 h-4 text-[#E5B842] group-hover:rotate-12 transition-transform" />
              <div className="text-left">
                <div className="text-xs font-bold leading-none text-[#E5B842]">
                  {userPoints} <span className="text-[10px] font-normal text-[#A3A8B8]">PTS</span>
                </div>
                <div className="text-[10px] text-[#C5C8D4] hidden sm:block leading-tight">
                  {userLevel}
                </div>
              </div>
            </Link>

            {/* Action Button: Preserve Story */}
            <button
              type="button"
              onClick={() => openPreserveModal('story')}
              className="hidden lg:flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-gradient-to-r from-[#C85A32] to-[#B3431D] text-[#FBF9F5] font-semibold text-xs shadow-md shadow-[#C85A32]/25 hover:brightness-110 active:scale-95 transition-all border border-[#FF7A59]/40"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Preserve Heritage</span>
              <span className="bg-[#0C0D14]/40 px-1 py-0.5 rounded text-[9px] text-[#E5B842] font-mono">
                +100
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 text-[#C5C8D4] hover:text-[#FBF9F5] rounded-lg hover:bg-white/5"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-[#0F111A] border-b border-[#D4AF37]/20 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 mb-3">
            <button
              onClick={() => {
                openPreserveModal('story');
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-gradient-to-r from-[#C85A32] to-[#B3431D] text-[#FBF9F5] text-xs font-bold"
            >
              <PlusCircle className="w-4 h-4" />
              Preserve Heritage (+100)
            </button>
            <button
              onClick={() => {
                openSearchModal();
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-[#181B2A] text-[#C5C8D4] text-xs font-semibold border border-white/10"
            >
              <Search className="w-4 h-4" />
              Search Archives
            </button>
          </div>

          <div className="space-y-1">
            {navLinks.map(item => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium ${
                    isActive
                      ? 'bg-[#D4AF37]/20 text-[#FBF9F5] border border-[#D4AF37]/40'
                      : 'text-[#C5C8D4] hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <item.icon className={`w-5 h-5 ${isActive ? 'text-[#E5B842]' : 'text-[#8E92A4]'}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded uppercase font-bold bg-[#C85A32]/20 text-[#FF7A59]">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
