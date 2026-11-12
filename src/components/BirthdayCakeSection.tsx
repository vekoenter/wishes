"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart, Flame, RotateCcw, Cake } from "lucide-react";
import { birthdayConfig } from "@/config/birthday";

export default function BirthdayCakeSection() {
  const { cake } = birthdayConfig;
  const [candlesLit, setCandlesLit] = useState<boolean>(true);
  const [isWishRevealed, setIsWishRevealed] = useState<boolean>(false);
  const audioCtxRef = useRef<AudioContext | null>(null);

  if (!cake) return null;

  // Gentle acoustic celebration chime
  const playCozyChime = () => {
    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      if (!AudioCtx) return;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      // Warm acoustic chime arpeggio: C5, E5, G5, B5, C6
      const chord = [523.25, 659.25, 783.99, 987.77, 1046.5];
      chord.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.12);

        gain.gain.setValueAtTime(0.0001, ctx.currentTime + idx * 0.12);
        gain.gain.exponentialRampToValueAtTime(
          0.14,
          ctx.currentTime + idx * 0.12 + 0.05
        );
        gain.gain.exponentialRampToValueAtTime(
          0.0001,
          ctx.currentTime + idx * 0.12 + 1.8
        );

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + idx * 0.12);
        osc.stop(ctx.currentTime + idx * 0.12 + 2.0);
      });
    } catch {
      // Audio autoplay handled
    }
  };

  const handleBlowCandles = () => {
    setCandlesLit(false);
    setIsWishRevealed(true);
    playCozyChime();
  };

  const handleRelight = () => {
    setCandlesLit(true);
    setIsWishRevealed(false);
  };

  return (
    <section
      id="cake"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 py-24 sm:px-6 md:py-32 text-center"
    >
      {/* Warm candlelit atmospheric background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[650px] w-[650px] rounded-full bg-[#5C122D]/20 blur-[170px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-1/4 top-1/3 h-[450px] w-[450px] rounded-full bg-[#F5CE85]/12 blur-[150px]"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#F5CE85]/40 bg-[#140711]/90 px-5 py-2 text-xs uppercase tracking-[0.3em] text-[#D98C9F] shadow-lg backdrop-blur-xl"
          >
            <Cake className="h-4 w-4 text-[#F5CE85]" />
            <span>13th November • Birthday Cake Ceremony</span>
            <Sparkles className="h-3.5 w-3.5 text-[#F5CE85]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#FFF9F2]"
          >
            {cake.cakeTitle}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-base sm:text-lg italic text-[#B5A8AF] max-w-xl mx-auto"
          >
            &ldquo;{cake.cakeSubtitle}&rdquo;
          </motion.p>
        </div>

        {/* ============================================================
            ARTISANAL CAKE SHOWCASE WITH INTERACTIVE CANDLES
        ============================================================ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 25 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto overflow-hidden rounded-3xl border-2 border-[#F5CE85]/35 bg-gradient-to-b from-[#140711]/95 via-[#2C0A1E]/80 to-[#070509]/95 p-4 sm:p-6 md:p-8 shadow-[0_25px_90px_rgba(245,206,133,0.18)] backdrop-blur-2xl max-w-3xl"
        >
          {/* Filigree Corner Accents */}
          <div className="pointer-events-none absolute top-4 left-4 h-7 w-7 border-t-2 border-l-2 border-[#F5CE85]/40" />
          <div className="pointer-events-none absolute top-4 right-4 h-7 w-7 border-t-2 border-r-2 border-[#F5CE85]/40" />
          <div className="pointer-events-none absolute bottom-4 left-4 h-7 w-7 border-b-2 border-l-2 border-[#F5CE85]/40" />
          <div className="pointer-events-none absolute bottom-4 right-4 h-7 w-7 border-b-2 border-r-2 border-[#F5CE85]/40" />

          {/* Cake Image Box with Interactive Candle Overlay */}
          <div className="relative w-full h-[340px] sm:h-[450px] md:h-[520px] rounded-2xl overflow-hidden border border-[#F5CE85]/20 shadow-2xl">
            <Image
              src="/images/deepika-birthday-cake.jpg"
              alt="Deepika's Birthday Cake"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 80vw"
              className="object-cover"
            />

            {/* Dark Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/25 pointer-events-none" />

            {/* Interactive Candle Flame Overlay corresponding to the 4 candles in the image */}
            <div className="absolute top-[6%] left-1/2 -translate-x-1/2 flex items-center justify-center gap-3 sm:gap-4.5 z-20 pointer-events-none">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex flex-col items-center">
                  {candlesLit ? (
                    <div className="animate-flame">
                      <Flame className="h-6 w-6 sm:h-8 sm:w-8 text-[#F5CE85] fill-[#F5CE85] filter drop-shadow-[0_0_14px_#F5CE85]" />
                    </div>
                  ) : (
                    <div className="h-6 sm:h-8 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B5A8AF]/70 animate-ping" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Status Floating Pill */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#F5CE85]/40 bg-black/75 px-4 py-1.5 text-[11px] font-sans tracking-widest uppercase text-[#F5CE85] backdrop-blur-md shadow-lg">
                <Sparkles className="h-3.5 w-3.5 text-[#F5CE85]" />
                {candlesLit ? "Candles Lit • Make a Wish" : "Candles Blown • Wish Whispered ♡"}
              </span>
            </div>
          </div>

          {/* ============================================================
              REVEALED WISH & CELEBRATION MESSAGE
          ============================================================ */}
          <AnimatePresence>
            {isWishRevealed && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.7 }}
                className="mt-6 rounded-2xl border-2 border-[#F5CE85] bg-gradient-to-r from-[#5C122D]/75 via-[#2C0A1E]/85 to-[#5C122D]/75 p-6 sm:p-8 shadow-[0_0_50px_rgba(245,206,133,0.3)] backdrop-blur-md text-center"
              >
                <Heart className="h-6 w-6 text-[#BE185D] fill-[#BE185D] mx-auto mb-2 animate-pulse" />
                <h4 className="font-serif text-2xl sm:text-3xl md:text-4xl italic text-[#F5CE85] text-glow-gold">
                  {cake.revealedGreetingTitle}
                </h4>
                <p className="mt-3 font-serif text-base sm:text-lg text-[#FFF9F2]/90 max-w-lg mx-auto leading-relaxed">
                  {cake.revealedGreetingMessage}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Wishing Prompt */}
          <p className="font-serif text-base sm:text-lg italic text-[#F5CE85] text-glow-gold mt-6 mb-8 max-w-md mx-auto">
            {cake.wishingPrompt}
          </p>

          {/* Action Buttons: Only Blow The Candles (and Relight when blown) */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {candlesLit ? (
              <button
                onClick={handleBlowCandles}
                type="button"
                className="group relative inline-flex items-center gap-3 rounded-full border-2 border-[#F5CE85] bg-gradient-to-r from-[#5C122D] via-[#2C0A1E] to-[#5C122D] px-10 py-4 text-xs font-sans tracking-[0.25em] uppercase text-[#FFF9F2] shadow-[0_0_35px_rgba(245,206,133,0.4)] transition-all duration-300 hover:scale-105 hover:border-[#F5CE85] hover:shadow-[0_0_60px_rgba(245,206,133,0.6)] active:scale-95 cursor-pointer"
              >
                <Flame className="h-4 w-4 text-[#F5CE85] animate-pulse" />
                <span className="font-semibold tracking-[0.25em]">{cake.blowButtonText}</span>
              </button>
            ) : (
              <button
                onClick={handleRelight}
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-[#F5CE85]/50 bg-[#140711]/90 px-8 py-3.5 text-xs tracking-wider uppercase text-[#F5CE85] shadow-lg backdrop-blur-md transition-all duration-300 hover:border-[#F5CE85] hover:bg-[#2C0A1E] hover:scale-105 active:scale-95 cursor-pointer"
              >
                <RotateCcw className="h-3.5 w-3.5 text-[#F5CE85]" />
                <span>Relight The Candles 🕯️</span>
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
