"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smile,
  Sparkles,
  Gem,
  Heart,
  Compass,
  Sun,
  Star,
  Feather,
  CheckCircle2,
} from "lucide-react";
import { birthdayConfig } from "@/config/birthday";
import { ReasonItem } from "@/types/birthday";

const iconMap: Record<ReasonItem["iconName"], React.ElementType> = {
  smile: Smile,
  sparkles: Sparkles,
  gem: Gem,
  heart: Heart,
  compass: Compass,
  sun: Sun,
  star: Star,
  feather: Feather,
};

export default function ReasonsSection() {
  const { reasons } = birthdayConfig;
  const [revealedCards, setRevealedCards] = useState<Record<string, boolean>>({});

  const toggleCard = (id: string) => {
    setRevealedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      id="reasons"
      className="relative min-h-screen w-full px-4 py-24 sm:px-6 md:py-32 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-[#5C122D]/15 blur-[170px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-1/4 bottom-1/4 h-[500px] w-[500px] rounded-full bg-[#F5CE85]/10 blur-[150px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 text-center space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#F5CE85]/35 bg-[#140711]/90 px-5 py-2 text-xs uppercase tracking-[0.25em] text-[#D98C9F] shadow-lg backdrop-blur-xl"
          >
            <Heart className="h-4 w-4 text-[#BE185D] fill-[#BE185D]" />
            <span>{reasons.tagline}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#FFF9F2]"
          >
            {reasons.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-base sm:text-lg italic text-[#F5CE85] max-w-xl mx-auto"
          >
            &ldquo;{reasons.subtitle}&rdquo;
          </motion.p>
        </div>

        {/* 6 Clickable Boyfriend Love Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.items.map((item, index) => {
            const IconComponent = iconMap[item.iconName] || Heart;
            const isRevealed = !!revealedCards[item.id];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.85,
                  delay: (index % 3) * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onClick={() => toggleCard(item.id)}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border-2 transition-all duration-500 cursor-pointer p-8 shadow-2xl backdrop-blur-xl ${
                  isRevealed
                    ? "border-[#F5CE85] bg-gradient-to-b from-[#2C0A1E] via-[#5C122D]/90 to-[#140711] shadow-[0_0_40px_rgba(245,206,133,0.3)] scale-[1.02]"
                    : "border-[#F5CE85]/25 bg-gradient-to-b from-[#140711]/90 via-[#2C0A1E]/70 to-[#070509]/95 hover:border-[#F5CE85]/70 hover:-translate-y-1.5"
                }`}
              >
                {/* Top Subtle Gold Ribbon */}
                <div className="pointer-events-none absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F5CE85]/60 to-transparent transition-opacity duration-300 group-hover:opacity-100" />

                {/* Corner filigree accents */}
                <div className="pointer-events-none absolute top-3 left-3 h-4 w-4 border-t border-l border-[#F5CE85]/35" />
                <div className="pointer-events-none absolute top-3 right-3 h-4 w-4 border-t border-r border-[#F5CE85]/35" />

                <div className="space-y-5">
                  {/* Icon & Index */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-13 w-13 items-center justify-center rounded-2xl border transition-all duration-300 ${
                        isRevealed
                          ? "border-[#F5CE85] bg-[#F5CE85] text-black shadow-lg"
                          : "border-[#F5CE85]/40 bg-gradient-to-tr from-[#5C122D] to-[#2C0A1E] text-[#F5CE85] group-hover:border-[#F5CE85]"
                      }`}
                    >
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <span className="font-serif text-base tracking-widest text-[#F5CE85]/60 font-mono">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl font-light text-[#FFF9F2] group-hover:text-[#F5CE85] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="font-serif text-base text-[#FFF9F2]/80 leading-relaxed font-light">
                    {item.description}
                  </p>

                  {/* Revealed Note on Click */}
                  <AnimatePresence>
                    {isRevealed && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="pt-2"
                      >
                        <div className="rounded-2xl border border-[#F5CE85]/30 bg-[#070509]/80 p-4 text-xs font-sans text-[#F5CE85] leading-relaxed flex items-start gap-2">
                          <Heart className="h-4 w-4 text-[#BE185D] fill-[#BE185D] flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>From your boyfriend:</strong> You mean more to me than words can say, Deepika. Happy Birthday, my love!
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Footer with quote & click cue */}
                <div className="mt-8 pt-4 border-t border-[#F5CE85]/15 flex items-center justify-between">
                  <p className="font-serif text-xs italic text-[#D98C9F] tracking-wide">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <span className="text-[10px] uppercase tracking-wider text-[#F5CE85]/60 font-sans">
                    {isRevealed ? "Tapped ♡" : "Tap to open"}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
