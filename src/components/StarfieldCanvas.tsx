"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  radius: number;
  baseRadius: number;
  vx: number;
  vy: number;
  alpha: number;
  baseAlpha: number;
  glow: string;
  pulseSpeed: number;
  pulsePhase: number;
}

export default function StarfieldCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Particle colors: Mughal Gold, Amber Champagne, Silk Rose, Warm Ivory, Imperial Crimson
    const colors = [
      "rgba(245, 206, 133,", // Mughal Gold
      "rgba(229, 184, 105,", // Amber Champagne
      "rgba(217, 140, 159,", // Silk Rose
      "rgba(255, 249, 242,", // Warm Ivory
      "rgba(92, 18, 45,",    // Imperial Crimson
    ];

    const particleCount = Math.min(Math.floor((width * height) / 16000), 75);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const baseAlpha = Math.random() * 0.5 + 0.15;
      const baseRadius = Math.random() * 1.6 + 0.6;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: baseRadius,
        baseRadius,
        vx: (Math.random() - 0.5) * 0.2,
        vy: -Math.random() * 0.25 - 0.05, // slowly drifting upward like warm embers
        alpha: baseAlpha,
        baseAlpha,
        glow: colors[Math.floor(Math.random() * colors.length)],
        pulseSpeed: Math.random() * 0.02 + 0.008,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let lastTime = performance.now();

    const render = (time: number) => {
      const dt = (time - lastTime) / 1000;
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      // Draw subtle ambient glow near mouse cursor
      const gradient = ctx.createRadialGradient(
        mouseX,
        mouseY,
        0,
        mouseX,
        mouseY,
        380
      );
      gradient.addColorStop(0, "rgba(53, 19, 33, 0.14)");
      gradient.addColorStop(0.6, "rgba(26, 11, 19, 0.04)");
      gradient.addColorStop(1, "rgba(11, 8, 11, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.pulsePhase += p.pulseSpeed;
        p.alpha = p.baseAlpha + Math.sin(p.pulsePhase) * 0.15;
        p.radius = p.baseRadius + Math.sin(p.pulsePhase) * 0.3;

        p.x += p.vx;
        p.y += p.vy;

        // Wrap around smoothly
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.2, p.radius), 0, Math.PI * 2);
        ctx.fillStyle = `${p.glow} ${Math.max(0.05, p.alpha)})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = `${p.glow} 0.5)`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-70"
    />
  );
}
