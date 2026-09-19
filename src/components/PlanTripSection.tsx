import React, { useState } from 'react';
import { MapPin, ShieldCheck, Navigation } from 'lucide-react';
import { soundEngine } from '../services/soundEngine';


export const PlanTripSection: React.FC = () => {
  const [activeCircuit, setActiveCircuit] = useState<'golden' | 'dravidian' | 'deccan' | 'kalinga'>('golden');

  const circuits = {
    golden: {
      name: 'The Golden Imperial Triangle',
      hindi: 'स्वर्ण त्रिभुज यात्रा',
      route: 'Delhi (Qutub Minar) → Agra (Taj Mahal) → Jaipur (Hawa Mahal)',
      duration: '4–5 Days',
      bestSeason: 'October to March (Crisp winter mornings)',
      highlights: 'Mughal symmetry, Rajasthani royal latticework, and Delhi Sultanate epigraphy.',
      rituals: 'Full moon night viewing at Taj Mahal; Sunrise golden rays striking Hawa Mahal facade.',
    },
    dravidian: {
      name: 'Great Living Southern Temple Trail',
      hindi: 'दक्षिण महामंदिर परिक्रमा',
      route: 'Madurai (Meenakshi Amman) → Thanjavur (Brihadisvara)',
      duration: '3–4 Days',
      bestSeason: 'November to February (Pleasant coastal breezes)',
      highlights: '14 soaring polychromatic Gopurams, 80-tonne monolithic Kumbam, and Yali pillar halls.',
      rituals: 'Night Palliyarai procession at Madurai; Evening granite illumination at Thanjavur.',
    },
    deccan: {
      name: 'Monolithic Rocks & Boulder Empires',
      hindi: 'दक्कन प्रस्तर यात्रा',
      route: 'Ellora (Kailasa Cave 16) → Hampi (Vittala Stone Chariot)',
      duration: '5–6 Days',
      bestSeason: 'November to February',
      highlights: 'Top-down volcanic cliff excavation, monolithic elephants, and musical stone pillars.',
      rituals: 'Climb cliff behind Cave 16 at sunrise; Sunset over Tungabhadra boulders at Hampi.',
    },
    kalinga: {
      name: 'Solar Chariot & Sacred Ocean Circuit',
      hindi: 'कलिंग सूर्य रथ यात्रा',
      route: 'Bhubaneswar (Lingaraj) → Konark (Sun Temple) → Puri (Jagannath)',
      duration: '3 Days',
      bestSeason: 'December (Annual Konark Dance Festival) to February',
      highlights: '24 astrolabe sundial wheels, 7 galloping horses, and coastal maritime legends.',
      rituals: 'First rays of winter sun hitting eastern chariot wheels; classical Odissi dance under stars.',
    },
  };

  const selected = circuits[activeCircuit];

  return (
    <section id="plan" className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
          <Navigation className="w-3.5 h-3.5" />
          <span>Yatra Margdarshak (यात्रा मार्गदर्शक)</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-black tracking-tight text-white mb-4">
          Plan Your Physical & Virtual Pilgrimage
        </h2>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-amber-100/70 font-outfit">
          Whether you visit in person or explore through our AR/VR portals, experience the sacred protocols, seasons, and routes.
        </p>
      </div>

      {/* Circuit Selector Tabs */}
      <div className="flex items-center justify-start sm:justify-center gap-3 overflow-x-auto pb-4 mb-8 scrollbar-none">
        {(Object.keys(circuits) as (keyof typeof circuits)[]).map((key) => {
          const item = circuits[key];
          const isSelected = activeCircuit === key;
          return (
            <button
              key={key}
              onClick={() => {
                soundEngine.playTempleBell(550, 1.5);
                setActiveCircuit(key);
              }}
              className={`flex-shrink-0 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                isSelected
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-black shadow-xl shadow-amber-500/30 scale-105'
                  : 'glass-royal text-gray-300 hover:text-white border border-white/10'
              }`}
            >
              <span>{item.name}</span>
            </button>
          );
        })}
      </div>

      {/* Circuit Detail Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
        <div className="lg:col-span-7 rounded-3xl p-6 sm:p-8 glass-royal border border-amber-500/30 shadow-2xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs font-bold text-amber-400 font-yatra">{selected.hindi}</span>
              <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
                {selected.duration}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-cinzel font-black text-white mb-3">
              {selected.name}
            </h3>

            <p className="text-sm font-medium text-amber-300 mb-6 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-orange-400 shrink-0" />
              <span>{selected.route}</span>
            </p>

            <div className="space-y-4 text-xs sm:text-sm text-amber-100/90 font-outfit">
              <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10">
                <span className="font-bold text-amber-300">🌟 Architectural Highlights: </span>
                <span>{selected.highlights}</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10">
                <span className="font-bold text-orange-300">🕯️ Sacred Rituals & Timings: </span>
                <span>{selected.rituals}</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
            <span>Ideal Weather: <strong className="text-white">{selected.bestSeason}</strong></span>
            <span className="text-amber-400 font-semibold">AR Guided Points Included</span>
          </div>
        </div>

        {/* Right: Sacred Cultural Etiquette & Tips */}
        <div className="lg:col-span-5 rounded-3xl p-6 sm:p-8 glass-royal border border-amber-500/30 shadow-2xl flex flex-col justify-between">
          <h4 className="font-cinzel font-bold text-lg text-white mb-4 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-amber-400" />
            <span>Sacred Etiquette & Heritage Care</span>
          </h4>

          <div className="space-y-3.5 text-xs text-amber-100/80 font-outfit">
            <div className="flex items-start gap-3">
              <span className="p-1.5 rounded-lg bg-amber-500/20 text-amber-300 shrink-0 mt-0.5">👟</span>
              <div>
                <strong className="text-white block mb-0.5">Footwear Protocols:</strong>
                Shoes must be removed at designated counters before stepping on temple or mausoleum plinths. Clean socks are permitted.
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="p-1.5 rounded-lg bg-amber-500/20 text-amber-300 shrink-0 mt-0.5">🥻</span>
              <div>
                <strong className="text-white block mb-0.5">Respectful Attire:</strong>
                Wear clothing covering shoulders and knees. Traditional Indian dhotis/sarees are mandatory for inner sanctums at Madurai and Thanjavur.
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="p-1.5 rounded-lg bg-amber-500/20 text-amber-300 shrink-0 mt-0.5">📸</span>
              <div>
                <strong className="text-white block mb-0.5">Photography Regulations:</strong>
                Photography is welcomed in outer courtyards. Flash photography and cameras are strictly prohibited inside deity garbhagrihas.
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="p-1.5 rounded-lg bg-amber-500/20 text-amber-300 shrink-0 mt-0.5">🏛️</span>
              <div>
                <strong className="text-white block mb-0.5">Zero Contact with Carvings:</strong>
                Avoid touching ancient Khondalite or granite reliefs to preserve microscopic carved details against skin oils.
              </div>
            </div>
          </div>

          <div className="mt-6 p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-[11px] text-amber-300 text-center font-medium">
            🙏 Smarak AR empowers mindful, respectful heritage preservation.
          </div>

        </div>
      </div>
    </section>
  );
};
