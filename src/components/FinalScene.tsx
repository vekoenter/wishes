"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Heart, RotateCcw, Music } from "lucide-react";
import { birthdayConfig } from "@/config/birthday";

interface FinalSceneProps {
  onReplayStory: () => void;
}

export default function FinalScene({ onReplayStory }: FinalSceneProps) {
  const { finalScene } = birthdayConfig;

  return (
    <footer className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#070509] px-6 py-28 text-center">
      {/* Cinematic Midnight & Deep Wine Ambient Glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#5C122D]/40 via-[#2C0A1E]/30 to-[#070509]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-1/4 h-[550px] w-[550px] rounded-full bg-[#F5CE85]/15 blur-[160px] animate-pulse-glow"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-4xl space-y-10">
        {/* Subtle Constellation / Star Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#F5CE85]/40 bg-[#140711]/80 shadow-[0_0_35px_rgba(245,206,133,0.3)]"
        >
          <Sparkles className="h-7 w-7 text-[#F5CE85] animate-pulse" />
        </motion.div>

        {/* Closing Grand Typography Title */}
        <div className="space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.1 }}
            className="font-serif text-5xl sm:text-7xl md:text-8xl font-light text-[#FFF9F2] tracking-tight leading-tight"
          >
            Happy Birthday, <br />
            <span className="italic font-normal text-[#F5CE85] text-glow-gold">
              Deepika.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-serif text-lg sm:text-2xl italic font-light text-[#FFF9F2]/85 max-w-2xl mx-auto leading-relaxed"
          >
            &ldquo;{finalScene.line1}&rdquo;
          </motion.p>
        </div>

        {/* Song Echo & Blessing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-4"
        >
          <div className="inline-flex items-center gap-2 text-sm text-[#F5CE85] font-serif italic text-glow-gold">
            <Music className="h-4 w-4" />
            <span>{finalScene.quote}</span>
          </div>

          <div className="pt-4 flex flex-col items-center justify-center space-y-2">
            <span className="font-sans text-xs tracking-[0.35em] uppercase text-[#D98C9F]">
              {finalScene.madeWithLove}
            </span>
            <span className="font-handwriting text-3xl sm:text-4xl text-[#F5CE85] tracking-wider text-glow-gold">
              {finalScene.signature}
            </span>
          </div>
        </motion.div>

        {/* Relive Our Story Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="pt-6"
        >
          <button
            onClick={onReplayStory}
            type="button"
            className="group relative inline-flex items-center gap-3 rounded-full border-2 border-[#F5CE85]/50 bg-gradient-to-r from-[#140711] via-[#2C0A1E] to-[#140711] px-9 py-4 text-xs font-sans tracking-[0.25em] uppercase text-[#FFF9F2] shadow-[0_0_40px_rgba(245,206,133,0.25)] transition-all duration-500 hover:border-[#F5CE85] hover:shadow-[0_0_60px_rgba(245,206,133,0.6)] hover:scale-105 active:scale-95"
          >
            <RotateCcw className="h-4 w-4 text-[#F5CE85] transition-transform duration-500 group-hover:-rotate-90" />
            <span>{finalScene.replayButtonText}</span>
          </button>
        </motion.div>
      </div>

      {/* Footer Colophon */}
      <div className="absolute bottom-6 left-0 right-0 text-center">
        <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#B5A8AF]/40 flex items-center justify-center gap-2">
          <span>An Eternal Digital Palace</span>
          <span>•</span>
          <span>Dil Diyan Gallan</span>
          <span>•</span>
          <span>Forever & Always</span>
        </p>
      </div>
    </footer>
  );
}
