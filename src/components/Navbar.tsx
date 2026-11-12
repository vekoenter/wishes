"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { birthdayConfig } from "@/config/birthday";

interface NavbarProps {
  isAudioPlaying?: boolean;
  onToggleAudio?: () => void;
}

export default function Navbar({}: NavbarProps = {}) {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = birthdayConfig.navigation.links.map((link) =>
        link.href.replace("#", "")
      );

      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const lenis = (window as unknown as {
        __lenis?: {
          scrollTo: (
            target: HTMLElement | string,
            opts?: { offset?: number; duration?: number }
          ) => void;
        };
      }).__lenis;

      if (lenis) {
        lenis.scrollTo(targetEl, { offset: -70, duration: 1.2 });
      } else {
        const navOffset = 70;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <>
      {/* Floating Header Bar */}
      <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 py-4 md:py-6 transition-all duration-500 pointer-events-none">
        <nav
          className={`pointer-events-auto flex items-center justify-between gap-6 rounded-full border px-5 py-2.5 transition-all duration-500 max-w-5xl w-full ${
            isScrolled
              ? "border-[#F5CE85]/30 bg-[#070509]/95 shadow-[0_10px_35px_rgba(0,0,0,0.9)] backdrop-blur-xl"
              : "border-[#F5CE85]/20 bg-[#140711]/90 shadow-lg backdrop-blur-md"
          }`}
          aria-label="Royal Navigation"
        >
          {/* Deepika Monogram / Brand */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="group flex items-center gap-2.5 text-[#FFF9F2] transition-colors"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#F5CE85]/50 bg-gradient-to-tr from-[#5C122D] to-[#2C0A1E] text-xs font-serif italic text-[#F5CE85] shadow-[0_0_15px_rgba(245,206,133,0.3)] group-hover:border-[#F5CE85] group-hover:scale-105 transition-transform">
              D
            </span>
            <span className="font-serif text-lg tracking-wide text-[#FFF9F2] hidden sm:inline">
              Deepika
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-1 lg:gap-2">
            {birthdayConfig.navigation.links.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative px-3.5 py-1.5 text-xs font-sans uppercase tracking-[0.16em] transition-all duration-300 rounded-full ${
                      isActive
                        ? "text-[#F5CE85] font-semibold text-glow-gold"
                        : "text-[#B5A8AF] hover:text-[#FFF9F2]"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeRoyalNavIndicator"
                        className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-[#F5CE85] shadow-[0_0_10px_#F5CE85]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right Action: Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#F5CE85]/30 bg-[#140711] text-[#FFF9F2] transition-colors hover:text-[#F5CE85]"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col justify-between bg-[#070509]/98 p-6 backdrop-blur-2xl md:hidden"
          >
            <div className="flex items-center justify-between border-b border-[#F5CE85]/20 pb-4">
              <span className="font-serif text-xl italic text-[#F5CE85]">
                Happy Birthday, Deepika
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#F5CE85]/30 text-[#FFF9F2]"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <ul className="flex flex-col gap-5 py-8">
              {birthdayConfig.navigation.links.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;

                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`block font-serif text-2xl tracking-wide transition-colors ${
                        isActive
                          ? "italic text-[#F5CE85] text-glow-gold"
                          : "text-[#FFF9F2]/75 hover:text-[#FFF9F2]"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="flex flex-col gap-4 border-t border-[#F5CE85]/20 pt-6">
              <p className="flex items-center justify-center gap-1.5 text-xs text-[#B5A8AF]">
                <span>13th November</span>
                <span>•</span>
                <Sparkles className="h-3 w-3 text-[#F5CE85]" />
                <span>Made With Love For Deepika</span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
