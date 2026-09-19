import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Compass, ArrowRight } from 'lucide-react';
import { useHeritage } from '../context/HeritageContext';
import { HERITAGE_ITEMS } from '../data/heritageData';
import { VANISHING_CULTURE_ITEMS } from '../data/vanishingCulture';
import { ORAL_STORIES } from '../data/storiesData';

export const GlobalSearchModal: React.FC = () => {
  const { isSearchModalOpen, closeSearchModal, openVanishingModal } = useHeritage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Endangered' | 'Crafts' | 'Music' | 'Stories'>('All');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSearchModalOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setSearchTerm('');
    }
  }, [isSearchModalOpen]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSearchModalOpen) {
        closeSearchModal();
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isSearchModalOpen) closeSearchModal();
        else isSearchModalOpen;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchModalOpen]);

  const results = useMemo(() => {
    const query = searchTerm.toLowerCase().trim();
    if (!query && selectedFilter === 'All') return [];

    let combined: Array<{
      id: string;
      title: string;
      subtitle: string;
      category: string;
      type: 'heritage' | 'vanishing' | 'story';
      image: string;
      urgency?: string;
      rawItem?: any;
    }> = [];

    // Heritage items
    HERITAGE_ITEMS.forEach(item => {
      combined.push({
        id: item.id,
        title: item.name,
        subtitle: `${item.state} • ${item.category}`,
        category: item.category,
        type: 'heritage',
        image: item.image,
        rawItem: item
      });
    });

    // Vanishing items
    VANISHING_CULTURE_ITEMS.forEach(v => {
      combined.push({
        id: v.id,
        title: v.name,
        subtitle: `${v.state} • ${v.category} (Endangered)`,
        category: v.category === 'Craft' ? 'Crafts' : v.category === 'Music' ? 'Music' : 'Endangered',
        type: 'vanishing',
        image: v.image,
        urgency: v.urgency,
        rawItem: v
      });
    });

    // Stories
    ORAL_STORIES.forEach(s => {
      combined.push({
        id: s.id,
        title: `${s.artisanName} — ${s.title}`,
        subtitle: `${s.location} • ${s.heritageName}`,
        category: 'Stories',
        type: 'story',
        image: s.coverImage,
        rawItem: s
      });
    });

    // Filter by query
    let filtered = combined;
    if (query) {
      filtered = filtered.filter(
        i =>
          i.title.toLowerCase().includes(query) ||
          i.subtitle.toLowerCase().includes(query) ||
          i.category.toLowerCase().includes(query)
      );
    }

    // Filter by tab
    if (selectedFilter === 'Endangered') {
      filtered = filtered.filter(i => i.type === 'vanishing' || i.urgency);
    } else if (selectedFilter === 'Crafts') {
      filtered = filtered.filter(i => i.category.toLowerCase().includes('craft'));
    } else if (selectedFilter === 'Music') {
      filtered = filtered.filter(i => i.category.toLowerCase().includes('music'));
    } else if (selectedFilter === 'Stories') {
      filtered = filtered.filter(i => i.type === 'story');
    }

    return filtered.slice(0, 8);
  }, [searchTerm, selectedFilter]);

  if (!isSearchModalOpen) return null;

  const handleSelectResult = (item: any) => {
    closeSearchModal();
    if (item.type === 'vanishing') {
      openVanishingModal(item.rawItem);
    } else if (item.type === 'story') {
      navigate('/stories');
    } else {
      navigate('/discover');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#12141F] border border-[#D4AF37]/30 rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/10 gap-3">
          <Search className="w-5 h-5 text-[#E5B842]" />
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Search by tradition, state (e.g. Punjab, Kutch), craft, or story..."
            className="flex-1 bg-transparent text-sm sm:text-base text-[#FBF9F5] placeholder-[#8E92A4] focus:outline-none"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="text-[#8E92A4] hover:text-white text-xs px-1.5 py-0.5 rounded bg-white/5"
            >
              Clear
            </button>
          )}
          <button
            onClick={closeSearchModal}
            className="p-1 text-[#8E92A4] hover:text-white rounded-lg hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Chips */}
        <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#0C0D14]/50 border-b border-white/5 overflow-x-auto text-xs">
          {(['All', 'Endangered', 'Crafts', 'Music', 'Stories'] as const).map(filter => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-3 py-1 rounded-full whitespace-nowrap transition-colors ${
                selectedFilter === filter
                  ? 'bg-[#D4AF37] text-[#0C0D14] font-bold'
                  : 'bg-white/5 text-[#A3A8B8] hover:text-white hover:bg-white/10'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-1.5">
          {results.length > 0 ? (
            results.map(item => (
              <div
                key={item.id}
                onClick={() => handleSelectResult(item)}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 cursor-pointer border border-transparent hover:border-[#D4AF37]/30 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 rounded-lg object-cover border border-white/10"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-semibold text-[#FBF9F5] group-hover:text-[#E5B842] transition-colors">
                        {item.title}
                      </h4>
                      {item.urgency && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider bg-[#C85A32]/30 text-[#FF7A59] border border-[#C85A32]/50">
                          {item.urgency}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#8E92A4]">{item.subtitle}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-[#8E92A4] group-hover:text-[#E5B842]">
                  <span className="hidden sm:inline">Explore</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))
          ) : searchTerm ? (
            <div className="text-center py-12 px-4">
              <Compass className="w-10 h-10 text-[#8E92A4] mx-auto mb-2 opacity-50" />
              <p className="text-sm text-[#C5C8D4]">No direct results found for &ldquo;{searchTerm}&rdquo;</p>
              <p className="text-xs text-[#8E92A4] mt-1">
                Try searching for &quot;Rogan&quot;, &quot;Phulkari&quot;, &quot;Pahadi&quot;, or &quot;Chhau&quot;
              </p>
            </div>
          ) : (
            <div className="p-4 text-xs text-[#8E92A4] space-y-2">
              <p className="font-semibold text-[#C5C8D4] uppercase tracking-wider text-[11px]">
                Popular Inquiries:
              </p>
              <div className="flex flex-wrap gap-2">
                {['Nirona Rogan Art', 'Surando Desert Lute', 'Toda Poothkulli', 'Bhatt ki Churkani', 'Punjab 1950', 'Chhau Masks'].map(
                  tag => (
                    <button
                      key={tag}
                      onClick={() => setSearchTerm(tag)}
                      className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-[#D4AF37]/15 hover:text-[#E5B842] transition-colors border border-white/5"
                    >
                      {tag}
                    </button>
                  )
                )}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-4 py-2 bg-[#0C0D14]/80 border-t border-white/5 flex items-center justify-between text-[11px] text-[#8E92A4]">
          <span>Press ESC to exit</span>
          <span>Heritage Alive Instant Search Engine</span>
        </div>
      </div>
    </div>
  );
};
