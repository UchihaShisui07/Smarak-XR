import React from 'react';
import {
  HeartHandshake,
  CheckCircle,
  Circle,
  Award,
  ShieldCheck,
  Share2
} from 'lucide-react';
import { useHeritage } from '../context/HeritageContext';
import { ADOPTABLE_HERITAGE_LIST } from '../data/adoptionData';

export const AdoptHeritagePage: React.FC = () => {
  const {
    userPoints,
    userLevel,
    adoptedHeritageIds,
    toggleAdoptHeritage,
    isHeritageAdopted,
    completedTasks,
    toggleTaskComplete,
    showToast
  } = useHeritage();

  const handleShareBadge = (badgeName: string) => {
    showToast(`Shared "${badgeName}" Guardian Credential to clipboard!`, 'success');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 pb-24">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1A3026] border border-[#2D6A4F] text-[#64D2B1] text-xs font-semibold uppercase tracking-wider">
          <HeartHandshake className="w-4 h-4" />
          <span>Active Cultural Patronage & Preservation</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#FBF9F5]">
          Adopt a Disappearing Heritage
        </h1>
        <p className="text-xs sm:text-sm text-[#A3A8B8] leading-relaxed">
          Pledge your attention and action. Check off preservation tasks—listen to archives, share oral stories, and pledge artisan support—to earn verified Culture Guardian badges and level up your ranking.
        </p>
      </div>

      {/* User Guardian Stats Status Box */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-[#181B2A] via-[#12141F] to-[#0C0D14] border border-[#D4AF37]/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#C85A32] to-[#E5B842] flex items-center justify-center text-[#0C0D14] shadow-lg">
            <Award className="w-8 h-8 fill-current" />
          </div>
          <div>
            <div className="text-xs text-[#E5B842] font-semibold uppercase tracking-wider">
              Your Culture Guardian Profile
            </div>
            <h3 className="text-xl font-serif font-bold text-[#FBF9F5]">{userLevel}</h3>
            <p className="text-xs text-[#A3A8B8]">
              You have adopted{' '}
              <strong className="text-[#FBF9F5]">{adoptedHeritageIds.length}</strong> living traditions
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="text-right">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-[#E5B842]">
              {userPoints} <span className="text-xs font-normal text-[#A3A8B8]">PTS</span>
            </div>
            <div className="text-[11px] text-[#C5C8D4]">Available Preservation Score</div>
          </div>

          <button
            type="button"
            onClick={() => showToast('Guardian Certificate verified on decentralized ledger!', 'success')}
            className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-bold text-[#FBF9F5] border border-white/10 flex items-center gap-2 transition-all"
          >
            <ShieldCheck className="w-4 h-4 text-[#64D2B1]" />
            <span>Verify Credential</span>
          </button>
        </div>
      </div>

      {/* Adoptable Challenges List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {ADOPTABLE_HERITAGE_LIST.map(item => {
          const isAdopted = isHeritageAdopted(item.id);
          const tasksDone = item.tasks.filter(t => completedTasks[t.id]).length;
          const progressPercent = Math.round((tasksDone / item.tasks.length) * 100);

          return (
            <div
              key={item.id}
              className={`rounded-3xl border transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-2xl ${
                isAdopted
                  ? 'bg-[#12141F] border-[#D4AF37]/50 ring-1 ring-[#D4AF37]/30'
                  : 'bg-[#0F111A] border-white/10 hover:border-white/20'
              }`}
            >
              <div>
                {/* Header Banner */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12141F] via-[#12141F]/40 to-transparent" />

                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#0C0D14]/80 text-[#E5B842] border border-[#D4AF37]/30">
                      {item.category} • {item.state}
                    </span>

                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        item.urgency === 'Critical'
                          ? 'bg-rose-600 text-white'
                          : 'bg-amber-500 text-[#0C0D14]'
                      }`}
                    >
                      {item.urgency} Urgency
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                    <h3 className="text-xl font-serif font-bold text-[#FBF9F5]">
                      {item.name}
                    </h3>
                    <span className="text-xs text-[#E5B842] font-mono">
                      {item.guardianCount} Guardians
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 space-y-4">
                  <p className="text-xs text-[#C5C8D4] leading-relaxed">
                    {item.summary}
                  </p>

                  {/* Threat Alert */}
                  <div className="p-3 rounded-xl bg-[#0C0D14] border border-rose-500/20 text-xs text-[#A3A8B8]">
                    <strong className="text-rose-400">Threat Reality:</strong> {item.threatSummary}
                  </div>

                  {/* Task Progress Bar */}
                  <div className="space-y-1.5 pt-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-[#FBF9F5]">Preservation Quests:</span>
                      <span className="text-[#E5B842] font-bold font-mono">
                        {tasksDone}/{item.tasks.length} Completed ({progressPercent}%)
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#0C0D14] overflow-hidden border border-white/5">
                      <div
                        className="h-full bg-gradient-to-r from-[#C85A32] to-[#E5B842] rounded-full transition-all duration-500"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                  </div>

                  {/* Interactive Checklist Items */}
                  <div className="space-y-2 pt-2">
                    {item.tasks.map(task => {
                      const isTaskDone = !!completedTasks[task.id];
                      return (
                        <div
                          key={task.id}
                          onClick={() =>
                            toggleTaskComplete(task.id, task.points, task.title)
                          }
                          className={`p-3 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                            isTaskDone
                              ? 'bg-emerald-950/20 border-emerald-500/40 text-[#FBF9F5]'
                              : 'bg-[#0C0D14] border-white/5 hover:border-white/15 text-[#C5C8D4]'
                          }`}
                        >
                          <div className="mt-0.5">
                            {isTaskDone ? (
                              <CheckCircle className="w-4 h-4 text-emerald-400" />
                            ) : (
                              <Circle className="w-4 h-4 text-[#8E92A4]" />
                            )}
                          </div>

                          <div className="flex-1 text-xs">
                            <div className="flex items-center justify-between">
                              <span
                                className={`font-semibold ${
                                  isTaskDone ? 'line-through opacity-75 text-emerald-300' : ''
                                }`}
                              >
                                {task.title}
                              </span>
                              <span className="text-[10px] font-mono text-[#E5B842] font-bold">
                                +{task.points} PTS
                              </span>
                            </div>
                            <p className="text-[11px] text-[#8E92A4] mt-0.5">
                              {task.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Card Action Footer */}
              <div className="p-6 pt-0 border-t border-white/5 flex items-center justify-between gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => toggleAdoptHeritage(item.id, item.name)}
                  className={`flex-1 py-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 ${
                    isAdopted
                      ? 'bg-[#1A3026] text-[#64D2B1] border border-[#2D6A4F]'
                      : 'bg-gradient-to-r from-[#C85A32] to-[#E5B842] text-[#0C0D14] hover:brightness-110 shadow'
                  }`}
                >
                  <HeartHandshake className="w-4 h-4" />
                  <span>{isAdopted ? 'Active Guardian' : 'Adopt Challenge (+50 PTS)'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleShareBadge(item.badgeName)}
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-[#C5C8D4] hover:text-white border border-white/10 transition-colors"
                  title="Share Guardian Badge"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
