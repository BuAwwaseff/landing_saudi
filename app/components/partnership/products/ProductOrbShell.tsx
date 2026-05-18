import type { ReactNode } from "react";

type ProductOrbShellProps = {
  sizeClass: string;
  label: string;
  labelClassName?: string;
  imageAreaClassName: string;
  strong?: boolean;
  children: ReactNode;
};

export default function ProductOrbShell({
  sizeClass,
  label,
  labelClassName = "",
  imageAreaClassName,
  strong = false,
  children,
}: ProductOrbShellProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-full ${sizeClass}`}
      style={{
        border: strong
          ? "1px solid var(--border-strong)"
          : "1px solid var(--border)",
        background:
          "linear-gradient(180deg, rgba(17,27,23,0.96) 0%, rgba(11,18,16,0.96) 100%)",
        boxShadow: strong ? "var(--shadow-medium)" : "var(--shadow-soft)",
      }}
    >
      <div className={imageAreaClassName}>{children}</div>

      <p
        className={`mt-3 text-sm font-bold sm:text-[15px] ${labelClassName}`}
        style={{ color: "var(--foreground)" }}
      >
        {label}
      </p>
    </div>
  );
}