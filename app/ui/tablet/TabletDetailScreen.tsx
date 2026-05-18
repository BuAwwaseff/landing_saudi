"use client";

import { tabletScreens, type TabletScreen } from "./tabletData";

type TabletDetailScreenProps = {
  screen: Exclude<TabletScreen, "home">;
  onBack: () => void;
};

function BackIcon() {
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
      <path d="M15 5l-7 7 7 7" />
    </svg>
  );
}

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

function MoreIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <circle cx="5" cy="12" r="1.8" />
      <circle cx="12" cy="12" r="1.8" />
      <circle cx="19" cy="12" r="1.8" />
    </svg>
  );
}

function BarsChart({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: { label: string; value: number }[];
}) {
  return (
    <div className="rounded-[22px] border border-white/8 bg-white/[0.045] p-4">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.24em] text-white/42">
            {eyebrow}
          </p>
          <p className="mt-1 text-sm font-semibold text-white/88">{title}</p>
        </div>
        <span className="rounded-full border border-white/10 bg-black/18 px-2.5 py-1 text-[10px] text-white/52">
          Live
        </span>
      </div>

      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.label}>
            <div className="mb-1.5 flex items-center justify-between text-[11px]">
              <span className="text-white/58">{item.label}</span>
              <span className="font-medium text-white/78">{item.value}%</span>
            </div>

            <div className="h-2.5 rounded-full bg-white/6">
              <div
                className="h-full rounded-full bg-[linear-gradient(90deg,#8b6600,#ffc100)]"
                style={{ width: `${item.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LineChart({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: { label: string; value: number }[];
}) {
  const width = 320;
  const height = 120;
  const padding = 10;
  const max = Math.max(...items.map((item) => item.value));
  const min = Math.min(...items.map((item) => item.value));

  const points = items
    .map((item, index) => {
      const x =
        padding + (index * (width - padding * 2)) / (items.length - 1);
      const y =
        height -
        padding -
        ((item.value - min) / (max - min || 1)) * (height - padding * 2);

      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="rounded-[22px] border border-white/8 bg-white/[0.045] p-4">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.24em] text-white/42">
            {eyebrow}
          </p>
          <p className="mt-1 text-sm font-semibold text-white/88">{title}</p>
        </div>
        <span className="text-[11px] font-medium text-[#ffd65e]">+11.8%</span>
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="h-[120px] w-full">
        <defs>
          <linearGradient id="tablet-detail-line" x1="0%" x2="100%">
            <stop offset="0%" stopColor="rgba(255,193,0,0.38)" />
            <stop offset="100%" stopColor="rgba(255,193,0,1)" />
          </linearGradient>
        </defs>

        {[26, 52, 78, 104].map((y) => (
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
          stroke="url(#tablet-detail-line)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {items.map((item, index) => {
          const x =
            padding + (index * (width - padding * 2)) / (items.length - 1);
          const y =
            height -
            padding -
            ((item.value - min) / (max - min || 1)) * (height - padding * 2);

          return (
            <g key={item.label}>
              <circle cx={x} cy={y} r="4" fill="#ffc100" />
              <text
                x={x}
                y={height - 2}
                textAnchor="middle"
                fill="rgba(255,255,255,0.48)"
                fontSize="10"
              >
                {item.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function MetricsRow({
  metrics,
}: {
  metrics: { label: string; value: string; change?: string }[];
}) {
  return (
    <div className="grid grid-cols-3 gap-3 px-5">
      {metrics.map((metric) => (
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
  );
}

function SummaryCards({
  items,
}: {
  items: { label: string; value: string; note: string }[];
}) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-[20px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,193,0,0.08),rgba(255,255,255,0.03))] p-4"
        >
          <p className="text-[10px] uppercase tracking-[0.22em] text-white/42">
            {item.label}
          </p>
          <p className="mt-2 text-base font-semibold leading-6 tracking-[-0.03em] text-white">
            {item.value}
          </p>
          <p className="mt-2 text-xs leading-5 text-white/56">{item.note}</p>
        </div>
      ))}
    </div>
  );
}

function ProductMarketsCard() {
  const markets = [
    {
      title: "Football",
      note: "Mainstream entry",
      badge: "Top",
    },
    {
      title: "Basketball",
      note: "Fast secondary depth",
      badge: "Live",
    },
    {
      title: "Tennis",
      note: "Daily event flow",
      badge: "Daily",
    },
    {
      title: "Esports",
      note: "Younger audience bridge",
      badge: "Growth",
    },
    {
      title: "Live Casino",
      note: "Session extension",
      badge: "24/7",
    },
    {
      title: "Games",
      note: "Casual entertainment",
      badge: "Wide",
    },
  ];

  return (
    <div className="rounded-[22px] border border-white/8 bg-white/[0.045] p-4">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.24em] text-white/42">
            Market showcase
          </p>
          <p className="mt-1 text-sm font-semibold text-white/88">
            Different customer interests
          </p>
        </div>
        <span className="rounded-full border border-[#ffc100]/28 bg-[#ffc100]/10 px-2.5 py-1 text-[10px] text-[#ffd65e]">
          6 areas
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {markets.map((market) => (
          <div
            key={market.title}
            className="rounded-[18px] border border-white/7 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(0,0,0,0.14))] p-3"
          >
            <div className="mb-5 flex items-start justify-between gap-3">
              <div className="h-9 w-9 rounded-[12px] border border-[#ffc100]/22 bg-[#ffc100]/10" />
              <span className="rounded-full border border-white/10 bg-white/6 px-2 py-1 text-[10px] font-medium text-white/68">
                {market.badge}
              </span>
            </div>

            <p className="text-sm font-semibold text-white/84">{market.title}</p>
            <p className="mt-1 text-xs leading-5 text-white/56">{market.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductFlowCard({
  items,
}: {
  items: { label: string; value: number }[];
}) {
  return (
    <div className="rounded-[22px] border border-white/8 bg-white/[0.045] p-4">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.24em] text-white/42">
            Customer path
          </p>
          <p className="mt-1 text-sm font-semibold text-white/88">
            How product variety builds flow
          </p>
        </div>
        <span className="rounded-full border border-white/10 bg-black/18 px-2.5 py-1 text-[10px] text-white/52">
          Journey
        </span>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {items.slice(0, 4).map((item, index) => (
          <div
            key={item.label}
            className="relative rounded-[18px] border border-white/7 bg-black/18 p-3"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.18em] text-white/42">
                0{index + 1}
              </span>
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffc100]" />
            </div>

            <p className="text-sm font-semibold text-white/84">{item.label}</p>
            <p className="mt-2 text-[11px] leading-5 text-white/54">
              {index === 0
                ? "Initial sports discovery"
                : index === 1
                  ? "Market browsing expands"
                  : index === 2
                    ? "Live action increases engagement"
                    : "Slip and extension behavior begins"}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-3 grid grid-cols-3 gap-3">
        {[
          "Football acts as the broadest entry point.",
          "Live betting keeps attention active after the first click.",
          "Casino and games extend the session inside the same system.",
        ].map((item) => (
          <div
            key={item}
            className="rounded-[16px] border border-white/7 bg-[linear-gradient(180deg,rgba(255,193,0,0.06),rgba(255,255,255,0.02))] px-3 py-2.5 text-xs leading-5 text-white/60"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function ListCard({
  eyebrow,
  title,
  list,
}: {
  eyebrow: string;
  title: string;
  list: { title: string; subtitle: string; value: string }[];
}) {
  return (
    <div className="rounded-[22px] border border-white/8 bg-white/[0.045] p-4">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.24em] text-white/42">
            {eyebrow}
          </p>
          <p className="mt-1 text-sm font-semibold text-white/88">{title}</p>
        </div>

        <span className="rounded-full border border-[#ffc100]/28 bg-[#ffc100]/10 px-2.5 py-1 text-[10px] text-[#ffd65e]">
          Active
        </span>
      </div>

      <div className="space-y-3">
        {list.map((item) => (
          <div
            key={item.title}
            className="rounded-[18px] border border-white/7 bg-black/18 p-3"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-white/84">
                  {item.title}
                </p>
                <p className="mt-1 text-xs leading-5 text-white/56">
                  {item.subtitle}
                </p>
              </div>

              <span className="rounded-full border border-white/10 bg-white/6 px-2 py-1 text-[10px] font-medium text-white/70">
                {item.value}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductsLayout() {
  const data = tabletScreens.products;

  return (
    <>
      <div className="px-5 pb-4 pt-4">
        <p className="max-w-[68ch] text-sm leading-6 text-white/58">
          {data.subtitle}
        </p>
      </div>

      <MetricsRow metrics={data.metrics} />

      <div className="grid flex-1 grid-cols-[1.02fr_0.98fr] gap-4 px-5 py-4">
        <div className="flex flex-col gap-4">
          <ProductMarketsCard />
          <BarsChart
            eyebrow="Customer interest"
            title="Popular entry points"
            items={data.bars}
          />
        </div>

        <div className="flex flex-col gap-4">
          <ProductFlowCard items={data.line} />
          <ListCard
            eyebrow="Experience blocks"
            title="What the customer sees"
            list={data.list}
          />
          <SummaryCards items={data.summaries} />
        </div>
      </div>
    </>
  );
}

function DefaultLayout({
  screen,
}: {
  screen: Exclude<TabletScreen, "home" | "products">;
}) {
  const data = tabletScreens[screen];

  return (
    <>
      <div className="px-5 pb-4 pt-4">
        <p className="max-w-[68ch] text-sm leading-6 text-white/58">
          {data.subtitle}
        </p>
      </div>

      <MetricsRow metrics={data.metrics} />

      <div className="grid flex-1 grid-cols-[1.05fr_0.95fr] gap-4 px-5 py-4">
        <div className="flex flex-col gap-4">
          <BarsChart
            eyebrow="Segment split"
            title="Current share"
            items={data.bars}
          />
          <LineChart
            eyebrow="Performance line"
            title="Direction over time"
            items={data.line}
          />
        </div>

        <div className="flex flex-col gap-4">
          <ListCard
            eyebrow="Live modules"
            title="Current breakdown"
            list={data.list}
          />
          <SummaryCards items={data.summaries} />
        </div>
      </div>
    </>
  );
}

export default function TabletDetailScreen({
  screen,
  onBack,
}: TabletDetailScreenProps) {
  const data = tabletScreens[screen];

  return (
    <div className="flex h-full flex-col bg-[radial-gradient(circle_at_top,rgba(255,193,0,0.08),transparent_24%),linear-gradient(180deg,#0b1117_0%,#0a0f14_100%)]">
      <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/72 transition hover:border-white/16 hover:bg-white/8 hover:text-white"
            aria-label="Go back"
          >
            <BackIcon />
          </button>

          <div>
            <p className="text-[10px] uppercase tracking-[0.24em] text-white/42">
              {data.eyebrow}
            </p>
            <h3 className="mt-1 text-[18px] font-semibold tracking-[-0.03em] text-white">
              {data.title}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/72"
            aria-label="Search"
          >
            <SearchIcon />
          </button>

          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/72"
            aria-label="More"
          >
            <MoreIcon />
          </button>
        </div>
      </div>

      {screen === "products" ? (
        <ProductsLayout />
      ) : (
        <DefaultLayout screen={screen} />
      )}
    </div>
  );
}