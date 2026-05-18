"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export type Offer3DVariant =
  | "landing"
  | "visuals"
  | "routing"
  | "promo";

type Offer3DClusterProps = {
  className?: string;
  variant?: Offer3DVariant;
};

type FloatProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  rotate?: number;
};

function Float({
  children,
  className = "",
  delay = 0,
  y = 10,
  rotate = 0,
}: FloatProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 14, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      animate={{
        y: [0, -y, 0],
        rotate: [rotate, rotate + 1.5, rotate],
      }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );
}

function StageFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative aspect-square w-full max-w-[430px]">
      <div className="absolute inset-[10%] rounded-[56px] border border-white/12 bg-[radial-gradient(circle_at_28%_20%,rgba(255,255,255,0.09),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.035),rgba(0,0,0,0.08))] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" />
      <div className="absolute inset-[10%] rounded-[56px] bg-[radial-gradient(circle_at_50%_75%,rgba(255,193,0,0.06),transparent_28%)]" />
      <div className="absolute inset-x-[20%] bottom-[12%] h-[40px] rounded-full bg-black/20 blur-2xl" />
      {children}
    </div>
  );
}

function BrowserPanel() {
  return (
    <div className="relative h-[190px] w-[240px]">
      <div className="absolute inset-0 translate-x-[10px] translate-y-[12px] rounded-[28px] bg-[#1a1f23] shadow-[0_18px_40px_rgba(0,0,0,0.28)]" />
      <div className="absolute inset-0 rounded-[28px] border border-white/12 bg-[linear-gradient(180deg,#f3f2ee_0%,#e9e8e2_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_20px_40px_rgba(0,0,0,0.18)]" />
      <div className="absolute inset-x-[16px] top-[14px] h-[20px] rounded-full bg-[#15191d]" />
      <div className="absolute left-[24px] top-[20px] h-[8px] w-[8px] rounded-full bg-[#ffc100]" />
      <div className="absolute left-[38px] top-[20px] h-[8px] w-[8px] rounded-full bg-[#8b949a]" />
      <div className="absolute left-[52px] top-[20px] h-[8px] w-[8px] rounded-full bg-[#c6ccd0]" />

      <div className="absolute inset-x-[20px] top-[46px] h-[76px] rounded-[22px] bg-[linear-gradient(180deg,#20262b_0%,#14191d_100%)]" />
      <div className="absolute left-[32px] top-[62px] h-[10px] w-[92px] rounded-full bg-white/85" />
      <div className="absolute left-[32px] top-[82px] h-[8px] w-[128px] rounded-full bg-white/28" />
      <div className="absolute right-[30px] top-[58px] h-[38px] w-[58px] rounded-[16px] bg-[linear-gradient(180deg,#d7af45_0%,#bb8d1f_100%)]" />

      <div className="absolute inset-x-[20px] bottom-[18px] grid grid-cols-2 gap-3">
        <div className="rounded-[16px] border border-black/10 bg-[#ecebe5] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]">
          <div className="h-[7px] w-[56px] rounded-full bg-[#1b2024]" />
          <div className="mt-3 h-[10px] w-[72px] rounded-full bg-[#caa52d]" />
        </div>
        <div className="rounded-[16px] border border-black/10 bg-[#ecebe5] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]">
          <div className="h-[7px] w-[48px] rounded-full bg-[#1b2024]" />
          <div className="mt-3 h-[10px] w-[62px] rounded-full bg-[#8b949a]" />
        </div>
      </div>
    </div>
  );
}

function LandingCard() {
  return (
    <div className="relative h-[120px] w-[150px]">
      <div className="absolute inset-0 translate-x-[8px] translate-y-[8px] rounded-[24px] bg-[#1a1f23]" />
      <div className="absolute inset-0 rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,#f2f1ec_0%,#e4e2dd_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.68),0_16px_28px_rgba(0,0,0,0.16)]" />
      <div className="absolute left-[16px] right-[16px] top-[16px] h-[14px] rounded-full bg-[#1b2024]" />
      <div className="absolute left-[16px] right-[28px] top-[42px] h-[8px] rounded-full bg-[#9da4a9]" />
      <div className="absolute left-[16px] right-[44px] top-[58px] h-[8px] rounded-full bg-[#c6ccd0]" />
      <div className="absolute bottom-[16px] left-[16px] h-[26px] w-[66px] rounded-full bg-[linear-gradient(180deg,#d7af45_0%,#bb8d1f_100%)]" />
    </div>
  );
}

