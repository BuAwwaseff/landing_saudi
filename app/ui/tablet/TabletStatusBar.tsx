type TabletStatusBarProps = {
  title?: string;
};

function SignalIcon() {
  return (
    <div className="flex items-end gap-[2px]">
      <span className="h-[5px] w-[3px] rounded-[2px] bg-white/80" />
      <span className="h-[7px] w-[3px] rounded-[2px] bg-white/80" />
      <span className="h-[9px] w-[3px] rounded-[2px] bg-white/80" />
      <span className="h-[11px] w-[3px] rounded-[2px] bg-white/50" />
    </div>
  );
}

function WifiIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 9.5C9.5 6 14.5 6 19 9.5" />
      <path d="M7.5 12.5c3-2.3 6-2.3 9 0" />
      <path d="M10.5 15.7c1.1-.8 1.9-.8 3 0" />
      <circle cx="12" cy="18" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function BatteryIcon() {
  return (
    <div className="flex items-center gap-1">
      <div className="relative h-[12px] w-[24px] rounded-[3px] border border-white/60">
        <div className="absolute inset-y-[2px] left-[2px] w-[15px] rounded-[2px] bg-white/80" />
      </div>
      <div className="h-[6px] w-[2px] rounded-full bg-white/60" />
    </div>
  );
}

export default function TabletStatusBar({
  title = "13:48",
}: TabletStatusBarProps) {
  return (
    <div className="flex h-9 items-center justify-between border-b border-white/8 px-5 text-[11px] font-medium text-white/72">
      <div className="flex items-center gap-2">
        <span className="tracking-[0.18em] text-white/84">{title}</span>
        <span className="rounded-full border border-white/10 bg-white/5 px-2 py-[2px] text-[9px] uppercase tracking-[0.22em] text-white/55">
          Secure
        </span>
      </div>

      <div className="flex items-center gap-3 text-white/78">
        <SignalIcon />
        <WifiIcon />
        <BatteryIcon />
      </div>
    </div>
  );
}