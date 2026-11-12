"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Disc3, Music, Play, Pause, Sparkles, Heart, Quote } from "lucide-react";
import { birthdayConfig } from "@/config/birthday";

interface DilDiyanGallanSectionProps {
  isAudioPlaying: boolean;
  onToggleAudio: () => void;
}

export default function DilDiyanGallanSection({
  isAudioPlaying,
  onToggleAudio,
}: DilDiyanGallanSectionProps) {
  const [activeLyricIndex, setActiveLyricIndex] = useState<number>(0);
  const lyrics = birthdayConfig.audio.lyrics || [];

  return (
    <section
      id="melody"
      className="relative min-h-screen w-full px-4 py-24 sm:px-6 md:py-32 overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[650px] w-[650px] rounded-full bg-[#5C122D]/20 blur-[170px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-1/4 top-1/3 h-[450px] w-[450px] rounded-full bg-[#F5CE85]/10 blur-[140px]"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#F5CE85]/35 bg-[#140711]/90 px-4 py-1.5 backdrop-blur-md"
          >
            <Music className="h-3.5 w-3.5 text-[#F5CE85]" />
            <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#F5CE85]">
              The Soundtrack of My Heart
            </span>
            <Heart className="h-3 w-3 text-[#BE185D] fill-[#BE185D]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#FFF9F2]"
          >
            Dil Diyan Gallan
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-base sm:text-lg italic text-[#B5A8AF] max-w-xl mx-auto"
          >
            &ldquo;A melody that speaks what words cannot—of devotion, longing, and eternal joy with you, Deepika.&rdquo;
          </motion.p>
        </div>

        {/* Exotic Turntable & Interactive Lyric Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Royal Gold Turntable / Vinyl Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-center text-center"
          >
            <div className="relative p-6 sm:p-8 rounded-3xl border border-[#F5CE85]/30 bg-gradient-to-b from-[#140711]/95 via-[#2C0A1E]/80 to-[#070509]/95 shadow-[0_20px_60px_rgba(0,0,0,0.9)] backdrop-blur-2xl">
              {/* Outer Golden Turntable Ring */}
              <div className="relative mx-auto flex h-60 w-60 sm:h-72 sm:w-72 items-center justify-center rounded-full border-4 border-[#F5CE85]/40 bg-[#070509] shadow-[0_0_50px_rgba(245,206,133,0.25)]">
                {/* Vinyl Grooves */}
                <div
                  className={`relative flex h-52 w-52 sm:h-64 sm:w-64 items-center justify-center rounded-full border border-neutral-800 bg-[radial-gradient(circle,_#1c1c1c_30%,_#0a0a0a_70%)] ${
                    isAudioPlaying ? "animate-spin-slow" : ""
                  }`}
                >
                  {/* Subtle Vinyl Grooves Lines */}
                  <div className="absolute inset-4 rounded-full border border-neutral-700/40 pointer-events-none" />
                  <div className="absolute inset-8 rounded-full border border-neutral-700/30 pointer-events-none" />
                  <div className="absolute inset-12 rounded-full border border-neutral-700/20 pointer-events-none" />

                  {/* Center Label (Deepika Gold Monogram) */}
                  <div className="relative flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-full border-2 border-[#F5CE85] bg-gradient-to-tr from-[#5C122D] via-[#2C0A1E] to-[#F5CE85]/20 shadow-md">
                    <div className="text-center">
                      <span className="font-serif text-lg sm:text-xl italic font-semibold text-[#F5CE85]">
                        D ♡ T
                      </span>
                      <span className="block text-[8px] uppercase tracking-widest text-[#FFF9F2]/70 font-sans mt-0.5">
                        Deepika
                      </span>
                    </div>
                  </div>
                </div>

                {/* Center Spindle */}
                <div className="absolute h-3 w-3 rounded-full bg-[#F5CE85] shadow-[0_0_10px_#F5CE85]" />
              </div>

              {/* Player Controls Bar */}
              <div className="mt-6 flex flex-col items-center gap-3">
                <button
                  onClick={onToggleAudio}
                  type="button"
                  className="inline-flex items-center gap-3 rounded-full border-2 border-[#F5CE85] bg-gradient-to-r from-[#5C122D] to-[#2C0A1E] px-8 py-3 text-xs font-sans tracking-[0.25em] uppercase text-[#FFF9F2] shadow-[0_0_30px_rgba(245,206,133,0.35)] transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  {isAudioPlaying ? (
                    <>
                      <Pause className="h-4 w-4 text-[#F5CE85]" />
                      <span>Pause Song</span>
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4 text-[#F5CE85] fill-[#F5CE85]" />
                      <span>Play Dil Diyan Gallan</span>
                    </>
                  )}
                </button>

                <p className="font-serif text-xs italic text-[#F5CE85]/80">
                  {isAudioPlaying ? "Playing in full fidelity" : "Click to immerse in music"}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Interactive Poetic Lyric Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-4"
          >
            <div className="rounded-3xl border border-[#F5CE85]/30 bg-gradient-to-b from-[#140711]/90 via-[#2C0A1E]/70 to-[#070509]/90 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#F5CE85]/20">
                <span className="font-serif text-lg text-[#F5CE85] italic flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  Verses That Belong To You
                </span>
                <span className="font-mono text-xs text-[#B5A8AF]">
                  0{activeLyricIndex + 1} / 0{lyrics.length}
                </span>
              </div>

              {/* Active Highlighted Verse */}
              <div className="min-h-[170px] flex flex-col justify-center space-y-4 p-5 rounded-2xl bg-[#070509]/60 border border-[#F5CE85]/15">
                <p className="font-serif text-2xl sm:text-3xl text-[#F5CE85] text-glow-gold leading-relaxed">
                  &ldquo;{lyrics[activeLyricIndex]?.original}&rdquo;
                </p>
                <p className="font-serif text-base sm:text-lg italic text-[#FFF9F2]/90">
                  {lyrics[activeLyricIndex]?.romanized}
                </p>
                <p className="font-sans text-xs sm:text-sm text-[#D98C9F] tracking-wide">
                  Translation: {lyrics[activeLyricIndex]?.translation}
                </p>
              </div>

              {/* Interactive Stanza Selector Dots */}
              <div className="mt-6 flex items-center justify-center gap-2 pt-2">
                {lyrics.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveLyricIndex(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeLyricIndex === i
                        ? "w-8 bg-[#F5CE85] shadow-[0_0_10px_#F5CE85]"
                        : "w-2.5 bg-[#F5CE85]/25 hover:bg-[#F5CE85]/60"
                    }`}
                    aria-label={`Select verse ${i + 1}`}
                  />
                ))}
              </div>

              {/* Dedicated Love Note */}
              <div className="mt-8 pt-6 border-t border-[#F5CE85]/15 flex items-start gap-3">
                <Quote className="h-5 w-5 text-[#F5CE85] flex-shrink-0 mt-0.5" />
                <p className="font-serif text-sm sm:text-base italic text-[#FFF9F2]/80 leading-relaxed">
                  &ldquo;Deepika, every word of this song feels like a whisper straight from my soul to yours. You are the poetry I never knew I could write.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
