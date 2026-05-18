"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Card from "@/app/components/layout/Card";
import { useLanguage } from "@/app/providers/LanguageContext";
import partnerCareImage from "@/public/partner/offers/partner.png";
import crossDeviceImage from "@/public/partner/offers/cross.png";
import commissionImage from "@/public/partner/offers/comission.png";
import campaignSupportImage from "@/public/partner/offers/Untitled design.png";

type OfferMeta = {
  badge: string;
  note: string;
};

const offerImages = [
  crossDeviceImage,
  commissionImage,
  campaignSupportImage,
  partnerCareImage,
] as const;

export default function Offers() {
  const { t, isArabic } = useLanguage();
  const items = t.partnership.offer.items.slice(0, 4);

  const meta: OfferMeta[] = isArabic
    ? [
        { badge: "وصول متعدد", note: "دخول موحد عبر الأجهزة" },
        { badge: "عمولة أقوى", note: "منطق نمو أوضح للشريك" },
        { badge: "دعم الحملة", note: "أصول وتشغيل جاهزان" },
        { badge: "رعاية الشريك", note: "متابعة حقيقية من البداية" },
      ]
    : [
        { badge: "Cross-device reach", note: "Consistent entry across devices" },
        { badge: "Stronger commission", note: "Clearer growth logic for partners" },
        { badge: "Campaign support", note: "Ready assets and launch support" },
        { badge: "Partner care", note: "Real follow-up from a manager" },
      ];

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
        className="mx-auto max-w-4xl text-center"
      >
        <p
          className="text-[11px] uppercase tracking-[0.28em]"
          style={{ color: "var(--foreground-soft)" }}
        >
          {t.partnership.offer.eyebrow}
        </p>

        <h2
          className="mt-3 text-[2.5rem] font-black leading-[0.94] tracking-[-0.04em] sm:text-[3rem] lg:text-[3.6rem]"
          style={{ color: "var(--foreground)" }}
        >
          {t.partnership.offer.title}
        </h2>
      </motion.div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item, index) => {
          const detail = meta[index] ?? meta[0];
          const imageSrc = offerImages[index] ?? offerImages[0];

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.48,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Card
                as="article"
                className="h-full rounded-[28px] border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <span
                    className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em]"
                    style={{
                      border: "1px solid var(--border-strong)",
                      background: "var(--primary-soft)",
                      color: "var(--primary-strong)",
                    }}
                  >
                    {detail.badge}
                  </span>

                  <span
                    className="rounded-full px-3 py-1 text-[10px] font-semibold"
                    style={{
                      border: "1px solid var(--border)",
                      background: "var(--surface-accent)",
                      color: "var(--foreground-soft)",
                    }}
                  >
                    {isArabic
                      ? `${String(index + 1).padStart(2, "0")} خطوة`
                      : `Step ${String(index + 1).padStart(2, "0")}`}
                  </span>
                </div>

                <div
                  className="relative mt-5 overflow-hidden rounded-[24px] border p-5"
                  style={{
                    borderColor: "var(--border-soft)",
                    background:
                      "radial-gradient(circle at 50% 18%, rgba(212,168,79,0.16), transparent 32%), linear-gradient(180deg, rgba(17,27,23,0.96) 0%, rgba(11,18,16,0.98) 100%)",
                  }}
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-[0.08]"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)",
                      backgroundSize: "22px 22px",
                    }}
                  />

                  <div className="relative flex min-h-[210px] items-center justify-center">
                    <Image
                      src={imageSrc}
                      alt={item.title}
                      priority={index < 2}
                      className="h-auto w-full max-w-[116px] object-contain drop-shadow-[0_20px_34px_rgba(0,0,0,0.24)]"
                    />
                  </div>
                </div>

                <div className={isArabic ? "mt-6 text-right" : "mt-6 text-left"}>
                  <p
                    className="text-[11px] uppercase tracking-[0.22em]"
                    style={{ color: "var(--primary-strong)" }}
                  >
                    {detail.note}
                  </p>

                  <h3
                    className="mt-3 text-2xl font-black leading-tight tracking-[-0.03em]"
                    style={{ color: "var(--foreground)" }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="mt-4 text-sm leading-7 sm:text-[15px]"
                    style={{ color: "var(--foreground-muted)" }}
                  >
                    {item.text}
                  </p>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
