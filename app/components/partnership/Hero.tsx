"use client";

import Link from "next/link";
import Card from "@/app/components/layout/Card";
import { useLanguage } from "@/app/providers/LanguageContext";

export default function Hero() {
  const { t, isArabic } = useLanguage();
  const stats = Object.values(t.partnership.hero.stats);

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="container-main pt-10 pb-8 sm:pt-14 sm:pb-10 lg:pt-16 lg:pb-12"
    >
      <div className="space-y-5">
        <div className="max-w-4xl">
          <div className="mb-5 inline-flex rounded-full border border-white/15 bg-white/[0.08] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.22em] text-white/78 sm:text-xs">
            {t.partnership.hero.badge}
          </div>

          <h1
            className="max-w-[28ch] font-black leading-[0.98] tracking-[-0.05em] text-white"
            style={{
              fontSize: "clamp(1.7rem, 4vw, 3.6rem)",
            }}
          >
            {t.partnership.hero.title}
          </h1>

          <p className="mt-6 max-w-3xl text-[clamp(1rem,1.45vw,1.35rem)] leading-[1.65] text-white/76">
            {t.partnership.hero.text}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="#join"
              className="group inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/12 bg-[#005f30] px-6 text-sm font-extrabold uppercase tracking-[0.12em] text-white transition-all duration-300 ease-out hover:-translate-y-[2px] hover:scale-[1.01] hover:bg-[#00753b] hover:shadow-[0_14px_34px_rgba(0,0,0,0.22)]"
            >
              <span className="transition-transform duration-300 group-hover:translate-x-[2px]">
                {t.partnership.hero.primaryCta}
              </span>
            </Link>

            <Link
              href="#models"
              className="group inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/14 bg-white/[0.08] px-6 text-sm font-bold text-white transition-all duration-300 ease-out hover:-translate-y-[2px] hover:scale-[1.01] hover:bg-white/[0.14] hover:shadow-[0_14px_34px_rgba(0,0,0,0.18)]"
            >
              <span className="transition-transform duration-300 group-hover:translate-x-[2px]">
                {t.partnership.hero.secondaryCta}
              </span>
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <Card
              key={item.label}
              as="article"
              className="h-full min-h-[150px] rounded-[24px] border-white/14 bg-white/[0.07] p-5 sm:p-6"
              hoverLift={false}
              glow={false}
            >
              <div className="flex h-full flex-col">
                <div className="text-[clamp(1.9rem,2.6vw,3rem)] font-black leading-none tracking-[-0.04em] text-white">
                  {item.value}
                </div>

                <p className="mt-3 flex-1 text-sm leading-7 text-white/72 sm:text-base sm:leading-8">
                  {item.label}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}