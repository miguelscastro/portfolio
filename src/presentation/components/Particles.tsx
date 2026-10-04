"use client";

import { useCallback, useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { useMousePosition } from "../hooks/useMousePosition";

interface Circle {
  x: number;
  y: number;
  translateX: number;
  translateY: number;
  size: number;
  alpha: number;
  targetAlpha: number;
  dx: number;
  dy: number;
  magnetism: number;
}

interface ParticlesProps extends React.HTMLAttributes<HTMLDivElement> {
  quantity?: number;
  staticity?: number;
  ease?: number;
  size?: number;
  refresh?: boolean;
  color?: string;
  vx?: number;
  vy?: number;
}

function hexToRgb(hex: string): [number, number, number] {
  let value = hex.replace("#", "");
  if (value.length === 3) {
    value = value
      .split("")
      .map((char) => char + char)
      .join("");
  }
  const int = parseInt(value, 16);
  return [(int >> 16) & 255, (int >> 8) & 255, int & 255];
}

const remap = (v: number, s1: number, e1: number, s2: number, e2: number) => {
  const remapped = ((v - s1) * (e2 - s2)) / (e1 - s1) + s2;
  return remapped > 0 ? remapped : 0;
};

export function Particles({
  className = "",
  quantity = 100,
  staticity = 50,
  ease = 50,
  size = 0.4,
  refresh = false,
  color = "#ffffff",
  vx = 0,
  vy = 0,
  ...props
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const circles = useRef<Circle[]>([]);
  const mouse = useRef({ x: 0, y: 0 });
  const canvasSize = useRef({ w: 0, h: 0 });
  const mousePosition = useMousePosition();

  const circleParams = useCallback((): Circle => {
    const { w, h } = canvasSize.current;
    return {
      x: Math.floor(Math.random() * w),
      y: Math.floor(Math.random() * h),
      translateX: 0,
      translateY: 0,
      size: Math.floor(Math.random() * 2) + size,
      alpha: 0,
      targetAlpha: parseFloat((Math.random() * 0.6 + 0.1).toFixed(1)),
      dx: (Math.random() - 0.5) * 0.1,
      dy: (Math.random() - 0.5) * 0.1,
      magnetism: 0.1 + Math.random() * 4,
    };
  }, [size]);

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const ctx = context.current;
    if (!canvas || !container || !ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvasSize.current = {
      w: container.offsetWidth,
      h: container.offsetHeight,
    };
    const { w, h } = canvasSize.current;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    circles.current = Array.from({ length: quantity }, circleParams);
  }, [quantity, circleParams]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    context.current = canvas.getContext("2d");
    initCanvas();

    const dpr = window.devicePixelRatio || 1;
    const rgb = hexToRgb(color).join(", ");
    let raf = 0;

    const draw = (circle: Circle) => {
      const ctx = context.current;
      if (!ctx) return;
      ctx.translate(circle.translateX, circle.translateY);
      ctx.beginPath();
      ctx.arc(circle.x, circle.y, circle.size, 0, 2 * Math.PI);
      ctx.fillStyle = `rgba(${rgb}, ${circle.alpha})`;
      ctx.fill();
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const animate = () => {
      const { w, h } = canvasSize.current;
      context.current?.clearRect(0, 0, w, h);

      circles.current.forEach((circle, i) => {
        const closestEdge = Math.min(
          circle.x + circle.translateX - circle.size,
          w - circle.x - circle.translateX - circle.size,
          circle.y + circle.translateY - circle.size,
          h - circle.y - circle.translateY - circle.size,
        );
        const edgeFactor = parseFloat(remap(closestEdge, 0, 20, 0, 1).toFixed(2));
        if (edgeFactor > 1) {
          circle.alpha = Math.min(circle.alpha + 0.02, circle.targetAlpha);
        } else {
          circle.alpha = circle.targetAlpha * edgeFactor;
        }
        circle.x += circle.dx + vx;
        circle.y += circle.dy + vy;
        circle.translateX +=
          (mouse.current.x / (staticity / circle.magnetism) - circle.translateX) / ease;
        circle.translateY +=
          (mouse.current.y / (staticity / circle.magnetism) - circle.translateY) / ease;

        draw(circle);

        if (
          circle.x < -circle.size ||
          circle.x > w + circle.size ||
          circle.y < -circle.size ||
          circle.y > h + circle.size
        ) {
          circles.current[i] = circleParams();
        }
      });
      raf = requestAnimationFrame(animate);
    };
    animate();

    let resizeTimeout: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(initCanvas, 200);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", onResize);
    };
  }, [color, vx, vy, staticity, ease, refresh, initCanvas, circleParams]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const { w, h } = canvasSize.current;
    const x = mousePosition.x - rect.left - w / 2;
    const y = mousePosition.y - rect.top - h / 2;
    if (x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2) {
      mouse.current = { x, y };
    }
  }, [mousePosition.x, mousePosition.y]);

  return (
    <div
      className={twMerge("pointer-events-none", className)}
      ref={containerRef}
      aria-hidden="true"
      {...props}
    >
      <canvas ref={canvasRef} className="size-full" />
    </div>
  );
}
