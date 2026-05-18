"use client";

import {
  useRef,
  useState,
  type HTMLAttributes,
  type ReactNode,
  type MouseEvent,
} from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  glareClassName?: string;
  disabled?: boolean;
  maxTilt?: number;
  scaleOnHover?: number;
} & HTMLAttributes<HTMLDivElement>;

export default function TiltCard({
  children,
  className = "",
  innerClassName = "",
  glareClassName = "",
  disabled = false,
  maxTilt = 12,
  scaleOnHover = 1.03,
  onMouseMove,
  onMouseLeave,
  ...props
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const [style, setStyle] = useState({
    transform:
      "perspective(1400px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1) translate3d(0px,0px,0px)",
    glareX: "50%",
    glareY: "50%",
    glareOpacity: 0,
    ringOpacity: 0,
    shadow:
      "0 18px 40px rgba(0,0,0,0.14), 0 0 0 rgba(255,255,255,0), inset 0 1px 0 rgba(255,255,255,0.04)",
  });

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    if (disabled || !ref.current) {
      onMouseMove?.(event);
      return;
    }

    const rect = ref.current.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    const rotateY = (px - 0.5) * maxTilt * 2;
    const rotateX = (0.5 - py) * maxTilt * 2;

    const moveX = (px - 0.5) * 10;
    const moveY = (py - 0.5) * 10;

    const intensityX = Math.abs(px - 0.5);
    const intensityY = Math.abs(py - 0.5);
    const intensity = Math.min(1, (intensityX + intensityY) * 1.65);

    setStyle({
      transform: `perspective(1400px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scaleOnHover}, ${scaleOnHover}, ${scaleOnHover}) translate3d(${moveX}px, ${moveY}px, 0px)`,
      glareX: `${px * 100}%`,
      glareY: `${py * 100}%`,
      glareOpacity: 0.65,
      ringOpacity: 0.35 + intensity * 0.45,
      shadow: `0 ${24 + intensity * 8}px ${46 + intensity * 12}px rgba(0,0,0,0.18),
        0 0 ${18 + intensity * 18}px rgba(255,255,255,${0.06 + intensity * 0.08}),
        inset 0 1px 0 rgba(255,255,255,0.08)`,
    });

    onMouseMove?.(event);
  };

  const handleLeave = (event: MouseEvent<HTMLDivElement>) => {
    setStyle({
      transform:
        "perspective(1400px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1) translate3d(0px,0px,0px)",
      glareX: "50%",
      glareY: "50%",
      glareOpacity: 0,
      ringOpacity: 0,
      shadow:
        "0 18px 40px rgba(0,0,0,0.14), 0 0 0 rgba(255,255,255,0), inset 0 1px 0 rgba(255,255,255,0.04)",
    });

    onMouseLeave?.(event);
  };

  return (
    <div
      ref={ref}
      className={`group relative transform-gpu ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      {...props}
    >
      <div
        className={`relative h-full w-full transform-gpu overflow-hidden rounded-[inherit] transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${innerClassName}`}
        style={{
          transform: style.transform,
          boxShadow: style.shadow,
        }}
      >
        <div
          className={`pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 ${glareClassName}`}
          style={{
            opacity: style.glareOpacity,
            background: `
              radial-gradient(circle at ${style.glareX} ${style.glareY}, rgba(255,255,255,0.34), transparent 20%),
              radial-gradient(circle at ${style.glareX} ${style.glareY}, rgba(255,255,255,0.14), transparent 42%)
            `,
            mixBlendMode: "screen",
          }}
        />

        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
          style={{
            opacity: style.ringOpacity,
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.22), transparent 28%, transparent 72%, rgba(255,255,255,0.16))",
            maskImage:
              "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            WebkitMaskImage:
              "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            padding: "1px",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />

        <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent_28%,transparent_72%,rgba(255,255,255,0.04))]" />

        {children}
      </div>
    </div>
  );
}