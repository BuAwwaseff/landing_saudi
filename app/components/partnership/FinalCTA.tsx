"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/app/providers/LanguageContext";

const TELEGRAM_LINK = "https://t.me/your_channel";
const WHATSAPP_LINK = "https://wa.me/your_number";

export default function FinalCTA() {
  const { isArabic, t } = useLanguage();

  return (
    <section dir={isArabic ? "rtl" : "ltr"} className="relative py-28">
      <div className="relative container-main">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="text-[10px] font-bold uppercase tracking-[0.32em] text-white/40">
            {t.finalCta.eyebrow}
          </div>

          <h2 className="mt-6 text-5xl font-black leading-[0.92] tracking-[-0.06em] text-white sm:text-[3.8rem]">
            {t.finalCta.title}
          </h2>

          <p className="mt-6 text-sm text-white/60 sm:text-base">
            {t.finalCta.text}
          </p>
        </motion.div>

        <div className="relative mt-24 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noreferrer"
              className="group relative block"
            >
              <div className="relative overflow-hidden rounded-[28px] border border-white/16 bg-[linear-gradient(160deg,#173c2d_0%,#10281f_52%,#0b1d17_100%)] p-7 shadow-[0_24px_60px_rgba(0,0,0,0.26)] transition-all duration-300 group-hover:-translate-y-[4px] group-hover:border-white/30 group-hover:shadow-[0_30px_72px_rgba(0,0,0,0.34)]">
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_34%)]" />
                  <div className="absolute inset-x-0 top-0 h-16 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent)]" />
                  <div className="absolute inset-[1px] rounded-[27px] border border-white/6" />
                </div>

                <div className="absolute left-0 top-0 h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full" />

                <div className="relative flex items-center justify-between gap-6">
                  <div>
                    <div className="text-xs uppercase tracking-[0.25em] text-white/40">
                      {t.finalCta.telegramLabel}
                    </div>

                    <div className="mt-3 text-2xl font-extrabold text-white">
                      {t.finalCta.telegramAction}
                    </div>

                    <div className="mt-4 text-xs text-white/40">
                      Direct channel access
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ rotate: -6, scale: 1.08 }}
                    className="relative flex h-20 w-20 items-center justify-center rounded-[20px] border border-white/14 bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.03))] shadow-[inset_0_1px_0_rgba(255,255,255,0.10)]"
                  >
                    <Image
                      src="/telegram.png"
                      alt="telegram"
                      width={60}
                      height={60}
                    />
                  </motion.div>
                </div>
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="group relative block"
            >
              <div className="relative overflow-hidden rounded-[28px] border border-white/16 bg-[linear-gradient(160deg,#184233_0%,#112b22_52%,#0b1d18_100%)] p-7 shadow-[0_24px_60px_rgba(0,0,0,0.26)] transition-all duration-300 group-hover:-translate-y-[4px] group-hover:border-white/30 group-hover:shadow-[0_30px_72px_rgba(0,0,0,0.34)]">
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_34%)]" />
                  <div className="absolute inset-x-0 top-0 h-16 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent)]" />
                  <div className="absolute inset-[1px] rounded-[27px] border border-white/6" />
                </div>

                <div className="absolute right-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full" />

                <div className="relative flex items-center justify-between gap-6">
                  <div>
                    <div className="text-xs uppercase tracking-[0.25em] text-white/40">
                      {t.finalCta.whatsappLabel}
                    </div>

                    <div className="mt-3 text-2xl font-extrabold text-white">
                      {t.finalCta.whatsappAction}
                    </div>

                    <div className="mt-4 text-xs text-white/40">
                      Direct messaging line
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ rotate: 6, scale: 1.08 }}
                    className="relative flex h-20 w-20 items-center justify-center rounded-[20px] border border-white/14 bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.03))] shadow-[inset_0_1px_0_rgba(255,255,255,0.10)]"
                  >
                    <Image
                      src="/whatsapp.png"
                      alt="whatsapp"
                      width={60}
                      height={60}
                    />
                  </motion.div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}