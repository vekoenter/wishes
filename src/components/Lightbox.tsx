"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Calendar, MapPin } from "lucide-react";
import { PhotoItem } from "@/types/birthday";

interface LightboxProps {
  photos: PhotoItem[];
  currentIndex: number | null;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export default function Lightbox({
  photos,
  currentIndex,
  onClose,
  onSelectIndex,
}: LightboxProps) {
  const isOpen = currentIndex !== null;
  const currentPhoto = isOpen ? photos[currentIndex] : null;

  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    const prev = (currentIndex - 1 + photos.length) % photos.length;
    onSelectIndex(prev);
  }, [currentIndex, photos.length, onSelectIndex]);

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    const next = (currentIndex + 1) % photos.length;
    onSelectIndex(next);
  }, [currentIndex, photos.length, onSelectIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, handlePrev, handleNext]);

  // Touch swipe support for mobile
  useEffect(() => {
    if (!isOpen) return;
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) {
        handleNext();
      }
      if (touchEndX - touchStartX > 50) {
        handlePrev();
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isOpen, handleNext, handlePrev]);

  if (!isOpen || !currentPhoto) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#070509]/96 p-4 sm:p-8 backdrop-blur-2xl select-none"
        onClick={onClose}
      >
        {/* Top Control Bar */}
        <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-[#FFF9F2] z-50">
          <div className="flex items-center gap-3">
            <span className="font-serif text-sm tracking-widest text-[#F5CE85]">
              {currentIndex + 1} / {photos.length}
            </span>
            {currentPhoto.category && (
              <span className="rounded-full border border-[#F5CE85]/25 bg-[#140711]/90 px-3 py-0.5 text-[10px] uppercase tracking-wider text-[#D98C9F]">
                {currentPhoto.category}
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#F5CE85]/30 bg-black/60 text-[#FFF9F2] transition-all hover:bg-[#F5CE85] hover:text-black"
            aria-label="Close image viewer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Previous Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          className="absolute left-4 sm:left-8 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[#F5CE85]/30 bg-black/70 text-[#FFF9F2] shadow-2xl transition-all hover:scale-110 hover:border-[#F5CE85] hover:text-[#F5CE85]"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        {/* Main Content Modal Container */}
        <div
          className="relative max-h-[85vh] max-w-5xl w-full flex flex-col md:flex-row items-center justify-center gap-6 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.div
            key={currentPhoto.id}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.94 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative flex flex-col md:flex-row items-center max-h-[80vh] w-full rounded-3xl overflow-hidden border-2 border-[#F5CE85]/35 bg-[#140711]/90 shadow-[0_0_80px_rgba(0,0,0,0.95)]"
          >
            {/* Image Box */}
            <div className="relative h-[55vh] md:h-[75vh] w-full md:w-3/5 bg-black flex items-center justify-center overflow-hidden">
              <Image
                src={currentPhoto.imageSrc}
                alt={currentPhoto.title}
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-contain"
                priority
              />
            </div>

            {/* Editorial Caption Sidebar */}
            <div className="w-full md:w-2/5 p-6 sm:p-8 flex flex-col justify-between space-y-4 text-left">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3 text-xs text-[#B5A8AF]">
                  {currentPhoto.date && (
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-[#F5CE85]" />
                      {currentPhoto.date}
                    </span>
                  )}
                  {currentPhoto.location && (
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-[#D98C9F]" />
                      {currentPhoto.location}
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#FFF9F2] tracking-tight">
                  {currentPhoto.title}
                </h3>

                <p className="font-serif text-base text-[#FFF9F2]/80 leading-relaxed italic">
                  &ldquo;{currentPhoto.caption}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#F5CE85]/20 flex items-center justify-between text-xs text-[#B5A8AF]/70">
                <span>Use ← and → to navigate</span>
                <span className="text-[#F5CE85] font-serif italic text-glow-gold">Deepika ♡</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Next Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="absolute right-4 sm:right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[#F5CE85]/30 bg-black/70 text-[#FFF9F2] shadow-2xl transition-all hover:scale-110 hover:border-[#F5CE85] hover:text-[#F5CE85]"
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
