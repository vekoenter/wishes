"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Heart, Calendar } from "lucide-react";
import { birthdayConfig } from "@/config/birthday";

export default function BirthdayWish() {
  const { birthdayWish } = birthdayConfig;

  return (
    <section
      id="wish"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-6 py-28 md:py-36 text-center"
    >
      {/* Warm Burgundy & Amber Candlelit Moving Glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_40%,_var(--tw-gradient-stops))] from-[#5C122D]/35 via-[#2C0A1E]/40 to-[#070509]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-[#F5CE85]/12 blur-[170px] animate-pulse-glow"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-4xl space-y-12">
        {/* Intro Badge - 13th November Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2.5 rounded-full border border-[#F5CE85]/40 bg-[#140711]/90 px-5 py-2 backdrop-blur-xl shadow-lg"
        >
          <Calendar className="h-4 w-4 text-[#F5CE85]" />
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#F5CE85] font-semibold">
            {birthdayWish.tagline}
          </span>
          <Heart className="h-3.5 w-3.5 text-[#BE185D] fill-[#BE185D]" />
        </motion.div>

        {/* Cinematic Opening Hook */}
        <div className="space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-2xl sm:text-3xl md:text-4xl italic font-light text-[#FFF9F2]/75"
          >
            &ldquo;{birthdayWish.openingLine1}&rdquo;
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-[#FFF9F2] leading-tight"
          >
            Happy Birthday,{" "}
            <span className="italic font-normal text-[#F5CE85] text-glow-gold">
              Deepika.
            </span>
          </motion.h2>
        </div>

        {/* Gold Filigree Line Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mx-auto h-[1px] w-36 bg-gradient-to-r from-transparent via-[#F5CE85] to-transparent"
        />

        {/* Heartfelt Birthday Wish Paragraphs */}
        <div className="space-y-6 mx-auto max-w-3xl">
          {birthdayWish.mainWish.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1, delay: 0.5 + index * 0.18 }}
              className="font-serif text-lg sm:text-2xl font-light leading-relaxed text-[#FFF9F2]/90 tracking-wide"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        {/* Climax Highlight Line */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.2, delay: 1 }}
          className="rounded-3xl border border-[#F5CE85]/35 bg-gradient-to-r from-[#2C0A1E]/70 via-[#5C122D]/50 to-[#2C0A1E]/70 p-8 sm:p-10 shadow-[0_0_50px_rgba(245,206,133,0.18)] backdrop-blur-xl"
        >
          <p className="font-serif text-xl sm:text-2xl md:text-3xl italic text-[#F5CE85] leading-relaxed">
            &ldquo;{birthdayWish.highlightLine}&rdquo;
          </p>
          <p className="mt-4 font-sans text-xs sm:text-sm tracking-[0.25em] uppercase text-[#D98C9F]">
            {birthdayWish.finalRomanticLine}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
