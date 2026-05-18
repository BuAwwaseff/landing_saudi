"use client";

import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import type { ProductOrbConfig } from "./types";
import ProductsCenterHub, { type ProductsCenterStage } from "./ProductsCenterHub";
import ProductOrb from "./ProductOrb";
import EsportsOrb from "./EsportsOrb";

type ProductItem = {
  title?: string;
  text?: string;
};

type StageVisual = {
  tint: string;
  glow: string;
  pattern: string;
};

const orbitSlots = [
  { left: "80.5%", top: "50%" },
  { left: "50%", top: "75.5%" },
  { left: "19.5%", top: "50%" },
  { left: "50%", top: "24.5%" },
] as const;

function getSlotIndex(baseIndex: number, stage: number) {
  if (stage === 0) return baseIndex;
  return (baseIndex - stage + 4) % 4;
}

export default function ProductsScene({
  orbs,
  items,
  isArabic,
}: {
  orbs: ProductOrbConfig[];
  items: readonly ProductItem[];
  isArabic: boolean;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeStage, setActiveStage] = useState(0);

  const stageContent: ProductsCenterStage[] = useMemo(
    () => [
      {
        mode: "overview",
        eyebrow: isArabic ? "منتجاتنا" : "Our products",
        title: "MELBET",
        body: isArabic
          ? "أربع اتجاهات مترابطة داخل منظومة واحدة."
          : "Four connected directions inside one product ecosystem.",
      },
      {
        mode: "detail",
        eyebrow: isArabic ? "التركيز الحالي" : "Now in focus",
        title: items[0]?.title ?? "Sports",
        body:
          items[0]?.text ??
          (isArabic
            ? "تغطية واسعة ونشاط مباشر وحجم قوي يبني دخول مستمر."
            : "Wide coverage, live activity, and strong volume that creates a steady entry point."),
      },
      {
        mode: "detail",
        eyebrow: isArabic ? "التركيز الحالي" : "Now in focus",
        title: items[1]?.title ?? "Esports",
        body:
          items[1]?.text ??
          (isArabic
            ? "فئات سريعة ومجتمعات رقمية نشطة تضيف طبقة دخول مختلفة."
            : "Fast-moving categories and digital-first communities that add a different entry layer."),
      },
      {
        mode: "detail",
        eyebrow: isArabic ? "التركيز الحالي" : "Now in focus",
        title: items[2]?.title ?? "Casino",
        body:
          items[2]?.text ??
          (isArabic
            ? "بيئة ثانية تساعد على تمديد الجلسة وبناء عمق أكبر داخل المنظومة."
            : "A second environment that helps extend the session and build deeper activity inside the system."),
      },
      {
        mode: "detail",
        eyebrow: isArabic ? "التركيز الحالي" : "Now in focus",
        title: items[3]?.title ?? "Games",
        body:
          items[3]?.text ??
          (isArabic
            ? "طبقة ترفيه أوسع تجعل التجربة أكثر اكتمالاً وتنوعاً."
            : "A broader entertainment layer that makes the full experience feel more complete."),
      },
    ],
    [isArabic, items],
  );

  const stageVisuals: StageVisual[] = useMemo(
    () => [
      {
        tint: "radial-gradient(circle at 50% 50%, rgba(15,107,67,0.22), transparent 52%)",
        glow: "rgba(15,107,67,0.22)",
        pattern: "/products/pattern-overview.png",
      },
      {
        tint: "radial-gradient(circle at 50% 50%, rgba(212,168,79,0.12), transparent 56%)",
        glow: "rgba(212,168,79,0.14)",
        pattern: "/products/pattern-sports.png",
      },
      {
        tint: "radial-gradient(circle at 50% 50%, rgba(15,107,67,0.24), transparent 54%)",
        glow: "rgba(15,107,67,0.22)",
        pattern: "/products/pattern-esports.png",
      },
      {
        tint: "radial-gradient(circle at 50% 50%, rgba(212,168,79,0.14), transparent 56%)",
        glow: "rgba(212,168,79,0.18)",
        pattern: "/products/pattern-casino.png",
      },
      {
        tint: "radial-gradient(circle at 50% 50%, rgba(15,107,67,0.2), transparent 56%)",
        glow: "rgba(15,107,67,0.18)",
        pattern: "/products/pattern-games.png",
      },
    ],
    [],
  );

  const activeVisual = stageVisuals[activeStage];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const nextStage = Math.min(4, Math.floor(latest * 5));
    setActiveStage(nextStage);
  });

  return (
    <section ref={containerRef} className="relative mt-12 h-[500vh]">
      <div className="sticky top-[var(--header-height)] flex h-[calc(100vh-var(--header-height))] items-center justify-center">
        <div
          className="relative mx-auto h-[calc(100%-1.5rem)] w-full max-w-[980px] overflow-hidden rounded-[22px] px-3 py-4 sm:h-[calc(100%-1.75rem)] sm:max-w-[1020px] sm:px-4 sm:py-5 lg:h-[calc(100%-2rem)] lg:max-w-[1060px] lg:px-5 lg:py-5"
          style={{
            border: "1px solid var(--border-soft)",
            background:
              "linear-gradient(180deg, rgba(8,14,12,0.98) 0%, rgba(10,18,15,0.98) 100%)",
            boxShadow: "var(--shadow-medium)",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`pattern-${activeStage}`}
              initial={{ opacity: 0, scale: 1.08, x: 36, filter: "blur(18px)" }}
              animate={{ opacity: 0.34, scale: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.98, x: -22, filter: "blur(14px)" }}
              transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage: `url(${activeVisual.pattern})`,
                backgroundRepeat: "repeat",
                backgroundSize: "240px 240px",
                backgroundPosition: "center",
                mixBlendMode: "screen",
              }}
            />
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`wash-${activeStage}`}
              initial={{ opacity: 0, scale: 1.1, filter: "blur(24px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.96, filter: "blur(18px)" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-none absolute inset-0"
              style={{
                background: activeVisual.tint,
              }}
            />
          </AnimatePresence>

          <motion.div
            key={`woosh-${activeStage}`}
            initial={{ opacity: 0, x: "28%", scaleX: 0.82, filter: "blur(20px)" }}
            animate={{ opacity: [0, 0.5, 0], x: ["28%", "0%", "-24%"], scaleX: [0.82, 1.12, 1.24] }}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute inset-y-[8%] left-[-10%] right-[-10%]"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.03) 20%, rgba(255,193,0,0.09) 48%, rgba(255,255,255,0.03) 78%, transparent 100%)",
            }}
          />

          <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,var(--grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_1px)] [background-size:34px_34px]" />

          <AnimatePresence mode="wait">
            <motion.div
              key={`glow-${activeStage}`}
              initial={{ opacity: 0, scale: 1.08, filter: "blur(40px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.94, filter: "blur(30px)" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-none absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full sm:h-[450px] sm:w-[450px] lg:h-[520px] lg:w-[520px]"
              style={{ background: activeVisual.glow }}
            />
          </AnimatePresence>

          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border sm:h-[490px] sm:w-[490px] lg:h-[560px] lg:w-[560px]"
            style={{ borderColor: "var(--border-soft)" }}
          />

          <div className="relative flex h-full items-center justify-center">
            <ProductsCenterHub stage={stageContent[activeStage]} />

            {orbs.map((orb, index) => {
              const slotIndex = getSlotIndex(index, activeStage);
              const slot = orbitSlots[slotIndex];
              const shouldShowSubset = activeStage === index + 1;

              return orb.key === "esports" ? (
                <EsportsOrb
                  key={orb.key}
                  orb={orb}
                  index={index}
                  slot={slot}
                  showMarketIcons={shouldShowSubset}
                />
              ) : (
                <ProductOrb
                  key={orb.key}
                  orb={orb}
                  index={index}
                  slot={slot}
                  showMarketIcons={shouldShowSubset}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
