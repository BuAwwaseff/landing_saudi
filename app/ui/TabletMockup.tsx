"use client";

import {
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
  type CSSProperties,
} from "react";

type TabletMockupProps = {
  children?: ReactNode;
  className?: string;
  frameClassName?: string;
  screenClassName?: string;
  interactive?: boolean;
  glare?: boolean;
  ratio?: "landscape" | "portrait";
};

type ShellStyleState = {
  transform: string;
  glareX: string;
  glareY: string;
  glareOpacity: number;
};

const LANDSCAPE_SIZE = "h-[680px] w-[940px]";
const PORTRAIT_SIZE = "h-[920px] w-[660px]";
const BASE_SHELL_STATE: ShellStyleState = {
  transform: "perspective(1800px) rotateX(0deg) rotateY(0deg)",
  glareX: "50%",
  glareY: "50%",
  glareOpacity: 0,
};

export default function TabletMockup({
  children,
  className = "",
  frameClassName = "",
  screenClassName = "",
  interactive = true,
  glare = true,
  ratio = "landscape",
}: TabletMockupProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shellStyle, setShellStyle] = useState<ShellStyleState>(BASE_SHELL_STATE);

  const sizeClass = ratio === "portrait" ? PORTRAIT_SIZE : LANDSCAPE_SIZE;

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!interactive || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    const rotateY = (px - 0.5) * 8;
    const rotateX = (0.5 - py) * 8;

    setShellStyle({
      transform: `perspective(1800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      glareX: `${px * 100}%`,
      glareY: `${py * 100}%`,
      glareOpacity: glare ? 0.36 : 0,
    });
  };

  const handleLeave = () => {
    setShellStyle(BASE_SHELL_STATE);
  };

  const glareStyle: CSSProperties = {
    opacity: shellStyle.glareOpacity,
    background: `radial-gradient(circle at ${shellStyle.glareX} ${shellStyle.glareY}, rgba(255,255,255,0.16), transparent 34%)`,
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`relative ${sizeClass} max-w-full ${className}`}
      style={{
        transform: shellStyle.transform,
        transition: "transform 220ms ease-out",
        transformStyle: "preserve-3d",
      }}
    >
      <div className="absolute inset-x-[10%] bottom-[-30px] h-[72px] rounded-full bg-black/28 blur-3xl" />

      <div
        className={`relative h-full w-full overflow-hidden rounded-[42px] border border-[#5d6865] p-[14px] ${frameClassName}`}
        style={{
          background:
            "linear-gradient(180deg,#636d6b 0%,#596261 18%,#4f5857 45%,#444c4b 75%,#3a4140 100%)",
          boxShadow:
            "0 28px 70px rgba(0,0,0,0.26), inset 0 1px 0 rgba(255,255,255,0.14), inset 0 -1px 0 rgba(0,0,0,0.2)",
        }}
      >
        <div className="pointer-events-none absolute inset-0 rounded-[42px]">
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.45)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.28)_1px,transparent_1px)] [background-size:28px_28px]" />
          <div className="absolute inset-x-0 top-0 h-[84px] bg-[linear-gradient(180deg,rgba(255,255,255,0.12),transparent)]" />
          <div className="absolute inset-y-0 left-0 w-[26px] bg-[linear-gradient(90deg,rgba(255,255,255,0.08),transparent)]" />
          <div className="absolute inset-y-0 right-0 w-[26px] bg-[linear-gradient(270deg,rgba(0,0,0,0.16),transparent)]" />
        </div>

        <div className="pointer-events-none absolute left-1/2 top-[18px] z-20 h-[10px] w-[10px] -translate-x-1/2 rounded-full border border-black/40 bg-[#141716] shadow-[0_0_0_2px_rgba(255,255,255,0.04)]" />

        {glare ? (
          <div
            className="pointer-events-none absolute inset-0 rounded-[42px]"
            style={glareStyle}
          />
        ) : null}

        <div className="pointer-events-none absolute inset-[14px] rounded-[30px] border border-white/7" />

        <div
          className={`relative h-full w-full overflow-hidden rounded-[30px] border border-white/6 bg-[#0a0f14] ${screenClassName}`}
          style={{
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -1px 0 rgba(0,0,0,0.18)",
          }}
        >
          <div className="pointer-events-none absolute inset-0 z-10 rounded-[30px] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_14%,transparent_82%,rgba(0,0,0,0.14))]" />
          <div className="relative z-0 h-full w-full">{children}</div>
        </div>
      </div>
    </div>
  );
}