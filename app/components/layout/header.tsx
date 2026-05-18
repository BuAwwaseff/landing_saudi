"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatedMarketLogo } from "../../../../designPlayGround/components/logo";
import { useLanguage } from "@/app/providers/LanguageContext";
import { getSaudiHomeContent } from "@/lib/player-home";

function isActivePath(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function Header() {
  const pathname = usePathname() ?? "/";
  const { language, setLanguage, t, isArabic } = useLanguage();
  const home = getSaudiHomeContent(language);
  const direction = isArabic ? "rtl" : "ltr";

  const navItems = [
    { href: "/", label: t.nav.home, active: pathname === "/" },
    { href: "/#games", label: home.nav.games, active: false },
    { href: "/#sports", label: home.nav.sports, active: false },
    { href: "/#offers", label: home.nav.offers, active: false },
    { href: "/#support", label: home.nav.support, active: false },
  ];

  const actionLink =
    pathname === "/partnership"
      ? { href: "/faq", label: t.nav.faq, active: isActivePath(pathname, "/faq") }
      : { href: "/partnership", label: t.nav.partnership, active: isActivePath(pathname, "/partnership") };

  return (
    <header dir={direction} className="sticky top-0 z-50 px-4 pt-4 sm:px-5">
      <div className="container-main">
        <div className="glass-header header-card-glow relative overflow-hidden rounded-[28px] border border-white/10 px-4 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:px-5 lg:px-6">
          <div className="header-cta-line" />
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(212,168,79,0.42),transparent)]" />
          <div className="pointer-events-none absolute left-0 top-0 h-32 w-32 rounded-full bg-[var(--accent-green-soft)] blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-28 w-28 rounded-full bg-[var(--primary-soft)] blur-3xl" />

          <div className="relative flex items-center gap-3 lg:gap-5">
            <div className="flex flex-1 items-center lg:flex-none">
              <div
                className="lang-switch relative grid min-h-[44px] min-w-[92px] grid-cols-2 rounded-full border border-white/10 bg-white/[0.04] p-1"
                data-lang={language}
                aria-label="Language switcher"
                dir="ltr"
              >
                <span className="lang-switch__thumb" />
                <button
                  type="button"
                  className="lang-switch__button"
                  data-active={language === "en" ? "true" : "false"}
                  onClick={() => setLanguage("en")}
                  aria-pressed={language === "en"}
                >
                  EN
                </button>
                <button
                  type="button"
                  className="lang-switch__button"
                  data-active={language === "ar" ? "true" : "false"}
                  onClick={() => setLanguage("ar")}
                  aria-pressed={language === "ar"}
                >
                  AR
                </button>
              </div>
            </div>

            <nav className="hidden min-w-0 flex-1 items-center justify-center gap-1 lg:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="nav-link"
                  data-active={item.active ? "true" : "false"}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex flex-1 items-center justify-end gap-3 lg:flex-none">
              <Link
                href={actionLink.href}
                className="hidden min-h-[44px] items-center rounded-full border border-[var(--border-strong)] bg-white/[0.06] px-4 text-sm font-bold text-[var(--foreground)] transition-all duration-300 hover:-translate-y-[1px] hover:bg-white/[0.1] sm:inline-flex"
                data-active={actionLink.active ? "true" : "false"}
              >
                {actionLink.label}
              </Link>

              <Link href="/" aria-label="MELBET Saudi Arabia" className="brand-mark shrink-0">
                <AnimatedMarketLogo ariaLabel="MELBET Saudi Arabia" preset="header" wrapperClassName="inline-flex" />
              </Link>
            </div>
          </div>

          <div className="relative mt-3 lg:hidden">
            <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="nav-link shrink-0 px-4 text-[0.88rem]"
                  data-active={item.active ? "true" : "false"}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href={actionLink.href}
                className="nav-link shrink-0 px-4 text-[0.88rem]"
                data-active={actionLink.active ? "true" : "false"}
              >
                {actionLink.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
