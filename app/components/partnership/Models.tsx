"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import { useLanguage } from "@/app/providers/LanguageContext";
import TabletMockup from "@/app/ui/TabletMockup";

type Scenario = {
  tone: string;
  summary: string;
  markers: string[];
  stats: {
    label: string;
    value: string;
    note: string;
  }[];
  bars: number[];
  linePoints: string;
  chartLabel: string;
  sectionTitle: string;
  rangeLabel: string;
  dashboardRows: {
    label: string;
    value: string;
    note: string;
  }[];
  noteCards: {
    title: string;
    text: string;
  }[];
};

type BrowserTabProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};

const modelTabs = ["CPA", "Rev Share", "Hybrid"] as const;

const ui = {
  shellPad: "p-[clamp(0.75rem,1vw,1.25rem)]",
  cardPad: "p-[clamp(0.875rem,1vw,1rem)]",
  radius: "rounded-[18px] sm:rounded-[20px] lg:rounded-[22px]",
  label:
    "text-[10px] uppercase tracking-[0.16em] sm:text-[11px]",
  value:
    "mt-2 text-[clamp(1rem,1.8vw,1.35rem)] font-black tracking-[-0.03em]",
  body:
    "text-[13px] leading-6 sm:text-sm sm:leading-7",
};

function BrowserTab({ label, isActive, onClick }: BrowserTabProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="min-h-[40px] rounded-t-[14px] px-3 text-xs font-bold transition-all duration-300 sm:min-h-[42px] sm:px-4 sm:text-sm"
      style={{
        color: isActive ? "var(--foreground)" : "var(--foreground-muted)",
        background: isActive ? "rgba(243,241,234,0.08)" : "transparent",
        border: isActive ? "1px solid var(--border)" : "1px solid transparent",
        borderBottom: "1px solid transparent",
      }}
    >
      {label}
    </button>
  );
}

function BrowserControl({
  type,
}: {
  type: "minimize" | "maximize" | "close";
}) {
  const styles =
    type === "minimize"
      ? {
          background: "rgba(212,168,79,0.18)",
          borderColor: "rgba(212,168,79,0.4)",
        }
      : type === "maximize"
        ? {
            background: "rgba(15,107,67,0.18)",
            borderColor: "rgba(15,107,67,0.4)",
          }
        : {
            background: "rgba(255,255,255,0.14)",
            borderColor: "rgba(255,255,255,0.22)",
          };

  return (
    <span
      className="inline-flex h-3.5 w-3.5 rounded-full border"
      style={styles}
      aria-hidden="true"
    />
  );
}

