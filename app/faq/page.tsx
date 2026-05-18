"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/app/providers/LanguageContext";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqGroup = {
  id: string;
  label: string;
  items: FaqItem[];
};

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-5 w-5 transition-transform duration-300 ${
        open ? "rotate-180" : ""
      }`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function FAQPage() {
  const { t, isArabic } = useLanguage();

  const groupedFaqs: FaqGroup[] = [
    {
      id: "general",
      label: t.faq.categories.general,
      items: [
        t.faq.items.whatIsProgram,
        t.faq.items.whoCanJoin,
        t.faq.items.howToStart,
        t.faq.items.needWebsite,
        t.faq.items.modelsAvailable,
      ],
    },
    {
      id: "account",
      label: t.faq.categories.account,
      items: [
        t.faq.items.getManager,
        t.faq.items.approvalTime,
        t.faq.items.multipleAccounts,
        t.faq.items.forgotDetails,
      ],
    },
    {
      id: "payments",
      label: t.faq.categories.payments,
      items: [
        t.faq.items.whenPaid,
        t.faq.items.paymentMethods,
        t.faq.items.minimumWithdrawal,
      ],
    },
    {
      id: "traffic",
      label: t.faq.categories.traffic,
      items: [
        t.faq.items.badTraffic,
        t.faq.items.geoLimits,
        t.faq.items.whyNoLeads,
      ],
    },
    {
      id: "support",
      label: t.faq.categories.support,
      items: [
        t.faq.items.creatives,
        t.faq.items.trackingHelp,
        t.faq.items.whereSupport,
      ],
    },
  ];

  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  function scrollToCategory(categoryId: string) {
    const node = sectionRefs.current[categoryId];
    if (!node) return;

    const top = node.getBoundingClientRect().top + window.scrollY - 96;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  }

  function handleHeroCategoryClick(categoryId: string) {
    setOpenCategory(categoryId);
    setOpenQuestion(null);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollToCategory(categoryId);
      });
    });
  }

  function toggleCategory(categoryId: string) {
    setOpenCategory((current) => {
      const next = current === categoryId ? null : categoryId;
      setOpenQuestion(null);
      return next;
    });
  }

  function toggleQuestion(categoryId: string, questionId: string) {
    if (openCategory !== categoryId) {
      setOpenCategory(categoryId);
    }

    setOpenQuestion((current) => (current === questionId ? null : questionId));
  }

  return (
    <main dir={isArabic ? "rtl" : "ltr"} className="bg-[var(--background)]">
      <section className="container-main pt-10 pb-10 sm:pt-14 sm:pb-14 lg:pt-16 lg:pb-16">
        <div
          className="relative overflow-hidden rounded-[30px] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12"
          style={{
            border: "1px solid var(--border-strong)",
            background:
              "linear-gradient(135deg, var(--surface) 0%, var(--surface-strong) 38%, var(--background-elevated) 100%)",
            boxShadow: "var(--shadow-strong)",
          }}
        >
          <div className="pointer-events-none absolute inset-0">
            <div
              className="absolute left-[-8%] top-[-18%] h-[240px] w-[240px] rounded-full blur-3xl"
              style={{ background: "var(--accent-green-soft)" }}
            />
            <div
              className="absolute right-[-6%] bottom-[-16%] h-[260px] w-[260px] rounded-full blur-3xl"
              style={{ background: "var(--primary-soft)" }}
            />
            <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,var(--grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_1px)] [background-size:34px_34px]" />
            <div
              className="absolute inset-y-0 right-0 w-[2px] opacity-80"
              style={{
                background:
                  "linear-gradient(180deg, transparent, var(--primary), transparent)",
              }}
            />
          </div>

          <div className="relative z-10">
            <div className="max-w-5xl">
              <div
                className="mb-5 inline-flex rounded-full px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.22em] sm:text-xs"
                style={{
                  border: "1px solid var(--border-strong)",
                  background: "var(--surface-accent)",
                  color: "var(--primary-strong)",
                }}
              >
                {t.faq.hero.badge}
              </div>

              <h1
                className="max-w-5xl text-5xl font-black leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl"
                style={{ color: "var(--foreground)" }}
              >
                {t.faq.hero.title}
              </h1>

              <p
                className="mt-6 max-w-4xl text-lg leading-8 sm:text-[20px]"
                style={{ color: "var(--foreground-muted)" }}
              >
                {t.faq.hero.text}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {groupedFaqs.map((group) => {
                  const isActive = openCategory === group.id;

                  return (
                    <button
                      key={group.id}
                      type="button"
                      onClick={() => handleHeroCategoryClick(group.id)}
                      className="inline-flex min-h-[48px] items-center justify-center rounded-full border px-5 text-base font-bold transition"
                      style={
                        isActive
                          ? {
                              borderColor: "var(--border-strong)",
                              background: "var(--primary-soft)",
                              color: "var(--primary-strong)",
                            }
                          : {
                              borderColor: "var(--border)",
                              background: "var(--surface-strong)",
                              color: "var(--foreground)",
                            }
                      }
                    >
                      {group.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-main pb-14 sm:pb-16 lg:pb-20">
        <div className="space-y-4">
          {groupedFaqs.map((group) => {
            const isCategoryOpen = openCategory === group.id;

            return (
              <div
                key={group.id}
                ref={(node) => {
                  sectionRefs.current[group.id] = node;
                }}
                className="scroll-mt-24"
              >
                <div
                  className="overflow-hidden rounded-[24px]"
                  style={{
                    border: "1px solid var(--border)",
                    background: "var(--surface)",
                    boxShadow: "var(--shadow-medium)",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => toggleCategory(group.id)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                    aria-expanded={isCategoryOpen}
                  >
                    <div>
                      <p
                        className="text-[11px] uppercase tracking-[0.22em]"
                        style={{ color: "var(--primary)" }}
                      >
                        Category
                      </p>

                      <h2
                        className="mt-2 text-[1.75rem] font-black leading-[1.02] tracking-[-0.03em] sm:text-[2rem]"
                        style={{ color: "var(--foreground)" }}
                      >
                        {group.label}
                      </h2>
                    </div>

                    <div className="flex items-center gap-3">
                      <div
                        className="rounded-full px-3 py-1.5 text-sm font-bold"
                        style={{
                          border: "1px solid var(--border)",
                          background: "var(--surface-accent)",
                          color: "var(--foreground-muted)",
                        }}
                      >
                        {group.items.length}
                      </div>

                      <div
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full"
                        style={{
                          border: "1px solid var(--border)",
                          background: "var(--surface-accent)",
                          color: "var(--primary)",
                        }}
                      >
                        <Chevron open={isCategoryOpen} />
                      </div>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isCategoryOpen ? (
                      <motion.div
                        key={`${group.id}-content`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.28,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div
                          className="px-4 py-4 sm:px-5"
                          style={{ borderTop: "1px solid var(--border-soft)" }}
                        >
                          <div className="space-y-3">
                            {group.items.map((item, index) => {
                              const questionId = `${group.id}-${index}`;
                              const isQuestionOpen = openQuestion === questionId;

                              return (
                                <div
                                  key={item.question}
                                  className="rounded-[18px]"
                                  style={{
                                    border: "1px solid var(--border-soft)",
                                    background: "var(--surface-strong)",
                                  }}
                                >
                                  <button
                                    type="button"
                                    onClick={() =>
                                      toggleQuestion(group.id, questionId)
                                    }
                                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                                    aria-expanded={isQuestionOpen}
                                  >
                                    <h3
                                      className="text-lg font-bold leading-8 sm:text-xl"
                                      style={{ color: "var(--foreground)" }}
                                    >
                                      {item.question}
                                    </h3>

                                    <div
                                      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                                      style={{
                                        border: "1px solid var(--border)",
                                        background: "var(--surface-soft)",
                                        color: "var(--primary)",
                                      }}
                                    >
                                      <Chevron open={isQuestionOpen} />
                                    </div>
                                  </button>

                                  <AnimatePresence initial={false}>
                                    {isQuestionOpen ? (
                                      <motion.div
                                        key={`${questionId}-answer`}
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{
                                          duration: 0.24,
                                          ease: [0.22, 1, 0.36, 1],
                                        }}
                                        className="overflow-hidden"
                                      >
                                        <div
                                          className="px-5 py-4"
                                          style={{
                                            borderTop:
                                              "1px solid var(--border-soft)",
                                          }}
                                        >
                                          <p
                                            className="text-base leading-8 sm:text-[17px]"
                                            style={{
                                              color: "var(--foreground-muted)",
                                            }}
                                          >
                                            {item.answer}
                                          </p>
                                        </div>
                                      </motion.div>
                                    ) : null}
                                  </AnimatePresence>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}