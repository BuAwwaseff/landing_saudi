export type TabletScreen = "home" | "offers" | "products" | "models" | "tools";

export type TabletMetric = {
  label: string;
  value: string;
  change?: string;
};

export type TabletBarItem = {
  label: string;
  value: number;
};

export type TabletLinePoint = {
  label: string;
  value: number;
};

export type TabletListItem = {
  title: string;
  subtitle: string;
  value: string;
};

export type TabletSummaryCard = {
  label: string;
  value: string;
  note: string;
};

export type TabletScreenData = {
  id: Exclude<TabletScreen, "home">;
  eyebrow: string;
  title: string;
  subtitle: string;
  metrics: TabletMetric[];
  bars: TabletBarItem[];
  line: TabletLinePoint[];
  list: TabletListItem[];
  summaries: TabletSummaryCard[];
};

export const tabletHomeMetrics: TabletMetric[] = [
  { label: "Active accounts", value: "24.8K", change: "+12.4%" },
  { label: "Weekly turnover", value: "$184K", change: "+8.1%" },
  { label: "Partner yield", value: "37.2%", change: "+4.6%" },
];

export const tabletScreens: Record<
  Exclude<TabletScreen, "home">,
  TabletScreenData
> = {
  offers: {
    id: "offers",
    eyebrow: "Campaign Engine",
    title: "Offers built for targeted acquisition",
    subtitle:
      "Structure campaigns by traffic source, region, and conversion intent without breaking the flow.",
    metrics: [
      { label: "Live campaigns", value: "18", change: "+3" },
      { label: "Avg. CVR", value: "6.8%", change: "+0.9%" },
      { label: "Qualified leads", value: "12.4K", change: "+18%" },
    ],
    bars: [
      { label: "Telegram", value: 82 },
      { label: "WhatsApp", value: 68 },
      { label: "Direct", value: 54 },
      { label: "Referral", value: 61 },
    ],
    line: [
      { label: "Mon", value: 32 },
      { label: "Tue", value: 38 },
      { label: "Wed", value: 45 },
      { label: "Thu", value: 41 },
      { label: "Fri", value: 57 },
      { label: "Sat", value: 63 },
      { label: "Sun", value: 71 },
    ],
    list: [
      {
        title: "High-intent bundles",
        subtitle: "Localized entry points with cleaner CTA sequencing",
        value: "4 live",
      },
      {
        title: "Retention hooks",
        subtitle: "Follow-up sequences attached to early conversions",
        value: "62%",
      },
      {
        title: "Traffic split",
        subtitle: "Priority distribution based on source quality",
        value: "A / B / C",
      },
    ],
    summaries: [
      {
        label: "Best performer",
        value: "Saudi Telegram funnel",
        note: "Highest lead efficiency this week",
      },
      {
        label: "Next action",
        value: "Scale message testing",
        note: "Push stronger first-touch copy",
      },
    ],
  },

  products: {
    id: "products",
    eyebrow: "Customer product view",
    title: "Different markets inside one connected customer flow",
    subtitle:
      "The customer can enter through football, basketball, tennis, esports, casino, or games and still stay inside one consistent product environment.",
    metrics: [
      { label: "Open product areas", value: "6", change: "Live" },
      { label: "Main entry point", value: "Football", change: "Top" },
      { label: "Repeat movement", value: "41%", change: "+7%" },
    ],
    bars: [
      { label: "Football", value: 92 },
      { label: "Basketball", value: 74 },
      { label: "Tennis", value: 68 },
      { label: "Live Casino", value: 61 },
    ],
    line: [
      { label: "Entry", value: 24 },
      { label: "Browse", value: 31 },
      { label: "Live", value: 43 },
      { label: "Slip", value: 49 },
      { label: "Casino", value: 57 },
      { label: "Return", value: 64 },
      { label: "Repeat", value: 72 },
    ],
    list: [
      {
        title: "Football markets",
        subtitle:
          "Match winner, totals, handicaps, live lines, and high-volume event coverage.",
        value: "120+",
      },
      {
        title: "Basketball and tennis",
        subtitle:
          "Strong secondary depth for users who want more than one sports entry point.",
        value: "Daily",
      },
      {
        title: "Casino and games",
        subtitle:
          "A faster entertainment layer that extends the session beyond the first sports visit.",
        value: "1K+",
      },
    ],
    summaries: [
      {
        label: "Best first-touch path",
        value: "Football → Live betting",
        note: "Strongest broad entry for most customer journeys",
      },
      {
        label: "Retention layer",
        value: "Sports + Casino",
        note: "Keeps the customer inside the same system longer",
      },
    ],
  },

  models: {
    id: "models",
    eyebrow: "Delivery Models",
    title: "Choose the operating model and measure its output",
    subtitle:
      "Each model shifts the support level, flow ownership, and scale behavior. The dashboard makes the tradeoff visible.",
    metrics: [
      { label: "Selected model", value: "Managed", change: "Active" },
      { label: "Setup time", value: "4 days", change: "-2 days" },
      { label: "Efficiency index", value: "89", change: "+11" },
    ],
    bars: [
      { label: "Starter", value: 46 },
      { label: "Growth", value: 67 },
      { label: "Managed", value: 84 },
      { label: "Enterprise", value: 71 },
    ],
    line: [
      { label: "W1", value: 18 },
      { label: "W2", value: 24 },
      { label: "W3", value: 37 },
      { label: "W4", value: 43 },
      { label: "W5", value: 56 },
      { label: "W6", value: 61 },
      { label: "W7", value: 74 },
    ],
    list: [
      {
        title: "Managed execution",
        subtitle: "Closer support with cleaner launch structure",
        value: "Primary",
      },
      {
        title: "Growth handoff",
        subtitle: "Balanced ownership for scaling partners",
        value: "67",
      },
      {
        title: "Enterprise routing",
        subtitle: "Best for larger acquisition machines",
        value: "71",
      },
    ],
    summaries: [
      {
        label: "Recommended path",
        value: "Managed → Growth",
        note: "Best ramp for predictable scaling",
      },
      {
        label: "Primary gain",
        value: "Faster launch clarity",
        note: "Less friction in early execution",
      },
    ],
  },

  tools: {
    id: "tools",
    eyebrow: "Operator Stack",
    title: "Tools that support movement, reporting, and scale",
    subtitle:
      "The stack is built to reduce manual friction while keeping the operator view clean and actionable.",
    metrics: [
      { label: "Modules", value: "12", change: "+2" },
      { label: "Auto flows", value: "7", change: "+1" },
      { label: "Response time", value: "4m", change: "-38%" },
    ],
    bars: [
      { label: "Reporting", value: 86 },
      { label: "Tracking", value: 79 },
      { label: "Automation", value: 63 },
      { label: "Support", value: 71 },
    ],
    line: [
      { label: "Mon", value: 24 },
      { label: "Tue", value: 29 },
      { label: "Wed", value: 42 },
      { label: "Thu", value: 39 },
      { label: "Fri", value: 51 },
      { label: "Sat", value: 59 },
      { label: "Sun", value: 66 },
    ],
    list: [
      {
        title: "Campaign reporting",
        subtitle: "Fast visibility into source and outcome quality",
        value: "Live",
      },
      {
        title: "Automation chain",
        subtitle: "Triggers support actions after conversion events",
        value: "7 flows",
      },
      {
        title: "Partner support desk",
        subtitle: "Direct action layer for operational blocks",
        value: "24/7",
      },
    ],
    summaries: [
      {
        label: "Strongest module",
        value: "Reporting layer",
        note: "Highest operational clarity",
      },
      {
        label: "Next upgrade",
        value: "Automation depth",
        note: "Reduce repetitive manual actions",
      },
    ],
  },
};

export const tabletHomeTiles = [
  {
    id: "offers" as const,
    label: "Offers",
    subtitle: "Campaign structure",
    badge: "18 live",
  },
  {
    id: "products" as const,
    label: "Products",
    subtitle: "Unified ecosystem",
    badge: "4 categories",
  },
  {
    id: "models" as const,
    label: "Models",
    subtitle: "Delivery paths",
    badge: "4 modes",
  },
  {
    id: "tools" as const,
    label: "Tools",
    subtitle: "Operator stack",
    badge: "12 modules",
  },
];