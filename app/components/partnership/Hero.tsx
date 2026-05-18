"use client";

import Link from "next/link";
import Card from "@/app/components/layout/Card";
import SectionSurface from "@/app/components/partnership/SectionSurface";
import { useLanguage } from "@/app/providers/LanguageContext";

export default function Hero() {
  const { t, isArabic } = useLanguage();
  const stats = Object.values(t.partnership.hero.stats);

  return (
    <section
      id="top"
      dir={isArabic ? "rtl" : "ltr"}
      className="container-main pt-8 pb-6 sm:pt-10 sm:pb-8 lg:pt-12 lg:pb-10"
    >
      <SectionSurface tone="hero">
        <div className="grid gap-8 xl:grid-cols-[1.08fr_0.92fr] xl:items-start">
          <div className="max-w-4xl">
            <div className="partner-eyebrow">{t.partnership.hero.badge}</div>

            <h1 className="mt-4 max-w-[16ch] text-[clamp(2.2rem,5vw,4.2rem)] font-black leading-[0.96] tracking-[-0.055em] text-[var(--foreground)]">
              {t.partnership.hero.title}
            </h1>

            <p className="mt-5 max-w-3xl text-[clamp(1rem,1.3vw,1.1rem)] leading-[1.75] text-[var(--foreground-muted)]">
              {t.partnership.hero.text}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#join" className="partner-button-primary">
                {t.partnership.hero.primaryCta}
              </Link>

              <Link href="#models" className="partner-button-secondary">
                {t.partnership.hero.secondaryCta}
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((item) => (
              <Card
                key={item.label}
                as="article"
                surface="transparent"
                hoverLift={false}
                glow={false}
                className="partner-card-surface h-full min-h-[150px] rounded-[26px] p-5 sm:p-6"
              >
                <div className="flex h-full flex-col">
                  <div
                    dir="ltr"
                    className="text-[clamp(1.9rem,2.6vw,3rem)] font-black leading-none tracking-[-0.04em] text-[var(--foreground)]"
                  >
                    {item.value}
                  </div>

                  <p className="mt-3 flex-1 text-sm leading-7 text-[var(--foreground-muted)] sm:text-base sm:leading-8">
                    {item.label}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </SectionSurface>
    </section>
  );
}
