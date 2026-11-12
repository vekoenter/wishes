"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Calendar,
  MapPin,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { birthdayConfig } from "@/config/birthday";

export default function TimelineSection() {
  const { timeline } = birthdayConfig;
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState<number>(0);

  const currentMilestone = timeline.items[activeMilestoneIndex];

  return (
    <section
      id="timeline"
      className="relative min-h-screen w-full px-4 py-24 sm:px-6 md:py-32 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute right-1/4 top-1/3 h-[550px] w-[550px] rounded-full bg-[#5C122D]/15 blur-[160px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/4 bottom-1/4 h-[500px] w-[500px] rounded-full bg-[#F5CE85]/10 blur-[150px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-16 text-center space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#F5CE85]/35 bg-[#140711]/90 px-5 py-1.5 text-xs uppercase tracking-[0.25em] text-[#D98C9F] shadow-lg backdrop-blur-xl"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#F5CE85]" />
            <span>{timeline.tagline}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#FFF9F2]"
          >
            {timeline.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-base sm:text-lg italic text-[#B5A8AF] max-w-xl mx-auto"
          >
            &ldquo;{timeline.subtitle}&rdquo;
          </motion.p>
        </div>

        {/* Milestone Starlit Stepper Bar */}
        <div className="relative mx-auto max-w-3xl mb-12">
          {/* Subtle connecting golden line */}
          <div className="absolute top-1/2 left-6 right-6 -translate-y-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#F5CE85]/40 to-transparent" />

          <div className="relative flex items-center justify-between gap-2 overflow-x-auto py-4 px-2 no-scrollbar">
            {timeline.items.map((item, idx) => {
              const isActive = activeMilestoneIndex === idx;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveMilestoneIndex(idx)}
                  type="button"
                  className="group relative flex flex-col items-center focus:outline-none flex-shrink-0"
                  aria-label={`Go to ${item.title}`}
                >
                  <div
                    className={`relative flex h-11 w-11 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                      isActive
                        ? "border-[#F5CE85] bg-gradient-to-tr from-[#5C122D] to-[#2C0A1E] shadow-[0_0_20px_#F5CE85] scale-110"
                        : "border-[#F5CE85]/30 bg-[#070509] hover:border-[#F5CE85]/80 hover:scale-105"
                    }`}
                  >
                    <span
                      className={`font-serif text-xs font-semibold ${
                        isActive ? "text-[#F5CE85]" : "text-[#B5A8AF]"
                      }`}
                    >
                      0{idx + 1}
                    </span>
                  </div>

                  <span
                    className={`mt-2 font-sans text-[11px] tracking-wider uppercase transition-colors whitespace-nowrap ${
                      isActive
                        ? "text-[#F5CE85] font-semibold text-glow-gold"
                        : "text-[#B5A8AF]/60 group-hover:text-[#FFF9F2]"
                    }`}
                  >
                    {item.dateLabel}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Milestone Card */}
        <div className="mx-auto max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMilestone.id}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-3xl border-2 border-[#F5CE85]/30 bg-gradient-to-b from-[#140711]/95 via-[#2C0A1E]/80 to-[#070509]/95 p-6 sm:p-10 md:p-12 shadow-[0_20px_70px_rgba(0,0,0,0.9)] backdrop-blur-2xl"
            >
              {/* Filigree Corner Accents */}
              <div className="pointer-events-none absolute top-4 left-4 h-6 w-6 border-t-2 border-l-2 border-[#F5CE85]/35" />
              <div className="pointer-events-none absolute top-4 right-4 h-6 w-6 border-t-2 border-r-2 border-[#F5CE85]/35" />
              <div className="pointer-events-none absolute bottom-4 left-4 h-6 w-6 border-b-2 border-l-2 border-[#F5CE85]/35" />
              <div className="pointer-events-none absolute bottom-4 right-4 h-6 w-6 border-b-2 border-r-2 border-[#F5CE85]/35" />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {currentMilestone.imageSrc && (
                  <div className="md:col-span-5 relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-[#F5CE85]/25 shadow-2xl">
                    <Image
                      src={currentMilestone.imageSrc}
                      alt={currentMilestone.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                )}

                <div
                  className={`${
                    currentMilestone.imageSrc ? "md:col-span-7" : "md:col-span-12"
                  } space-y-4 text-left`}
                >
                  <div className="flex flex-wrap items-center gap-3 text-xs tracking-wider uppercase text-[#F5CE85]">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#F5CE85]/30 bg-[#2C0A1E]/60 px-3.5 py-1 font-semibold">
                      <Calendar className="h-3.5 w-3.5" />
                      {currentMilestone.dateLabel}
                    </span>
                    {currentMilestone.location && (
                      <span className="flex items-center gap-1 text-[#D98C9F]">
                        <MapPin className="h-3 w-3" />
                        {currentMilestone.location}
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl font-light text-[#FFF9F2] leading-tight">
                    {currentMilestone.title}
                  </h3>

                  <p className="font-serif text-base sm:text-lg text-[#FFF9F2]/80 leading-relaxed font-light">
                    {currentMilestone.description}
                  </p>

                  <div className="pt-6 flex items-center justify-between border-t border-[#F5CE85]/15">
                    <button
                      onClick={() =>
                        setActiveMilestoneIndex(
                          (activeMilestoneIndex - 1 + timeline.items.length) %
                            timeline.items.length
                        )
                      }
                      type="button"
                      className="inline-flex items-center gap-1.5 text-xs tracking-wider uppercase text-[#B5A8AF] hover:text-[#F5CE85] transition-colors"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      <span>Previous</span>
                    </button>

                    <span className="font-mono text-xs text-[#F5CE85]/60">
                      0{activeMilestoneIndex + 1} / 0{timeline.items.length}
                    </span>

                    <button
                      onClick={() =>
                        setActiveMilestoneIndex(
                          (activeMilestoneIndex + 1) % timeline.items.length
                        )
                      }
                      type="button"
                      className="inline-flex items-center gap-1.5 text-xs tracking-wider uppercase text-[#F5CE85] hover:text-[#FFF9F2] transition-colors font-medium"
                    >
                      <span>Next</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
