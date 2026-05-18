import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function BaseIcon({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function DeviceIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="3.5" y="5" width="17" height="12" rx="2.5" />
      <path d="M8 20.5h8" />
      <path d="M10 17v3.5" />
      <path d="M14 17v3.5" />
    </BaseIcon>
  );
}

export function CommissionIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M9 15.5l6-7" />
      <path d="M9.5 9.5h.01" />
      <path d="M14.5 14.5h.01" />
    </BaseIcon>
  );
}

export function LaunchSupportIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 3.5c3.7 0 6.8 3 6.8 6.8 0 5.2-6.8 10.2-6.8 10.2S5.2 15.5 5.2 10.3c0-3.8 3-6.8 6.8-6.8Z" />
      <path d="M12 8v4" />
      <path d="M12 12l2.2-2.2" />
    </BaseIcon>
  );
}

export function ManagerIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5.5 19c.8-3 3.3-4.8 6.5-4.8s5.7 1.8 6.5 4.8" />
      <path d="M19 7.5h2" />
      <path d="M20 6.5v2" />
    </BaseIcon>
  );
}

export function PromoIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M7 4.5h10a2.5 2.5 0 0 1 2.5 2.5v3H4.5V7A2.5 2.5 0 0 1 7 4.5Z" />
      <path d="M4.5 10H19.5V17A2.5 2.5 0 0 1 17 19.5H7A2.5 2.5 0 0 1 4.5 17V10Z" />
      <path d="M12 4.5v15" />
      <path d="M9.2 7.5c0-1 1-1.8 2.8 0" />
      <path d="M14.8 7.5c0-1-1-1.8-2.8 0" />
    </BaseIcon>
  );
}

export function PayoutIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="3.5" y="6.5" width="17" height="11" rx="2.5" />
      <path d="M7 12h5" />
      <path d="M7 9.5h8" />
      <circle cx="17" cy="12" r="1.5" />
    </BaseIcon>
  );
}

export function SportsIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 3.5v17" />
      <path d="M3.8 9.5h16.4" />
      <path d="M3.8 14.5h16.4" />
      <path d="M7.5 4.6c1.2 1.6 2 4 2 7.4s-.8 5.8-2 7.4" />
      <path d="M16.5 4.6c-1.2 1.6-2 4-2 7.4s.8 5.8 2 7.4" />
    </BaseIcon>
  );
}

export function EsportsIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M7 8.5 4.5 12 7 15.5h7.5l2.5-3.5-2.5-3.5Z" />
      <path d="M14.5 8.5h3l2 3.5-2 3.5h-3" />
      <path d="M9 10.5h.01" />
      <path d="M12 13.5h.01" />
    </BaseIcon>
  );
}

export function CasinoIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 20s-6.5-3.8-6.5-9.2a3.7 3.7 0 0 1 6.5-2.3 3.7 3.7 0 0 1 6.5 2.3C18.5 16.2 12 20 12 20Z" />
      <path d="M12 8.3v6.2" />
      <path d="M9.8 10.5h4.4" />
    </BaseIcon>
  );
}

export function GamesIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="4" y="8" width="16" height="8" rx="4" />
      <path d="M8.5 12h3" />
      <path d="M10 10.5v3" />
      <circle cx="15.5" cy="11" r=".7" fill="currentColor" stroke="none" />
      <circle cx="17.5" cy="13" r=".7" fill="currentColor" stroke="none" />
    </BaseIcon>
  );
}

export function LandingPageIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="4" y="4.5" width="16" height="15" rx="2.5" />
      <path d="M4 8.5h16" />
      <path d="M7 12h6" />
      <path d="M7 15h10" />
      <path d="M15.5 6.5h.01" />
    </BaseIcon>
  );
}

export function BannerIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="3.5" y="6" width="17" height="10" rx="2.5" />
      <path d="M7 16v3" />
      <path d="M17 16v3" />
      <path d="M7 10h5" />
      <path d="M7 12.8h8" />
    </BaseIcon>
  );
}

export function LinkIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M10 13.8 8.2 15.6a3.2 3.2 0 1 1-4.5-4.5l3-3a3.2 3.2 0 0 1 4.5 0" />
      <path d="M14 10.2l1.8-1.8a3.2 3.2 0 1 1 4.5 4.5l-3 3a3.2 3.2 0 0 1-4.5 0" />
      <path d="M9 15l6-6" />
    </BaseIcon>
  );
}

export function PromoCodeIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M8 6.5h8l3 3v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2Z" />
      <path d="M8 6.5v4h8v-4" />
      <path d="M10 15h4" />
    </BaseIcon>
  );
}

export function TrackingIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 20.5a8.5 8.5 0 1 0-8.5-8.5" />
      <path d="M12 15a3 3 0 1 0-3-3" />
      <path d="M12 12l5-5" />
      <circle cx="17" cy="7" r="1.2" fill="currentColor" stroke="none" />
    </BaseIcon>
  );
}

export function FeedIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M6 17.5a1.5 1.5 0 1 0 0 .01Z" />
      <path d="M5.5 12.5a6 6 0 0 1 6 6" />
      <path d="M5.5 8a10.5 10.5 0 0 1 10.5 10.5" />
      <path d="M5.5 3.5A15 15 0 0 1 20.5 18.5" />
    </BaseIcon>
  );
}