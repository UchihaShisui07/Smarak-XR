import React, { useState } from 'react';
import {
  Compass,
  Sparkles,
  ShieldCheck,
  Eye,
  Layers,
  Volume2,
  AlertCircle
} from 'lucide-react';
import { useHeritage } from '../context/HeritageContext';

interface CitySpotlight {
  cityId: string;
  cityName: string;
  state: string;
  tagline: string;
  heritageIdentity: string;
  whyNotGoogle: string;
  monuments: Array<{
    id: string;
    title: string;
    type: string;
    unesco: boolean;
    image: string;
    googleShows: string;
    smarakARReveals: string;
    arFeature: string;
    architecturalSecret: string;
  }>;
}

const CITIES: CitySpotlight[] = [
  {
    cityId: 'chandigarh',
    cityName: 'Chandigarh (The City Beautiful)',
    state: 'Punjab & Haryana Capital (UT)',
    tagline: 'India’s First Modernist UNESCO Capital: Born from the Ashes of 1947 Partition',
    heritageIdentity:
      'When Lahore was lost in 1947, Prime Minister Nehru and Swiss-French visionary Le Corbusier built Chandigarh as an uninhibited symbol of free India’s modern democratic future.',
    whyNotGoogle:
      'Google Maps directs you to tourist gardens. Smarak AR reveals Le Corbusier’s 1951 astronomical solar calculations and Nek Chand’s secret outsider art kingdom in Augmented Reality.',
    monuments: [
      {
        id: 'capitol-complex',
        title: 'The Capitol Complex & Open Hand Monument',
        type: 'UNESCO World Heritage • Brutalist Modernism',
        unesco: true,
        image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80',
        googleShows: 'Grey concrete government offices and court buildings.',
        smarakARReveals:
          'In AR, Le Corbusier’s 1951 hand-drawn Modulor sketches float over the Palace of Assembly, revealing how the 26-meter Open Hand rotates with mountain winds as a gesture of international peace.',
        arFeature: '1:1 Rotating Wind-Vane Vector Overlay & Parabolic Acoustic Chamber Cross-Section',
        architecturalSecret:
          'Deep concrete brise-soleil sun-breakers calculate the exact 30°N solar angles to passively cool interior chambers by 7°C without air conditioning.'
      },
      {
        id: 'rock-garden',
        title: 'Nek Chand’s Rock Garden',
        type: 'Outsider Eco-Art Sanctuary',
        unesco: false,
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=80',
        googleShows: 'Photos of rock statues and tourist walkways.',
        smarakARReveals:
          'AR camera scans broken glass bangles, industrial kiln slag, and ceramic sink fragments to decode the 18-year secret struggle of road inspector Nek Chand rescuing village memory.',
        arFeature: 'Recycled Material Breakdown & Secret Phase 1 Underground Caverns',
        architecturalSecret:
          'Over 200 tonnes of discarded urban waste was diverted from landfills to sculpt 5,000 statues representing lost Punjabi rural folk life.'
      },
      {
        id: 'sector-17',
        title: 'Sector 17 & The Modernist Grid Promenade',
        type: 'Pedestrian Civic Plaza Heritage',
        unesco: false,
        image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=80',
        googleShows: 'Retail shopping stores and public parking.',
        smarakARReveals:
          'The architectural story of human-scale civic plazas: zero vehicular traffic, red brick facades, and shaded concrete colonnades designed for democratic assembly.',
        arFeature: 'Corbusian 7Vs Circulation System AR Map',
        architecturalSecret:
          'The pedestrian heart was planned on the Greek Agora concept so citizens of all classes mingle without vehicular barriers.'
      }
    ]
  },
  {
    cityId: 'agra',
    cityName: 'Agra (Imperial Yamuna Basin)',
    state: 'Uttar Pradesh',
    tagline: 'Epicenter of Mughal High Symmetry & Riverfront Charbagh Gardens',
    heritageIdentity:
      'The imperial capital where Persian geometry met indigenous Hindu craftsmanship across translucent white marble and red sandstone.',
    whyNotGoogle:
      'Google shows crowds and entrance ticket links. Smarak AR shows the subterranean teak caisson foundations preserved by the Yamuna water table and the 1.5-degree optical minaret tilt.',
    monuments: [
      {
        id: 'taj-mahal',
        title: 'Taj Mahal: The Translucent Elegy',
        type: 'UNESCO World Heritage • Indo-Islamic',
        unesco: true,
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=80',
        googleShows: 'A tomb of white marble visited by millions.',
        smarakARReveals:
          'Point your phone at the dome to reveal the 28-second acoustic echo chamber and the subterranean deep-well caissons anchored in riverbed gravel.',
        arFeature: 'Subterranean Well Caissons & Optical Tilt Analysis',
        architecturalSecret:
          'The four minarets tilt outwards by precisely 1.5° to protect the tomb in earthquakes and ensure optical verticality from the southern gateway.'
      }
    ]
  },
  {
    cityId: 'hampi',
    cityName: 'Hampi (Vijayanagara Empire Ruins)',
    state: 'Karnataka',
    tagline: 'Granite Boulders, Royal Citadels, and Stone Musical Organs',
    heritageIdentity:
      'The 14th-century capital of Vijayanagara, once the second-largest city in the medieval world, built amongst surreal granite boulder landscapes.',
    whyNotGoogle:
      'Google gives you ruined rubble coordinates. Smarak AR sonically plays the 56 Sa-Re-Ga-Ma musical granite pillars and reconstructs the lost golden chariot gopuram.',
    monuments: [
      {
        id: 'hampi-chariot',
        title: 'Vitthala Temple Stone Chariot & Musical Colonnade',
        type: 'UNESCO World Heritage • Vijayanagara Empire',
        unesco: true,
        image: 'https://images.unsplash.com/photo-1600100397608-f010e421d3f9?auto=format&fit=crop&w=1000&q=80',
        googleShows: 'Carved stone cart in a courtyard.',
        smarakARReveals:
          'Interactive acoustic strike simulation: tap the 7 slender granite pillars in AR to hear the pure tuned musical notes Sa, Re, Ga, Ma, Pa, Dha, Ni.',
        arFeature: 'Musical Pillar Resonance & Lost Brick Spire 3D Reconstruction',
        architecturalSecret:
          'The chariot wheels were originally carved to revolve freely on granite axles for ceremonial festivals before British conservators cemented them.'
      }
    ]
  }
];

