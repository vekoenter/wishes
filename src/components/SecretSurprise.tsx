"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Sparkles, Heart, Gift, RotateCcw, Lock, Unlock } from "lucide-react";
import { birthdayConfig } from "@/config/birthday";

export default function SecretSurprise() {
  const { secretSurprise } = birthdayConfig;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const triggerCelebrationConfetti = () => {
    const colors = ["#F5CE85", "#E5B869", "#D98C9F", "#FFF9F2", "#5C122D", "#BE185D"];

    confetti({
      particleCount: 60,
      spread: 80,
      origin: { y: 0.6 },
      colors,
      shapes: ["circle"],
      ticks: 220,
    });

    setTimeout(() => {
      confetti({
        particleCount: 40,
        angle: 60,
        spread: 60,
        origin: { x: 0 },
        colors,
      });
      confetti({
        particleCount: 40,
        angle: 120,
        spread: 60,
        origin: { x: 1 },
        colors,
      });
    }, 250);
  };

  const handleOpenSurprise = () => {
    setIsOpen(true);
    triggerCelebrationConfetti();
  };

  const handleReplay = () => {
    setIsOpen(false);
  };

  return (
    <section
      id="surprise"
      className="relative min-h-screen w-full px-4 py-24 sm:px-6 md:py-32 overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[650px] w-[650px] rounded-full bg-[#5C122D]/20 blur-[170px]"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-4xl text-center">
        {/* Section Header */}
        <div className="mb-14 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#F5CE85]/35 bg-[#140711]/90 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-[#D98C9F]"
          >
            <Gift className="h-3.5 w-3.5 text-[#F5CE85]" />
            <span>{secretSurprise.tagline}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#FFF9F2]"
          >
            {secretSurprise.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-base sm:text-lg italic text-[#B5A8AF] max-w-lg mx-auto"
          >
            &ldquo;{secretSurprise.subtitle}&rdquo;
          </motion.p>
        </div>

        {/* Interactive Vault / Royal Envelope */}
        <div className="relative mx-auto flex items-center justify-center min-h-[480px]">
          <AnimatePresence mode="wait">
            {!isOpen ? (
              /* Sealed Imperial Vault View */
              <motion.div
                key="sealed-vault"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group relative cursor-pointer"
                onClick={handleOpenSurprise}
              >
                {/* Outer Glow */}
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#F5CE85]/20 via-[#5C122D]/35 to-[#F5CE85]/20 opacity-40 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                {/* Vault Body */}
                <div className="relative flex flex-col items-center justify-between w-[320px] sm:w-[440px] md:w-[500px] h-[270px] sm:h-[320px] rounded-3xl border-2 border-[#F5CE85]/50 bg-gradient-to-b from-[#140711] via-[#2C0A1E]/95 to-[#070509] p-8 shadow-[0_20px_70px_rgba(0,0,0,0.95)] backdrop-blur-2xl transition-all duration-500 group-hover:border-[#F5CE85] group-hover:scale-[1.02]">
                  {/* Flap lines styling */}
                  <div className="pointer-events-none absolute top-0 left-0 right-0 h-1/2 border-b border-[#F5CE85]/20 bg-[#5C122D]/15 rounded-t-3xl" />

                  {/* Corner accents */}
                  <div className="pointer-events-none absolute top-3 left-3 h-5 w-5 border-t border-l border-[#F5CE85]/40" />
                  <div className="pointer-events-none absolute top-3 right-3 h-5 w-5 border-t border-r border-[#F5CE85]/40" />

                  {/* Top Badge */}
                  <div className="relative z-10 flex items-center gap-2 text-[11px] font-sans tracking-[0.25em] uppercase text-[#F5CE85]/80">
                    <Lock className="h-3 w-3 text-[#F5CE85]" />
                    <span>{secretSurprise.envelopeLabel}</span>
                  </div>

                  {/* Royal Gold Wax Seal Button */}
                  <div className="relative z-20 flex flex-col items-center my-auto">
                    <div className="relative flex h-18 w-18 sm:h-22 sm:w-22 items-center justify-center rounded-full border-2 border-[#F5CE85] bg-gradient-to-tr from-[#5C122D] via-[#2C0A1E] to-[#BE185D] shadow-[0_0_35px_rgba(245,206,133,0.7)] transition-transform duration-300 group-hover:scale-110">
                      <Heart className="h-8 w-8 text-[#F5CE85] fill-[#F5CE85]" />
                    </div>
                    <span className="mt-3 text-[10px] tracking-[0.25em] uppercase text-[#F5CE85] font-semibold">
                      {secretSurprise.sealText}
                    </span>
                  </div>

                  {/* Bottom Prompt */}
                  <p className="relative z-10 font-serif text-xs italic text-[#FFF9F2]/75">
                    Touch the seal to unlock what is reserved solely for you...
                  </p>
                </div>
              </motion.div>
            ) : (
              /* Unsealed Revealed Secret Vault View */
              <motion.div
                key="revealed-content"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full rounded-3xl border-2 border-[#F5CE85]/40 bg-gradient-to-b from-[#140711]/95 via-[#2C0A1E]/90 to-[#070509]/95 p-6 sm:p-10 md:p-12 shadow-[0_25px_80px_rgba(0,0,0,0.95)] backdrop-blur-2xl text-left"
              >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-[#F5CE85]/20 pb-5 mb-8">
                  <div className="flex items-center gap-2.5">
                    <Unlock className="h-4 w-4 text-[#F5CE85]" />
                    <span className="font-serif text-xl sm:text-2xl font-light text-[#F5CE85]">
                      {secretSurprise.letterTitle}
                    </span>
                  </div>

                  <button
                    onClick={handleReplay}
                    type="button"
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#F5CE85]/35 bg-[#2C0A1E]/70 px-3.5 py-1 text-xs text-[#B5A8AF] transition-colors hover:text-[#F5CE85] hover:border-[#F5CE85]"
                  >
                    <RotateCcw className="h-3 w-3" />
                    <span>Close Vault</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  {/* Text Content */}
                  <div className="md:col-span-7 space-y-4">
                    {secretSurprise.personalMessage.map((p, i) => (
                      <p
                        key={i}
                        className="font-serif text-base sm:text-lg text-[#FFF9F2]/90 font-light leading-relaxed"
                      >
                        {p}
                      </p>
                    ))}

                    <div className="pt-6">
                      <p className="font-serif text-sm italic text-[#D98C9F]">
                        {secretSurprise.closingWords}
                      </p>
                      <p className="mt-1 font-handwriting text-3xl sm:text-4xl text-[#F5CE85] tracking-wider text-glow-gold">
                        {birthdayConfig.senderName}
                      </p>
                    </div>
                  </div>

                  {/* Revealed Special Memory Photograph */}
                  {secretSurprise.photoSrc && (
                    <div className="md:col-span-5 flex flex-col items-center">
                      <div className="relative w-full h-80 sm:h-96 md:h-[390px] rounded-2xl overflow-hidden border-2 border-[#F5CE85]/35 shadow-[0_15px_40px_rgba(0,0,0,0.85)]">
                        <Image
                          src={secretSurprise.photoSrc}
                          alt="Special Surprise Memory - Deepika"
                          fill
                          sizes="(max-width: 768px) 100vw, 40vw"
                          className="object-cover object-top sm:object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                      </div>
                      {secretSurprise.photoCaption && (
                        <p className="mt-3 font-serif text-xs italic text-[#B5A8AF] text-center">
                          &ldquo;{secretSurprise.photoCaption}&rdquo;
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {/* Bottom Replay Action */}
                <div className="mt-10 pt-6 border-t border-[#F5CE85]/20 text-center">
                  <button
                    onClick={handleReplay}
                    type="button"
                    className="inline-flex items-center gap-2 rounded-full border border-[#F5CE85]/40 bg-[#140711] px-6 py-2.5 text-xs font-sans tracking-[0.2em] uppercase text-[#FFF9F2] transition-all hover:bg-[#2C0A1E] hover:border-[#F5CE85]"
                  >
                    <RotateCcw className="h-3.5 w-3.5 text-[#F5CE85]" />
                    <span>{secretSurprise.replayButtonText}</span>
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
