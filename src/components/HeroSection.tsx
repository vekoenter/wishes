"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Sparkles, Heart, Feather, Cake } from "lucide-react";
import { birthdayConfig } from "@/config/birthday";

export default function HeroSection() {
  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6 pt-28 pb-20 text-center"
    >
      {/* Background warm candlelit ambient lighting */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] md:h-[800px] md:w-[800px] rounded-full bg-gradient-to-tr from-[#2C0A1E]/35 via-[#5C122D]/20 to-[#F5CE85]/12 blur-[160px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-4xl space-y-7 md:space-y-9">
        {/* Date Sub-badge: 13th November */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="inline-flex items-center gap-2.5 rounded-full border border-[#F5CE85]/40 bg-[#140711]/90 px-5 py-2 shadow-[0_0_30px_rgba(245,206,133,0.18)] backdrop-blur-xl"
        >
          <Sparkles className="h-4 w-4 text-[#F5CE85] animate-pulse" />
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#F5CE85] font-semibold">
            13th November • To My Gorgeous Girlfriend
          </span>
          <Heart className="h-3.5 w-3.5 text-[#BE185D] fill-[#BE185D]" />
        </motion.div>

        {/* Grand Name Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.25 }}
          className="space-y-4"
        >
          <p className="font-sans text-xs sm:text-sm font-light tracking-[0.4em] uppercase text-[#D98C9F]">
            Happy Birthday To The Girl Who Has My Whole Heart
          </p>
          <h1 className="font-serif text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-light tracking-tight text-[#FFF9F2] leading-[0.98]">
            <span className="relative inline-block text-[#F5CE85] text-glow-gold">
              Deepika
            </span>
          </h1>
        </motion.div>

        {/* Cozy Heartfelt Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45 }}
          className="space-y-2 max-w-2xl mx-auto"
        >
          <p className="font-serif text-xl sm:text-2xl md:text-3xl italic font-light text-[#FFF9F2]/90 leading-relaxed">
            &ldquo;Being your boyfriend is the greatest happiness of my life. You make every day feel like pure magic.&rdquo;
          </p>
          <p className="font-serif text-sm sm:text-base italic text-[#F5CE85]/80">
            Happy Birthday, Baby • November 13th
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          <button
            onClick={() => handleScrollToSection("wish")}
            type="button"
            className="group relative inline-flex items-center gap-2.5 rounded-full border-2 border-[#F5CE85] bg-gradient-to-r from-[#5C122D] via-[#2C0A1E] to-[#5C122D] px-8 py-3.5 text-xs font-sans tracking-[0.25em] uppercase text-[#FFF9F2] shadow-[0_0_35px_rgba(245,206,133,0.35)] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#F5CE85]" />
            <span>Read Birthday Wish</span>
          </button>

          <button
            onClick={() => handleScrollToSection("cake")}
            type="button"
            className="group inline-flex items-center gap-2.5 rounded-full border-2 border-[#F5CE85]/60 bg-[#140711]/90 px-8 py-3.5 text-xs font-sans tracking-[0.25em] uppercase text-[#F5CE85] shadow-[0_0_25px_rgba(245,206,133,0.2)] backdrop-blur-md transition-all duration-300 hover:border-[#F5CE85] hover:bg-[#2C0A1E] hover:scale-105"
          >
            <Cake className="h-3.5 w-3.5 text-[#F5CE85]" />
            <span>Birthday Cake & Wish</span>
          </button>

          <button
            onClick={() => handleScrollToSection("letter")}
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-transparent px-7 py-3.5 text-xs font-sans tracking-[0.2em] uppercase text-[#B5A8AF] transition-all duration-300 hover:border-white/30 hover:text-[#FFF9F2]"
          >
            <Feather className="h-3.5 w-3.5" />
            <span>My Letter</span>
          </button>
        </motion.div>
      </div>

      {/* Elegant Scroll Down Prompt */}
      <motion.button
        onClick={() => handleScrollToSection("wish")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#B5A8AF] transition-colors hover:text-[#F5CE85]"
        aria-label="Scroll down to birthday wish"
      >
        <span className="font-sans text-[10px] uppercase tracking-[0.35em] text-[#F5CE85]/70">
          Scroll to explore
        </span>
        <ChevronDown className="h-4 w-4 animate-bounce text-[#F5CE85]" />
      </motion.button>
    </section>
  );
}