export const CityHeritageLens: React.FC = () => {
  const [selectedCityId, setSelectedCityId] = useState<string>('chandigarh');
  const { playSimulatedAudio, showToast } = useHeritage();

  const city = CITIES.find(c => c.cityId === selectedCityId) || CITIES[0];

  const handleLaunchAR = (monumentTitle: string) => {
    showToast(`Launching WebXR Spatial AR for "${monumentTitle}"... Place on flat surface!`, 'info');
    // Scroll or open model viewer
    const el = document.getElementById('monument-ar-viewer');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      {/* Header & Mentor Counter Pitch Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#181B2A] via-[#12141F] to-[#0C0D14] border-2 border-[#D4AF37]/40 shadow-2xl space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5B842]/20 border border-[#E5B842]/40 text-[#E5B842] text-xs font-bold uppercase tracking-wider">
              <Compass className="w-4 h-4" />
              <span>City Heritage Lens • Spatial Decoding</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#FBF9F5]">
              &ldquo;I Just Landed in Chandigarh — What Should I Visit?&rdquo;
            </h2>
          </div>

          {/* City Selector Tabs */}
          <div className="flex items-center gap-2 bg-[#0C0D14] p-1.5 rounded-2xl border border-white/10 shrink-0">
            {CITIES.map(c => (
              <button
                key={c.cityId}
                type="button"
                onClick={() => setSelectedCityId(c.cityId)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCityId === c.cityId
                    ? 'bg-[#D4AF37] text-[#0C0D14] shadow-md scale-105'
                    : 'text-[#8E92A4] hover:text-white'
                }`}
              >
                {c.cityName.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* The Golden Pitch Box: Why Not Trip Planner */}
        <div className="p-4 rounded-2xl bg-[#0C0D14]/90 border border-emerald-500/30 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div className="text-xs leading-relaxed space-y-1">
            <div className="font-bold text-emerald-300 uppercase tracking-wider text-[11px]">
              The Core Differentiator: Why Smarak AR Beats Google Maps & Trip Planners
            </div>
            <p className="text-[#C5C8D4]">
              {city.whyNotGoogle}
            </p>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-[#A3A8B8] leading-relaxed">
          {city.heritageIdentity}
        </p>
      </div>

      {/* Monuments Decoded in this City */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-serif font-bold text-[#FBF9F5]">
              Architectural Wonders in {city.cityName}
            </h3>
            <p className="text-xs text-[#8E92A4]">
              Explore the invisible layer behind every stone, concrete curve, and folk sculpture
            </p>
          </div>
          <span className="text-xs font-mono font-bold text-[#E5B842]">
            {city.monuments.length} Curated Spatial Decoders
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {city.monuments.map(item => (
            <div
              key={item.id}
              className="rounded-3xl bg-[#12141F] border border-white/10 hover:border-[#D4AF37]/50 shadow-xl overflow-hidden flex flex-col justify-between transition-all duration-300 group"
            >
              <div>
                {/* Banner Image */}
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12141F] via-[#12141F]/40 to-transparent" />

                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#0C0D14]/80 text-[#E5B842] border border-[#D4AF37]/30">
                      {item.type}
                    </span>
                    {item.unesco && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-600 text-white shadow">
                        UNESCO World Heritage
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3">
                    <h4 className="text-xl font-serif font-bold text-[#FBF9F5] leading-snug">
                      {item.title}
                    </h4>
                  </div>
                </div>

                {/* Side by Side: Google vs Smarak AR */}
                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {/* Google Shows */}
                    <div className="p-3 rounded-xl bg-[#0C0D14] border border-white/5 space-y-1">
                      <div className="text-[10px] font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>What Google Shows:</span>
                      </div>
                      <p className="text-[#8E92A4] text-[11px] leading-relaxed">
                        {item.googleShows}
                      </p>
                    </div>

                    {/* Smarak AR Reveals */}
                    <div className="p-3 rounded-xl bg-gradient-to-br from-[#1A3026] to-[#0C0D14] border border-[#2D6A4F] space-y-1">
                      <div className="text-[10px] font-bold text-[#64D2B1] uppercase tracking-wider flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        <span>What Smarak AR Reveals:</span>
                      </div>
                      <p className="text-[#FBF9F5] text-[11px] leading-relaxed font-medium">
                        {item.smarakARReveals}
                      </p>
                    </div>
                  </div>

                  {/* AR Feature Highlight */}
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 space-y-1.5 text-xs">
                    <div className="flex items-center gap-2 text-[#E5B842] font-bold text-[11px] uppercase tracking-wider">
                      <Layers className="w-3.5 h-3.5" />
                      <span>Spatial AR Projection:</span>
                    </div>
                    <p className="text-[#C5C8D4] text-[11px]">
                      {item.arFeature}
                    </p>
                  </div>

                  {/* Hidden Architectural Secret */}
                  <div className="p-3.5 rounded-xl bg-[#0C0D14] border border-[#D4AF37]/25 text-xs space-y-1">
                    <span className="text-[10px] font-bold uppercase text-[#D4AF37] tracking-wider">
                      Hidden Architectural Secret:
                    </span>
                    <p className="text-[#A3A8B8] text-[11px] leading-relaxed">
                      {item.architecturalSecret}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 border-t border-white/5 flex items-center justify-between gap-3 mt-2">
                <button
                  type="button"
                  onClick={() =>
                    playSimulatedAudio(
                      `${item.title} Audio Decoder`,
                      `${city.cityName} • Architectural Walkthrough`,
                      '2:15'
                    )
                  }
                  className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-[#D4AF37]/20 text-[#E5B842] border border-white/10 text-xs font-bold flex items-center gap-1.5 transition-colors"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>Audio Walkthrough</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleLaunchAR(item.title)}
                  className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-[#C85A32] to-[#E5B842] text-[#0C0D14] font-bold text-xs flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all shadow"
                >
                  <Eye className="w-4 h-4" />
                  <span>Launch 3D / AR Inspection</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
