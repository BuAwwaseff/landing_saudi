"use client";

import PadMockup from "@/app/ui/TabletMockup";
import {
  SportsIcon,
  EsportsIcon,
  CasinoIcon,
  GamesIcon,
} from "@/app/components/icons/PartnershipIcons";

type ProductItem = {
  title: string;
  text: string;
};

type ProductPhoneShowcaseProps = {
  items?: readonly ProductItem[];
};

const icons = [SportsIcon, EsportsIcon, CasinoIcon, GamesIcon] as const;

export default function ProductShowcase({
  items = [],
}: ProductPhoneShowcaseProps) {
  return (
    <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item, index) => {
        const Icon = icons[index] || SportsIcon;

        return (
          <article
            key={item.title}
            className="flex flex-col items-center text-center"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-[var(--foreground)]">
              <Icon className="h-6 w-6" />
            </div>

            <div className="mb-6 origin-top scale-[0.72] sm:scale-[0.8]">
              <PadMockup
                className="h-[520px] w-[260px]"
                screenClassName="bg-[#0b1018]"
              >
                <PhoneScreen index={index} />
              </PadMockup>
            </div>


          </article>
        );
      })}
    </div>
  );
}

function PhoneScreen({ index }: { index: number }) {
  switch (index) {
    case 0:
      return <SportsScreen />;
    case 1:
      return <EsportsScreen />;
    case 2:
      return <CasinoScreen />;
    case 3:
      return <GamesScreen />;
    default:
      return <SportsScreen />;
  }
}

function AppShell({
  title,
  accentClass,
  children,
}: {
  title: string;
  accentClass: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-[inherit] text-white">
      <div
        className={`absolute inset-0 ${accentClass}`}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.10),transparent_28%,transparent_72%,rgba(0,0,0,0.18))]" />
      <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(to_right,rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:22px_22px]" />

      <div className="relative z-[1] flex h-full flex-col px-4 pb-4 pt-14">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-white/65">
              Live product
            </div>
            <div className="mt-1 text-sm font-extrabold">{title}</div>
          </div>

          <div className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white/75">
            Active
          </div>
        </div>

        {children}
      </div>
    </div>
  );
}

function SportsScreen() {
  return (
    <AppShell
      title="Sports"
      accentClass="bg-[radial-gradient(circle_at_top_left,#2effa4,transparent_30%),radial-gradient(circle_at_bottom_right,#1e90ff,transparent_30%),linear-gradient(180deg,#0c1424_0%,#0a1220_100%)]"
    >
      <div className="rounded-[22px] border border-white/10 bg-black/20 p-3 backdrop-blur-sm">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs font-semibold text-white/70">Live Match</span>
          <span className="rounded-full bg-[#2effa4]/20 px-2 py-1 text-[10px] font-bold text-[#9fffd1]">
            86&apos;
          </span>
        </div>

        <div className="space-y-2">
          <MatchRow team="Real Madrid" odd="2.10" />
          <MatchRow team="Barcelona" odd="1.84" />
        </div>

        <div className="mt-3 h-24 rounded-[18px] bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.03))] p-3">
          <div className="mb-2 text-[11px] text-white/65">Market movement</div>
          <div className="flex h-full items-end gap-2">
            <div className="h-[28%] w-full rounded-t bg-[#2effa4]/65" />
            <div className="h-[42%] w-full rounded-t bg-[#41b6ff]/70" />
            <div className="h-[55%] w-full rounded-t bg-[#2effa4]/80" />
            <div className="h-[38%] w-full rounded-t bg-[#41b6ff]/75" />
            <div className="h-[72%] w-full rounded-t bg-[#2effa4]" />
            <div className="h-[60%] w-full rounded-t bg-[#41b6ff]" />
          </div>
        </div>
      </div>
    </AppShell>
  );
}

function MatchRow({ team, odd }: { team: string; odd: string }) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-white/8 px-3 py-2.5">
      <span className="text-sm font-medium">{team}</span>
      <span className="rounded-xl bg-white/12 px-2.5 py-1 text-xs font-bold">
        {odd}
      </span>
    </div>
  );
}

