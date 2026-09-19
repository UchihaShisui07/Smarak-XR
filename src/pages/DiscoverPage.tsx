import React, { useState, useMemo } from 'react';
import {
  Compass,
  Search,
  HeartHandshake,
  MapPin
} from 'lucide-react';
import { useHeritage } from '../context/HeritageContext';
import { HERITAGE_ITEMS } from '../data/heritageData';
import { VANISHING_CULTURE_ITEMS } from '../data/vanishingCulture';
import { CulturalMap } from '../components/CulturalMap';

export const DiscoverPage: React.FC = () => {
  const {
    openVanishingModal,
    playSimulatedAudio,
    toggleAdoptHeritage,
    isHeritageAdopted
  } = useHeritage();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');

  // Unified items
  const allTraditions = useMemo(() => {
    return HERITAGE_ITEMS;
  }, []);

  const filteredTraditions = useMemo(() => {
    return allTraditions.filter(item => {
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = item.name.toLowerCase().includes(q);
        const matchState = item.state.toLowerCase().includes(q);
        const matchDesc = item.description.toLowerCase().includes(q);
        const matchTags = item.tags.some(t => t.toLowerCase().includes(q));
        if (!matchName && !matchState && !matchDesc && !matchTags) return false;
      }

      // Region filter
      if (selectedRegion !== 'All') {
        if (selectedRegion === 'Ladakh') {
          if (!item.state.toLowerCase().includes('ladakh') && item.region !== 'North') return false;
        } else if (item.region !== selectedRegion) {
          return false;
        }
      }

      // Category filter
      if (selectedCategory !== 'All' && item.category !== selectedCategory) {
        return false;
      }

      // Status filter
      if (selectedStatus !== 'All' && item.status !== selectedStatus) {
        return false;
      }

      return true;
    });
  }, [allTraditions, searchQuery, selectedRegion, selectedCategory, selectedStatus]);

  const categories = [
    'All',
    'Crafts',
    'Music',
    'Dance',
    'Food',
    'Heritage Sites',
    'Traditions'
  ];

  const regions = ['All', 'North', 'West', 'South', 'East', 'Central', 'Ladakh'];
  const statuses = ['All', 'Critical', 'At Risk', 'Declining', 'Thriving'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 pb-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#E5B842] text-xs font-semibold uppercase tracking-wider">
          <Compass className="w-4 h-4" />
          <span>Faceted Cultural Registry</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#FBF9F5]">
          Explore Living Indian Traditions
        </h1>
        <p className="text-xs sm:text-sm text-[#A3A8B8] leading-relaxed">
          Filter through centuries of handloom masterpieces, oral rhythms, culinary wonders, and sacred architecture across all geographic zones.
        </p>
      </div>

      {/* Interactive Cultural Map Integration */}
      <CulturalMap
        selectedRegion={selectedRegion}
        onSelectRegion={reg => setSelectedRegion(reg === selectedRegion ? 'All' : reg)}
      />

      {/* Search & Filter Controls */}
      <div className="p-5 rounded-2xl bg-[#0F111A] border border-white/10 shadow-xl space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search Input */}
          <div className="flex-1 relative">
            <Search className="w-4 h-4 text-[#E5B842] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search by craft, instrument, state (e.g. Gujarat, Punjab), or motif..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0C0D14] border border-white/10 text-sm text-[#FBF9F5] focus:outline-none focus:border-[#E5B842]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8E92A4] hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Region Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#8E92A4] whitespace-nowrap">Region:</span>
            <select
              value={selectedRegion}
              onChange={e => setSelectedRegion(e.target.value)}
              className="bg-[#0C0D14] text-xs text-[#FBF9F5] border border-white/10 rounded-xl px-3 py-2.5 focus:outline-none focus:border-[#E5B842]"
            >
              {regions.map(r => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>

          {/* Category Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#8E92A4] whitespace-nowrap">Category:</span>
            <select
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
              className="bg-[#0C0D14] text-xs text-[#FBF9F5] border border-white/10 rounded-xl px-3 py-2.5 focus:outline-none focus:border-[#E5B842]"
            >
              {categories.map(c => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* Status Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#8E92A4] whitespace-nowrap">Status:</span>
            <select
              value={selectedStatus}
              onChange={e => setSelectedStatus(e.target.value)}
              className="bg-[#0C0D14] text-xs text-[#FBF9F5] border border-white/10 rounded-xl px-3 py-2.5 focus:outline-none focus:border-[#E5B842]"
            >
              {statuses.map(s => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Counter & Active Filter Pills */}
        <div className="flex items-center justify-between pt-2 border-t border-white/5 text-xs text-[#8E92A4]">
          <div>
            Showing <strong className="text-[#E5B842]">{filteredTraditions.length}</strong> of{' '}
            {allTraditions.length} cataloged traditions
          </div>

          {(selectedRegion !== 'All' || selectedCategory !== 'All' || selectedStatus !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedRegion('All');
                setSelectedCategory('All');
                setSelectedStatus('All');
                setSearchQuery('');
              }}
              className="text-[#E5B842] hover:underline"
            >
              Reset All Filters
            </button>
          )}
        </div>
      </div>

      {/* Traditions Grid */}
      {filteredTraditions.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTraditions.map(item => {
            const isAdopted = isHeritageAdopted(`adopt-${item.id}`);
            return (
              <div
                key={item.id}
                className="group rounded-2xl bg-[#12141F] border border-white/10 hover:border-[#D4AF37]/50 shadow-xl overflow-hidden flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  {/* Card Banner Image */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#12141F] via-[#12141F]/30 to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#0C0D14]/80 text-[#E5B842] border border-[#D4AF37]/30">
                        {item.category}
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                          item.status === 'Critical'
                            ? 'bg-rose-600 text-white'
                            : item.status === 'At Risk'
                            ? 'bg-amber-600 text-white'
                            : item.status === 'Declining'
                            ? 'bg-orange-600 text-white'
                            : 'bg-emerald-600 text-white'
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>

                    {/* Bottom Info on Image */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1 text-[#FBF9F5]">
                        <MapPin className="w-3.5 h-3.5 text-[#E5B842]" />
                        <span>{item.state}</span>
                      </div>
                      {item.hindiName && (
                        <span className="text-[#E5B842] font-mono text-[11px]">
                          {item.hindiName}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-3">
                    <h3 className="text-lg font-serif font-bold text-[#FBF9F5] group-hover:text-[#E5B842] transition-colors leading-snug">
                      {item.name}
                    </h3>

                    <p className="text-xs text-[#A3A8B8] line-clamp-3 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="p-2.5 rounded-xl bg-[#0C0D14] border border-white/5 space-y-1 text-[11px]">
                      <div className="flex items-center justify-between text-[#8E92A4]">
                        <span>Origin Era:</span>
                        <span className="text-[#C5C8D4] font-medium">{item.originEra}</span>
                      </div>
                      {item.practitionersCount && (
                        <div className="flex items-center justify-between text-[#8E92A4]">
                          <span>Active Custodians:</span>
                          <span className="text-[#E5B842] font-semibold">
                            {item.practitionersCount}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {item.tags.slice(0, 3).map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] text-[#8E92A4]"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-4 pt-0 border-t border-white/5 flex items-center justify-between gap-2 mt-4">
                  <button
                    type="button"
                    onClick={() => {
                      // Check if there is a matching vanishing culture item
                      const vItem = VANISHING_CULTURE_ITEMS.find(v => v.id === item.id);
                      if (vItem) {
                        openVanishingModal(vItem);
                      } else {
                        playSimulatedAudio(item.name, `${item.state} Cultural Audio`);
                      }
                    }}
                    className="flex-1 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-[#FBF9F5] transition-colors text-center"
                  >
                    Explore Narrative
                  </button>

                  <button
                    type="button"
                    onClick={() => toggleAdoptHeritage(`adopt-${item.id}`, item.name)}
                    className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                      isAdopted
                        ? 'bg-[#1A3026] text-[#64D2B1] border border-[#2D6A4F]'
                        : 'bg-gradient-to-r from-[#C85A32] to-[#E5B842] text-[#0C0D14] hover:brightness-110'
                    }`}
                    title={isAdopted ? 'Heritage Adopted' : 'Adopt Heritage (+50 PTS)'}
                  >
                    <HeartHandshake className="w-4 h-4" />
                    <span className="hidden sm:inline">{isAdopted ? 'Adopted' : 'Adopt'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="p-12 text-center rounded-2xl bg-[#12141F] border border-white/10 space-y-3">
          <Compass className="w-12 h-12 text-[#8E92A4] mx-auto opacity-40" />
          <h3 className="text-base font-bold text-[#FBF9F5]">No traditions found</h3>
          <p className="text-xs text-[#A3A8B8]">
            Try adjusting your search criteria or reset filters to see all 248+ cataloged traditions.
          </p>
          <button
            onClick={() => {
              setSelectedRegion('All');
              setSelectedCategory('All');
              setSelectedStatus('All');
              setSearchQuery('');
            }}
            className="px-4 py-2 rounded-xl bg-[#D4AF37] text-[#0C0D14] text-xs font-bold"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};
