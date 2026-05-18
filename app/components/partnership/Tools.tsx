"use client";

import { motion } from "framer-motion";
import { useMemo, type ComponentType, type CSSProperties } from "react";
import Card from "@/app/components/layout/Card";
import SectionHeading from "@/app/components/partnership/SectionHeading";
import SectionSurface from "@/app/components/partnership/SectionSurface";
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
              orbitTop: "Ø£Ø³Ø§Ø³",
              orbitLeft: "ØµÙØ­Ø©",
              orbitRight: "Ø¥Ø·Ù„Ø§Ù‚",
              description:
                "ÙƒÙ„ Ø´ÙŠØ¡ ÙŠØ¨Ø¯Ø£ Ø¨ÙˆØ§Ø¬Ù‡Ø© ÙˆØ§Ø¶Ø­Ø© ØªØ³ØªÙ‚Ø¨Ù„ Ø§Ù„ØªØ±Ø§ÙÙÙƒ Ø¨Ø´ÙƒÙ„ Ù…Ù†Ø¸Ù… ÙˆØªØ¯ÙØ¹Ù‡ Ù„Ø£ÙˆÙ„ Ø®Ø·ÙˆØ© Ø¨Ø¯ÙˆÙ† ØªØ´ØªÙŠØª.",
            },
            {
              orbitTop: "Ø£ØµÙˆÙ„",
              orbitLeft: "Ø¨Ù†Ø±Ø§Øª",
              orbitRight: "ÙˆØ¶ÙˆØ­",
              description:
                "Ø§Ù„Ø¹Ù†Ø§ØµØ± Ø§Ù„Ø¨ØµØ±ÙŠØ© Ù‡Ù†Ø§ Ù„ÙŠØ³Øª Ù…Ø¬Ø±Ø¯ ØµÙˆØ±. Ø§Ù„Ù‡Ø¯Ù Ù…Ù†Ù‡Ø§ Ø¯Ø¹Ù… Ø§Ù„Ø±Ø³Ø§Ù„Ø© ÙˆØ±ÙØ¹ ÙˆØ¶ÙˆØ­ Ø§Ù„Ø¹Ø±Ø¶ Ù…Ù† Ø£ÙˆÙ„ Ù†Ø¸Ø±Ø©.",
            },
            {
              orbitTop: "Ø±Ø¨Ø·",
              orbitLeft: "Ø±ÙˆØ§Ø¨Ø·",
              orbitRight: "Ù…Ø³Ø§Ø±",
              description:
                "Ø§Ù„Ø±ÙˆØ§Ø¨Ø· ØªØ±ØªØ¨ Ø§Ù„Ø­Ø±ÙƒØ© Ø¨Ø´ÙƒÙ„ Ø£Ø¯Ù‚ ÙˆØªØ¬Ø¹Ù„ ÙƒÙ„ Ø®Ø·ÙˆØ© Ø£ÙˆØ¶Ø­ ÙˆØ£Ø³Ù‡Ù„ ÙÙŠ Ø§Ù„Ù‚Ø±Ø§Ø¡Ø© ÙˆØ§Ù„Ù‚ÙŠØ§Ø³ Ù…Ù† Ø§Ù„Ù†Ù‚Ø±Ø© Ø­ØªÙ‰ Ø§Ù„Ù†ØªÙŠØ¬Ø©.",
            },
            {
              orbitTop: "Ø¹Ø±Ø¶",
              orbitLeft: "ÙƒÙˆØ¯",
              orbitRight: "ØªØ­ÙÙŠØ²",
              description:
                "Ø§Ù„Ø£ÙƒÙˆØ§Ø¯ Ø§Ù„ØªØ±ÙˆÙŠØ¬ÙŠØ© ØªØ¶ÙŠÙ Ø³Ø¨Ø¨Ù‹Ø§ Ù…Ø¨Ø§Ø´Ø±Ù‹Ø§ Ù„Ù„Ø¯Ø®ÙˆÙ„ ÙˆØªØ³Ø§Ø¹Ø¯ Ø¹Ù„Ù‰ Ø±ÙØ¹ Ø§Ù„Ø§Ø³ØªØ¬Ø§Ø¨Ø© ÙÙŠ Ø§Ù„Ù„Ø­Ø¸Ø© Ø§Ù„Ù…Ù†Ø§Ø³Ø¨Ø©.",
            },
            {
              orbitTop: "Ù‚ÙŠØ§Ø³",
              orbitLeft: "Ø¨ÙŠØ§Ù†Ø§Øª",
              orbitRight: "ØªØ­Ø³ÙŠÙ†",
              description:
                "Ø§Ù„ØªØªØ¨Ø¹ Ù‡Ùˆ Ù…Ø§ ÙŠØ­ÙˆÙ„ Ø§Ù„Ù†Ø´Ø§Ø· Ø¥Ù„Ù‰ ØµÙˆØ±Ø© ÙˆØ§Ø¶Ø­Ø©: Ù…Ø§Ø°Ø§ ÙŠÙ†Ø¬Ø­ØŒ ÙˆÙ…Ø§Ø°Ø§ ÙŠØ­ØªØ§Ø¬ ØªØ¹Ø¯ÙŠÙ„Ù‹Ø§ØŒ ÙˆØ£ÙŠÙ† ÙŠØ¬Ø¨ Ø§Ù„Ø¯ÙØ¹ Ø£ÙƒØ«Ø±.",
            },
            {
              orbitTop: "ØªØºØ°ÙŠØ©",
              orbitLeft: "Ù…Ø¨Ø§Ø´Ø±",
              orbitRight: "ØªÙˆØ³Ø¹",
              description:
                "Ø·Ø¨Ù‚Ø© Ø§Ù„ÙÙŠØ¯ ØªØ¨Ù‚ÙŠ Ø§Ù„Ù…Ø­ØªÙˆÙ‰ ÙˆØ§Ù„Ø¨ÙŠØ§Ù†Ø§Øª ÙÙŠ Ø­Ø±ÙƒØ© Ù…Ø³ØªÙ…Ø±Ø© Ø­ØªÙ‰ ÙŠØ¸Ù„ Ø§Ù„Ù†Ø¸Ø§Ù… Ø¬Ø§Ù‡Ø²Ù‹Ø§ Ù„Ù„ØªØ­Ø¯ÙŠØ« ÙˆØ§Ù„Ù†Ù…Ùˆ.",
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
      id="tools"
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
          <SectionHeading
            eyebrow={t.partnership.tools.eyebrow}
            title={t.partnership.tools.title}
            body={t.partnership.tools.text}
          />
        </motion.div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
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
                  surface="transparent"
                  glow={false}
                  className="partner-card-surface h-full rounded-[28px] p-5"
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
                        ? `Ø§Ù„Ø£Ø¯Ø§Ø© ${String(index + 1).padStart(2, "0")}`
                        : `Tool ${String(index + 1).padStart(2, "0")}`}
                    </span>
                  </div>

                  <div className={isArabic ? "mt-5 text-right" : "mt-5 text-left"}>
                    <h3
                      className="text-[1.7rem] font-black leading-[1.02] tracking-[-0.04em]"
                      style={{ color: "var(--foreground)" }}
                    >
                      {tool}
                    </h3>

                    <p
                      className="mt-3 text-sm leading-7 sm:text-[15px]"
                      style={{ color: "var(--foreground-muted)" }}
                    >
                      {detail.description}
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
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
      </SectionSurface>
    </section>
  );
}
