import { Children, type CSSProperties, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface OrbitingCirclesProps {
  className?: string;
  children: ReactNode;
  reverse?: boolean;
  duration?: number;
  radius?: number;
  path?: boolean;
  iconSize?: number;
  speed?: number;
}

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
}: OrbitingCirclesProps) {
  const count = Children.count(children);

  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className="stroke-1 stroke-white/10"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}
      {Children.map(children, (child, index) => (
        <div
          style={
            {
              "--duration": duration / speed,
              "--radius": radius,
              "--angle": (360 / count) * index,
              "--icon-size": `${iconSize}px`,
            } as CSSProperties
          }
          className={twMerge(
            "absolute flex size-[var(--icon-size)] transform-gpu animate-orbit items-center justify-center rounded-full",
            reverse && "[animation-direction:reverse]",
            className,
          )}
        >
          {child}
        </div>
      ))}
    </>
  );
}
