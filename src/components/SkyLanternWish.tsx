"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart, Flame, RotateCcw } from "lucide-react";
import confetti from "canvas-confetti";
import { birthdayConfig } from "@/config/birthday";

export default function SkyLanternWish() {
  const wishConfig = birthdayConfig.skyLanternWish;
  const [isLanternReleased, setIsLanternReleased] = useState<boolean>(false);

  const triggerCelestialShower = () => {
    const colors = ["#F5CE85", "#E5B869", "#BE185D", "#FFF9F2", "#5C122D", "#D98C9F"];

    // Grand firework bursts
    confetti({
      particleCount: 80,
      spread: 100,
      origin: { y: 0.5 },
      colors,
      ticks: 250,
      scalar: 1.2,
    });

    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 75,
        spread: 70,
        origin: { x: 0.2, y: 0.6 },
        colors,
      });
      confetti({
        particleCount: 50,
        angle: 105,
        spread: 70,
        origin: { x: 0.8, y: 0.6 },
        colors,
      });
    }, 350);

    setTimeout(() => {
      confetti({
        particleCount: 60,
        spread: 120,
        origin: { y: 0.3 },
        colors,
        shapes: ["star"],
      });
    }, 700);
  };

  const handleReleaseLantern = () => {
    setIsLanternReleased(true);
    triggerCelestialShower();
  };

  const handleResetWish = () => {
    setIsLanternReleased(false);
  };

  if (!wishConfig) return null;

  return (
    <section
      id="wish"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#070509] via-[#140711] to-[#070509] px-6 py-28 md:py-36 text-center select-none"
    >
      {/* Celestial Night Sky Lighting */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#5C122D]/35 via-[#2C0A1E]/40 to-[#070509]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[750px] w-[750px] rounded-full bg-[#F5CE85]/12 blur-[170px] animate-pulse-glow"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-4xl space-y-10">
        {/* Intro Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-[#F5CE85]/40 bg-[#140711]/90 px-5 py-2 backdrop-blur-xl shadow-lg"
        >
          <Sparkles className="h-4 w-4 text-[#F5CE85]" />
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#F5CE85] font-semibold">
            {wishConfig.tagline}
          </span>
          <Heart className="h-3.5 w-3.5 text-[#BE185D] fill-[#BE185D]" />
        </motion.div>

        {/* Section Title */}
        <div className="space-y-3">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-[#FFF9F2] tracking-tight"
          >
            {wishConfig.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-base sm:text-lg italic text-[#B5A8AF] max-w-xl mx-auto"
          >
            &ldquo;{wishConfig.subtitle}&rdquo;
          </motion.p>
        </div>

        {/* Interactive Lantern Stage */}
        <div className="relative min-h-[420px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {!isLanternReleased ? (
              /* State 1: Glowing Sky Lantern waiting for her touch */
              <motion.div
                key="lantern-ready"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{
                  opacity: 0,
                  y: -120,
                  scale: 0.7,
                  filter: "blur(10px)",
                  transition: { duration: 1.2, ease: "easeInOut" },
                }}
                className="flex flex-col items-center space-y-8 cursor-pointer"
                onClick={handleReleaseLantern}
              >
                {/* 3D Glowing Sky Lantern */}
                <div className="relative group">
                  {/* Outer Pulsing Flame Glow */}
                  <div className="absolute -inset-8 rounded-full bg-gradient-to-tr from-[#F5CE85]/30 via-[#BE185D]/30 to-[#F5CE85]/20 blur-2xl transition-all duration-700 group-hover:blur-3xl group-hover:scale-110" />

                  {/* Lantern Vessel */}
                  <div className="relative flex flex-col items-center justify-between w-48 sm:w-56 h-64 sm:h-72 rounded-t-[70px] rounded-b-[40px] border-2 border-[#F5CE85]/60 bg-gradient-to-b from-[#F5CE85]/35 via-[#5C122D]/60 to-[#140711]/95 p-6 shadow-[0_0_60px_rgba(245,206,133,0.5)] backdrop-blur-md transition-all duration-500 group-hover:border-[#F5CE85] group-hover:scale-105">
                    {/* Top Ribbing */}
                    <div className="h-2 w-16 rounded-full bg-[#F5CE85]/50" />

                    {/* Central Glowing Flame */}
                    <div className="relative flex flex-col items-center my-auto">
                      <div className="animate-flame">
                        <Flame className="h-16 w-16 sm:h-20 sm:w-20 text-[#F5CE85] fill-[#F5CE85] filter drop-shadow-[0_0_20px_#F5CE85]" />
                      </div>
                      <span className="font-serif text-sm italic text-[#FFF9F2] mt-2 font-medium">
                        Deepika&apos;s Wish
                      </span>
                    </div>

                    {/* Bottom Base */}
                    <div className="w-full flex items-center justify-center border-t border-[#F5CE85]/30 pt-2">
                      <span className="text-[10px] tracking-[0.25em] uppercase text-[#F5CE85] font-semibold">
                        TOUCH TO RELEASE
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 max-w-md">
                  <p className="font-serif text-base sm:text-lg italic text-[#F5CE85] text-glow-gold">
                    {wishConfig.promptText}
                  </p>

                  <button
                    onClick={handleReleaseLantern}
                    type="button"
                    className="group relative inline-flex items-center gap-2.5 rounded-full border-2 border-[#F5CE85] bg-gradient-to-r from-[#5C122D] via-[#2C0A1E] to-[#5C122D] px-8 py-3.5 text-xs font-sans tracking-[0.25em] uppercase text-[#FFF9F2] shadow-[0_0_40px_rgba(245,206,133,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
                  >
                    <Sparkles className="h-4 w-4 text-[#F5CE85]" />
                    <span>{wishConfig.actionButtonText}</span>
                  </button>
                </div>
              </motion.div>
            ) : (
              /* State 2: Revealed Celestial Wish & Blessing */
              <motion.div
                key="lantern-released"
                initial={{ opacity: 0, y: 40, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-2xl rounded-3xl border-2 border-[#F5CE85]/40 bg-gradient-to-b from-[#140711]/95 via-[#2C0A1E]/85 to-[#070509]/95 p-8 sm:p-12 shadow-[0_25px_80px_rgba(0,0,0,0.95)] backdrop-blur-2xl text-center space-y-6"
              >
                {/* Floating Celestial Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-[#F5CE85]/35 bg-[#2C0A1E]/70 px-4 py-1 text-xs uppercase tracking-widest text-[#F5CE85]">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Prayer Embraced By The Stars</span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#FFF9F2]">
                  {wishConfig.revealedWishTitle}
                </h3>

                <div className="space-y-4 max-w-lg mx-auto">
                  {wishConfig.revealedWishMessage.map((line, idx) => (
                    <p
                      key={idx}
                      className="font-serif text-lg sm:text-xl font-light text-[#FFF9F2]/90 leading-relaxed"
                    >
                      {line}
                    </p>
                  ))}
                </div>

                {/* Golden Blessing Line */}
                <div className="pt-4 border-t border-[#F5CE85]/20">
                  <p className="font-serif text-lg sm:text-xl italic text-[#F5CE85] text-glow-gold">
                    {wishConfig.blessingQuote}
                  </p>
                </div>

                {/* Make another wish */}
                <div className="pt-2">
                  <button
                    onClick={handleResetWish}
                    type="button"
                    className="inline-flex items-center gap-2 text-xs font-sans tracking-[0.2em] uppercase text-[#B5A8AF] hover:text-[#F5CE85] transition-colors"
                  >
                    <RotateCcw className="h-3.5 w-3.5 text-[#F5CE85]" />
                    <span>Make another wish</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
