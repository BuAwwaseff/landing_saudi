import type { HTMLAttributes, ReactNode } from "react";
import TiltCard from "./TiltCard";

type CardProps = {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  glow?: boolean;
  tilt?: boolean;
  hoverLift?: boolean;
  as?: "div" | "article" | "section";
  surface?: "default" | "soft" | "transparent";
} & HTMLAttributes<HTMLElement>;

export default function Card({
  children,
  className = "",
  contentClassName = "",
  glow = true,
  tilt = false,
  hoverLift = true,
  as = "div",
  surface = "default",
  ...props
}: CardProps) {
  const Tag = as;

  const surfaceClassName =
    surface === "transparent"
      ? "bg-transparent backdrop-blur-0"
      : surface === "soft"
        ? "bg-white/[0.04] backdrop-blur-md"
        : "bg-white/[0.08] backdrop-blur-xl";

  const shellClassName = [
    "relative overflow-hidden rounded-[26px] border border-white/14",
    surfaceClassName,
    "shadow-[0_18px_50px_rgba(0,0,0,0.14)]",
    hoverLift ? "transition-all duration-300 ease-out hover:-translate-y-[3px]" : "",
    glow
      ? "before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_48%)] before:opacity-80"
      : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <Tag className={shellClassName} {...props}>
      <div className={`relative z-[1] ${contentClassName}`}>{children}</div>
    </Tag>
  );

  if (!tilt) return content;

  return (
    <TiltCard className="h-full" innerClassName="h-full">
      {content}
    </TiltCard>
  );
}