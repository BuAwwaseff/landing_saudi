"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "@/app/components/partnership/SectionHeading";
import SectionSurface from "@/app/components/partnership/SectionSurface";
import { useLanguage } from "@/app/providers/LanguageContext";

const TELEGRAM_LINK = "https://t.me/your_channel";
const WHATSAPP_LINK = "https://wa.me/your_number";

export default function FinalCTA() {
  const { isArabic, t } = useLanguage();
  const contactCards = [
    {
      action: t.finalCta.telegramAction,
      description: isArabic ? "وصول مباشر للفريق" : "Direct access to the team",
      href: TELEGRAM_LINK,
      iconAlt: "telegram",
      iconSrc: "/telegram.png",
      label: t.finalCta.telegramLabel,
    },
    {
      action: t.finalCta.whatsappAction,
      description: isArabic ? "محادثة سريعة للبدء" : "Fast direct messaging line",
      href: WHATSAPP_LINK,
      iconAlt: "whatsapp",
      iconSrc: "/whatsapp.png",
      label: t.finalCta.whatsappLabel,
    },
  ] as const;

  return (
    <section
      id="join"
      dir={isArabic ? "rtl" : "ltr"}
      className="container-main py-6 sm:py-7 lg:py-8"
    >
      <SectionSurface tone="accent">
        <motion.div
          initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <SectionHeading
            eyebrow={t.finalCta.eyebrow}
            title={t.finalCta.title}
            body={t.finalCta.text}
            align="center"
          />
        </motion.div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {contactCards.map((card, index) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, x: index === 0 ? -28 : 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              <Link href={card.href} target="_blank" rel="noreferrer" className="group relative block">
                <div className="partner-contact-card">
                  <div className="pointer-events-none absolute inset-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.09),transparent_34%)]" />
                    <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(212,168,79,0.4),transparent)]" />
                  </div>

                  <div className="relative flex items-center justify-between gap-5">
                    <div>
                      <div className="partner-eyebrow">{card.label}</div>

                      <div className="mt-4 text-[1.7rem] font-black leading-[1.02] tracking-[-0.04em] text-[var(--foreground)]">
                        {card.action}
                      </div>

                      <div className="mt-3 max-w-[24ch] text-sm leading-7 text-[var(--foreground-muted)]">
                        {card.description}
                      </div>
                    </div>

                    <div className="partner-contact-icon">
                      <Image src={card.iconSrc} alt={card.iconAlt} width={52} height={52} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </SectionSurface>
    </section>
  );
}
