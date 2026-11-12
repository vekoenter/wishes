"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Volume2,
  VolumeX,
  Play,
  Pause,
} from "lucide-react";
import { birthdayConfig } from "@/config/birthday";

interface AudioPlayerProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
  floating?: boolean;
}

export default function AudioPlayer({
  isPlaying,
  onTogglePlay,
}: AudioPlayerProps) {
  const [volume, setVolume] = useState<number>(0.75);
  const [showVolumeSlider, setShowVolumeSlider] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Autoplay and gesture unlock handling
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;

    const startAudio = () => {
      if (isPlaying && audio.paused) {
        audio.play().catch((err) => {
          console.log("Audio autoplay waiting for user interaction:", err);
        });
      }
    };

    if (isPlaying) {
      startAudio();
    } else {
      audio.pause();
    }

    // If autoplay was blocked by browser policy, play automatically on first user gesture anywhere
    const handleFirstGesture = () => {
      if (audio.paused && isPlaying) {
        audio.play().catch(() => {});
      }
    };

    window.addEventListener("pointerdown", handleFirstGesture, { once: true });
    window.addEventListener("click", handleFirstGesture, { once: true });
    window.addEventListener("touchstart", handleFirstGesture, { once: true });
    window.addEventListener("keydown", handleFirstGesture, { once: true });

    return () => {
      window.removeEventListener("pointerdown", handleFirstGesture);
      window.removeEventListener("click", handleFirstGesture);
      window.removeEventListener("touchstart", handleFirstGesture);
      window.removeEventListener("keydown", handleFirstGesture);
    };
  }, [isPlaying, volume]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  return (
    <>
      <audio
        ref={audioRef}
        src={birthdayConfig.audio.audioSrc}
        loop
        preload="auto"
      />

      {/* Kept exclusively on bottom right */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 select-none">
        {/* Volume slider drawer */}
        {showVolumeSlider && (
          <div className="flex items-center gap-2 rounded-full border border-[#F5CE85]/25 bg-[#140711]/95 px-3 py-2 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-right-2">
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="h-1 w-16 cursor-pointer appearance-none rounded-lg bg-[#2C0A1E] accent-[#F5CE85]"
              aria-label="Volume level"
            />
            <span className="text-[10px] text-[#F5CE85] font-mono">
              {Math.round(volume * 100)}%
            </span>
          </div>
        )}

        {/* Minimal Cozy Floating Capsule */}
        <div className="flex items-center gap-1.5 rounded-full border border-[#F5CE85]/35 bg-gradient-to-r from-[#140711]/95 via-[#2C0A1E]/90 to-[#140711]/95 p-1.5 shadow-[0_8px_35px_rgba(0,0,0,0.85)] backdrop-blur-2xl transition-all duration-300 hover:border-[#F5CE85]/70">
          <button
            onClick={onTogglePlay}
            type="button"
            className="group relative flex h-10 items-center gap-2.5 rounded-full bg-[#140711]/85 px-3.5 text-xs text-[#FFF9F2] transition-all duration-300 hover:bg-[#2C0A1E]"
            aria-label={isPlaying ? "Pause Dil Diyan Gallan" : "Play Dil Diyan Gallan"}
          >
            {isPlaying ? (
              <Pause className="h-3.5 w-3.5 text-[#F5CE85]" />
            ) : (
              <Play className="h-3.5 w-3.5 text-[#F5CE85] fill-[#F5CE85]" />
            )}

            <div className="hidden flex-col text-left sm:flex pr-1">
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#D98C9F] font-sans">
                {isPlaying ? "Now Playing" : "Tap To Play"}
              </span>
              <span className="max-w-[130px] truncate font-serif text-xs font-medium text-[#FFF9F2]">
                {birthdayConfig.audio.trackTitle}
              </span>
            </div>

            {/* Equalizer Bars */}
            <div className="flex h-3.5 items-end gap-[2px]">
              <span
                className={`w-[2px] rounded-full bg-[#F5CE85] transition-all ${
                  isPlaying ? "h-3.5 animate-pulse" : "h-1 bg-[#B5A8AF]/40"
                }`}
              />
              <span
                className={`w-[2px] rounded-full bg-[#F5CE85] transition-all ${
                  isPlaying ? "h-2 animate-bounce" : "h-1 bg-[#B5A8AF]/40"
                }`}
              />
              <span
                className={`w-[2px] rounded-full bg-[#F5CE85] transition-all ${
                  isPlaying ? "h-3 animate-pulse" : "h-1 bg-[#B5A8AF]/40"
                }`}
              />
            </div>
          </button>

          {/* Volume toggle */}
          <button
            onClick={() => setShowVolumeSlider(!showVolumeSlider)}
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-full text-[#B5A8AF] transition-colors hover:bg-[#2C0A1E] hover:text-[#F5CE85]"
            aria-label="Toggle volume slider"
          >
            {volume === 0 || !isPlaying ? (
              <VolumeX className="h-3.5 w-3.5" />
            ) : (
              <Volume2 className="h-3.5 w-3.5" />
            )}
          </button>
        </div>
      </div>
    </>
  );
}
