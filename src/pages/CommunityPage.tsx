import React, { useState } from 'react';
import {
  Users,
  Trophy,
  Target,
  ArrowRight,
  PlusCircle,
  MapPin
} from 'lucide-react';
import { useHeritage } from '../context/HeritageContext';
import {
  LEADERBOARD_USERS,
  COMMUNITY_QUESTS,
  type CommunityQuest
} from '../data/communityData';

export const CommunityPage: React.FC = () => {
  const { userPoints, userLevel, openPreserveModal, addPoints, showToast } = useHeritage();
  const [quests, setQuests] = useState<CommunityQuest[]>(COMMUNITY_QUESTS);

  // Compute dynamic leaderboard including the user's current points
  const sortedLeaderboard = [...LEADERBOARD_USERS]
    .map(u => {
      if (u.id === 'user-you') {
        return { ...u, points: userPoints, level: `${userLevel} (Lvl 4)` };
      }
      return u;
    })
    .sort((a, b) => b.points - a.points)
    .map((u, idx) => ({ ...u, rank: idx + 1 }));

  const handleJoinQuest = (quest: CommunityQuest) => {
    setQuests(prev =>
      prev.map(q =>
        q.id === quest.id
          ? {
              ...q,
              currentProgress: Math.min(q.targetProgress, q.currentProgress + 1),
              participants: q.participants + 1
            }
          : q
      )
    );
    addPoints(quest.pointsReward, `Contributed to Quest: "${quest.title}"`);
    showToast(`Joined ${quest.title}! +${quest.pointsReward} PTS Awarded!`, 'success');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 pb-24">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#E5B842] text-xs font-semibold uppercase tracking-wider">
          <Users className="w-4 h-4" />
          <span>Collaborative Preservation Guilds</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#FBF9F5]">
          Culture Preservers Leaderboard
        </h1>
        <p className="text-xs sm:text-sm text-[#A3A8B8] leading-relaxed">
          Preservation is a collective act. Join community quests to crowdsource endangered ragas, heirloom recipes, and motif blueprints alongside thousands of guardians across India.
        </p>
      </div>

      {/* Active Quests & Bounties Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-serif font-bold text-[#FBF9F5] flex items-center gap-2">
            <Target className="w-5 h-5 text-[#E5B842]" />
            <span>Active Community Quests</span>
          </h3>
          <span className="text-xs text-[#E5B842] font-semibold">
            Earn Bonus Badges & Points
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quests.map(quest => {
            const progress = Math.round((quest.currentProgress / quest.targetProgress) * 100);
            return (
              <div
                key={quest.id}
                className="p-6 rounded-3xl bg-[#12141F] border border-white/10 hover:border-[#D4AF37]/40 shadow-xl space-y-4 flex flex-col justify-between transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#0C0D14] text-[#E5B842] border border-[#D4AF37]/30">
                      {quest.category}
                    </span>
                    <span className="text-xs text-rose-400 font-mono font-bold">
                      {quest.deadline}
                    </span>
                  </div>

                  <h4 className="text-lg font-serif font-bold text-[#FBF9F5]">
                    {quest.title}
                  </h4>

                  <p className="text-xs text-[#A3A8B8] leading-relaxed">
                    {quest.description}
                  </p>

                  <div className="space-y-1.5 pt-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#C5C8D4]">Crowdsourced Progress:</span>
                      <span className="font-bold text-[#E5B842] font-mono">
                        {quest.currentProgress}/{quest.targetProgress} ({progress}%)
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#0C0D14] overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#C85A32] to-[#E5B842] rounded-full transition-all duration-500"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-3 border-t border-white/5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#8E92A4]">Badge: {quest.rewardBadge}</span>
                    <span className="text-[#E5B842] font-bold font-mono">
                      +{quest.pointsReward} PTS
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleJoinQuest(quest)}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#C85A32] to-[#E5B842] text-[#0C0D14] font-bold text-xs flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all shadow"
                  >
                    <span>Contribute to Quest</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Community Leaderboard Table */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#0F111A] border border-[#D4AF37]/30 shadow-2xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E5B842] mb-1">
              <Trophy className="w-4 h-4" />
              <span>National Preserver Rankings</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#FBF9F5]">
              Culture Guardian Standings
            </h3>
          </div>

          <button
            type="button"
            onClick={() => openPreserveModal('story')}
            className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-bold text-[#FBF9F5] border border-white/10 flex items-center gap-2"
          >
            <PlusCircle className="w-4 h-4 text-[#E5B842]" />
            <span>Preserve Memory to Climb Rank</span>
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-[11px] uppercase tracking-wider text-[#8E92A4]">
                <th className="py-3 px-4">Rank</th>
                <th className="py-3 px-4">Culture Guardian</th>
                <th className="py-3 px-4 hidden md:table-cell">Location</th>
                <th className="py-3 px-4 hidden sm:table-cell">Adopted</th>
                <th className="py-3 px-4 hidden lg:table-cell">Badge</th>
                <th className="py-3 px-4 text-right">Points</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-xs">
              {sortedLeaderboard.map(user => {
                const isUser = user.id === 'user-you';
                return (
                  <tr
                    key={user.id}
                    className={`transition-colors ${
                      isUser
                        ? 'bg-[#D4AF37]/10 font-semibold'
                        : 'hover:bg-white/5'
                    }`}
                  >
                    {/* Rank */}
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-2">
                        {user.rank === 1 ? (
                          <span className="w-6 h-6 rounded-full bg-amber-400 text-[#0C0D14] flex items-center justify-center font-bold text-xs">
                            1
                          </span>
                        ) : user.rank === 2 ? (
                          <span className="w-6 h-6 rounded-full bg-slate-300 text-[#0C0D14] flex items-center justify-center font-bold text-xs">
                            2
                          </span>
                        ) : user.rank === 3 ? (
                          <span className="w-6 h-6 rounded-full bg-amber-700 text-white flex items-center justify-center font-bold text-xs">
                            3
                          </span>
                        ) : (
                          <span className="font-mono text-[#8E92A4] font-bold px-1.5">
                            #{user.rank}
                          </span>
                        )}
                      </div>
                    </td>

                    {/* User Profile */}
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className={`w-9 h-9 rounded-xl object-cover border ${
                            isUser ? 'border-[#E5B842] ring-2 ring-[#E5B842]/50' : 'border-white/10'
                          }`}
                        />
                        <div>
                          <div className="font-bold text-[#FBF9F5] flex items-center gap-2">
                            <span>{user.name}</span>
                            {isUser && (
                              <span className="px-1.5 py-0.2 rounded text-[9px] bg-[#E5B842] text-[#0C0D14] font-black uppercase">
                                You
                              </span>
                            )}
                          </div>
                          <div className="text-[10px] text-[#A3A8B8]">{user.level}</div>
                        </div>
                      </div>
                    </td>

                    {/* Location */}
                    <td className="py-3.5 px-4 text-[#C5C8D4] hidden md:table-cell">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#E5B842]" />
                        <span>{user.location}</span>
                      </div>
                    </td>

                    {/* Adopted Count */}
                    <td className="py-3.5 px-4 text-[#C5C8D4] hidden sm:table-cell">
                      {user.adoptedCount} Traditions
                    </td>

                    {/* Badge */}
                    <td className="py-3.5 px-4 hidden lg:table-cell">
                      <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] text-[#E5B842] font-semibold">
                        {user.badge}
                      </span>
                    </td>

                    {/* Points */}
                    <td className="py-3.5 px-4 text-right">
                      <span className="text-sm font-serif font-bold text-[#E5B842] font-mono">
                        {user.points.toLocaleString()} PTS
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
