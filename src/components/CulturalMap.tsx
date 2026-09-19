import React, { useState } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

interface CulturalMapProps {
  onSelectRegion?: (region: string) => void;
  selectedRegion?: string;
}

interface RegionPin {
  id: string;
  name: string;
  state: string;
  xPercent: number; // percentage coordinate on SVG map
  yPercent: number;
  highlightCraft: string;
  threatLevel: 'Critical' | 'High' | 'Thriving';
  image: string;
}

const REGION_PINS: RegionPin[] = [
  {
    id: 'North',
    name: 'Northern Foothills & Plains',
    state: 'Punjab & Uttarakhand',
    xPercent: 32,
    yPercent: 22,
    highlightCraft: 'Phulkari Embroidery & Bhatt Recipes',
    threatLevel: 'High',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'Ladakh',
    name: 'Trans-Himalayan Cold Desert',
    state: 'Ladakh (Leh & Changthang)',
    xPercent: 36,
    yPercent: 12,
    highlightCraft: 'Ice Stupa & Pure Cashmere Weaving',
    threatLevel: 'Critical',
    image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'West',
    name: 'Great Thar Desert & Rann',
    state: 'Rajasthan & Gujarat (Kutch)',
    xPercent: 22,
    yPercent: 42,
    highlightCraft: 'Nirona Rogan Art & Surando Lute',
    threatLevel: 'Critical',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'Central',
    name: 'Central Heartland',
    state: 'Madhya Pradesh & Chhattisgarh',
    xPercent: 45,
    yPercent: 48,
    highlightCraft: 'Gond Tribal Painting & Bell Metal',
    threatLevel: 'High',
    image: 'https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'East',
    name: 'Eastern Deltas & Rarh',
    state: 'West Bengal & Odisha',
    xPercent: 68,
    yPercent: 46,
    highlightCraft: 'Purulia Chhau Masks & Bishnupur Terracotta',
    threatLevel: 'High',
    image: 'https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'South',
    name: 'Nilgiris & Malabar Coast',
    state: 'Tamil Nadu & Kerala',
    xPercent: 38,
    yPercent: 80,
    highlightCraft: 'Toda Poothkulli & Kasavu Weaving',
    threatLevel: 'Critical',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=400&q=80'
  }
];

