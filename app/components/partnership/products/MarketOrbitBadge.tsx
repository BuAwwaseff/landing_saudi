"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { MarketIconConfig } from "./types";
import { buildFloat } from "./motion";

export default function MarketOrbitBadge({
  icon,
  isVisible,
}: {
  icon: MarketIconConfig;
  isVisible: boolean;
}) {
  const float = buildFloat(icon.floatX, icon.floatY, icon.duration);

  return (
    <motion.div
      className={`absolute z-20 ${icon.className}`}
      initial={false}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.82,
      }}
      transition={{
        duration: 0.38,
        delay: isVisible ? icon.delay : 0,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ pointerEvents: isVisible ? "auto" : "none" }}
    >
      <motion.div
        animate={isVisible ? float.animate : { x: 0, y: 0 }}
        transition={isVisible ? float.transition : { duration: 0.25 }}
        className="flex h-[60px] w-[60px] items-center justify-center rounded-full sm:h-[68px] sm:w-[68px] lg:h-[78px] lg:w-[78px]"
        style={{
          border: "1px solid var(--border)",
          background:
            "linear-gradient(180deg, rgba(17,27,23,0.96) 0%, rgba(11,18,16,0.96) 100%)",
          boxShadow: "var(--shadow-soft)",
        }}
      >
        <Image
          src={icon.src}
          alt={icon.alt}
          width={42}
          height={42}
          className="h-8 w-8 object-contain sm:h-9 sm:w-9 lg:h-10 lg:w-10"
        />
      </motion.div>
    </motion.div>
  );
}