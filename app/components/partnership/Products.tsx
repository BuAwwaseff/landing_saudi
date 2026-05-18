"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Card from "@/app/components/layout/Card";
import {
  SportsIcon,
  EsportsIcon,
  CasinoIcon,
  GamesIcon,
} from "@/app/components/icons/PartnershipIcons";
import SectionHeading from "@/app/components/partnership/SectionHeading";
import SectionSurface from "@/app/components/partnership/SectionSurface";
import { useLanguage } from "@/app/providers/LanguageContext";
import sportsImage from "@/public/partner/product/sports.png";
import esportsImage from "@/public/partner/product/esports.png";
import casinoImage from "@/public/partner/product/casino.png";
import gamesImage from "@/public/partner/product/games.png";

const productVisuals = [
  {
    image: sportsImage,
    Icon: SportsIcon,
  },
  {
    image: esportsImage,
    Icon: EsportsIcon,
  },
  {
    image: casinoImage,
    Icon: CasinoIcon,
  },
  {
    image: gamesImage,
    Icon: GamesIcon,
  },
] as const;

export default function Products() {
  const { t, isArabic } = useLanguage();
  const products = t.partnership?.products;

  const eyebrow = products?.eyebrow ?? "Product areas";
  const title =
    products?.title ?? "Multiple user interests, one partnership system";
  const items = products?.items.slice(0, 4) ?? [];

  const meta = isArabic
    ? [
        { badge: "حركة أساسية", note: "مدخل قوي وعالي النية" },
        { badge: "جمهور رقمي", note: "فئات سريعة الإيقاع" },
        { badge: "قيمة مستمرة", note: "نشاط متكرر داخل النظام" },
        { badge: "عمق إضافي", note: "طبقة ترفيه توسع الاهتمام" },
      ]
    : [
        { badge: "Core traffic", note: "A strong high-intent entry lane" },
        { badge: "Digital-first", note: "Fast-moving audience categories" },
        { badge: "Evergreen value", note: "Repeat activity inside the system" },
        { badge: "Session depth", note: "A broader entertainment layer" },
      ];

  return (
    <section
      id="products"
      dir={isArabic ? "rtl" : "ltr"}
      className="container-main py-6 sm:py-7 lg:py-8"
    >
      <SectionSurface>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <SectionHeading eyebrow={eyebrow} title={title} align="center" />
        </motion.div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item, index) => {
            const visual = productVisuals[index] ?? productVisuals[0];
            const detail = meta[index] ?? meta[0];
            const Icon = visual.Icon;

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
                  surface="transparent"
                  glow={false}
                  className="partner-card-surface h-full rounded-[28px] p-5"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div
                      className="inline-flex h-12 w-12 items-center justify-center rounded-full"
                      style={{
                        border: "1px solid var(--border-strong)",
                        background: "var(--primary-soft)",
                        color: "var(--primary-strong)",
                      }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <span
                      className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em]"
                      style={{
                        border: "1px solid var(--border)",
                        background: "var(--surface-accent)",
                        color: "var(--foreground-soft)",
                      }}
                    >
                      {detail.badge}
                    </span>
                  </div>

                  <div
                    className="relative mt-4 overflow-hidden rounded-[24px] border p-4"
                    style={{
                      borderColor: "var(--border-soft)",
                      background:
                        "radial-gradient(circle at 50% 20%, rgba(15,107,67,0.22), transparent 34%), linear-gradient(180deg, rgba(17,27,23,0.94) 0%, rgba(11,18,16,0.98) 100%)",
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

                    <div className="relative flex min-h-[198px] items-center justify-center">
                      <Image
                        src={visual.image}
                        alt={item.title}
                        width={320}
                        height={320}
                        className="h-auto w-full max-w-[220px] object-contain drop-shadow-[0_18px_34px_rgba(0,0,0,0.24)]"
                      />
                    </div>
                  </div>

                  <div className={isArabic ? "mt-5 text-right" : "mt-5 text-left"}>
                    <p
                      className="text-[11px] uppercase tracking-[0.22em]"
                      style={{ color: "var(--primary-strong)" }}
                    >
                      {detail.note}
                    </p>

                    <h3
                      className="mt-3 text-[1.85rem] font-black leading-[1.02] tracking-[-0.04em]"
                      style={{ color: "var(--foreground)" }}
                    >
                      {item.title}
                    </h3>

                    <p
                      className="mt-3 text-sm leading-7 sm:text-[15px]"
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
      </SectionSurface>
    </section>
  );
}
