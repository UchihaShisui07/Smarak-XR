import React, { useState } from 'react';
import {
  CheckCircle2,
  XCircle,
  Eye,
  Clock,
  Layers,
  ShieldCheck,
  Zap,
  ArrowRight
} from 'lucide-react';
import { useHeritage } from '../context/HeritageContext';

export const WhySmarakVsGoogleSection: React.FC = () => {
  const { openPreserveModal } = useHeritage();
  const [activeTab, setActiveTab] = useState<'spatial' | 'time' | 'hidden' | 'preservation'>('spatial');

  const comparisonPoints = [
    {
      id: 'spatial',
      icon: Eye,
      title: '1. Spatial Immersion vs Flat Screen',
      tagline: 'Google shows a photograph; YouTube streams someone else’s video. Smarak AR places the 1:1 scale monument in your room.',
      google: '2D static photographs with commercial travel advertisements and crowded TripAdvisor reviews.',
      youtube: 'Passive video filmed from a fixed camera angle; you are an observer on a 16:9 flat glass screen.',
      smarak:
        'WebXR 3D Holographic Projection. Walk around the Konark Sun Chariot or Taj Mahal in your living room, zoom into millimeter stone relief carvings, and inspect 360° architectural hotspots.',
      demoAction: 'Try 3D Model Explorer'
    },
    {
      id: 'time',
      icon: Clock,
      title: '2. 100-Year Time Evolution vs Frozen Snapshot',
      tagline: 'Search engines only know what exists today. We reconstruct history and design the future.',
      google: 'Only indexes current-day photographs and text articles written after the year 2000.',
      youtube: 'Frozen recorded footage of one specific afternoon with modern tourist crowds.',
      smarak:
        'Interactive Cultural Time Machine (1950 ── 1980 ── 2026 ── 2050). Slide between epochs to see handspun khaddar, brutalist post-partition foundations, endangered fast-fashion shifts, and 2050 circular bio-architecture.',
      demoAction: 'Launch Time Machine Slider'
    },
    {
      id: 'hidden',
      icon: Layers,
      title: '3. Invisible Architectural Secrets Unlocked On-Site',
      tagline: 'When standing in front of a monument, Google is a distracting phone screen. Smarak AR is an X-ray lens.',
      google: 'Requires you to read long Wikipedia text paragraphs on a small screen while standing in direct sunlight.',
      youtube: 'Irrelevant at the physical site—nobody watches a 15-minute video while standing right there.',
      smarak:
        'Augmented Reality X-Ray Overlay: reveals Le Corbusier’s 1951 hand-sketched blueprints over the Capitol Complex, the 28-second acoustic echo chamber inside the Taj Mahal dome, and the 1.5° optical tilt of minarets.',
      demoAction: 'Simulate On-Site AR Scanner'
    },
    {
      id: 'preservation',
      icon: ShieldCheck,
      title: '4. Active Cultural Stewardship vs Passive Consumption',
      tagline: 'Google and YouTube monetize your attention. Smarak AR empowers you to save dying traditions.',
      google: 'Read a paragraph about endangered Rogan art and close the tab. Zero impact on the artisan.',
      youtube: 'Watch an artisan video; the ad revenue goes to Google and the creator, not the struggling lineage.',
      smarak:
        'Gamified Cultural Adoption: check off actionable preservation tasks, record elder grandma recipes, listen to unreleased desert folk ragas, and mint immutable Digital Heritage Cards.',
      demoAction: 'Mint Heritage Card (+100 PTS)'
    }
  ];

  const activeData = comparisonPoints.find(p => p.id === activeTab) || comparisonPoints[0];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-bold uppercase tracking-wider">
          <Zap className="w-4 h-4 text-amber-400" />
          <span>The Core Differentiator</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#FBF9F5]">
          Why Smarak AR? Why Not Just Google or YouTube?
        </h2>
        <p className="text-xs sm:text-sm text-[#A3A8B8] leading-relaxed">
          The ultimate answer to the question every hackathon judge asks: here is how spatial technology, temporal navigation, and community stewardship replace passive 2D search engines.
        </p>
      </div>

      {/* Comparison Matrix Component */}
      <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#12141F] via-[#181B2A] to-[#0C0D14] border-2 border-[#D4AF37]/40 shadow-2xl space-y-8">
        {/* Interactive Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-[#0C0D14] p-1.5 rounded-2xl border border-white/10">
          {comparisonPoints.map(point => {
            const isSelected = activeTab === point.id;
            return (
              <button
                key={point.id}
                type="button"
                onClick={() => setActiveTab(point.id as any)}
                className={`py-3 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                  isSelected
                    ? 'bg-[#D4AF37] text-[#0C0D14] shadow-lg scale-[1.02]'
                    : 'text-[#8E92A4] hover:text-white hover:bg-white/5'
                }`}
              >
                <point.icon className="w-4 h-4" />
                <span className="truncate">{point.title.split('.')[1]}</span>
              </button>
            );
          })}
        </div>

        {/* 3-Column Comparative Battle Card */}
        <div className="space-y-4">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#FBF9F5]">
              {activeData.title}
            </h3>
            <p className="text-xs text-[#E5B842] italic">&ldquo;{activeData.tagline}&rdquo;</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {/* 1. Google Search Column */}
            <div className="p-5 rounded-2xl bg-[#0C0D14] border border-white/10 space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-white/5 pb-2">
                  <span className="text-xs font-bold text-[#8E92A4] uppercase tracking-wider">
                    Google Search
                  </span>
                  <XCircle className="w-4 h-4 text-rose-500" />
                </div>
                <div className="text-2xl pt-2">🔍</div>
                <h4 className="text-sm font-semibold text-[#C5C8D4] mt-1">
                  Flat Informational Index
                </h4>
                <p className="text-xs text-[#8E92A4] leading-relaxed mt-2">
                  {activeData.google}
                </p>
              </div>
              <div className="text-[11px] text-[#8E92A4] bg-white/5 p-2.5 rounded-xl border border-white/5">
                Verdict: Passive 2D reading, zero spatial memory.
              </div>
            </div>

            {/* 2. YouTube Video Column */}
            <div className="p-5 rounded-2xl bg-[#0C0D14] border border-white/10 space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-white/5 pb-2">
                  <span className="text-xs font-bold text-[#8E92A4] uppercase tracking-wider">
                    YouTube Streaming
                  </span>
                  <XCircle className="w-4 h-4 text-rose-500" />
                </div>
                <div className="text-2xl pt-2">📺</div>
                <h4 className="text-sm font-semibold text-[#C5C8D4] mt-1">
                  Pre-Recorded Spectatorship
                </h4>
                <p className="text-xs text-[#8E92A4] leading-relaxed mt-2">
                  {activeData.youtube}
                </p>
              </div>
              <div className="text-[11px] text-[#8E92A4] bg-white/5 p-2.5 rounded-xl border border-white/5">
                Verdict: Someone else’s perspective; cannot inspect or rotate.
              </div>
            </div>

            {/* 3. Smarak AR Winning Column */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#1A3026] via-[#12141F] to-[#0C0D14] border-2 border-[#D4AF37] shadow-xl space-y-3 flex flex-col justify-between ring-2 ring-[#D4AF37]/30">
              <div>
                <div className="flex items-center justify-between border-b border-[#D4AF37]/40 pb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-[#E5B842] uppercase tracking-wider">
                      Smarak AR Platform
                    </span>
                    <span className="px-1.5 py-0.2 text-[9px] bg-[#E5B842] text-[#0C0D14] font-black rounded uppercase">
                      Winner
                    </span>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="text-2xl pt-2">🏛️✨</div>
                <h4 className="text-sm font-bold text-[#FBF9F5] mt-1">
                  Spatial, Temporal & Active
                </h4>
                <p className="text-xs text-[#FBF9F5] leading-relaxed mt-2 font-medium">
                  {activeData.smarak}
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <div className="text-[11px] text-emerald-300 bg-emerald-950/40 p-2.5 rounded-xl border border-emerald-500/30 font-semibold">
                  Verdict: 1:1 scale spatial immersion + immutable preservation.
                </div>

                <button
                  type="button"
                  onClick={() => {
                    if (activeTab === 'preservation') {
                      openPreserveModal('story');
                    } else if (activeTab === 'time') {
                      window.location.href = '#/time-machine';
                    } else {
                      window.location.href = '#/monuments';
                    }
                  }}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#C85A32] to-[#E5B842] text-[#0C0D14] font-bold text-xs flex items-center justify-center gap-1.5 hover:brightness-110 active:scale-95 transition-all shadow"
                >
                  <span>{activeData.demoAction}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
