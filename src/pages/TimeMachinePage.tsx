import React, { useState } from 'react';
import {
  Clock,
  Sparkles,
  Volume2,
  PlusCircle
} from 'lucide-react';
import { useHeritage } from '../context/HeritageContext';
import { TIME_MACHINE_REGIONS } from '../data/timeMachineData';

export const TimeMachinePage: React.FC = () => {
  const { playSimulatedAudio, openPreserveModal, addPoints } = useHeritage();

  const [selectedRegionId, setSelectedRegionId] = useState<string>('punjab');
  const [selectedEra, setSelectedEra] = useState<'1950' | '1980' | '2026' | '2050'>('1950');

  const currentRegion =
    TIME_MACHINE_REGIONS.find(r => r.regionId === selectedRegionId) ||
    TIME_MACHINE_REGIONS[0];

  const currentEraData = currentRegion.eras[selectedEra];

  const eras: Array<{ year: '1950' | '1980' | '2026' | '2050'; label: string; period: string }> = [
    { year: '1950', label: 'Pastoral Roots', period: '1950 Post-Independence' },
    { year: '1980', label: 'Cassette Era', period: '1980 Pre-Digital Wave' },
    { year: '2026', label: 'Present Danger', period: '2026 Endangered State' },
    { year: '2050', label: 'AI Renaissance', period: '2050 Speculative Future' }
  ];

  const handleEraChange = (year: '1950' | '1980' | '2026' | '2050') => {
    setSelectedEra(year);
    addPoints(15, `Traveled to ${currentRegion.regionName} (${year}) in Time Machine`);
  };

  const handlePlaySoundscape = () => {
    playSimulatedAudio(
      `${currentRegion.regionName} — ${selectedEra} Soundscape`,
      currentEraData.visualAtmosphere.soundAtmosphereHint,
      '2:40'
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 pb-24">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#E5B842] text-xs font-semibold uppercase tracking-wider">
          <Clock className="w-4 h-4" />
          <span>Century Cultural Chronometer</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#FBF9F5]">
          The Cultural Time Machine
        </h1>
        <p className="text-xs sm:text-sm text-[#A3A8B8] leading-relaxed">
          Witness how clothing, architecture, food, and music evolved across 100 years—from handspun 1950 roots to 2026 threats, and envision 2050 regenerative biocultural revivals.
        </p>
      </div>

      {/* Region Selector Bar */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2">
        {TIME_MACHINE_REGIONS.map(reg => (
          <button
            key={reg.regionId}
            type="button"
            onClick={() => setSelectedRegionId(reg.regionId)}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
              selectedRegionId === reg.regionId
                ? 'bg-[#D4AF37] text-[#0C0D14] shadow-lg scale-105'
                : 'bg-[#12141F] text-[#C5C8D4] hover:text-white border border-white/10'
            }`}
          >
            <span>{reg.regionName}</span>
            <span className="opacity-70 text-[10px] hidden sm:inline font-mono">
              ({reg.nativeTitle})
            </span>
          </button>
        ))}
      </div>

      {/* Interactive Era Slider / Stepper Bar */}
      <div className="p-4 sm:p-6 rounded-2xl bg-[#0F111A] border border-[#D4AF37]/30 shadow-2xl space-y-4">
        <div className="text-xs font-bold uppercase tracking-widest text-[#E5B842] flex items-center justify-between">
          <span>Select Timeline Coordinates:</span>
          <span className="text-[#A3A8B8] font-normal hidden sm:inline">Click any epoch to warp time</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {eras.map(e => {
            const isCurrent = selectedEra === e.year;
            return (
              <button
                key={e.year}
                type="button"
                onClick={() => handleEraChange(e.year)}
                className={`p-4 rounded-xl text-left transition-all border relative overflow-hidden group ${
                  isCurrent
                    ? 'bg-gradient-to-br from-[#181B2A] to-[#0C0D14] border-[#E5B842] shadow-lg shadow-[#D4AF37]/20 scale-[1.02]'
                    : 'bg-[#0C0D14]/80 border-white/10 hover:border-white/20 hover:bg-white/5'
                }`}
              >
                {isCurrent && (
                  <div className="absolute top-0 right-0 w-12 h-12 bg-[#E5B842]/20 rounded-bl-full" />
                )}
                <div className="text-2xl sm:text-3xl font-serif font-black mb-1">
                  <span className={isCurrent ? 'text-[#E5B842]' : 'text-[#8E92A4]'}>
                    {e.year}
                  </span>
                </div>
                <div className={`text-xs font-bold ${isCurrent ? 'text-[#FBF9F5]' : 'text-[#C5C8D4]'}`}>
                  {e.label}
                </div>
                <div className="text-[10px] text-[#8E92A4] mt-0.5">{e.period}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Era Visual Atmosphere Banner */}
      <div className="relative rounded-3xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl min-h-[280px] sm:min-h-[340px] flex items-end">
        <img
          src={currentEraData.visualAtmosphere.bannerImage}
          alt={currentEraData.title}
          className="absolute inset-0 w-full h-full object-cover brightness-75 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D14] via-[#0C0D14]/60 to-transparent" />

        <div className="relative z-10 p-6 sm:p-10 w-full flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#D4AF37] text-[#0C0D14]">
                ERA {selectedEra}
              </span>
              <span className="text-xs text-[#E5B842] font-semibold">
                {currentRegion.regionName}
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#FBF9F5]">
              {currentEraData.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#C5C8D4] italic">
              &ldquo;{currentEraData.tagline}&rdquo;
            </p>
          </div>

          {/* Soundscape and Action CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handlePlaySoundscape}
              className="px-4 py-2.5 rounded-xl bg-[#E5B842] hover:bg-[#F3C456] text-[#0C0D14] font-bold text-xs flex items-center gap-2 shadow-lg transition-transform active:scale-95"
            >
              <Volume2 className="w-4 h-4" />
              <span>Listen Era Soundscape</span>
            </button>

            <button
              type="button"
              onClick={() => openPreserveModal('story')}
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#FBF9F5] font-semibold text-xs border border-white/20 flex items-center gap-2 transition-colors"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Log Memory From {selectedEra}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 5-Pillar Comprehensive Deep-Dive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 1. Clothing & Textiles */}
        <div className="p-6 rounded-2xl bg-[#12141F] border border-white/10 shadow-xl space-y-3">
          <div className="flex items-center gap-2 text-[#E5B842] text-xs font-bold uppercase tracking-wider">
            <span>👗</span>
            <span>Clothing & Textiles</span>
          </div>
          <h3 className="text-lg font-serif font-bold text-[#FBF9F5]">
            {currentEraData.clothing.title}
          </h3>
          <p className="text-xs text-[#C5C8D4] leading-relaxed">
            {currentEraData.clothing.description}
          </p>
          <div className="p-3 rounded-xl bg-[#0C0D14] border border-white/5 text-[11px] text-[#A3A8B8]">
            <strong className="text-[#E5B842]">Materials:</strong> {currentEraData.clothing.materials}
          </div>
        </div>

        {/* 2. Architecture & Dwellings */}
        <div className="p-6 rounded-2xl bg-[#12141F] border border-white/10 shadow-xl space-y-3">
          <div className="flex items-center gap-2 text-[#64D2B1] text-xs font-bold uppercase tracking-wider">
            <span>🏛️</span>
            <span>Architecture & Shelter</span>
          </div>
          <h3 className="text-lg font-serif font-bold text-[#FBF9F5]">
            {currentEraData.architecture.title}
          </h3>
          <p className="text-xs text-[#C5C8D4] leading-relaxed">
            {currentEraData.architecture.description}
          </p>
          <div className="p-3 rounded-xl bg-[#0C0D14] border border-white/5 text-[11px] text-[#A3A8B8]">
            <strong className="text-[#64D2B1]">Eco-Integration:</strong>{' '}
            {currentEraData.architecture.sustainability}
          </div>
        </div>

        {/* 3. Food & Hearth */}
        <div className="p-6 rounded-2xl bg-[#12141F] border border-white/10 shadow-xl space-y-3">
          <div className="flex items-center gap-2 text-[#FF8C66] text-xs font-bold uppercase tracking-wider">
            <span>🍲</span>
            <span>Culinary Heritage & Gastronomy</span>
          </div>
          <h3 className="text-lg font-serif font-bold text-[#FBF9F5]">
            {currentEraData.food.title}
          </h3>
          <p className="text-xs text-[#C5C8D4] leading-relaxed">
            {currentEraData.food.description}
          </p>
          <div className="space-y-1 pt-1">
            <div className="text-[10px] uppercase font-bold text-[#8E92A4]">Era Staples:</div>
            <div className="flex flex-wrap gap-1.5">
              {currentEraData.food.stapleDishes.map((dish, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-lg bg-[#0C0D14] border border-white/5 text-[10px] text-[#FBF9F5]"
                >
                  {dish}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 4. Music, Dialect & Soundscape */}
        <div className="p-6 rounded-2xl bg-[#12141F] border border-white/10 shadow-xl space-y-3">
          <div className="flex items-center gap-2 text-[#A78BFA] text-xs font-bold uppercase tracking-wider">
            <span>🎵</span>
            <span>Music & Oral Dialects</span>
          </div>
          <h3 className="text-lg font-serif font-bold text-[#FBF9F5]">
            {currentEraData.musicAndDialect.title}
          </h3>
          <p className="text-xs text-[#C5C8D4] leading-relaxed">
            {currentEraData.musicAndDialect.description}
          </p>
          <div className="p-3 rounded-xl bg-[#0C0D14] border border-white/5 text-[11px] text-[#A3A8B8]">
            <strong className="text-[#A78BFA]">Soundscape:</strong>{' '}
            {currentEraData.musicAndDialect.soundscape}
          </div>
        </div>

        {/* 5. Lifestyle & Social Customs */}
        <div className="p-6 rounded-2xl bg-[#12141F] border border-white/10 shadow-xl space-y-3">
          <div className="flex items-center gap-2 text-[#38BDF8] text-xs font-bold uppercase tracking-wider">
            <span>🌟</span>
            <span>Community & Social Fabric</span>
          </div>
          <h3 className="text-lg font-serif font-bold text-[#FBF9F5]">
            {currentEraData.lifestyle.title}
          </h3>
          <p className="text-xs text-[#C5C8D4] leading-relaxed">
            {currentEraData.lifestyle.description}
          </p>
          <div className="p-3 rounded-xl bg-[#0C0D14] border border-white/5 text-[11px] text-[#A3A8B8]">
            <strong className="text-[#38BDF8]">Atmosphere:</strong>{' '}
            {currentEraData.visualAtmosphere.soundAtmosphereHint}
          </div>
        </div>

        {/* 6. Preservation Callout Card */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-[#181B2A] to-[#0C0D14] border-2 border-[#D4AF37]/40 shadow-xl flex flex-col justify-between space-y-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#E5B842] flex items-center gap-1.5 mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Cultural Continuity Action</span>
            </div>
            <h3 className="text-lg font-serif font-bold text-[#FBF9F5]">
              Pass It On to 2050
            </h3>
            <p className="text-xs text-[#A3A8B8] leading-relaxed mt-1">
              Do you have memories, songs, or photographs from the {selectedEra} era in {currentRegion.regionName}? Record them now before they dissolve.
            </p>
          </div>

          <button
            type="button"
            onClick={() => openPreserveModal('story')}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-[#C85A32] to-[#E5B842] text-[#0C0D14] font-bold text-xs flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all shadow-md"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Preserve {selectedEra} Memory (+100 PTS)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
