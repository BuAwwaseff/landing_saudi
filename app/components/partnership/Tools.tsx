"use client";

import { motion } from "framer-motion";
import { useMemo, type ComponentType, type CSSProperties } from "react";
import Card from "@/app/components/layout/Card";
import { useLanguage } from "@/app/providers/LanguageContext";
import {
  LandingPageIcon,
  BannerIcon,
  LinkIcon,
  PromoCodeIcon,
  TrackingIcon,
  FeedIcon,
} from "@/app/components/icons/PartnershipIcons";

const icons = [
  LandingPageIcon,
  BannerIcon,
  LinkIcon,
  PromoCodeIcon,
  TrackingIcon,
  FeedIcon,
] as const;

type ToolVisualMeta = {
  orbitTop: string;
  orbitLeft: string;
  orbitRight: string;
  description: string;
};

function ToolBadge({
  Icon,
}: {
  Icon: ComponentType<{ className?: string; style?: CSSProperties }>;
}) {
  return (
    <div
      className="relative inline-flex h-16 w-16 items-center justify-center rounded-full"
      style={{
        border: "1px solid var(--border-strong)",
        background:
          "linear-gradient(180deg, rgba(212,168,79,0.18) 0%, rgba(17,27,23,0.98) 100%)",
        boxShadow: "0 14px 34px rgba(0,0,0,0.22)",
      }}
    >
      <div
        className="flex h-11 w-11 items-center justify-center rounded-full"
        style={{
          border: "1px solid var(--border-soft)",
          background:
            "linear-gradient(180deg, rgba(243,241,234,0.08) 0%, rgba(243,241,234,0.02) 100%)",
        }}
      >
        <Icon className="h-5 w-5" style={{ color: "var(--primary-strong)" }} />
      </div>
    </div>
  );
}

