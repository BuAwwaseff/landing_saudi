import type { ReactNode } from "react";

type SectionSurfaceProps = {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  tone?: "default" | "accent" | "hero";
};

export default function SectionSurface({
  children,
  className = "",
  contentClassName = "",
  tone = "default",
}: SectionSurfaceProps) {
  const toneClass =
    tone === "accent"
      ? "partner-surface--accent"
      : tone === "hero"
        ? "partner-surface--hero"
        : "partner-surface--default";

  return (
    <div className={["partner-surface", toneClass, className].filter(Boolean).join(" ")}>
      <div className="partner-surface__grid" />
      <div className="partner-surface__topline" />
      <div className="partner-surface__glow partner-surface__glow--left" />
      <div className="partner-surface__glow partner-surface__glow--right" />

      <div className={["partner-section-pad", "relative z-[1]", contentClassName].filter(Boolean).join(" ")}>
        {children}
      </div>
    </div>
  );
}
