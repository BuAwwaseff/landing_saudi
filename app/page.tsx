"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import { useLanguage } from "@/app/providers/LanguageContext";
import { getSaudiHomeContent } from "@/lib/player-home";

const TELEGRAM_LINK = "https://t.me/your_channel";
const WHATSAPP_LINK = "https://wa.me/your_number";

function SectionHeading({
  eyebrow,
  title,
  body,
  actions,
  titleClassName,
}: {
  eyebrow: string;
  title: string;
  body: string;
  actions?: ReactNode;
  titleClassName?: string;
}) {
  return (
    <div className="flex flex-col gap-4">
      <div
        className="inline-flex w-fit items-center rounded-full border px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.22em]"
        style={{
          borderColor: "var(--border-strong)",
          background: "var(--surface-accent)",
          color: "var(--primary-strong)",
        }}
      >
        {eyebrow}
      </div>

      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <h2
            className={[
              "text-3xl font-black leading-[1] tracking-[-0.05em] text-[var(--foreground)] sm:text-4xl lg:text-5xl",
              titleClassName,
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--foreground-muted)] sm:text-lg">
            {body}
          </p>
        </div>
        {actions ? <div className="shrink-0">{actions}</div> : null}
      </div>
    </div>
  );
}

function MediaFallback({
  eyebrow,
  title,
  detail,
}: {
  eyebrow: string;
  title: string;
  detail?: string;
}) {
  return (
    <div className="absolute inset-0 flex flex-col justify-between bg-[linear-gradient(160deg,rgba(20,133,83,0.26),rgba(11,18,16,0.96)_55%,rgba(212,168,79,0.18))] p-5">
      <div className="flex items-start justify-between gap-3">
        <span className="rounded-full border border-[var(--border-strong)] bg-black/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--primary-strong)]">
          {eyebrow}
        </span>
        {detail ? (
          <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--foreground-soft)]">
            {detail}
          </span>
        ) : null}
      </div>

      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-2">
          <span className="h-14 rounded-[18px] border border-white/8 bg-white/[0.05]" />
          <span className="h-14 rounded-[18px] border border-white/8 bg-white/[0.04]" />
          <span className="h-14 rounded-[18px] border border-white/8 bg-white/[0.06]" />
        </div>
        <p className="max-w-xs text-xl font-bold leading-tight text-[var(--foreground)]">
          {title}
        </p>
      </div>
    </div>
  );
}

function SmartMedia({
  src,
  alt,
  eyebrow,
  title,
  detail,
  className,
  sizes,
  imageClassName,
  preload = false,
}: {
  src: string | StaticImageData;
  alt: string;
  eyebrow: string;
  title: string;
  detail?: string;
  className?: string;
  sizes?: string;
  imageClassName?: string;
  preload?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={className}>
      {!failed ? (
        <Image
          src={src}
          alt={alt}
          fill
          preload={preload}
          placeholder={typeof src === "string" ? "empty" : "blur"}
          sizes={sizes ?? "(max-width: 1024px) 100vw, 40vw"}
          className={["object-cover", imageClassName].filter(Boolean).join(" ")}
          onError={() => setFailed(true)}
        />
      ) : null}
      <div className={`absolute inset-0 ${failed ? "" : "bg-[linear-gradient(180deg,rgba(7,11,10,0.08),rgba(7,11,10,0.45)_55%,rgba(7,11,10,0.9))]"}`} />
      {failed ? <MediaFallback eyebrow={eyebrow} title={title} detail={detail} /> : null}
    </div>
  );
}

function InfoStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[20px] border border-white/10 bg-white/[0.04] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
      <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--primary-strong)]">
        {label}
      </p>
      <p className="mt-2 text-xl font-black text-[var(--foreground)]">{value}</p>
    </div>
  );
}