function FadeBlock({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
      transition={{ duration: 0.34, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Models() {
  const { t, isArabic } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const scenarios: Scenario[] = useMemo(
    () => [
      {
        tone: isArabic ? "دفعة أوضح في البداية" : "Cleaner early return",
        summary: isArabic
          ? "هذا النموذج يعطي قراءة أسرع في البداية. مناسب إذا كانت أولويتك تشوف نتيجة واضحة من أول مرحلة وتبني بعدها."
          : "This model gives a clearer early read. It works well when the first priority is seeing a direct starting result before scaling further.",
        markers: isArabic
          ? ["بداية أسرع", "قراءة أوضح", "مناسب للإطلاق"]
          : ["Faster start", "Clearer read", "Launch-friendly"],
        stats: [
          {
            label: isArabic ? "المبلغ" : "Amount",
            value: "$45",
            note: isArabic ? "لكل تحويل مؤهل" : "Per qualified action",
          },
          {
            label: isArabic ? "الويجر" : "Wager",
            value: "$12.8K",
            note: isArabic ? "إجمالي النشاط" : "Tracked volume",
          },
          {
            label: isArabic ? "البيس لاين" : "Baseline",
            value: "3.6%",
            note: isArabic ? "معدل الأساس" : "Starting rate",
          },
        ],
        bars: [44, 58, 66, 74, 83, 91],
        linePoints: "48,56 88,44 128,36 168,28 208,22",
        chartLabel: isArabic ? "كفاءة CPA" : "CPA efficiency",
        sectionTitle: isArabic ? "ملخص الحساب" : "Account snapshot",
        rangeLabel: isArabic ? "دفعة ثابتة لكل تحويل" : "Fixed amount per conversion",
        dashboardRows: [
          {
            label: isArabic ? "تحويلات معتمدة" : "Approved conversions",
            value: "286",
            note: isArabic ? "آخر 30 يوم" : "Last 30 days",
          },
          {
            label: isArabic ? "مستخدمون نشطون" : "Active players",
            value: "1,240",
            note: isArabic ? "حركة حالية" : "Current flow",
          },
          {
            label: isArabic ? "متوسط تكلفة" : "Average cost",
            value: "$19",
            note: isArabic ? "لكل تسجيل" : "Per signup",
          },
          {
            label: isArabic ? "أفضل قناة" : "Best source",
            value: isArabic ? "سوشال مباشر" : "Direct social",
            note: isArabic ? "الأعلى هذا الأسبوع" : "Top this week",
          },
        ],
        noteCards: [
          {
            title: isArabic ? "قراءة أولية أسرع" : "Faster first reading",
            text: isArabic
              ? "يعطيك صورة مباشرة عن البداية، وهذا يساعد في تعديل المسار بسرعة."
              : "It gives a quicker early reading, which helps you adjust the path faster.",
          },
          {
            title: isArabic ? "أفضل مع حملات واضحة" : "Best with direct campaigns",
            text: isArabic
              ? "مفيد أكثر لما تكون القناة والإجراء المطلوب واضحين من البداية."
              : "It works best when the traffic source and desired action are both clear from the start.",
          },
        ],
      },
      {
        tone: isArabic ? "نمو يتوسع مع القيمة" : "Growth through retained value",
        summary: isArabic
          ? "هذا النموذج يناسب الشركاء الذين يريدون بناء قيمة أكبر مع الوقت، خصوصًا إذا كان الهدف هو الاستمرارية وليس فقط النتيجة الأولى."
          : "This model fits partners who want to build larger value over time, especially when the goal is continuity rather than only the first result.",
        markers: isArabic
          ? ["استمرارية", "قيمة متراكمة", "أفضل مع التوسع"]
          : ["Retention-led", "Compounding value", "Best at scale"],
        stats: [
          {
            label: isArabic ? "بداية النسبة" : "Share start",
            value: "25%",
            note: isArabic ? "الحد الابتدائي" : "Starting tier",
          },
          {
            label: isArabic ? "النسبة الحالية" : "Current share",
            value: "38%",
            note: isArabic ? "بعد التقدم" : "Current level",
          },
          {
            label: isArabic ? "أعلى نسبة" : "Max share",
            value: "50%",
            note: isArabic ? "السقف الأعلى" : "Top band",
          },
        ],
        bars: [25, 30, 34, 39, 45, 50],
        linePoints: "48,72 88,62 128,50 168,34 208,20",
        chartLabel: isArabic ? "مسار Rev Share" : "Rev Share track",
        sectionTitle: isArabic ? "مستوى النسبة" : "Share dashboard",
        rangeLabel: isArabic ? "من 25% إلى 50%" : "From 25% to 50%",
        dashboardRows: [
          {
            label: isArabic ? "قيمة اللاعبين" : "Player value",
            value: "$18.4K",
            note: isArabic ? "آخر 30 يوم" : "Last 30 days",
          },
          {
            label: isArabic ? "الاحتفاظ" : "Retention",
            value: "42%",
            note: isArabic ? "أفضل من الخط الأساسي" : "Above baseline",
          },
          {
            label: isArabic ? "أفضل مجموعة" : "Strongest cohort",
            value: isArabic ? "الرياضات المباشرة" : "Live sports",
            note: isArabic ? "أعلى عمق" : "Highest depth",
          },
          {
            label: isArabic ? "التدرج القادم" : "Next tier target",
            value: "45%",
            note: isArabic ? "قريب من الوصول" : "Within reach",
          },
        ],
        noteCards: [
          {
            title: isArabic ? "أفضل مع الوقت" : "Stronger over time",
            text: isArabic
              ? "القيمة هنا تكبر أكثر لما يكون عندك استبقاء جيد وحركة مستمرة."
              : "The value here gets stronger when retention is healthy and player movement stays active.",
          },
          {
            title: isArabic ? "يبني قاعدة أقوى" : "Builds a stronger base",
            text: isArabic
              ? "مفيد إذا كان هدفك تبني دخل يتوسع مع الجودة وليس فقط مع الكمية."
              : "It fits teams aiming to build income that grows with quality, not only volume.",
          },
        ],
      },
      {
        tone: isArabic ? "توازن بين السرعة والاستمرارية" : "Balanced return profile",
        summary: isArabic
          ? "هذا النموذج يناسب من يريد دفعة أولية جيدة مع الاحتفاظ بجزء من النمو على المدى الأطول داخل نفس الإعداد."
          : "This model fits teams that want a good early push while still keeping part of the longer-term growth inside the same setup.",
        markers: isArabic
          ? ["مرن", "متوازن", "مناسب للاختبار والنمو"]
          : ["Flexible", "Balanced", "Good for testing and growth"],
        stats: [
          {
            label: isArabic ? "طبقة CPA" : "CPA layer",
            value: "$20",
            note: isArabic ? "دفع أولي" : "Front payment",
          },
          {
            label: isArabic ? "طبقة النسبة" : "Share layer",
            value: "30%",
            note: isArabic ? "نسبة مستمرة" : "Ongoing share",
          },
          {
            label: isArabic ? "القيمة المدمجة" : "Blended value",
            value: "$2.1K",
            note: isArabic ? "صافي النموذج" : "Model output",
          },
        ],
        bars: [38, 52, 63, 72, 80, 88],
        linePoints: "48,64 88,52 128,44 168,34 208,26",
        chartLabel: isArabic ? "منحنى Hybrid" : "Hybrid curve",
        sectionTitle: isArabic ? "توازن الحساب" : "Blended dashboard",
        rangeLabel: isArabic ? "CPA + Rev Share" : "CPA + Rev Share",
        dashboardRows: [
          {
            label: isArabic ? "الأداء الأولي" : "Early return",
            value: "$740",
            note: isArabic ? "أول أسبوع" : "Week one",
          },
          {
            label: isArabic ? "القيمة المستمرة" : "Recurring layer",
            value: "$1.3K",
            note: isArabic ? "بعد التثبيت" : "After stabilization",
          },
          {
            label: isArabic ? "أفضل توازن" : "Best balance",
            value: isArabic ? "اختبار + توسع" : "Test + scale",
            note: isArabic ? "أوضح استخدام" : "Typical use",
          },
          {
            label: isArabic ? "الهامش" : "Margin room",
            value: "18%",
            note: isArabic ? "مساحة تحسين" : "Optimization space",
          },
        ],
        noteCards: [
          {
            title: isArabic ? "مرونة أعلى" : "Higher flexibility",
            text: isArabic
              ? "مفيد لما تحتاج تجمع بين قراءة مبكرة وقيمة تستمر مع الوقت."
              : "It is useful when you want both an early read and value that keeps building after that.",
          },
          {
            title: isArabic ? "واضح للتجربة" : "Good for structured testing",
            text: isArabic
              ? "يعطيك مساحة لتجربة أكثر من زاوية بدون الاعتماد على شكل واحد فقط من العائد."
              : "It gives you room to test more than one angle without depending on only one return shape.",
          },
        ],
      },
    ],
    [isArabic]
  );

  const activeScenario = scenarios[activeIndex];
  const activeTabLabel = modelTabs[activeIndex];

  return (
    <section
      id="models"
      dir={isArabic ? "rtl" : "ltr"}
      className="container-main py-14 sm:py-16 lg:py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.25 }}
        className="mx-auto max-w-4xl text-center"
      >
        <p
          className="text-[11px] font-extrabold uppercase tracking-[0.24em]"
          style={{ color: "var(--foreground-soft)" }}
        >
          {t.partnership.models.eyebrow}
        </p>

        <h2
          className="mt-3 text-3xl font-black leading-[0.96] tracking-[-0.05em] sm:text-4xl lg:text-[3.2rem]"
          style={{ color: "var(--foreground)" }}
        >
          {t.partnership.models.title}
        </h2>

        <p
          className="mx-auto mt-5 max-w-3xl text-sm leading-7 sm:text-base"
          style={{ color: "var(--foreground-muted)" }}
        >
          {activeScenario.summary}
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {activeScenario.markers.map((marker) => (
            <span
              key={marker}
              className="rounded-full px-3 py-1.5 text-xs font-semibold"
              style={{
                border: "1px solid var(--border)",
                background: "var(--surface-strong)",
                color: "var(--foreground-muted)",
              }}
            >
              {marker}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 22, scale: 0.985 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.2 }}
        className="mt-10 flex justify-center"
      >
        <div className="flex h-[390px] w-full items-center justify-center overflow-hidden sm:h-[500px] md:h-[590px] lg:h-[680px]">
          <TabletMockup
            interactive={false}
            className="origin-center scale-[0.56] sm:scale-[0.72] md:scale-[0.86] lg:scale-100"
          >
            <div
              className={`${ui.shellPad} h-full w-full`}
              style={{ color: "var(--foreground)" }}
            >
              <div
                className="flex h-full flex-col overflow-hidden rounded-[24px]"
                style={{
                  border: "1px solid var(--border)",
                  background:
                    "linear-gradient(180deg, rgba(11,18,16,0.94) 0%, rgba(17,27,23,0.96) 100%)",
                  boxShadow: "var(--shadow-medium)",
                }}
              >
                <div
                  className="border-b px-[clamp(0.875rem,1vw,1rem)] py-[clamp(0.75rem,1vw,0.875rem)]"
                  style={{
                    borderColor: "var(--border-soft)",
                    background:
                      "linear-gradient(180deg, rgba(243,241,234,0.04) 0%, rgba(243,241,234,0.02) 100%)",
                  }}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <BrowserControl type="close" />
                      <BrowserControl type="minimize" />
                      <BrowserControl type="maximize" />
                    </div>

                    <div
                      className="flex min-h-[38px] min-w-0 flex-1 items-center justify-center rounded-full px-4 text-[11px] font-semibold uppercase tracking-[0.16em]"
                      style={{
                        maxWidth: 420,
                        border: "1px solid var(--border)",
                        background: "var(--surface-accent)",
                        color: "var(--foreground-soft)",
                      }}
                    >
                      {isArabic
                        ? "لوحة نماذج الشراكة"
                        : "My partnership model dashboard"}
                    </div>

                    <motion.div
                      key={`chip-${activeIndex}`}
                      initial={{ opacity: 0, scale: 0.92, y: 6 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.28 }}
                      className="rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em]"
                      style={{
                        border: "1px solid var(--border-strong)",
                        background: "var(--primary-soft)",
                        color: "var(--primary-strong)",
                      }}
                    >
                      {activeScenario.chartLabel}
                    </motion.div>
                  </div>

                  <div
                    className="mt-4 flex gap-2 border-b"
                    style={{ borderColor: "var(--border-soft)" }}
                  >
                    {modelTabs.map((label, index) => (
                      <BrowserTab
                        key={label}
                        label={label}
                        isActive={activeIndex === index}
                        onClick={() => setActiveIndex(index)}
                      />
                    ))}
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-[clamp(0.875rem,1vw,1rem)] py-[clamp(0.875rem,1vw,1rem)]"
                    style={{ WebkitOverflowScrolling: "touch" }}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <FadeBlock delay={0}>
                        <div>
                          <div
                            className={ui.label}
                            style={{ color: "var(--foreground-soft)" }}
                          >
                            {isArabic ? "النموذج النشط" : "Active model"}
                          </div>
                          <div
                            className="mt-1 text-[clamp(1.1rem,1.6vw,1.35rem)] font-black tracking-[-0.03em]"
                            style={{ color: "var(--foreground)" }}
                          >
                            {activeTabLabel}
                          </div>
                        </div>
                      </FadeBlock>

                      <FadeBlock delay={0.04}>
                        <div
                          className="rounded-full px-3 py-1.5 text-xs font-semibold"
                          style={{
                            border: "1px solid var(--border)",
                            background: "var(--surface-strong)",
                            color: "var(--foreground-muted)",
                          }}
                        >
                          {activeScenario.tone}
                        </div>
                      </FadeBlock>
                    </div>

                    <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                      {activeScenario.stats.map((stat, index) => (
                        <FadeBlock key={stat.label} delay={0.08 + index * 0.04}>
                          <div
                            className={`${ui.radius} ${ui.cardPad}`}
                            style={{
                              border: "1px solid var(--border-soft)",
                              background: "var(--surface-strong)",
                            }}
                          >
                            <div
                              className={ui.label}
                              style={{ color: "var(--foreground-soft)" }}
                            >
                              {stat.label}
                            </div>
                            <div
                              className={ui.value}
                              style={{ color: "var(--foreground)" }}
                            >
                              {stat.value}
                            </div>
                            <div
                              className="mt-2 text-xs leading-5 sm:text-[13px]"
                              style={{ color: "var(--foreground-muted)" }}
                            >
                              {stat.note}
                            </div>
                          </div>
                        </FadeBlock>
                      ))}
                    </div>

                    <div className="mt-5 grid gap-4 lg:grid-cols-[1.02fr_0.98fr]">
                      <FadeBlock delay={0.18}>
                        <div
                          className={`${ui.radius} ${ui.cardPad}`}
                          style={{
                            border: "1px solid var(--border-soft)",
                            background: "var(--surface)",
                          }}
                        >
                          <div className="flex items-center justify-between gap-3">
                            <div
                              className="text-sm font-bold"
                              style={{ color: "var(--foreground)" }}
                            >
                              {isArabic ? "شكل العائد" : "Return shape"}
                            </div>
                            <div
                              className={ui.label}
                              style={{ color: "var(--foreground-soft)" }}
                            >
                              {activeScenario.rangeLabel}
                            </div>
                          </div>

                          <div className="mt-4 flex h-[170px] items-end gap-3">
                            {activeScenario.bars.map((value, index) => (
                              <motion.div
                                key={`${activeIndex}-${index}`}
                                initial={{ height: 0, opacity: 0.35 }}
                                animate={{ height: `${value}%`, opacity: 1 }}
                                transition={{
                                  duration: 0.45,
                                  delay: 0.22 + index * 0.05,
                                  ease: [0.22, 1, 0.36, 1],
                                }}
                                className="flex-1 rounded-t-[14px]"
                                style={{
                                  background:
                                    "linear-gradient(180deg, rgba(212,168,79,0.95), rgba(212,168,79,0.22))",
                                }}
                              />
                            ))}
                          </div>

                          <div
                            className="mt-4 flex justify-between text-[10px] uppercase tracking-[0.16em]"
                            style={{ color: "var(--foreground-soft)" }}
                          >
                            <span>01</span>
                            <span>02</span>
                            <span>03</span>
                            <span>04</span>
                            <span>05</span>
                            <span>06</span>
                          </div>
                        </div>
                      </FadeBlock>

                      <FadeBlock delay={0.22}>
                        <div
                          className={`${ui.radius} ${ui.cardPad}`}
                          style={{
                            border: "1px solid var(--border-soft)",
                            background: "var(--surface)",
                          }}
                        >
                          <div className="flex items-center justify-between">
                            <div
                              className="text-sm font-bold"
                              style={{ color: "var(--foreground)" }}
                            >
                              {isArabic ? "مسار الأداء" : "Performance path"}
                            </div>
                            <div
                              className={ui.label}
                              style={{ color: "var(--foreground-soft)" }}
                            >
                              {isArabic ? "محاكاة" : "Simulation"}
                            </div>
                          </div>

                          <div
                            className="mt-4 rounded-[18px] p-3"
                            style={{
                              border: "1px solid var(--border-soft)",
                              background: "rgba(0,0,0,0.1)",
                            }}
                          >
                            <svg
                              viewBox="0 0 216 96"
                              className="h-[96px] w-full"
                              preserveAspectRatio="none"
                            >
                              <defs>
                                <linearGradient
                                  id={`line-${activeIndex}`}
                                  x1="0"
                                  y1="0"
                                  x2="0"
                                  y2="1"
                                >
                                  <stop
                                    offset="0%"
                                    stopColor="rgba(224,194,122,0.95)"
                                  />
                                  <stop
                                    offset="100%"
                                    stopColor="rgba(224,194,122,0.18)"
                                  />
                                </linearGradient>
                              </defs>

                              <motion.path
                                d={`M8 86 ${activeScenario.linePoints}`}
                                fill="none"
                                stroke={`url(#line-${activeIndex})`}
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{ pathLength: 0, opacity: 0.4 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                              />
                            </svg>
                          </div>

                          <p
                            className="mt-4 text-sm leading-7"
                            style={{ color: "var(--foreground-muted)" }}
                          >
                            {activeScenario.summary}
                          </p>
                        </div>
                      </FadeBlock>
                    </div>

                    <div className="mt-5 grid gap-3">
                      <FadeBlock delay={0.28}>
                        <div
                          className={`${ui.radius} ${ui.cardPad}`}
                          style={{
                            border: "1px solid var(--border-soft)",
                            background: "var(--surface-strong)",
                          }}
                        >
                          <div className="flex items-center justify-between gap-3">
                            <div
                              className="text-sm font-bold"
                              style={{ color: "var(--foreground)" }}
                            >
                              {activeScenario.sectionTitle}
                            </div>
                            <div
                              className={ui.label}
                              style={{ color: "var(--primary)" }}
                            >
                              {isArabic ? "قراءة حالية" : "Current reading"}
                            </div>
                          </div>

                          <div className="mt-4 grid gap-3 sm:grid-cols-2">
                            {activeScenario.dashboardRows.map((row, index) => (
                              <FadeBlock key={row.label} delay={0.3 + index * 0.04}>
                                <div
                                  className={`${ui.radius} ${ui.cardPad}`}
                                  style={{
                                    border: "1px solid var(--border-soft)",
                                    background: "var(--surface)",
                                  }}
                                >
                                  <div
                                    className={ui.label}
                                    style={{ color: "var(--foreground-soft)" }}
                                  >
                                    {row.label}
                                  </div>
                                  <div
                                    className={ui.value}
                                    style={{ color: "var(--foreground)" }}
                                  >
                                    {row.value}
                                  </div>
                                  <div
                                    className="mt-2 text-xs leading-5 sm:text-[13px]"
                                    style={{ color: "var(--foreground-muted)" }}
                                  >
                                    {row.note}
                                  </div>
                                </div>
                              </FadeBlock>
                            ))}
                          </div>
                        </div>
                      </FadeBlock>

                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {activeScenario.noteCards.map((card, index) => (
                          <FadeBlock key={card.title} delay={0.4 + index * 0.05}>
                            <div
                              className={`${ui.radius} ${ui.cardPad}`}
                              style={{
                                border: "1px solid var(--border-soft)",
                                background: "var(--surface-strong)",
                              }}
                            >
                              <div
                                className={ui.label}
                                style={{ color: "var(--primary)" }}
                              >
                                {isArabic ? "ملاحظة" : "Note"}
                              </div>
                              <div
                                className="mt-2 text-base font-bold"
                                style={{ color: "var(--foreground)" }}
                              >
                                {card.title}
                              </div>
                              <p
                                className="mt-2 text-sm leading-7"
                                style={{ color: "var(--foreground-muted)" }}
                              >
                                {card.text}
                              </p>
                            </div>
                          </FadeBlock>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </TabletMockup>
        </div>
      </motion.div>
    </section>
  );
}