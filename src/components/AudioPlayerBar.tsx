import React, { useState, useEffect } from 'react';
import { Play, Pause, X, Radio } from 'lucide-react';
import { useHeritage } from '../context/HeritageContext';

export const AudioPlayerBar: React.FC = () => {
  const { activeAudio, togglePlayPauseAudio, stopAudio } = useHeritage();
  const [playbackSeconds, setPlaybackSeconds] = useState(0);

  useEffect(() => {
    let timer: any = null;
    if (activeAudio?.isPlaying) {
      timer = setInterval(() => {
        setPlaybackSeconds(prev => (prev + 1) % 135);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [activeAudio?.isPlaying]);

  if (!activeAudio) return null;

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="fixed bottom-14 md:bottom-6 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 bg-[#12141F]/95 backdrop-blur-xl border border-[#D4AF37]/40 rounded-2xl p-3.5 shadow-2xl shadow-black/80 animate-in slide-in-from-bottom duration-300">
      <div className="flex items-center justify-between gap-3">
        {/* Animated Soundwave & Icon */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C85A32] to-[#D4AF37] flex items-center justify-center text-white shrink-0 shadow-md">
            <Radio className="w-5 h-5 animate-pulse text-[#FBF9F5]" />
          </div>

          <div className="overflow-hidden">
            <div className="flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF37]">
                Archival Soundfield
              </span>
            </div>
            <h4 className="text-xs font-bold text-[#FBF9F5] truncate max-w-[200px]">
              {activeAudio.title}
            </h4>
            <p className="text-[10px] text-[#A3A8B8] truncate max-w-[200px]">
              {activeAudio.subtitle}
            </p>
          </div>
        </div>

        {/* Audio Visualizer Bars */}
        <div className="hidden sm:flex items-end gap-1 h-5 px-2">
          {[40, 80, 60, 100, 50, 75, 90, 45].map((height, i) => (
            <div
              key={i}
              className={`w-1 bg-[#E5B842] rounded-full transition-all duration-300 ${
                activeAudio.isPlaying ? 'animate-bounce' : 'opacity-40'
              }`}
              style={{
                height: activeAudio.isPlaying ? `${height}%` : '20%',
                animationDelay: `${i * 0.15}s`
              }}
            />
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono text-[#E5B842] hidden sm:inline">
            {formatTime(playbackSeconds)} / {activeAudio.duration}
          </span>

          <button
            type="button"
            onClick={togglePlayPauseAudio}
            className="w-8 h-8 rounded-full bg-[#E5B842] hover:bg-[#F3C456] text-[#0C0D14] flex items-center justify-center transition-transform active:scale-95"
            aria-label={activeAudio.isPlaying ? 'Pause' : 'Play'}
          >
            {activeAudio.isPlaying ? (
              <Pause className="w-4 h-4 fill-current" />
            ) : (
              <Play className="w-4 h-4 fill-current ml-0.5" />
            )}
          </button>

          <button
            type="button"
            onClick={stopAudio}
            className="p-1.5 text-[#8E92A4] hover:text-[#FBF9F5] rounded-lg transition-colors"
            aria-label="Dismiss audio player"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
