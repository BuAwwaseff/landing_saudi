import type { TabletScreen } from "./tabletData";
import { tabletHomeMetrics, tabletHomeTiles } from "./tabletData";

type TabletHomeScreenProps = {
  highlightedSection?: Exclude<TabletScreen, "home">;
  onOpen: (screen: Exclude<TabletScreen, "home">) => void;
};

function SearchIcon() {
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
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16l4.5 4.5" />
    </svg>
  );
}

function BellIcon() {
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
      <path d="M7 17h10" />
      <path d="M9 17v-5a3 3 0 116 0v5" />
      <path d="M6 17h12l-1.2-1.5A3 3 0 0116 13.6V12a4 4 0 10-8 0v1.6a3 3 0 01-.8 1.9L6 17z" />
      <path d="M10.5 19a1.5 1.5 0 003 0" />
    </svg>
  );
}

function MiniLineChart() {
  const values = [26, 34, 31, 48, 52, 64, 70];
  const width = 260;
  const height = 84;
  const padding = 8;

  const max = Math.max(...values);
  const min = Math.min(...values);

  const points = values
    .map((value, index) => {
      const x =
        padding + (index * (width - padding * 2)) / (values.length - 1);
      const y =
        height -
        padding -
        ((value - min) / (max - min || 1)) * (height - padding * 2);

      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="rounded-[22px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.025))] p-4">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.24em] text-white/42">
            Traffic curve
          </p>
          <p className="mt-1 text-sm font-semibold text-white/88">
            Weekly movement
          </p>
        </div>
        <div className="rounded-full border border-[#ffc100]/28 bg-[#ffc100]/10 px-2.5 py-1 text-[10px] font-semibold text-[#ffd65e]">
          +14.6%
        </div>
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="h-[84px] w-full">
        <defs>
          <linearGradient id="tablet-home-line" x1="0%" x2="100%">
            <stop offset="0%" stopColor="rgba(255,193,0,0.45)" />
            <stop offset="100%" stopColor="rgba(255,193,0,1)" />
          </linearGradient>
        </defs>

        {[20, 40, 60].map((y) => (
          <line
            key={y}
            x1="0"
            y1={y}
            x2={width}
            y2={y}
            stroke="rgba(255,255,255,0.08)"
            strokeDasharray="4 6"
          />
        ))}

        <polyline
          points={points}
          fill="none"
          stroke="url(#tablet-home-line)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function TabletHomeScreen({
  highlightedSection,
  onOpen,
}: TabletHomeScreenProps) {
  return (
    <div className="flex h-full flex-col bg-[radial-gradient(circle_at_top,rgba(255,193,0,0.08),transparent_28%),linear-gradient(180deg,#0b1117_0%,#0a0f14_100%)]">
      <div className="flex items-center justify-between px-5 pb-3 pt-4">
        <div>
          <p className="text-[10px] uppercase tracking-[0.24em] text-white/42">
            Saudi partner workspace
          </p>
          <h3 className="mt-1 text-[20px] font-semibold tracking-[-0.03em] text-white">
            Operator dashboard
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/72 transition hover:border-white/16 hover:bg-white/8 hover:text-white"
            aria-label="Search"
          >
            <SearchIcon />
          </button>

          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/72 transition hover:border-white/16 hover:bg-white/8 hover:text-white"
            aria-label="Notifications"
          >
            <BellIcon />
          </button>

          <div className="flex h-9 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5">
            <div className="h-6 w-6 rounded-full bg-[linear-gradient(180deg,#ffc100,#b98400)]" />
            <span className="text-xs font-medium text-white/82">Admin</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 px-5">
        {tabletHomeMetrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-[18px] border border-white/8 bg-white/[0.045] px-4 py-3"
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
              {metric.label}
            </p>
            <div className="mt-2 flex items-end justify-between gap-2">
              <span className="text-lg font-semibold tracking-[-0.03em] text-white">
                {metric.value}
              </span>
              {metric.change ? (
                <span className="text-[11px] font-medium text-[#ffd65e]">
                  {metric.change}
                </span>
              ) : null}
            </div>
          </div>
        ))}
      </div>

      <div className="grid flex-1 grid-cols-[1.15fr_0.85fr] gap-4 px-5 py-4">
        <div className="grid grid-cols-2 gap-3">
          {tabletHomeTiles.map((tile) => {
            const isActive = highlightedSection === tile.id;

            return (
              <button
                key={tile.id}
                type="button"
                onClick={() => onOpen(tile.id)}
                className={`group rounded-[24px] border p-4 text-left transition duration-200 ${
                  isActive
                    ? "border-[#ffc100]/42 bg-[linear-gradient(180deg,rgba(255,193,0,0.12),rgba(255,193,0,0.04))] shadow-[0_12px_30px_rgba(0,0,0,0.22)]"
                    : "border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] hover:border-white/14 hover:bg-white/[0.075]"
                }`}
              >
                <div className="mb-8 flex items-start justify-between">
                  <span
                    className={`rounded-full border px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] ${
                      isActive
                        ? "border-[#ffc100]/36 bg-[#ffc100]/12 text-[#ffd65e]"
                        : "border-white/10 bg-white/5 text-white/50"
                    }`}
                  >
                    {tile.badge}
                  </span>

                  <span className="rounded-full border border-white/10 bg-black/20 px-2 py-1 text-[10px] text-white/42 transition group-hover:text-white/68">
                    Open
                  </span>
                </div>

                <div>
                  <p className="text-lg font-semibold tracking-[-0.03em] text-white">
                    {tile.label}
                  </p>
                  <p className="mt-1 max-w-[18ch] text-sm leading-5 text-white/58">
                    {tile.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="flex flex-col gap-3">
          <MiniLineChart />

          <div className="rounded-[22px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.025))] p-4">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.24em] text-white/42">
                  Live feed
                </p>
                <p className="mt-1 text-sm font-semibold text-white/88">
                  Current activity
                </p>
              </div>
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffc100] shadow-[0_0_18px_rgba(255,193,0,0.45)]" />
            </div>

            <div className="space-y-3">
              {[
                "Sports traffic depth increased after Friday activation",
                "Managed model still leading launch efficiency",
                "Support flow resolution improved this week",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[16px] border border-white/7 bg-black/18 px-3 py-2.5 text-xs leading-5 text-white/62"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto grid grid-cols-4 gap-2 border-t border-white/8 px-5 py-3">
        {["Dashboard", "Reports", "Pipeline", "Profile"].map((item, index) => (
          <div
            key={item}
            className={`rounded-[14px] px-3 py-2 text-center text-[11px] font-medium ${
              index === 0
                ? "border border-[#ffc100]/30 bg-[#ffc100]/10 text-[#ffd65e]"
                : "border border-white/8 bg-white/[0.035] text-white/52"
            }`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}