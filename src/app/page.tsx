"use client";

import React, { useState } from "react";
import FilmGrain from "@/components/FilmGrain";
import StarfieldCanvas from "@/components/StarfieldCanvas";
import PetalsCanvas from "@/components/PetalsCanvas";
import SmoothScroll from "@/components/SmoothScroll";
import AudioPlayer from "@/components/AudioPlayer";
import OpeningSequence from "@/components/OpeningSequence";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BirthdayWish from "@/components/BirthdayWish";
import BirthdayCakeSection from "@/components/BirthdayCakeSection";
import LoveLetter from "@/components/LoveLetter";
import PhotoGallery from "@/components/PhotoGallery";
import ReasonsSection from "@/components/ReasonsSection";
import SecretSurprise from "@/components/SecretSurprise";
import FinalScene from "@/components/FinalScene";

export default function Home() {
  const [hasEntered, setHasEntered] = useState<boolean>(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(true);

  const handleEnterWorld = () => {
    setHasEntered(true);
    setIsAudioPlaying(true);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const handleReplayStory = () => {
    setHasEntered(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const handleToggleAudio = () => {
    setIsAudioPlaying((prev) => !prev);
  };

  return (
    <SmoothScroll>
      <main className="relative min-h-screen bg-[#070509] text-[#FFF9F2] overflow-x-hidden selection:bg-[#5C122D] selection:text-[#F5CE85]">
        {/* Subtle 35mm Film Grain Overlay */}
        <FilmGrain />

        {/* Ambient Starlight & Gold Embers Canvas */}
        <StarfieldCanvas />

        {/* 3D Floating Velvet Rose Petals Canvas */}
        <PetalsCanvas />

        {/* Boyfriend's 13th November Opening Sequence Modal */}
        {!hasEntered && (
          <OpeningSequence
            onEnter={handleEnterWorld}
            isAudioPlaying={isAudioPlaying}
            onToggleAudio={handleToggleAudio}
          />
        )}

        {/* Minimal Floating Audio Player Controller */}
        <AudioPlayer
          isPlaying={isAudioPlaying}
          onTogglePlay={handleToggleAudio}
          floating={true}
        />

        {/* Main Boyfriend-to-Girlfriend Birthday Experience */}
        {hasEntered && (
          <div className="relative z-10 transition-opacity duration-1000 ease-out">
            <Navbar />

            {/* 1. Hero Entrance: To My Beautiful Girlfriend, Deepika */}
            <HeroSection />

            {/* 2. Birthday Wish - Placed right at the beginning */}
            <BirthdayWish />

            {/* 3. Luxury Birthday Cake & Glitter Ceremony (Click to blow & cut) */}
            <BirthdayCakeSection />

            {/* 4. Boyfriend's Intimate Love Letter (Click to unseal) */}
            <LoveLetter />

            {/* 5. Our Sweet Memories Gallery (Click to zoom & view love note) */}
            <PhotoGallery />

            {/* 6. Why I Love You - Interactive Click & Reveal Cards */}
            <ReasonsSection />

            {/* 7. Secret Surprise: Boyfriend's Birthday Promise Envelope */}
            <SecretSurprise />

            {/* 8. Final Scene & Birthday Blessings */}
            <FinalScene onReplayStory={handleReplayStory} />
          </div>
        )}
      </main>
    </SmoothScroll>
  );
}
