"use client";

import React, { useEffect, useRef } from "react";

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  swaySpeed: number;
  swayAmplitude: number;
  swayOffset: number;
  flip: number;
  flipSpeed: number;
  color: string;
  opacity: number;
}

export default function PetalsCanvas() {
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

    // Exotic Velvet Rose Petal Colors & Warm Gold Dust
    const petalColors = [
      { r: 180, g: 30, b: 70 },   // Deep velvet ruby rose
      { r: 215, g: 50, b: 90 },   // Royal crimson
      { r: 235, g: 120, b: 150 }, // Soft silk rose
      { r: 140, g: 20, b: 50 },   // Midnight wine petal
      { r: 245, g: 206, b: 133 }, // Golden starlight leaf speck
    ];

    const petalCount = Math.min(Math.floor((width * height) / 28000), 45);
    const petals: Petal[] = [];

    for (let i = 0; i < petalCount; i++) {
      const col = petalColors[Math.floor(Math.random() * petalColors.length)];
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 14 + 10,
        speedY: Math.random() * 0.8 + 0.5,
        speedX: Math.random() * 0.4 - 0.2,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 1.5,
        swaySpeed: Math.random() * 0.02 + 0.01,
        swayAmplitude: Math.random() * 30 + 15,
        swayOffset: Math.random() * Math.PI * 2,
        flip: Math.random() * Math.PI,
        flipSpeed: Math.random() * 0.03 + 0.01,
        color: `rgb(${col.r}, ${col.g}, ${col.b})`,
        opacity: Math.random() * 0.45 + 0.35,
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;
    let mouseInfluence = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      mouseInfluence = 1;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let lastTime = performance.now();

    const drawPetal = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      rotation: number,
      flip: number,
      color: string,
      opacity: number
    ) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate((rotation * Math.PI) / 180);
      ctx.scale(1, Math.cos(flip));

      ctx.beginPath();
      ctx.moveTo(0, 0);
      // Delicate rose petal curve
      ctx.bezierCurveTo(size * 0.6, -size * 0.4, size * 0.8, size * 0.5, 0, size);
      ctx.bezierCurveTo(-size * 0.8, size * 0.5, -size * 0.6, -size * 0.4, 0, 0);

      ctx.fillStyle = color;
      ctx.globalAlpha = opacity;
      ctx.shadowColor = "rgba(0, 0, 0, 0.4)";
      ctx.shadowBlur = 6;
      ctx.fill();

      // Subtle gold / highlight center vein
      ctx.beginPath();
      ctx.moveTo(0, 2);
      ctx.lineTo(0, size * 0.8);
      ctx.strokeStyle = "rgba(255, 245, 230, 0.2)";
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.restore();
    };

    const render = (time: number) => {
      const dt = (time - lastTime) / 1000;
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      // Decay mouse influence
      if (mouseInfluence > 0.05) {
        mouseInfluence *= 0.97;
      }

      for (let i = 0; i < petals.length; i++) {
        const p = petals[i];

        p.swayOffset += p.swaySpeed;
        p.rotation += p.rotationSpeed;
        p.flip += p.flipSpeed;

        // Base falling speed + organic sway
        p.y += p.speedY;
        p.x += Math.sin(p.swayOffset) * 0.8 + p.speedX;

        // Subtle breeze from mouse
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180 && mouseInfluence > 0.1) {
          const force = (1 - dist / 180) * 1.5 * mouseInfluence;
          p.x += (dx / dist) * force;
          p.y += (dy / dist) * force;
        }

        // Screen loop around
        if (p.y > height + 25) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x < -30) p.x = width + 20;
        if (p.x > width + 30) p.x = -20;

        drawPetal(
          ctx,
          p.x,
          p.y,
          p.size,
          p.rotation,
          p.flip,
          p.color,
          p.opacity
        );
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
      className="pointer-events-none fixed inset-0 z-[2] h-full w-full select-none"
    />
  );
}
