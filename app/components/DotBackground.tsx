"use client";
import { useEffect, useRef } from "react";
interface DotBackgroundProps {
  bg?: boolean;
}
export default function DotBackground({bg = true}:DotBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const offscreenCanvasRef = useRef<HTMLCanvasElement | null>(null);

  const DOT_SPACING = 12;
  const DOT_COLOR = "rgba(230, 92, 0, 0.5)";
  const DOT_RADIUS = 0.6;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Create offscreen canvas (draw dots once here)
    const offscreen = document.createElement("canvas");
    offscreen.width = window.innerWidth;
    offscreen.height = document.documentElement.scrollHeight;
    const offCtx = offscreen.getContext("2d");
    if (!offCtx) return;
    offscreenCanvasRef.current = offscreen;

    // Draw dots ONCE on the offscreen canvas
    offCtx.fillStyle = DOT_COLOR;
    const cols = Math.ceil(offscreen.width / DOT_SPACING);
    const rows = Math.ceil(offscreen.height / DOT_SPACING);

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        offCtx.beginPath();
        offCtx.arc(
          x * DOT_SPACING + DOT_SPACING / 2,
          y * DOT_SPACING + DOT_SPACING / 2,
          DOT_RADIUS,
          0,
          Math.PI * 2
        );
        offCtx.fill();
      }
    }

    // Function to draw only visible area (fast blit)
    const drawVisible = () => {
      const scrollY = window.scrollY;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        offscreen,
        0,
        scrollY,
        canvas.width,
        canvas.height,
        0,
        0,
        canvas.width,
        canvas.height
      );
    };

    drawVisible();

    // Scroll handler — super cheap now
    const handleScroll = () => {
      requestAnimationFrame(drawVisible);
    };

    const handleResize = () => {
      // Recompute when window size changes
      offscreen.width = window.innerWidth;
      offscreen.height = document.documentElement.scrollHeight;
      offCtx.fillStyle = DOT_COLOR;
      offCtx.clearRect(0, 0, offscreen.width, offscreen.height);
      const cols = Math.ceil(offscreen.width / DOT_SPACING);
      const rows = Math.ceil(offscreen.height / DOT_SPACING);
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          offCtx.beginPath();
          offCtx.arc(
            x * DOT_SPACING + DOT_SPACING / 2,
            y * DOT_SPACING + DOT_SPACING / 2,
            DOT_RADIUS,
            0,
            Math.PI * 2
          );
          offCtx.fill();
        }
      }
      drawVisible();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`fixed inset-0 z-0 overflow-hidden ${bg ? 'bg-black' : 'bg-transparent'} `}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
    </div>
  );
}