function BannerBoard() {
  return (
    <div className="relative h-[180px] w-[228px]">
      <div className="absolute inset-0 translate-x-[10px] translate-y-[10px] rounded-[28px] bg-[#1a1f23]" />
      <div className="absolute inset-0 rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,#f2f1ec_0%,#e5e4de_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_16px_28px_rgba(0,0,0,0.16)]" />
      <div className="absolute inset-x-[18px] top-[18px] h-[92px] rounded-[22px] bg-[linear-gradient(135deg,#20262b_0%,#15191d_100%)]" />
      <div className="absolute left-[34px] top-[42px] h-[14px] w-[80px] rounded-full bg-white/82" />
      <div className="absolute left-[34px] top-[66px] h-[10px] w-[112px] rounded-full bg-white/26" />
      <div className="absolute right-[32px] top-[34px] h-[40px] w-[40px] rounded-full bg-[linear-gradient(180deg,#d7af45_0%,#bb8d1f_100%)]" />
      <div className="absolute inset-x-[18px] bottom-[18px] grid grid-cols-3 gap-2">
        <div className="h-[30px] rounded-[12px] bg-[#1b2024]" />
        <div className="h-[30px] rounded-[12px] bg-[#9aa2a7]" />
        <div className="h-[30px] rounded-[12px] bg-[#caa52d]" />
      </div>
    </div>
  );
}

function MiniBanner() {
  return (
    <div className="relative h-[98px] w-[126px]">
      <div className="absolute inset-0 translate-x-[7px] translate-y-[7px] rounded-[20px] bg-[#1a1f23]" />
      <div className="absolute inset-0 rounded-[20px] border border-white/10 bg-[linear-gradient(180deg,#f1f0eb_0%,#e3e1db_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.68),0_12px_24px_rgba(0,0,0,0.14)]" />
      <div className="absolute inset-x-[14px] top-[14px] h-[46px] rounded-[14px] bg-[linear-gradient(135deg,#1f2529_0%,#12171b_100%)]" />
      <div className="absolute left-[18px] top-[62px] h-[8px] w-[44px] rounded-full bg-[#1b2024]" />
      <div className="absolute right-[18px] top-[58px] h-[18px] w-[28px] rounded-full bg-[#caa52d]" />
    </div>
  );
}

function RoutingBoard() {
  return (
    <div className="relative h-[188px] w-[230px]">
      <div className="absolute inset-0 translate-x-[10px] translate-y-[12px] rounded-[28px] bg-[#1a1f23]" />
      <div className="absolute inset-0 rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,#f3f2ee_0%,#e8e6e0_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_18px_36px_rgba(0,0,0,0.16)]" />
      <div className="absolute left-[34px] top-[42px] h-[18px] w-[18px] rounded-full bg-[#1b2024]" />
      <div className="absolute left-[102px] top-[28px] h-[18px] w-[18px] rounded-full bg-[#caa52d]" />
      <div className="absolute right-[34px] top-[58px] h-[18px] w-[18px] rounded-full bg-[#8b949a]" />
      <div className="absolute left-[78px] bottom-[36px] h-[18px] w-[18px] rounded-full bg-[#1b2024]" />

      <div className="absolute left-[48px] top-[48px] h-[4px] w-[60px] rounded-full bg-[#1b2024]" />
      <div className="absolute left-[116px] top-[40px] h-[4px] w-[56px] rotate-[20deg] rounded-full bg-[#caa52d]" />
      <div className="absolute left-[88px] top-[72px] h-[4px] w-[52px] rotate-[54deg] rounded-full bg-[#9aa2a7]" />
      <div className="absolute left-[34px] bottom-[42px] h-[10px] w-[112px] rounded-full bg-[#d7af45]" />
    </div>
  );
}

