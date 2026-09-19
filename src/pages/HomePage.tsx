import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Clock,
  AlertTriangle,
  HeartHandshake,
  Bot,
  Volume2,
  ArrowRight,
  ShieldCheck,
  PlusCircle,
  ChevronRight,
  Flame
} from 'lucide-react';
import { useHeritage } from '../context/HeritageContext';
import { VANISHING_CULTURE_ITEMS } from '../data/vanishingCulture';
import { ADOPTABLE_HERITAGE_LIST } from '../data/adoptionData';
import { PLATFORM_STATS } from '../data/communityData';
import { WhySmarakVsGoogleSection } from '../components/WhySmarakVsGoogleSection';
import { CityHeritageLens } from '../components/CityHeritageLens';

export const HomePage: React.FC = () => {
  const {
    openPreserveModal,
    openVanishingModal,
    playSimulatedAudio,
    toggleAdoptHeritage,
    isHeritageAdopted
  } = useHeritage();

  const [activeEraTab, setActiveEraTab] = useState<'1950' | '2026' | '2050'>('1950');

  const eraPreviews = {
    '1950': {
      title: '1950: Pastoral Roots & Pure Handspun Silk',
      tagline: 'Mud-plastered Havelis, Persian waterwheels, and Heer-Ranjha sung at harvest.',
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80',
      craft: 'Handspun Khaddar & Silk Pat',
      food: 'Clay Pot Sarson Saag on Embers'
    },
    '2026': {
      title: '2026: Fast-Fashion Influx & Fragile Lineages',
      tagline: 'Digital polyester replicas, screen time isolation, and elder memory loss.',
      image: 'https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?auto=format&fit=crop&w=1200&q=80',
      craft: 'Mass Market Synthetic Prints',
      food: 'Packaged Snacks & Commercial Buffets'
    },
    '2050': {
      title: '2050: Speculative AI & Circular Heritage Future',
      tagline: '3D bio-printed earthen homes, thermal Phulkari silks, and spatial baithak holograms.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      craft: 'Bioluminescent Thermal Pat Weave',
      food: 'Precision Fermented Ancient Millets'
    }
  };

  return (
    <div className="space-y-20 pb-16">
      {/* 1. HERO SECTION: Ancient Culture x Futuristic Technology */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden border-b border-[#D4AF37]/20 bg-gradient-to-b from-[#0C0D14] via-[#0F111A] to-[#0C0D14] px-4 sm:px-6 lg:px-8">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#C85A32]/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-[#D4AF37]/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Hero Content */}
        <div className="max-w-5xl mx-auto text-center relative z-10 py-16 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181B2A]/90 border border-[#D4AF37]/40 text-[#E5B842] text-xs font-semibold tracking-wider uppercase shadow-lg shadow-[#D4AF37]/10">
            <Flame className="w-4 h-4 text-[#C85A32] fill-current" />
            <span>Preserve • Experience • Pass It On</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-[#FBF9F5] leading-[1.15]">
            We Don’t Just Show Culture.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FF8C66] to-[#E5B842]">
              We Keep It Alive.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#C5C8D4] leading-relaxed">
            India’s disappearing crafts, forgotten melodies, and generational grandmother recipes are vanishing in silence. Step into the living memory vault, travel through 100 years of culture, and adopt a tradition today.
          </p>

          {/* Hero Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => openPreserveModal('story')}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#C85A32] via-[#E5B842] to-[#C85A32] text-[#0C0D14] font-bold text-sm shadow-xl shadow-[#C85A32]/30 hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 border border-[#FF8C66]/50"
            >
              <PlusCircle className="w-5 h-5" />
              <span>Preserve a Heritage Memory (+100 PTS)</span>
            </button>

            <Link
              to="/time-machine"
              className="px-6 py-3.5 rounded-xl bg-[#12141F] hover:bg-[#181B2A] text-[#FBF9F5] font-semibold text-sm border border-[#D4AF37]/40 hover:border-[#D4AF37] transition-all flex items-center gap-2 shadow-lg"
            >
              <Clock className="w-4 h-4 text-[#E5B842]" />
              <span>Launch Cultural Time Machine</span>
              <ArrowRight className="w-4 h-4 text-[#E5B842]" />
            </Link>
          </div>

          {/* Live Platform Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/10 max-w-4xl mx-auto">
            <div className="p-3 rounded-xl bg-white/5 border border-white/5">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#E5B842]">
                {PLATFORM_STATS.traditionsCataloged}+
              </div>
              <div className="text-[11px] uppercase tracking-wider text-[#A3A8B8] mt-0.5">
                Living Traditions Mapped
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/5">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-rose-400">
                {PLATFORM_STATS.endangeredMonitored}
              </div>
              <div className="text-[11px] uppercase tracking-wider text-[#A3A8B8] mt-0.5">
                Endangered Registry
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/5">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#64D2B1]">
                {PLATFORM_STATS.eldersVoicesRecorded}+
              </div>
              <div className="text-[11px] uppercase tracking-wider text-[#A3A8B8] mt-0.5">
                Voices & Oral Songs
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/5">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#FBF9F5]">
                {PLATFORM_STATS.activeGuardians.toLocaleString()}+
              </div>
              <div className="text-[11px] uppercase tracking-wider text-[#A3A8B8] mt-0.5">
                Culture Guardians
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE MENTOR PITCH: WHY SMARAK AR VS GOOGLE & YOUTUBE */}
      <WhySmarakVsGoogleSection />

      {/* 3. FLAGSHIP SECTION: "Before It Becomes a Memory" */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2 text-rose-400 text-xs font-bold uppercase tracking-widest">
              <AlertTriangle className="w-4 h-4" />
              <span>Urgent Cultural Alert</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#FBF9F5]">
              Before It Becomes a Memory
            </h2>
            <p className="text-xs sm:text-sm text-[#A3A8B8] max-w-xl mt-1">
              Fewer than 4 master players of Surando remain. Only one family practices Nirona Rogan painting. Once gone, millennia of knowledge disappear forever.
            </p>
          </div>

          <Link
            to="/vanishing"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#E5B842] hover:text-[#F3C456] transition-colors"
          >
            <span>View Full Endangered Registry (8 Traditions)</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Endangered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VANISHING_CULTURE_ITEMS.slice(0, 4).map(item => {
            const isAdopted = isHeritageAdopted(`adopt-${item.id}`);
            return (
              <div
                key={item.id}
                className="group rounded-2xl bg-[#12141F] border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 overflow-hidden flex flex-col shadow-xl"
              >
                {/* Image & Urgency Banner */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12141F] via-[#12141F]/30 to-transparent" />

                  <div className="absolute top-3 left-3">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        item.urgency === 'Critical'
                          ? 'bg-rose-600/90 text-white'
                          : 'bg-amber-500/90 text-[#0C0D14]'
                      }`}
                    >
                      {item.urgency}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                    <span className="text-[#E5B842] font-mono text-[11px]">{item.nativeScript}</span>
                    <span className="text-[#A3A8B8] text-[11px]">{item.state}</span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-base font-serif font-bold text-[#FBF9F5] group-hover:text-[#E5B842] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#A3A8B8] mt-1 line-clamp-2">
                      {item.threatFactor}
                    </p>
                  </div>

                  <div className="p-2 rounded-lg bg-[#0C0D14] border border-white/5 text-[11px] text-[#C5C8D4]">
                    <span className="text-[#E5B842] font-bold">Remaining:</span> {item.practitionersRemaining}
                  </div>

                  {/* Actions */}
                  <div className="pt-2 border-t border-white/5 flex items-center justify-between gap-2">
                    {item.audioPreview && (
                      <button
                        type="button"
                        onClick={() =>
                          playSimulatedAudio(
                            item.audioPreview!.title,
                            item.name,
                            item.audioPreview!.duration
                          )
                        }
                        className="p-2 rounded-lg bg-white/5 hover:bg-[#D4AF37]/20 text-[#E5B842] transition-colors flex items-center gap-1.5 text-xs font-semibold"
                        title="Listen to Sound Archive"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>Listen</span>
                      </button>
                    )}

                    <button
                      type="button"
                      onClick={() => openVanishingModal(item)}
                      className="flex-1 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-[#FBF9F5] transition-colors text-center"
                    >
                      Deep Dive
                    </button>

                    <button
                      type="button"
                      onClick={() => toggleAdoptHeritage(`adopt-${item.id}`, item.name)}
                      className={`p-2 rounded-lg text-xs font-bold transition-all ${
                        isAdopted
                          ? 'bg-[#1A3026] text-[#64D2B1] border border-[#2D6A4F]'
                          : 'bg-[#C85A32] hover:bg-[#D95B30] text-[#FBF9F5]'
                      }`}
                      title={isAdopted ? 'Adopted' : 'Adopt Tradition (+50 PTS)'}
                    >
                      <HeartHandshake className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. TIME MACHINE INTERACTIVE PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#181B2A] to-[#0C0D14] border border-[#D4AF37]/40 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Content */}
            <div className="lg:max-w-lg space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#E5B842] text-xs font-semibold uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5" />
                <span>The Cultural Time Machine</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#FBF9F5]">
                Witness Culture Transform Across 100 Years
              </h2>

              <p className="text-xs sm:text-sm text-[#C5C8D4] leading-relaxed">
                What did Punjab or Ladakh wear in 1950? What threatens them in 2026? How can AI and regenerative earthen architecture restore their glory by 2050? Slide through time.
              </p>

              {/* Era Selector Buttons */}
              <div className="flex items-center gap-2 p-1.5 rounded-xl bg-[#0C0D14] border border-white/10">
                {(['1950', '2026', '2050'] as const).map(year => (
                  <button
                    key={year}
                    type="button"
                    onClick={() => setActiveEraTab(year)}
                    className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                      activeEraTab === year
                        ? 'bg-[#D4AF37] text-[#0C0D14] shadow'
                        : 'text-[#8E92A4] hover:text-white'
                    }`}
                  >
                    {year === '1950' ? '1950 (Roots)' : year === '2026' ? '2026 (Now)' : '2050 (Future)'}
                  </button>
                ))}
              </div>

              <Link
                to="/time-machine"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#C85A32] to-[#E5B842] text-[#0C0D14] font-bold text-xs hover:brightness-110 active:scale-95 transition-all shadow-md"
              >
                <span>Launch Full 5-Region Time Machine</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right Interactive Card */}
            <div className="w-full lg:max-w-md">
              <div className="p-4 rounded-2xl bg-[#0C0D14] border border-[#D4AF37]/30 shadow-xl space-y-3">
                <div className="relative h-56 rounded-xl overflow-hidden">
                  <img
                    src={eraPreviews[activeEraTab].image}
                    alt={eraPreviews[activeEraTab].title}
                    className="w-full h-full object-cover transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D14] via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#D4AF37] text-[#0C0D14]">
                      ERA: {activeEraTab}
                    </span>
                    <h4 className="text-base font-serif font-bold text-[#FBF9F5] mt-1">
                      {eraPreviews[activeEraTab].title}
                    </h4>
                  </div>
                </div>

                <p className="text-xs text-[#A3A8B8] italic">
                  &ldquo;{eraPreviews[activeEraTab].tagline}&rdquo;
                </p>

                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                    <div className="text-[#8E92A4] font-bold uppercase text-[9px]">Textile & Craft:</div>
                    <div className="text-[#FBF9F5] font-semibold">{eraPreviews[activeEraTab].craft}</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                    <div className="text-[#8E92A4] font-bold uppercase text-[9px]">Culinary Staple:</div>
                    <div className="text-[#FBF9F5] font-semibold">{eraPreviews[activeEraTab].food}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MENTOR COUNTER: CITY HERITAGE LENS (CHANDIGARH SPOTLIGHT) */}
      <CityHeritageLens />

      {/* 5. ADOPT A DISAPPEARING HERITAGE TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A3026] border border-[#2D6A4F] text-[#64D2B1] text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Direct Cultural Stewardship</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#FBF9F5]">
            Adopt a Heritage. Become a Guardian.
          </h2>
          <p className="text-xs sm:text-sm text-[#A3A8B8]">
            Complete actionable preservation quests: listen to oral tapes, share verified patterns, and pledge artisan support to earn exclusive Culture Guardian badges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ADOPTABLE_HERITAGE_LIST.slice(0, 3).map(item => {
            const isAdopted = isHeritageAdopted(item.id);
            return (
              <div
                key={item.id}
                className="rounded-2xl bg-[#12141F] border border-white/10 hover:border-[#D4AF37]/50 p-5 space-y-4 flex flex-col justify-between transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#C85A32]/20 text-[#FF8C66] border border-[#C85A32]/40">
                      {item.category} • {item.region}
                    </span>
                    <span className="text-xs text-[#E5B842] font-mono">
                      {item.guardianCount} Guardians
                    </span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-[#FBF9F5]">
                    {item.name}
                  </h3>

                  <p className="text-xs text-[#A3A8B8] leading-relaxed">
                    {item.summary}
                  </p>

                  <div className="p-3 rounded-xl bg-[#0C0D14] border border-white/5 space-y-1.5 text-xs">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-[#C5C8D4]">3 Actionable Tasks</span>
                      <span className="text-[#E5B842] font-bold">+120 Total PTS</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#C85A32] to-[#E5B842] rounded-full"
                        style={{ width: `${(item.guardianCount / item.targetGuardians) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => toggleAdoptHeritage(item.id, item.name)}
                    className={`flex-1 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 ${
                      isAdopted
                        ? 'bg-[#1A3026] text-[#64D2B1] border border-[#2D6A4F]'
                        : 'bg-gradient-to-r from-[#C85A32] to-[#E5B842] text-[#0C0D14] hover:brightness-110 shadow'
                    }`}
                  >
                    <HeartHandshake className="w-4 h-4" />
                    <span>{isAdopted ? 'Adopted (Active)' : 'Adopt Challenge (+50 PTS)'}</span>
                  </button>

                  <Link
                    to="/adopt"
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-[#C5C8D4] hover:text-white border border-white/10"
                    title="View Tasks & Checklist"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. TALK TO YOUR HERITAGE AI PROMO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-[#12141F] via-[#1A1D2E] to-[#0C0D14] border border-[#D4AF37]/30 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#E5B842] text-xs font-semibold uppercase tracking-wider">
              <Bot className="w-4 h-4" />
              <span>Simulated Cultural AI Dialogues</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#FBF9F5]">
              Talk to Your Heritage: Ask the Elders
            </h2>

            <p className="text-xs sm:text-sm text-[#C5C8D4] leading-relaxed">
              Have you ever wondered why our ancestors cooked in cast iron with crackling Jakhiya seeds? Or how temple architects interlocked granite without cement to withstand earthquakes? Converse with 4 cultural personas.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {['Dadi Bhagirathi (Kitchen Sage)', 'Ustad Abdul Gafur (Rogan Master)', 'Osman (Desert Bard)', 'Shilpi Somnath (Temple Master)'].map(
                name => (
                  <span
                    key={name}
                    className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] text-[#E5B842]"
                  >
                    {name}
                  </span>
                )
              )}
            </div>

            <Link
              to="/ai-storyteller"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#C85A32] to-[#E5B842] text-[#0C0D14] font-bold text-xs hover:brightness-110 active:scale-95 transition-all shadow-lg"
            >
              <span>Start Interactive Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* AI Chat Bubble Mockup */}
          <div className="w-full md:max-w-sm p-4 rounded-2xl bg-[#0C0D14] border border-white/10 shadow-xl space-y-3">
            <div className="flex items-center gap-3 border-b border-white/5 pb-2.5">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80"
                alt="Dadi"
                className="w-10 h-10 rounded-full object-cover border border-[#D4AF37]/50"
              />
              <div>
                <h4 className="text-xs font-bold text-[#FBF9F5]">Dadi Bhagirathi</h4>
                <p className="text-[10px] text-[#E5B842]">Himalayan Kitchen Sage</p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/5 text-xs text-[#C5C8D4] leading-relaxed italic border border-white/5">
              &ldquo;Arey beta, when you slow-roast the black Bhatt in pure mustard oil in an unwashed iron kadhai, the mountain winter can never touch your bones...&rdquo;
            </div>

            <div className="text-[10px] text-right text-[#8E92A4] font-mono">
              Ready to answer your questions • 100% simulated
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION BANNER */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#C85A32]/20 via-[#12141F] to-[#0C0D14] border-2 border-[#D4AF37]/40 shadow-2xl space-y-5">
          <span className="text-4xl">🪔</span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#FBF9F5]">
            Every Family Has an Unwritten Treasure.
          </h2>
          <p className="max-w-xl mx-auto text-xs sm:text-sm text-[#C5C8D4] leading-relaxed">
            Don’t let your grandparents’ songs, recipes, or village memories vanish into thin air. Mint your family card to the Heritage Alive vault in under two minutes.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => openPreserveModal('story')}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#C85A32] via-[#E5B842] to-[#C85A32] text-[#0C0D14] font-bold text-sm hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-[#C85A32]/30 flex items-center gap-2"
            >
              <PlusCircle className="w-5 h-5" />
              <span>Preserve a Heritage Memory (+100 PTS)</span>
            </button>
            <Link
              to="/stories"
              className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-[#FBF9F5] font-semibold text-sm border border-white/10 transition-colors"
            >
              Read Artisan Vault
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
