"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart, Music, Cake, ChevronDown } from "lucide-react";
import confetti from "canvas-confetti";
import { birthdayConfig } from "@/config/birthday";

interface OpeningSequenceProps {
  onEnter: () => void;
  isAudioPlaying: boolean;
  onToggleAudio: () => void;
}

export default function OpeningSequence({
  onEnter,
  isAudioPlaying,
  onToggleAudio,
}: OpeningSequenceProps) {
  // isRevealed: false = initial standing quote "Some guys search their whole lives...",
  // ONLY changes when user scrolls (does NOT change on click or hover)
  const [isRevealed, setIsRevealed] = useState<boolean>(false);
  const [isExiting, setIsExiting] = useState<boolean>(false);
  const revealTimestampRef = useRef<number>(0);

  const triggerOpeningCelebration = () => {
    const colors = [
      "#F5CE85",
      "#E5B869",
      "#BE185D",
      "#FFF9F2",
      "#5C122D",
      "#D98C9F",
    ];

    confetti({
      particleCount: 65,
      spread: 90,
      origin: { y: 0.6 },
      colors,
      ticks: 240,
      scalar: 1.1,
    });

    setTimeout(() => {
      confetti({
        particleCount: 35,
        angle: 60,
        spread: 55,
        origin: { x: 0.1, y: 0.7 },
        colors,
      });
      confetti({
        particleCount: 35,
        angle: 120,
        spread: 55,
        origin: { x: 0.9, y: 0.7 },
        colors,
      });
    }, 280);
  };

  const handleEnterWorld = useCallback(() => {
    triggerOpeningCelebration();
    setIsExiting(true);
    if (!isAudioPlaying) {
      onToggleAudio();
    }
    setTimeout(() => {
      onEnter();
    }, 1100);
  }, [isAudioPlaying, onEnter, onToggleAudio]);

  const handleEnterButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleEnterWorld();
  };

  // Scroll detection: only scrolling triggers the reveal (click and hover are disabled)
  useEffect(() => {
    if (isExiting) return;

    let touchStartY = 0;

    const handleScrollTrigger = () => {
      if (!isRevealed) {
        setIsRevealed(true);
        revealTimestampRef.current = Date.now();
      } else if (Date.now() - revealTimestampRef.current > 700) {
        // Subsequent scroll smoothly opens the world
        handleEnterWorld();
      }
    };

    const handleWheel = (e: WheelEvent) => {
      // User scrolls down with mouse wheel / trackpad
      if (e.deltaY > 15) {
        handleScrollTrigger();
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const currentY = e.touches[0].clientY;
      // User swipes up (scrolling down on mobile)
      if (touchStartY - currentY > 30) {
        handleScrollTrigger();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "ArrowDown" ||
        e.key === "PageDown" ||
        e.key === " " ||
        e.key === "Enter"
      ) {
        handleScrollTrigger();
      }
    };

    const handleWindowScroll = () => {
      if (window.scrollY > 20) {
        handleScrollTrigger();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", handleWindowScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, [isRevealed, isExiting, handleEnterWorld]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="opening-overlay"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.04,
            filter: "blur(12px)",
            transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-[#070509] px-6 text-center select-none"
        >
          {/* Warm Candlelit Amber Lighting */}
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#2C0A1E]/60 via-[#140711]/80 to-[#070509]"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute h-[650px] w-[650px] rounded-full bg-[#5C122D]/20 blur-[150px] animate-pulse-glow"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute h-[400px] w-[400px] rounded-full bg-[#F5CE85]/10 blur-[130px] animate-pulse-glow"
            style={{ animationDelay: "2s" }}
            aria-hidden="true"
          />

          {/* Central Narrative */}
          <div className="relative z-10 mx-auto max-w-4xl flex flex-col items-center justify-center min-h-[480px]">
            <AnimatePresence mode="wait">
              {!isRevealed ? (
                /* STANDING STATE: "Some guys search their whole lives..."
                   Stands persistently until scrolled. Will NOT change on click or hover. */
                <motion.div
                  key="standing-quote"
                  initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -25, filter: "blur(8px)" }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  className="space-y-8 max-w-2xl px-4"
                >
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#F5CE85]/35 bg-[#140711]/90 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-[#D98C9F] shadow-lg backdrop-blur-md">
                    <Sparkles className="h-3.5 w-3.5 text-[#F5CE85]" />
                    <span>A Birthday Thought For Deepika</span>
                  </div>

                  <p className="font-serif text-3xl sm:text-4xl md:text-5xl italic font-light tracking-wide text-[#F5CE85] text-glow-gold leading-relaxed">
                    &ldquo;{birthdayConfig.opening.line1}&rdquo;
                  </p>

                  {/* Scroll Indicator */}
                  <div className="pt-8 flex flex-col items-center gap-3">
                    <div className="w-6 h-10 rounded-full border-2 border-[#F5CE85]/50 flex justify-center pt-2 shadow-[0_0_20px_rgba(245,206,133,0.35)] bg-[#140711]/90">
                      <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.6,
                          ease: "easeInOut",
                        }}
                        className="w-1.5 h-2.5 rounded-full bg-[#F5CE85] shadow-[0_0_8px_#F5CE85]"
                      />
                    </div>
                    <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-[#F5CE85]/90 font-medium">
                      Scroll down to reveal ♡
                    </span>
                  </div>
                </motion.div>
              ) : (
                /* REVEALED STATE: Unlocked by scrolling */
                <motion.div
                  key="main-portal-title"
                  initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center space-y-6 md:space-y-8"
                >
                  {/* Ornate Gold Emblem */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1, duration: 0.8 }}
                    className="inline-flex items-center gap-3 rounded-full border border-[#F5CE85]/40 bg-gradient-to-r from-[#140711]/90 via-[#2C0A1E]/80 to-[#140711]/90 px-5 py-2 backdrop-blur-md shadow-[0_0_25px_rgba(245,206,133,0.2)]"
                  >
                    <Cake className="h-4 w-4 text-[#F5CE85]" />
                    <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-[#F5CE85] font-semibold">
                      November 13th Celebration
                    </span>
                    <Heart className="h-3.5 w-3.5 text-[#BE185D] fill-[#BE185D]" />
                  </motion.div>

                  {/* Second Line Response */}
                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="font-serif text-xl sm:text-2xl md:text-3xl italic text-[#FFF9F2]/90 max-w-2xl font-light leading-relaxed"
                  >
                    &ldquo;{birthdayConfig.opening.line2}&rdquo;
                  </motion.p>

                  <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-[#FFF9F2] leading-[1.08]">
                    Happy Birthday, <br />
                    <span className="italic font-normal text-[#F5CE85] text-glow-gold">
                      {birthdayConfig.recipientName}.
                    </span>
                  </h1>

                  <p className="font-serif text-base sm:text-lg md:text-xl text-[#FFF9F2]/80 max-w-xl font-light italic leading-relaxed">
                    &ldquo;{birthdayConfig.opening.subtitle}&rdquo;
                  </p>

                  <div className="flex items-center gap-2 text-xs text-[#F5CE85]/90 tracking-wide font-sans">
                    <Music className="h-3.5 w-3.5 animate-pulse text-[#F5CE85]" />
                    <span>{birthdayConfig.opening.musicNotice}</span>
                  </div>

                  {/* Enter Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="pt-4 flex flex-col items-center gap-3"
                  >
                    <button
                      onClick={handleEnterButtonClick}
                      type="button"
                      className="group relative inline-flex items-center gap-3.5 overflow-hidden rounded-full border-2 border-[#F5CE85]/60 bg-gradient-to-r from-[#2C0A1E] via-[#5C122D] to-[#2C0A1E] px-10 py-4 font-sans text-sm tracking-[0.25em] uppercase text-[#FFF9F2] shadow-[0_0_50px_rgba(245,206,133,0.4)] transition-all duration-500 hover:border-[#F5CE85] hover:shadow-[0_0_80px_rgba(245,206,133,0.7)] hover:scale-105 active:scale-95 cursor-pointer"
                    >
                      <Sparkles className="h-4 w-4 text-[#F5CE85]" />
                      <span className="relative z-10 font-semibold tracking-[0.25em]">
                        {birthdayConfig.opening.enterButtonText}
                      </span>
                      <span
                        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#F5CE85]/35 to-transparent transition-transform duration-1000 group-hover:translate-x-full"
                        aria-hidden="true"
                      />
                    </button>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#B5A8AF]/60 flex items-center gap-1">
                      <ChevronDown className="h-3 w-3 animate-bounce" /> Or
                      scroll down to enter
                    </span>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom subtle indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center pointer-events-none">
            <p className="font-sans text-[11px] uppercase tracking-[0.35em] text-[#B5A8AF]/60">
              13th November • Dedicated To Deepika
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