function EsportsScreen() {
  return (
    <AppShell
      title="Esports"
      accentClass="bg-[radial-gradient(circle_at_top_right,#8b5cf6,transparent_30%),radial-gradient(circle_at_bottom_left,#00d2ff,transparent_28%),linear-gradient(180deg,#0f1020_0%,#13152a_100%)]"
    >
      <div className="rounded-[22px] border border-white/10 bg-black/20 p-3 backdrop-blur-sm">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-white/55">
              CS2
            </div>
            <div className="mt-1 text-base font-extrabold">NAVI vs FAZE</div>
          </div>
          <div className="h-10 w-10 rounded-xl bg-[linear-gradient(135deg,#8b5cf6,#00d2ff)]" />
        </div>

        <div className="space-y-2">
          <TeamRow team="NAVI" odd="1.92" color="bg-[#8b5cf6]/25 text-[#d9c8ff]" />
          <TeamRow team="FAZE" odd="1.88" color="bg-[#00d2ff]/25 text-[#b7f3ff]" />
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <MiniStat label="Matches" value="18" />
          <MiniStat label="Live now" value="6" />
        </div>
      </div>
    </AppShell>
  );
}

function TeamRow({
  team,
  odd,
  color,
}: {
  team: string;
  odd: string;
  color: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-white/8 px-3 py-2.5">
      <span className="text-sm font-medium">{team}</span>
      <span className={`rounded-xl px-2.5 py-1 text-xs font-bold ${color}`}>
        {odd}
      </span>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/8 p-3 text-center">
      <div className="text-[11px] text-white/60">{label}</div>
      <div className="mt-1 text-xl font-extrabold">{value}</div>
    </div>
  );
}

function CasinoScreen() {
  return (
    <AppShell
      title="Casino"
      accentClass="bg-[radial-gradient(circle_at_top_left,#ffb703,transparent_28%),radial-gradient(circle_at_bottom_right,#ff006e,transparent_30%),linear-gradient(180deg,#1b1020_0%,#120a15_100%)]"
    >
      <div className="grid grid-cols-2 gap-3">
        <CasinoTile label="Slots" bg="bg-[linear-gradient(135deg,#ffb703,#ff7b00)]" />
        <CasinoTile label="Live" bg="bg-[linear-gradient(135deg,#ff006e,#ff4d8d)]" />
        <CasinoTile label="Roulette" bg="bg-[linear-gradient(135deg,#6a4c93,#b5179e)]" />
        <CasinoTile label="Blackjack" bg="bg-[linear-gradient(135deg,#8338ec,#3a86ff)]" />
      </div>

      <div className="mt-4 rounded-[22px] border border-white/10 bg-black/20 p-3 backdrop-blur-sm">
        <div className="text-[11px] uppercase tracking-[0.16em] text-white/55">
          Featured
        </div>
        <div className="mt-1 text-lg font-extrabold">Premium live tables</div>
        <div className="mt-3 flex gap-2">
          <div className="h-2 w-2 rounded-full bg-[#ffb703]" />
          <div className="h-2 w-2 rounded-full bg-[#ff006e]" />
          <div className="h-2 w-2 rounded-full bg-[#8338ec]" />
        </div>
      </div>
    </AppShell>
  );
}

function CasinoTile({ label, bg }: { label: string; bg: string }) {
  return (
    <div
      className={`relative flex h-24 items-end overflow-hidden rounded-[20px] p-3 text-left ${bg}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.24),transparent_48%)]" />
      <span className="relative z-[1] text-sm font-extrabold">{label}</span>
    </div>
  );
}

function GamesScreen() {
  return (
    <AppShell
      title="Games"
      accentClass="bg-[radial-gradient(circle_at_top,#00f5d4,transparent_26%),radial-gradient(circle_at_bottom_right,#ffd166,transparent_28%),linear-gradient(180deg,#0d1b1f_0%,#0a1114_100%)]"
    >
      <div className="space-y-3">
        <GameRow
          title="Crash Arena"
          color="bg-[linear-gradient(135deg,#00f5d4,#00bbf9)]"
        />
        <GameRow
          title="Turbo Wheel"
          color="bg-[linear-gradient(135deg,#ffd166,#ff9f1c)]"
        />
        <GameRow
          title="Lucky Dice"
          color="bg-[linear-gradient(135deg,#80ed99,#38b000)]"
        />
      </div>

      <div className="mt-4 rounded-[22px] border border-white/10 bg-black/20 p-3 backdrop-blur-sm">
        <div className="text-[11px] uppercase tracking-[0.16em] text-white/55">
          Session
        </div>
        <div className="mt-1 text-lg font-extrabold">Fast casual play</div>
      </div>
    </AppShell>
  );
}

function GameRow({
  title,
  color,
}: {
  title: string;
  color: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-[20px] border border-white/10 bg-white/8 p-3">
      <div className={`h-11 w-11 rounded-xl ${color}`} />
      <div className="flex-1 text-left">
        <div className="text-sm font-bold">{title}</div>
        <div className="text-xs text-white/60">Popular right now</div>
      </div>
    </div>
  );
}
