"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Maximize2 } from "lucide-react";
import { birthdayConfig } from "@/config/birthday";
import Lightbox from "./Lightbox";

export default function PhotoGallery() {
  const { gallery } = birthdayConfig;
  const photos = gallery.photos;

  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const trackRef = useRef<HTMLDivElement>(null);

  // Duplicate photos so the marquee loops seamlessly
  const doubled = [...photos, ...photos];

  // Each card: 300/340/360px wide + 24px gap = approx 384px per card at md
  // 6 cards × 384 = 2304px for one full set → animation duration ~40s feels slow & elegant
  const CARD_W = 360; // px (md breakpoint)
  const GAP = 24;     // gap-6 = 24px
  const TOTAL_WIDTH = photos.length * (CARD_W + GAP); // half of doubled track

  return (
    <section
      id="gallery"
      className="relative min-h-screen w-full px-0 py-24 md:py-32 overflow-hidden flex flex-col justify-center"
    >
      {/* Background radial atmosphere */}
      <div
        className="pointer-events-none absolute right-1/3 top-1/4 h-[600px] w-[600px] rounded-full bg-[#5C122D]/15 blur-[160px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/4 bottom-1/4 h-[500px] w-[500px] rounded-full bg-[#F5CE85]/10 blur-[150px]"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full">
        {/* Section Header */}
        <div className="mb-12 text-center space-y-3 px-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#F5CE85]/35 bg-[#140711]/90 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-[#D98C9F]"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#F5CE85]" />
            <span>{gallery.tagline}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#FFF9F2]"
          >
            {gallery.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-base sm:text-lg italic text-[#B5A8AF] max-w-xl mx-auto"
          >
            &ldquo;{gallery.subtitle}&rdquo;
          </motion.p>
        </div>

        {/* ============================================================
            INFINITE MARQUEE CAROUSEL — rolls right-to-left, never stops
            Hover to pause. Click to open lightbox.
        ============================================================ */}
        <div
          className="relative w-full overflow-hidden py-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Soft fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-20 bg-gradient-to-r from-[#070509] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-20 bg-gradient-to-l from-[#070509] to-transparent" />

          {/* Marquee Track — rendered twice for seamless loop */}
          <div
            ref={trackRef}
            className="flex gap-6"
            style={{
              width: `${TOTAL_WIDTH * 2}px`,
              animation: `marquee-memories 40s linear infinite`,
              animationPlayState: isPaused ? "paused" : "running",
            }}
          >
            {doubled.map((photo, index) => {
              // The real index in original array (for lightbox)
              const realIndex = index % photos.length;

              return (
                <div
                  key={`${photo.id}-${index}`}
                  onClick={() => setSelectedPhotoIndex(realIndex)}
                  className="group relative flex-shrink-0 w-[300px] sm:w-[340px] md:w-[360px] h-[400px] overflow-hidden rounded-3xl border-2 border-[#F5CE85]/25 bg-[#140711]/80 transition-all duration-500 cursor-pointer hover:border-[#F5CE85]/70 hover:shadow-[0_15px_50px_rgba(245,206,133,0.22)] hover:scale-[1.02]"
                >
                  {/* Photo Frame — full card height */}
                  <div className="relative w-full h-[400px] overflow-hidden bg-black">
                    <Image
                      src={photo.imageSrc}
                      alt={photo.caption}
                      fill
                      sizes="(max-width: 640px) 300px, (max-width: 768px) 340px, 360px"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Vignette overlay — heavier at bottom for caption */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070509]/95 via-transparent to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-80" />

                    {/* Expand icon */}
                    <div className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[#F5CE85]/40 bg-black/60 text-[#FFF9F2] opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100 group-hover:scale-105">
                      <Maximize2 className="h-4 w-4 text-[#F5CE85]" />
                    </div>

                    {/* Caption — floated over bottom of photo */}
                    <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
                      <p className="font-serif text-sm italic text-[#FFF9F2]/90 line-clamp-2 leading-relaxed drop-shadow-md">
                        &ldquo;{photo.caption}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Hover hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6 text-center text-xs font-sans tracking-widest uppercase text-[#B5A8AF]/60"
        >
          {isPaused ? "✦ Paused — hover away to resume ✦" : "✦ Hover to pause · Click any photo to enlarge ✦"}
        </motion.p>
      </div>

      {/* Keyframe for the infinite marquee */}
      <style>{`
        @keyframes marquee-memories {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-${TOTAL_WIDTH}px); }
        }
      `}</style>

      {/* Lightbox */}
      <Lightbox
        photos={photos}
        currentIndex={selectedPhotoIndex}
        onClose={() => setSelectedPhotoIndex(null)}
        onSelectIndex={(index) => setSelectedPhotoIndex(index)}
      />
    </section>
  );
}