export default function HomePage() {
  const { language, isArabic } = useLanguage();
  const content = getSaudiHomeContent(language);

  return (
    <main dir={isArabic ? "rtl" : "ltr"} className="pb-8">
      <section id="top" className="container-main pt-8 sm:pt-10 lg:pt-12">
        <div className="relative overflow-hidden rounded-[34px] border border-[var(--border-strong)] bg-[linear-gradient(135deg,var(--surface)_0%,var(--surface-strong)_46%,var(--background-elevated)_100%)] px-6 py-8 shadow-[var(--shadow-strong)] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-10%] top-[-14%] h-[280px] w-[280px] rounded-full bg-[var(--accent-green-soft)] blur-3xl" />
            <div className="absolute right-[-8%] top-[12%] h-[220px] w-[220px] rounded-full bg-[var(--primary-soft)] blur-3xl" />
            <div className="absolute bottom-[-10%] left-[36%] h-[220px] w-[220px] rounded-full bg-[rgba(20,133,83,0.12)] blur-3xl" />
            <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,var(--grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_1px)] [background-size:38px_38px]" />
          </div>

          <div className="relative grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
            <div className="space-y-6">
              <div
                className="inline-flex rounded-full px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.22em]"
                style={{
                  border: "1px solid var(--border-strong)",
                  background: "var(--surface-accent)",
                  color: "var(--primary-strong)",
                }}
              >
                {content.hero.eyebrow}
              </div>

              <div className="max-w-3xl">
                <h1 className="max-w-[15ch] text-[2.35rem] font-black leading-[1] tracking-[-0.055em] text-[var(--foreground)] sm:text-[2.85rem] lg:text-[3.45rem]">
                  {content.hero.title}
                </h1>
                <p className="mt-4 max-w-xl text-[15px] leading-7 text-[var(--foreground-muted)] sm:text-base">
                  {content.hero.body}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/#games"
                  className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[var(--primary)] px-5 text-sm font-black text-[var(--primary-ink)] transition-all duration-300 hover:-translate-y-[1px]"
                >
                  {content.hero.primaryCta}
                </Link>
                <Link
                  href="/#offers"
                  className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/12 bg-white/[0.05] px-5 text-sm font-bold text-[var(--foreground)] transition-all duration-300 hover:-translate-y-[1px] hover:bg-white/[0.09]"
                >
                  {content.hero.secondaryCta}
                </Link>
              </div>

              <div className="flex flex-wrap gap-3">
                {content.hero.chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--foreground-soft)]"
                  >
                    {chip}
                  </span>
                ))}
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {content.hero.stats.map((stat) => (
                  <InfoStat key={stat.label} label={stat.label} value={stat.value} />
                ))}
              </div>
            </div>

            <aside className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-5 shadow-[0_18px_48px_rgba(0,0,0,0.22)]">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[var(--primary-strong)]">
                  {content.hero.spotlight.eyebrow}
                </p>
                <span className="rounded-full border border-[var(--border-strong)] bg-[var(--primary-soft)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--primary-strong)]">
                  {content.hero.spotlight.metric}
                </span>
              </div>

              <h2 className="mt-4 max-w-[18ch] text-[1.55rem] font-black leading-[1.02] tracking-[-0.04em] text-[var(--foreground)] sm:text-[1.8rem]">
                {content.hero.spotlight.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[var(--foreground-muted)]">
                {content.hero.spotlight.body}
              </p>

              <div className="mt-5 grid gap-3">
                {content.hero.stack.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[22px] border border-white/8 bg-black/15 px-4 py-4"
                  >
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[var(--primary-strong)]">
                      {item.eyebrow}
                    </p>
                    <h3 className="mt-2 text-base font-black leading-tight text-[var(--foreground)] sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="games" className="container-main pt-12 sm:pt-14 lg:pt-16">
        <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] px-6 py-8 shadow-[var(--shadow-soft)] sm:px-8 sm:py-10">
          <SectionHeading
            eyebrow={content.games.eyebrow}
            title={content.games.title}
            body={content.games.body}
          />

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {content.games.cards.map((card) => (
              <article
                key={card.title}
                className="relative overflow-hidden rounded-[24px] border border-white/10 bg-black/20"
              >
                <div className="relative aspect-[4/3]">
                  <SmartMedia
                    src={card.image}
                    alt={card.title}
                    eyebrow={card.eyebrow}
                    title={card.title}
                    className="absolute inset-0"
                    imageClassName="object-cover object-[center_66%]"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  {card.metric ? (
                    <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-[var(--foreground)]">
                      {card.metric}
                    </div>
                  ) : null}
                </div>
                <div className="space-y-3 p-5">
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[var(--primary-strong)]">
                    {card.eyebrow}
                  </p>
                  <h3 className="text-xl font-black text-[var(--foreground)]">{card.title}</h3>
                  <p className="text-sm leading-6 text-[var(--foreground-muted)]">{card.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="sports" className="container-main pt-12 sm:pt-14 lg:pt-16">
        <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] px-6 py-8 shadow-[var(--shadow-soft)] sm:px-8 sm:py-10">
          <SectionHeading
            eyebrow={content.sports.eyebrow}
            title={content.sports.title}
            body={content.sports.body}
            actions={
              <div className="rounded-full border border-[var(--border-strong)] bg-white/[0.05] px-4 py-2 text-sm font-bold text-[var(--primary-strong)]">
                {content.sports.lead.metric}
              </div>
            }
          />

          <div className="mt-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="relative min-h-[420px] overflow-hidden rounded-[28px] border border-white/10 bg-black/20">
              <SmartMedia
                src={content.sports.lead.image}
                alt={content.sports.lead.title}
                eyebrow={content.sports.lead.eyebrow}
                title={content.sports.lead.title}
                className="absolute inset-0"
              />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[var(--primary-strong)]">
                  {content.sports.lead.eyebrow}
                </p>
                <h3 className="mt-3 text-2xl font-black leading-tight text-[var(--foreground)]">
                  {content.sports.lead.title}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--foreground-muted)]">
                  {content.sports.lead.body}
                </p>
              </div>
            </article>

            <div className="grid gap-4">
              {content.sports.rails.map((card) => (
                <article
                  key={card.title}
                  className="relative overflow-hidden rounded-[24px] border border-white/10 bg-black/20"
                >
                  <div className="grid min-h-[132px] gap-0 sm:grid-cols-[148px_1fr]">
                    <div className="relative min-h-[148px] sm:min-h-full">
                      <SmartMedia
                        src={card.image}
                        alt={card.title}
                        eyebrow={card.eyebrow}
                        title={card.title}
                        className="absolute inset-0"
                      />
                    </div>
                    <div className="flex flex-col justify-between p-5">
                      <div>
                        <div className="flex items-center justify-between gap-3">
                          <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[var(--primary-strong)]">
                            {card.eyebrow}
                          </p>
                          {card.metric ? (
                            <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--foreground-soft)]">
                              {card.metric}
                            </span>
                          ) : null}
                        </div>
                        <h3 className="mt-3 text-lg font-black text-[var(--foreground)]">
                          {card.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                          {card.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="offers" className="container-main pt-12 sm:pt-14 lg:pt-16">
        <div className="rounded-[32px] border border-[var(--border-strong)] bg-[linear-gradient(145deg,rgba(212,168,79,0.08),rgba(17,27,23,0.98))] px-6 py-8 shadow-[var(--shadow-soft)] sm:px-8 sm:py-10">
          <SectionHeading
            eyebrow={content.offers.eyebrow}
            title={content.offers.title}
            body={content.offers.body}
            titleClassName="text-[2rem] sm:text-[2.35rem] lg:text-[2.75rem]"
          />

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {content.offers.cards.map((card) => (
              <article
                key={card.title}
                className="relative overflow-hidden rounded-[24px] border border-white/10 bg-black/20"
              >
                <div className="relative aspect-[4/3]">
                  <SmartMedia
                    src={card.image}
                    alt={card.title}
                    eyebrow={card.kicker}
                    title={card.title}
                    detail={card.detail}
                    className="absolute inset-0"
                    imageClassName="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <div className="space-y-3 p-5">
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[var(--primary-strong)]">
                    {card.kicker}
                  </p>
                  <h3 className="text-xl font-black text-[var(--foreground)]">{card.title}</h3>
                  <p className="text-sm leading-6 text-[var(--foreground-muted)]">{card.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="support" className="container-main pt-12 sm:pt-14 lg:pt-16">
        <div className="relative overflow-hidden rounded-[34px] border border-[var(--border-strong)] bg-[linear-gradient(135deg,rgba(15,107,67,0.16),rgba(11,18,16,0.98)_48%,rgba(212,168,79,0.08))] px-6 py-8 shadow-[var(--shadow-soft)] sm:px-8 sm:py-10">
          <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,var(--grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_1px)] [background-size:34px_34px]" />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex rounded-full border border-[var(--border-strong)] bg-white/[0.05] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.22em] text-[var(--primary-strong)]">
                {content.finalCta.eyebrow}
              </div>
              <h2 className="mt-5 text-3xl font-black leading-[1.02] tracking-[-0.05em] text-[var(--foreground)] sm:text-4xl lg:text-5xl">
                {content.finalCta.title}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--foreground-muted)]">
                {content.finalCta.body}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <Link
                href={TELEGRAM_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[var(--primary)] px-6 text-sm font-black text-[var(--primary-ink)] transition-all duration-300 hover:-translate-y-[1px]"
              >
                {content.finalCta.primary}
              </Link>
              <Link
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/12 bg-white/[0.05] px-6 text-sm font-bold text-[var(--foreground)] transition-all duration-300 hover:-translate-y-[1px] hover:bg-white/[0.09]"
              >
                {content.finalCta.secondary}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
