import React from 'react';
import {
  Award,
  Sparkles,
  HeartHandshake,
  Clock,
  Download,
  Share2,
  PlusCircle,
  MapPin,
  CheckCircle2
} from 'lucide-react';
import { useHeritage } from '../context/HeritageContext';
import { ADOPTABLE_HERITAGE_LIST } from '../data/adoptionData';

export const ProfileDashboardPage: React.FC = () => {
  const {
    userPoints,
    userLevel,
    userLevelNumber,
    pointsHistory,
    adoptedHeritageIds,
    userPreservedItems,
    openPreserveModal,
    showToast
  } = useHeritage();

  // Adopted items lookup
  const adoptedItems = ADOPTABLE_HERITAGE_LIST.filter(item =>
    adoptedHeritageIds.includes(item.id)
  );

  const nextLevelThreshold = userPoints < 600 ? 600 : userPoints < 1000 ? 1000 : 2000;
  const levelProgress = Math.min(100, Math.round((userPoints / nextLevelThreshold) * 100));

  const handleDownloadCertificate = () => {
    showToast('Digital Heritage Certificate exported to downloads (simulated)!', 'success');
  };

  const handleShareProfile = () => {
    showToast('Guardian Profile link copied to clipboard!', 'success');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 pb-24">
      {/* Profile Header Hero */}
      <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#181B2A] via-[#12141F] to-[#0C0D14] border border-[#D4AF37]/40 shadow-2xl space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&q=80"
                alt="Guardian"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-[#E5B842] shadow-xl"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-[#E5B842] text-[#0C0D14] flex items-center justify-center font-black text-xs shadow-md">
                L{userLevelNumber}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#D4AF37]/20 text-[#E5B842] border border-[#D4AF37]/40">
                  Verified Identity
                </span>
                <span className="text-xs text-[#A3A8B8] flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#E5B842]" />
                  India
                </span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-serif font-bold text-[#FBF9F5] mt-1">
                Culture Guardian
              </h1>
              <p className="text-xs sm:text-sm text-[#E5B842] font-semibold">{userLevel}</p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleDownloadCertificate}
              className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-bold text-[#FBF9F5] border border-white/10 flex items-center gap-2 transition-all"
            >
              <Download className="w-4 h-4 text-[#E5B842]" />
              <span>Export Certificate</span>
            </button>

            <button
              type="button"
              onClick={handleShareProfile}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-[#FBF9F5] border border-white/10 transition-all"
              title="Share Guardian Profile"
            >
              <Share2 className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => openPreserveModal('story')}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#C85A32] to-[#E5B842] text-[#0C0D14] font-bold text-xs flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all shadow-md"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Preserve New (+100)</span>
            </button>
          </div>
        </div>

        {/* Level Progression Progress Bar */}
        <div className="p-4 rounded-2xl bg-[#0C0D14] border border-white/5 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-[#C5C8D4]">
              Progress to Next Guardian Rank ({userPoints} / {nextLevelThreshold} PTS):
            </span>
            <span className="text-[#E5B842] font-bold font-mono">{levelProgress}%</span>
          </div>
          <div className="w-full h-2.5 rounded-full bg-white/5 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#C85A32] via-[#E5B842] to-[#64D2B1] rounded-full transition-all duration-700"
              style={{ width: `${levelProgress}%` }}
            />
          </div>
        </div>
      </div>

      {/* 2-Column Dashboard Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left 7 Columns: Preserved Heritage Tokens & Adopted Traditions */}
        <div className="lg:col-span-7 space-y-8">
          {/* Section 1: Preserved Digital Heritage Tokens */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-serif font-bold text-[#FBF9F5] flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#E5B842]" />
                <span>Your Minted Heritage Tokens ({userPreservedItems.length})</span>
              </h3>
              <button
                type="button"
                onClick={() => openPreserveModal('story')}
                className="text-xs font-bold text-[#E5B842] hover:underline"
              >
                + Mint Another
              </button>
            </div>

            <div className="space-y-4">
              {userPreservedItems.map(item => (
                <div
                  key={item.id}
                  className="p-5 rounded-2xl bg-[#12141F] border border-[#D4AF37]/40 shadow-xl space-y-3 relative overflow-hidden"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#D4AF37]/20 text-[#E5B842] font-mono font-bold text-[10px] uppercase">
                      TOKEN #{item.id.toUpperCase()}
                    </span>
                    <span className="text-[#8E92A4] text-[11px]">{item.timestamp}</span>
                  </div>

                  <h4 className="text-lg font-serif font-bold text-[#FBF9F5]">
                    {item.title}
                  </h4>

                  <div className="p-3 rounded-xl bg-[#0C0D14] border border-white/5 text-xs text-[#C5C8D4] leading-relaxed italic">
                    &ldquo;{item.content}&rdquo;
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-[#A3A8B8] pt-1">
                    <div className="flex items-center gap-1 text-[#E5B842]">
                      <Award className="w-4 h-4" />
                      <span>{item.badgeEarned || 'Oral Archivist Emblem'}</span>
                    </div>
                    <span>Category: {item.heritageCategory}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Adopted Traditions */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold text-[#FBF9F5] flex items-center gap-2">
              <HeartHandshake className="w-5 h-5 text-[#64D2B1]" />
              <span>Active Adopted Traditions ({adoptedItems.length})</span>
            </h3>

            {adoptedItems.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {adoptedItems.map(item => (
                  <div
                    key={item.id}
                    className="p-4 rounded-2xl bg-[#12141F] border border-white/10 shadow-lg space-y-2.5"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[10px] font-bold uppercase text-[#E5B842]">
                        {item.state}
                      </span>
                      <span className="text-[10px] font-bold text-rose-400">
                        {item.urgency}
                      </span>
                    </div>
                    <h4 className="text-sm font-serif font-bold text-[#FBF9F5]">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-[#A3A8B8] line-clamp-2">
                      {item.summary}
                    </p>
                    <div className="text-[11px] text-[#64D2B1] font-semibold flex items-center gap-1 pt-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Guardian Active</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-6 text-center rounded-2xl bg-[#12141F] border border-white/10 text-xs text-[#8E92A4]">
                You have not adopted any traditions yet. Visit the Adopt Heritage page to pledge stewardship.
              </div>
            )}
          </div>
        </div>

        {/* Right 5 Columns: Points Ledger & Level Progression Rules */}
        <div className="lg:col-span-5 space-y-8">
          {/* Points Ledger Activity Log */}
          <div className="p-6 rounded-3xl bg-[#0F111A] border border-[#D4AF37]/30 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-serif font-bold text-[#FBF9F5] flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#E5B842]" />
                <span>Preservation Points Ledger</span>
              </h3>
              <span className="text-xs font-mono font-bold text-[#E5B842]">
                {userPoints} PTS
              </span>
            </div>

            <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
              {pointsHistory.map(entry => (
                <div
                  key={entry.id}
                  className="p-3 rounded-xl bg-[#0C0D14] border border-white/5 flex items-center justify-between gap-3 text-xs"
                >
                  <div>
                    <div className="font-medium text-[#FBF9F5]">{entry.reason}</div>
                    <div className="text-[10px] text-[#8E92A4]">{entry.timestamp}</div>
                  </div>
                  <span className="font-mono font-bold text-[#E5B842] shrink-0">
                    +{entry.points} PTS
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Level Ranks Reference */}
          <div className="p-6 rounded-3xl bg-[#0F111A] border border-white/10 shadow-xl space-y-3 text-xs">
            <h4 className="font-bold uppercase tracking-wider text-[#C5C8D4] text-xs">
              Guardian Ranks & Badges:
            </h4>
            <ul className="space-y-2 text-[#A3A8B8]">
              <li className="flex justify-between py-1 border-b border-white/5">
                <span>Level 1: Heritage Scout</span>
                <span className="font-mono text-[#8E92A4]">0 - 99 PTS</span>
              </li>
              <li className="flex justify-between py-1 border-b border-white/5">
                <span>Level 2: Apprentice Archivist</span>
                <span className="font-mono text-[#8E92A4]">100 - 249 PTS</span>
              </li>
              <li className="flex justify-between py-1 border-b border-white/5">
                <span>Level 3: Tradition Custodian</span>
                <span className="font-mono text-[#8E92A4]">250 - 399 PTS</span>
              </li>
              <li className="flex justify-between py-1 border-b border-white/5 text-[#E5B842] font-semibold">
                <span>Level 4: Culture Guardian (Current)</span>
                <span className="font-mono">400 - 599 PTS</span>
              </li>
              <li className="flex justify-between py-1 border-b border-white/5">
                <span>Level 5: Desert & Hill Sentinel</span>
                <span className="font-mono text-[#8E92A4]">600 - 999 PTS</span>
              </li>
              <li className="flex justify-between py-1">
                <span>Level 6: Master Chronicler</span>
                <span className="font-mono text-[#8E92A4]">1,000+ PTS</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
