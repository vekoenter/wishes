"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, Feather } from "lucide-react";
import confetti from "canvas-confetti";
import { birthdayConfig } from "@/config/birthday";

export default function LoveLetter() {
  const { loveLetter } = birthdayConfig;
  const [sealTapped, setSealTapped] = useState<boolean>(false);

  const handleSealTap = () => {
    setSealTapped(true);
    // Subtle golden spark shower
    confetti({
      particleCount: 25,
      spread: 50,
      origin: { y: 0.5 },
      colors: ["#F5CE85", "#E5B869", "#D98C9F", "#FFF9F2"],
      ticks: 120,
    });
    setTimeout(() => setSealTapped(false), 2000);
  };

  return (
    <section
      id="letter"
      className="relative flex min-h-screen w-full items-center justify-center px-4 py-24 sm:px-6 md:py-32 overflow-hidden"
    >
      {/* Background radial atmosphere */}
      <div
        className="pointer-events-none absolute left-1/4 top-1/3 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-[#5C122D]/20 blur-[150px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-1/4 bottom-1/4 translate-x-1/2 h-[450px] w-[450px] rounded-full bg-[#F5CE85]/12 blur-[140px]"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-3xl">
        {/* Section Header */}
        <div className="mb-14 text-center space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#F5CE85]/35 bg-[#140711]/90 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-[#D98C9F]"
          >
            <Feather className="h-3.5 w-3.5 text-[#F5CE85]" />
            <span>{loveLetter.tagline}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-3 font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#FFF9F2]"
          >
            {loveLetter.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-2 font-serif text-sm italic tracking-widest uppercase text-[#F5CE85]/80"
          >
            {loveLetter.date}
          </motion.p>
        </div>

        {/* Imperial Velvet & Gold Decree Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl border-2 border-[#F5CE85]/35 bg-gradient-to-b from-[#140711]/95 via-[#2C0A1E]/80 to-[#070509]/95 p-8 sm:p-12 md:p-16 shadow-[0_25px_80px_rgba(0,0,0,0.95)] backdrop-blur-2xl"
        >
          {/* Ornate Gold Filigree Corners */}
          <div className="pointer-events-none absolute top-4 left-4 h-8 w-8 border-t-2 border-l-2 border-[#F5CE85]/50" />
          <div className="pointer-events-none absolute top-4 right-4 h-8 w-8 border-t-2 border-r-2 border-[#F5CE85]/50" />
          <div className="pointer-events-none absolute bottom-4 left-4 h-8 w-8 border-b-2 border-l-2 border-[#F5CE85]/50" />
          <div className="pointer-events-none absolute bottom-4 right-4 h-8 w-8 border-b-2 border-r-2 border-[#F5CE85]/50" />

          {/* Golden Tracery Border Line */}
          <div className="pointer-events-none absolute inset-2.5 rounded-[22px] border border-[#F5CE85]/15" />

          {/* Interactive Royal Wax Seal */}
          <div className="absolute top-6 right-6 z-20">
            <button
              onClick={handleSealTap}
              type="button"
              className={`relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full border-2 border-[#F5CE85] bg-gradient-to-tr from-[#5C122D] via-[#2C0A1E] to-[#BE185D] shadow-[0_0_25px_rgba(245,206,133,0.6)] transition-all duration-300 hover:scale-110 active:scale-95 ${
                sealTapped ? "scale-110 ring-4 ring-[#F5CE85]" : ""
              }`}
              title="Touch the Royal Wax Seal"
            >
              <span className="font-serif text-sm sm:text-base font-semibold italic text-[#F5CE85]">
                {loveLetter.waxSealText}
              </span>
              <div className="pointer-events-none absolute inset-0 rounded-full border border-white/20 animate-pulse" />
            </button>
          </div>

          {/* Salutation */}
          <div className="mb-8 pt-2">
            <motion.h3
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif text-2xl sm:text-3xl italic text-[#F5CE85] text-glow-gold"
            >
              {loveLetter.salutation}
            </motion.h3>
          </div>

          {/* Staggered Paragraphs */}
          <div className="space-y-6 text-[#FFF9F2]/90">
            {loveLetter.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.85, delay: index * 0.12 }}
                className="font-serif text-lg sm:text-xl font-light leading-relaxed tracking-wide sm:leading-loose text-[#FFF9F2]/90"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Closing & Handwritten Signature */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-[#F5CE85]/20 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6"
          >
            <div>
              <p className="font-serif text-base italic text-[#D98C9F]">
                {loveLetter.closing}
              </p>
              <p className="mt-2 font-handwriting text-3xl sm:text-4xl text-[#F5CE85] tracking-wider text-glow-gold">
                {loveLetter.signature}
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#B5A8AF]/70 font-sans tracking-widest uppercase">
              <Sparkles className="h-3 w-3 text-[#F5CE85]" />
              <span>Etched in Royal Devotion</span>
              <Heart className="h-3 w-3 text-[#BE185D] fill-[#BE185D]" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
