"use client";

import createGlobe from "cobe";
import { useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

const MOVEMENT_DAMPING = 1400;

const GLOBE_CONFIG = {
  width: 800,
  height: 800,
  devicePixelRatio: 2,
  phi: 1.5,
  theta: -0.5,
  dark: 1,
  diffuse: 0.4,
  mapSamples: 8000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 2] as [number, number, number],
  markerColor: [1.5, 1.5, 10] as [number, number, number],
  glowColor: [0.5, 0.5, 0.6] as [number, number, number],
  markers: [{ location: [-23.9608, -46.3336] as [number, number], size: 0.1 }],
};

export function Globe({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);

  const r = useMotionValue(0);
  const rs = useSpring(r, { mass: 1, damping: 30, stiffness: 100 });

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      r.set(r.get() + (clientX - pointerInteracting.current) / MOVEMENT_DAMPING);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let phi = 0;
    let width = 0;
    const onResize = () => {
      width = canvas.offsetWidth;
    };
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvas, {
      ...GLOBE_CONFIG,
      width: width * 2,
      height: width * 2,
    });

    let raf = 0;
    const render = () => {
      if (!pointerInteracting.current) phi += 0.005;
      globe.update({ phi: phi + rs.get(), width: width * 2, height: width * 2 });
      raf = requestAnimationFrame(render);
    };
    render();

    const fadeIn = setTimeout(() => (canvas.style.opacity = "1"), 0);
    return () => {
      clearTimeout(fadeIn);
      cancelAnimationFrame(raf);
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [rs]);

  return (
    <div
      className={twMerge("mx-auto aspect-[1/1] w-full max-w-[600px]", className)}
    >
      <canvas
        className="size-[30rem] opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        ref={canvasRef}
        onPointerDown={(e) => updatePointerInteraction(e.clientX)}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) => {
          const touch = e.touches[0];
          if (touch) updateMovement(touch.clientX);
        }}
      />
    </div>
  );
}