function LinkChip() {
  return (
    <div className="relative h-[96px] w-[126px]">
      <div className="absolute inset-0 translate-x-[7px] translate-y-[7px] rounded-[24px] bg-[#1a1f23]" />
      <div className="absolute inset-0 rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,#f2f1ec_0%,#e5e3dd_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.68),0_12px_24px_rgba(0,0,0,0.14)]" />
      <div className="absolute left-[24px] top-[30px] h-[22px] w-[34px] rounded-full border-[6px] border-[#1b2024]" />
      <div className="absolute right-[24px] top-[30px] h-[22px] w-[34px] rounded-full border-[6px] border-[#caa52d]" />
      <div className="absolute left-[54px] top-[38px] h-[6px] w-[18px] rounded-full bg-[#9aa2a7]" />
    </div>
  );
}

function PromoCard() {
  return (
    <div className="relative h-[188px] w-[232px]">
      <div className="absolute inset-0 translate-x-[10px] translate-y-[12px] rounded-[28px] bg-[#1a1f23]" />
      <div className="absolute inset-0 rounded-[28px] border border-white/12 bg-[linear-gradient(180deg,#f3f2ee_0%,#e8e6e0_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_20px_40px_rgba(0,0,0,0.18)]" />
      <div className="absolute inset-x-[18px] top-[20px] h-[24px] rounded-full bg-[#1b2024]" />
      <div className="absolute left-[24px] right-[24px] top-[58px] h-[66px] rounded-[18px] bg-[linear-gradient(135deg,#20262b_0%,#14191d_100%)]" />
      <div className="absolute left-[38px] top-[82px] h-[12px] w-[84px] rounded-full bg-white/82" />
      <div className="absolute right-[34px] top-[72px] rounded-full border border-[#caa52d]/45 bg-[#ffc100]/16 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#6b5100]">
        Code
      </div>
      <div className="absolute inset-x-[18px] bottom-[18px] grid grid-cols-2 gap-3">
        <div className="h-[34px] rounded-[14px] bg-[#caa52d]" />
        <div className="h-[34px] rounded-[14px] bg-[#9aa2a7]" />
      </div>
    </div>
  );
}

function CoinToken() {
  return (
    <div className="relative h-[118px] w-[118px]">
      <div className="absolute inset-0 translate-x-[8px] translate-y-[10px] rounded-full bg-[#1a1f23]" />
      <div className="absolute inset-0 rounded-full border border-white/10 bg-[linear-gradient(180deg,#f2f1ec_0%,#e2e0da_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_16px_30px_rgba(0,0,0,0.18)]" />
      <div className="absolute inset-[14px] rounded-full border border-[#caa52d]/45 bg-[linear-gradient(180deg,#23292e_0%,#161b1f_100%)]" />
      <div className="absolute inset-[30px] rounded-full bg-[linear-gradient(180deg,#ffc100_0%,#b58400_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]" />
      <div className="absolute left-1/2 top-1/2 h-[10px] w-[32px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#fff3c8]" />
    </div>
  );
}

function SecurityTile() {
  return (
    <div className="relative h-[98px] w-[98px]">
      <div className="absolute inset-0 translate-x-[6px] translate-y-[8px] rounded-[24px] bg-[#1a1f23]" />
      <div className="absolute inset-0 rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,#f1f0eb_0%,#e3e1db_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.68),0_12px_24px_rgba(0,0,0,0.16)]" />
      <div className="absolute left-1/2 top-[16px] h-[44px] w-[32px] -translate-x-1/2 rounded-t-[14px] rounded-b-[10px] bg-[linear-gradient(180deg,#1d2327_0%,#12171b_100%)]" />
      <div className="absolute left-1/2 top-[28px] h-[16px] w-[12px] -translate-x-1/2 rounded-full bg-[#ffc100]" />
      <div className="absolute bottom-[16px] left-1/2 h-[6px] w-[40px] -translate-x-1/2 rounded-full bg-[#9aa2a7]" />
    </div>
  );
}