export default function Tools() {
  const { t, isArabic } = useLanguage();

  const meta: ToolVisualMeta[] = useMemo(
    () =>
      isArabic
        ? [
            {
              orbitTop: "أساس",
              orbitLeft: "صفحة",
              orbitRight: "إطلاق",
              description:
                "كل شيء يبدأ بواجهة واضحة تستقبل الترافِك بشكل منظم وتدفعه لأول خطوة بدون تشتيت.",
            },
            {
              orbitTop: "أصول",
              orbitLeft: "بنرات",
              orbitRight: "وضوح",
              description:
                "العناصر البصرية هنا ليست مجرد صور. الهدف منها دعم الرسالة ورفع وضوح العرض من أول نظرة.",
            },
            {
              orbitTop: "ربط",
              orbitLeft: "روابط",
              orbitRight: "مسار",
              description:
                "الروابط ترتب الحركة بشكل أدق وتجعل كل خطوة أوضح وأسهل في القراءة والقياس من النقرة حتى النتيجة.",
            },
            {
              orbitTop: "عرض",
              orbitLeft: "كود",
              orbitRight: "تحفيز",
              description:
                "الأكواد الترويجية تضيف سببًا مباشرًا للدخول وتساعد على رفع الاستجابة في اللحظة المناسبة.",
            },
            {
              orbitTop: "قياس",
              orbitLeft: "بيانات",
              orbitRight: "تحسين",
              description:
                "التتبع هو ما يحول النشاط إلى صورة واضحة: ماذا ينجح، وماذا يحتاج تعديلًا، وأين يجب الدفع أكثر.",
            },
            {
              orbitTop: "تغذية",
              orbitLeft: "مباشر",
              orbitRight: "توسع",
              description:
                "طبقة الفيد تبقي المحتوى والبيانات في حركة مستمرة حتى يظل النظام جاهزًا للتحديث والنمو.",
            },
          ]
        : [
            {
              orbitTop: "Foundation",
              orbitLeft: "Page",
              orbitRight: "Launch",
              description:
                "Everything starts with a clean entry surface that receives traffic properly and moves the user into the first action without friction.",
            },
            {
              orbitTop: "Assets",
              orbitLeft: "Banners",
              orbitRight: "Clarity",
              description:
                "These visuals are not decoration. They shape first impression, sharpen the offer, and make acquisition look more controlled.",
            },
            {
              orbitTop: "Routing",
              orbitLeft: "Links",
              orbitRight: "Flow",
              description:
                "Links structure the path more precisely and make each step easier to read and measure from click to outcome.",
            },
            {
              orbitTop: "Offer",
              orbitLeft: "Codes",
              orbitRight: "Push",
              description:
                "Promo codes create a direct reason to act and help lift response at the point where incentive matters most.",
            },
            {
              orbitTop: "Measurement",
              orbitLeft: "Track",
              orbitRight: "Refine",
              description:
                "Tracking is what turns activity into insight. It shows what works, what needs adjustment, and where to push harder.",
            },
            {
              orbitTop: "Feed",
              orbitLeft: "Live",
              orbitRight: "Scale",
              description:
                "The feed layer keeps content and data moving in real time so the whole setup stays ready for ongoing updates and growth.",
            },
          ],
    [isArabic]
  );

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="container-main py-14 sm:py-16 lg:py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-3xl"
      >
        <p
          className="text-[11px] uppercase tracking-[0.28em]"
          style={{ color: "var(--foreground-soft)" }}
        >
          {t.partnership.tools.eyebrow}
        </p>

        <h2
          className="mt-3 text-[2.2rem] font-black leading-[0.94] tracking-[-0.04em] sm:text-4xl lg:text-5xl"
          style={{ color: "var(--foreground)" }}
        >
          {t.partnership.tools.title}
        </h2>

        <p
          className="mt-4 max-w-[42rem] text-[15px] leading-7 sm:text-base sm:leading-8"
          style={{ color: "var(--foreground-muted)" }}
        >
          {t.partnership.tools.text}
        </p>
      </motion.div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {t.partnership.tools.items.map((tool, index) => {
          const Icon = icons[index] ?? LandingPageIcon;
          const detail = meta[index] ?? meta[0];

          return (
            <motion.div
              key={tool}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.48,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Card
                as="article"
                className="h-full rounded-[28px] border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <ToolBadge Icon={Icon} />

                  <span
                    className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em]"
                    style={{
                      border: "1px solid var(--border-strong)",
                      background: "var(--primary-soft)",
                      color: "var(--primary-strong)",
                    }}
                  >
                    {isArabic
                      ? `الأداة ${String(index + 1).padStart(2, "0")}`
                      : `Tool ${String(index + 1).padStart(2, "0")}`}
                  </span>
                </div>

                <div className={isArabic ? "mt-6 text-right" : "mt-6 text-left"}>
                  <h3
                    className="text-[1.8rem] font-black leading-[0.98] tracking-[-0.04em]"
                    style={{ color: "var(--foreground)" }}
                  >
                    {tool}
                  </h3>

                  <p
                    className="mt-4 text-sm leading-7 sm:text-[15px]"
                    style={{ color: "var(--foreground-muted)" }}
                  >
                    {detail.description}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[detail.orbitTop, detail.orbitLeft, detail.orbitRight].map(
                    (chip, chipIndex) => (
                      <span
                        key={`${tool}-${chip}-${chipIndex}`}
                        className="rounded-full px-3 py-1 text-[10px] font-semibold"
                        style={{
                          border:
                            chipIndex === 0
                              ? "1px solid var(--border-strong)"
                              : "1px solid var(--border)",
                          background:
                            chipIndex === 0
                              ? "var(--primary-soft)"
                              : "var(--surface-accent)",
                          color:
                            chipIndex === 0
                              ? "var(--primary-strong)"
                              : "var(--foreground-soft)",
                        }}
                      >
                        {chip}
                      </span>
                    )
                  )}
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
