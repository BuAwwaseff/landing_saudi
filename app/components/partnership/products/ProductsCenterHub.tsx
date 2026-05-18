"use client";

import { AnimatePresence, motion } from "framer-motion";
import AnimatedWordmark from "./AnimatedWordmark";

export type ProductsCenterStage = {
  mode: "overview" | "detail";
  eyebrow: string;
  title: string;
  body: string;
};

export default function ProductsCenterHub({
  stage,
}: {
  stage: ProductsCenterStage;
}) {
  return (
    <div
      className="relative z-10 mx-auto flex h-[300px] w-[300px] flex-col items-center justify-center overflow-hidden rounded-full px-5 text-center sm:h-[352px] sm:w-[352px] sm:px-6 lg:h-[408px] lg:w-[408px]"
      style={{
        border: "1px solid var(--border-strong)",
        background:
          "linear-gradient(180deg, rgba(11,18,16,0.84) 0%, rgba(17,27,23,0.96) 100%)",
        boxShadow: "var(--shadow-medium)",
      }}
    >
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{
          scale: [1, 1.06, 1],
          opacity: [0.28, 0.42, 0.28],
        }}
        transition={{
          duration: 7.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background:
            "radial-gradient(circle at 35% 30%, rgba(212,168,79,0.14), transparent 34%), radial-gradient(circle at 68% 70%, rgba(15,107,67,0.18), transparent 38%)",
        }}
      />

      <motion.div
        className="pointer-events-none absolute inset-[12%] rounded-full"
        animate={{
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          border: "1px solid var(--border-soft)",
          opacity: 0.45,
        }}
      />

      <motion.div
        className="pointer-events-none absolute inset-[24%] rounded-full"
        animate={{
          rotate: [360, 180, 0],
          opacity: [0.16, 0.28, 0.16],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          border: "1px solid var(--border-soft)",
        }}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={`${stage.mode}-${stage.title}`}
          initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 flex w-full flex-col items-center"
        >
          <p
            className="text-[11px] uppercase tracking-[0.24em] sm:text-[12px]"
            style={{ color: "var(--primary)" }}
          >
            {stage.eyebrow}
          </p>

          {stage.mode === "overview" ? (
            <>
              <AnimatedWordmark />
              <p
                className="mt-3 max-w-[17ch] text-[15px] leading-6 sm:text-[16px] sm:leading-7"
                style={{ color: "var(--foreground-muted)" }}
              >
                {stage.body}
              </p>
            </>
          ) : (
            <>
              <h3
                className="mt-3 max-w-[10ch] text-[1.5rem] font-black leading-[0.95] tracking-[-0.04em] sm:text-[1.9rem] lg:text-[2.15rem]"
                style={{ color: "var(--foreground)" }}
              >
                {stage.title}
              </h3>

              <p
                className="mt-3 max-w-[18ch] text-[15px] leading-6 sm:text-[16px] sm:leading-7"
                style={{ color: "var(--foreground-muted)" }}
              >
                {stage.body}
              </p>
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}