export function OfferLandingShape({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <StageFrame>
        <Float className="absolute left-[14%] top-[18%]" delay={0.06} y={7} rotate={-8}>
          <div className="rotate-[-8deg]">
            <LandingCard />
          </div>
        </Float>

        <Float className="absolute right-[18%] top-[18%]" delay={0.12} y={8} rotate={8}>
          <div className="rotate-[8deg]">
            <SecurityTile />
          </div>
        </Float>

        <Float className="absolute left-[18%] bottom-[16%]" delay={0.18} y={9} rotate={6}>
          <div className="rotate-[6deg]">
            <CoinToken />
          </div>
        </Float>

        <Float className="absolute left-1/2 top-1/2 z-10" delay={0} y={10} rotate={-6}>
          <div className="-translate-x-1/2 -translate-y-1/2 rotate-[-6deg]">
            <BrowserPanel />
          </div>
        </Float>
      </StageFrame>
    </div>
  );
}

export function OfferVisualsShape({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <StageFrame>
        <Float className="absolute left-[16%] top-[18%]" delay={0.08} y={7} rotate={-10}>
          <div className="rotate-[-10deg]">
            <MiniBanner />
          </div>
        </Float>

        <Float className="absolute right-[18%] top-[16%]" delay={0.12} y={9} rotate={8}>
          <div className="rotate-[8deg]">
            <MiniBanner />
          </div>
        </Float>

        <Float className="absolute right-[16%] bottom-[18%]" delay={0.16} y={10} rotate={-8}>
          <div className="rotate-[-8deg]">
            <CoinToken />
          </div>
        </Float>

        <Float className="absolute left-1/2 top-1/2 z-10" delay={0} y={10} rotate={-4}>
          <div className="-translate-x-1/2 -translate-y-1/2 rotate-[-4deg]">
            <BannerBoard />
          </div>
        </Float>
      </StageFrame>
    </div>
  );
}

export function OfferRoutingShape({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <StageFrame>
        <Float className="absolute left-[14%] top-[18%]" delay={0.06} y={7} rotate={-8}>
          <div className="rotate-[-8deg]">
            <LinkChip />
          </div>
        </Float>

        <Float className="absolute right-[16%] top-[20%]" delay={0.1} y={9} rotate={8}>
          <div className="rotate-[8deg]">
            <LinkChip />
          </div>
        </Float>

        <Float className="absolute right-[18%] bottom-[18%]" delay={0.18} y={9} rotate={-8}>
          <div className="rotate-[-8deg]">
            <SecurityTile />
          </div>
        </Float>

        <Float className="absolute left-1/2 top-1/2 z-10" delay={0} y={10} rotate={-6}>
          <div className="-translate-x-1/2 -translate-y-1/2 rotate-[-6deg]">
            <RoutingBoard />
          </div>
        </Float>
      </StageFrame>
    </div>
  );
}

export function OfferPromoShape({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <StageFrame>
        <Float className="absolute left-[16%] top-[18%]" delay={0.08} y={8} rotate={-8}>
          <div className="rotate-[-8deg]">
            <CoinToken />
          </div>
        </Float>

        <Float className="absolute right-[18%] top-[18%]" delay={0.12} y={7} rotate={8}>
          <div className="rotate-[8deg]">
            <SecurityTile />
          </div>
        </Float>

        <Float className="absolute left-[18%] bottom-[18%]" delay={0.16} y={9} rotate={6}>
          <div className="rotate-[6deg]">
            <MiniBanner />
          </div>
        </Float>

        <Float className="absolute left-1/2 top-1/2 z-10" delay={0} y={10} rotate={-6}>
          <div className="-translate-x-1/2 -translate-y-1/2 rotate-[-6deg]">
            <PromoCard />
          </div>
        </Float>
      </StageFrame>
    </div>
  );
}

export default function Offer3DCluster({
  className = "",
  variant = "landing",
}: Offer3DClusterProps) {
  if (variant === "visuals") {
    return <OfferVisualsShape className={className} />;
  }

  if (variant === "routing") {
    return <OfferRoutingShape className={className} />;
  }

  if (variant === "promo") {
    return <OfferPromoShape className={className} />;
  }

  return <OfferLandingShape className={className} />;
}