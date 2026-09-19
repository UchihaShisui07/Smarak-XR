import React, { useState, useMemo } from 'react';
import {
  AlertTriangle,
  Volume2,
  HeartHandshake,
  Search,
  PlusCircle,
  MapPin
} from 'lucide-react';
import { useHeritage } from '../context/HeritageContext';
import { VANISHING_CULTURE_ITEMS } from '../data/vanishingCulture';

export const VanishingCulturePage: React.FC = () => {
  const {
    openVanishingModal,
    playSimulatedAudio,
    toggleAdoptHeritage,
    isHeritageAdopted,
    openPreserveModal
  } = useHeritage();

  const [urgencyFilter, setUrgencyFilter] = useState<'All' | 'Critical' | 'High' | 'Medium'>('All');
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return VANISHING_CULTURE_ITEMS.filter(item => {
      if (urgencyFilter !== 'All' && item.urgency !== urgencyFilter) return false;
      if (categoryFilter !== 'All' && item.category !== categoryFilter) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = item.name.toLowerCase().includes(q);
        const matchState = item.state.toLowerCase().includes(q);
        const matchThreat = item.threatFactor.toLowerCase().includes(q);
        if (!matchName && !matchState && !matchThreat) return false;
      }
      return true;
    });
  }, [urgencyFilter, categoryFilter, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 pb-24">
      {/* Alert Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-rose-950/40 via-[#12141F] to-[#0C0D14] border border-rose-500/30 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-bold uppercase tracking-wider">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
            <span>Official Red List • Intangible Cultural Heritage</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#FBF9F5]">
            Vanishing Culture Registry
          </h1>

          <p className="text-xs sm:text-sm text-[#C5C8D4] leading-relaxed">
            These 8 living traditions face extinction within a single generation due to commercial automation, youth out-migration, and climate shocks. Listen to their voices and adopt a tradition to fund youth apprenticeships.
          </p>
        </div>

        <button
          type="button"
          onClick={() => openPreserveModal('story')}
          className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#C85A32] to-[#E5B842] text-[#0C0D14] font-bold text-xs flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all shadow-lg shrink-0"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Report an Endangered Tradition (+100 PTS)</span>
        </button>
      </div>

      {/* Filter Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#0F111A] border border-white/10">
        {/* Search & Category */}
        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
          <div className="w-full sm:w-64 relative">
            <Search className="w-4 h-4 text-[#E5B842] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search endangered item..."
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#0C0D14] border border-white/10 text-xs text-[#FBF9F5] focus:outline-none focus:border-[#E5B842]"
            />
          </div>

          <select
            value={categoryFilter}
            onChange={e => setCategoryFilter(e.target.value)}
            className="bg-[#0C0D14] text-xs text-[#FBF9F5] border border-white/10 rounded-xl px-3 py-2 focus:outline-none focus:border-[#E5B842]"
          >
            <option value="All">All Mediums</option>
            <option value="Craft">Endangered Crafts</option>
            <option value="Music">Endangered Music</option>
            <option value="Recipe">Ancient Recipes</option>
            <option value="Language">Oral Languages</option>
            <option value="Dance">Folk Dances</option>
          </select>
        </div>

        {/* Urgency Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
          {(['All', 'Critical', 'High', 'Medium'] as const).map(lvl => (
            <button
              key={lvl}
              onClick={() => setUrgencyFilter(lvl)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                urgencyFilter === lvl
                  ? lvl === 'Critical'
                    ? 'bg-rose-600 text-white'
                    : 'bg-[#D4AF37] text-[#0C0D14]'
                  : 'bg-white/5 text-[#A3A8B8] hover:text-white'
              }`}
            >
              {lvl === 'Critical' ? '🚨 Critical (Imminent)' : lvl}
            </button>
          ))}
        </div>
      </div>

      {/* Endangered Traditions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredItems.map(item => {
          const isAdopted = isHeritageAdopted(`adopt-${item.id}`);
          return (
            <div
              key={item.id}
              className="rounded-2xl bg-[#12141F] border border-white/10 hover:border-[#D4AF37]/50 shadow-xl overflow-hidden flex flex-col justify-between transition-all group"
            >
              <div>
                {/* Header Image with Badges */}
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12141F] via-[#12141F]/40 to-transparent" />

                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        item.urgency === 'Critical'
                          ? 'bg-rose-600 text-white'
                          : 'bg-amber-500 text-[#0C0D14]'
                      }`}
                    >
                      Urgency: {item.urgency}
                    </span>

                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#0C0D14]/80 text-[#E5B842] border border-[#D4AF37]/30">
                      {item.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                    <div>
                      <div className="text-[11px] text-[#E5B842] font-mono mb-0.5">
                        {item.nativeScript}
                      </div>
                      <h3 className="text-xl font-serif font-bold text-[#FBF9F5]">
                        {item.name}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-[#C5C8D4]">
                      <MapPin className="w-3.5 h-3.5 text-[#E5B842]" />
                      <span>{item.state}</span>
                    </div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-4">
                  {/* Demographics Alert */}
                  <div className="p-3 rounded-xl bg-gradient-to-r from-rose-950/20 to-transparent border border-rose-500/20 text-xs text-[#C5C8D4] space-y-1">
                    <div>
                      <strong className="text-rose-400">Custodians Remaining:</strong>{' '}
                      {item.practitionersRemaining}
                    </div>
                    <div>
                      <strong className="text-amber-400">Threat Cause:</strong> {item.threatFactor}
                    </div>
                  </div>

                  <p className="text-xs text-[#A3A8B8] leading-relaxed line-clamp-3">
                    {item.fullStory}
                  </p>

                  {/* Audio Preview Box */}
                  {item.audioPreview && (
                    <div className="p-3 rounded-xl bg-[#0C0D14] border border-[#D4AF37]/20 flex items-center justify-between gap-3">
                      <div className="overflow-hidden">
                        <div className="text-[9px] uppercase font-bold text-[#E5B842] tracking-wider">
                          Audio Snippet Available
                        </div>
                        <div className="text-xs font-bold text-[#FBF9F5] truncate">
                          {item.audioPreview.title}
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          playSimulatedAudio(
                            item.audioPreview!.title,
                            item.name,
                            item.audioPreview!.duration
                          )
                        }
                        className="px-3 py-1.5 rounded-lg bg-[#E5B842] text-[#0C0D14] font-bold text-xs flex items-center gap-1.5 shrink-0 hover:bg-[#F3C456] transition-transform active:scale-95"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>Play ({item.audioPreview.duration})</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 border-t border-white/5 flex items-center justify-between gap-3 mt-2">
                <button
                  type="button"
                  onClick={() => openVanishingModal(item)}
                  className="flex-1 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-[#FBF9F5] transition-colors text-center"
                >
                  Read Full History
                </button>

                <button
                  type="button"
                  onClick={() => toggleAdoptHeritage(`adopt-${item.id}`, item.name)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                    isAdopted
                      ? 'bg-[#1A3026] text-[#64D2B1] border border-[#2D6A4F]'
                      : 'bg-gradient-to-r from-[#C85A32] to-[#E5B842] text-[#0C0D14] hover:brightness-110'
                  }`}
                >
                  <HeartHandshake className="w-4 h-4" />
                  <span>{isAdopted ? 'Adopted (Guardian)' : 'Adopt (+50 PTS)'}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