export const CulturalMap: React.FC<CulturalMapProps> = ({
  onSelectRegion,
  selectedRegion
}) => {
  const [activeHoverPin, setActiveHoverPin] = useState<RegionPin>(REGION_PINS[2]); // Default West (Kutch/Rajasthan)

  const handlePinClick = (pin: RegionPin) => {
    setActiveHoverPin(pin);
    if (onSelectRegion) {
      onSelectRegion(pin.id);
    }
  };

  return (
    <div className="p-6 rounded-2xl bg-[#0F111A] border border-[#D4AF37]/30 shadow-2xl">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-base">🗺️</span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#E5B842]">
              Interactive Cultural Cartography
            </span>
          </div>
          <h3 className="text-xl font-serif font-bold text-[#FBF9F5]">
            Living Geography of Traditions
          </h3>
          <p className="text-xs text-[#A3A8B8]">
            Click on any regional node to filter authentic traditions, endangered crafts, and master artisans
          </p>
        </div>

        {/* Quick Region Selector Pills */}
        <div className="flex flex-wrap gap-1.5">
          {REGION_PINS.map(pin => (
            <button
              key={pin.id}
              onClick={() => handlePinClick(pin)}
              className={`px-3 py-1 rounded-full text-xs transition-all ${
                (selectedRegion === pin.id || activeHoverPin.id === pin.id)
                  ? 'bg-[#D4AF37] text-[#0C0D14] font-bold shadow'
                  : 'bg-white/5 text-[#C5C8D4] hover:bg-white/10'
              }`}
            >
              {pin.id}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Map Vector Graphic with Clickable Interactive Pins */}
        <div className="lg:col-span-7 relative w-full aspect-[4/3] bg-gradient-to-b from-[#12141F] to-[#0A0B10] rounded-xl border border-white/10 overflow-hidden flex items-center justify-center p-4">
          {/* Subtle Sacred Geometry Grid Background */}
          <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:20px_20px] opacity-15" />

          {/* Abstract India Stylized Vector Silhouette */}
          <svg
            viewBox="0 0 500 550"
            className="w-full h-full max-h-[420px] drop-shadow-[0_0_20px_rgba(212,175,55,0.15)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outlined Subcontinent Path */}
            <path
              d="M 180 50 
                 C 210 40, 240 70, 250 90 
                 C 270 95, 300 130, 270 160 
                 C 280 180, 350 170, 390 190 
                 C 420 210, 440 230, 420 250 
                 C 390 260, 360 250, 340 280 
                 C 330 310, 310 340, 300 370 
                 C 270 420, 240 470, 230 500 
                 C 220 505, 210 490, 205 460 
                 C 190 410, 180 370, 175 340 
                 C 150 310, 130 280, 120 250 
                 C 100 230, 105 190, 130 170 
                 C 140 150, 160 110, 180 50 Z"
              fill="#181B2A"
              stroke="#D4AF37"
              strokeWidth="2"
              strokeDasharray="4 4"
              className="opacity-70"
            />
            {/* Coastline Glow Accent */}
            <path
              d="M 180 50 C 210 40, 240 70, 250 90 C 270 95, 300 130, 270 160 C 280 180, 350 170, 390 190"
              stroke="#E5B842"
              strokeWidth="3"
              className="opacity-80"
            />
          </svg>

          {/* Interactive Absolute Placed Pins */}
          {REGION_PINS.map(pin => {
            const isSelected = activeHoverPin.id === pin.id || selectedRegion === pin.id;
            return (
              <button
                key={pin.id}
                type="button"
                onClick={() => handlePinClick(pin)}
                onMouseEnter={() => setActiveHoverPin(pin)}
                style={{ left: `${pin.xPercent}%`, top: `${pin.yPercent}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none z-10"
                aria-label={`Select ${pin.name}`}
              >
                {/* Ping animation when selected */}
                {isSelected && (
                  <span className="absolute -inset-2 rounded-full bg-[#E5B842]/30 animate-ping" />
                )}

                <div
                  className={`relative flex items-center justify-center rounded-full transition-all duration-300 shadow-xl ${
                    isSelected
                      ? 'w-10 h-10 bg-gradient-to-tr from-[#C85A32] to-[#E5B842] scale-110 border-2 border-white'
                      : 'w-7 h-7 bg-[#12141F] border border-[#D4AF37]/60 group-hover:scale-125 group-hover:bg-[#D4AF37] group-hover:text-[#0C0D14]'
                  }`}
                >
                  <MapPin
                    className={`w-4 h-4 ${
                      isSelected ? 'text-[#0C0D14]' : 'text-[#E5B842] group-hover:text-[#0C0D14]'
                    }`}
                  />
                </div>

                {/* Floating label tag */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-11 px-2.5 py-1 rounded-md text-[10px] font-bold whitespace-nowrap pointer-events-none transition-all ${
                    isSelected
                      ? 'bg-[#D4AF37] text-[#0C0D14] opacity-100 shadow-lg scale-100'
                      : 'bg-[#0C0D14]/90 text-[#C5C8D4] opacity-0 group-hover:opacity-100 scale-95'
                  }`}
                >
                  {pin.id}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Region Spotlight Card */}
        <div className="lg:col-span-5">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#181B2A] to-[#0C0D14] border border-[#D4AF37]/40 shadow-xl space-y-4">
            <div className="relative h-44 rounded-xl overflow-hidden border border-white/10">
              <img
                src={activeHoverPin.image}
                alt={activeHoverPin.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D14] via-[#0C0D14]/30 to-transparent" />
              <div className="absolute top-3 right-3">
                <span
                  className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    activeHoverPin.threatLevel === 'Critical'
                      ? 'bg-rose-600 text-white'
                      : 'bg-amber-500 text-[#0C0D14]'
                  }`}
                >
                  {activeHoverPin.threatLevel} Urgency
                </span>
              </div>
              <div className="absolute bottom-3 left-3 right-3">
                <div className="text-[10px] text-[#E5B842] uppercase tracking-wider font-semibold">
                  {activeHoverPin.state}
                </div>
                <h4 className="text-lg font-serif font-bold text-[#FBF9F5]">
                  {activeHoverPin.name}
                </h4>
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                <div className="text-[#8E92A4] uppercase text-[10px] font-bold tracking-wider mb-1">
                  Primary Spotlight Heritage:
                </div>
                <div className="font-semibold text-[#FBF9F5] text-sm">
                  {activeHoverPin.highlightCraft}
                </div>
              </div>

              <p className="text-[#A3A8B8] leading-relaxed">
                Home to ancient master craft lineages, unique oral dialects, and climate-adapted agricultural traditions facing modern transition.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onSelectRegion && onSelectRegion(activeHoverPin.id)}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#C85A32] to-[#E5B842] text-[#0C0D14] font-bold text-xs flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all shadow-md"
            >
              <span>Explore All {activeHoverPin.id} Traditions</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
