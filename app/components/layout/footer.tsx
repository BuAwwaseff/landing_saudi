"use client";

import Link from "next/link";
import { AnimatedMarketLogo } from "../../../../designPlayGround/components/logo";
import { useLanguage } from "@/app/providers/LanguageContext";
import { getSaudiHomeContent } from "@/lib/player-home";

const supportLinks = [
  { href: "https://t.me/your_channel", key: "telegram" },
  { href: "https://wa.me/your_number", key: "whatsapp" },
] as const;

export default function Footer() {
  const { t, language, isArabic } = useLanguage();
  const home = getSaudiHomeContent(language);
  const direction = isArabic ? "rtl" : "ltr";

  const homeLinks = [
    { href: "/#games", label: home.nav.games },
    { href: "/#sports", label: home.nav.sports },
    { href: "/#offers", label: home.nav.offers },
    { href: "/#support", label: home.nav.support },
  ];

  const marketLinks = [
    { href: "/", label: t.nav.home },
    { href: "/partnership", label: t.nav.partnership },
    { href: "/faq", label: t.nav.faq },
  ];

  return (
    <footer dir={direction} className="relative mt-8 pb-8 pt-6 sm:pb-10">
      <div className="container-main">
        <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] px-5 py-8 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(212,168,79,0.4),transparent)]" />
          <div className="pointer-events-none absolute left-0 top-0 h-40 w-40 rounded-full bg-[var(--accent-green-soft)] blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-40 w-40 rounded-full bg-[var(--primary-soft)] blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr_0.85fr_0.9fr]">
            <div className="space-y-4">
              <Link href="/" aria-label="MELBET Saudi Arabia" className="inline-flex">
                <AnimatedMarketLogo ariaLabel="MELBET Saudi Arabia" preset="footer" wrapperClassName="inline-flex" />
              </Link>
              <p className="max-w-[32rem] text-sm leading-6 text-[var(--foreground-muted)] sm:text-[15px]">
                {home.footer.body}
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[var(--primary-strong)]">
                {home.footer.homeLabel}
              </p>
              <div className="flex flex-col gap-3">
                {homeLinks.map((item) => (
                  <Link key={item.href} href={item.href} className="footer-link text-sm text-[var(--foreground-muted)]">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[var(--primary-strong)]">
                {home.footer.marketLabel}
              </p>
              <div className="flex flex-col gap-3">
                {marketLinks.map((item) => (
                  <Link key={item.href} href={item.href} className="footer-link text-sm text-[var(--foreground-muted)]">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[var(--primary-strong)]">
                {home.footer.supportLabel}
              </p>
              <p className="text-sm text-[var(--foreground-soft)]">{t.footer.network}</p>
              <div className="flex flex-col gap-3">
                {supportLinks.map((item) => {
                  const label = item.key === "telegram" ? t.footer.telegram : t.footer.whatsapp;

                  return (
                    <Link
                      key={item.key}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-[42px] items-center justify-center rounded-full border border-white/10 bg-white/[0.05] px-4 text-sm font-semibold text-[var(--foreground-muted)] transition-all duration-300 hover:-translate-y-[1px] hover:bg-white/[0.1] hover:text-[var(--foreground)]"
                    >
                      {label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-5 text-xs text-[var(--foreground-soft)]">
            <p>{t.footer.rights}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
