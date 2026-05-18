"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ProductOrbConfig } from "./types";
import ProductOrbShell from "./ProductOrbShell";
import MarketOrbitBadge from "./MarketOrbitBadge";
import { buildFloat, hoverLift } from "./motion";

type OrbitSlot = {
  left: string;
  top: string;
};

export default function EsportsOrb({
  orb,
  index,
  slot,
  showMarketIcons,
}: {
  orb: ProductOrbConfig;
  index: number;
  slot: OrbitSlot;
  showMarketIcons: boolean;
}) {
  const float = buildFloat(orb.floatX, orb.floatY, orb.duration);

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.92,
        y: 18,
        left: slot.left,
        top: slot.top,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
        left: slot.left,
        top: slot.top,
      }}
      transition={{
        opacity: {
          duration: 0.6,
          delay: index * 0.08,
          ease: [0.22, 1, 0.36, 1],
        },
        scale: {
          duration: 0.6,
          delay: index * 0.08,
          ease: [0.22, 1, 0.36, 1],
        },
        y: {
          duration: 0.6,
          delay: index * 0.08,
          ease: [0.22, 1, 0.36, 1],
        },
        left: {
          type: "spring",
          stiffness: 70,
          damping: 18,
          mass: 0.9,
        },
        top: {
          type: "spring",
          stiffness: 70,
          damping: 18,
          mass: 0.9,
        },
      }}
      className="absolute z-20 h-[292px] w-[292px] -translate-x-1/2 -translate-y-1/2 sm:h-[340px] sm:w-[340px] lg:h-[384px] lg:w-[384px]"
    >
      <motion.div
        animate={float.animate}
        transition={float.transition}
        className="absolute inset-0"
      >
        <motion.div
          whileHover={hoverLift.whileHover}
          transition={hoverLift.transition}
          className="absolute inset-0"
        >
          <ProductOrbShell
            sizeClass="absolute left-1/2 top-1/2 h-[186px] w-[186px] -translate-x-1/2 -translate-y-1/2 sm:h-[216px] sm:w-[216px] lg:h-[246px] lg:w-[246px]"
            label={orb.label}
            strong
            labelClassName="text-[16px] sm:text-[18px] lg:text-[19px]"
            imageAreaClassName="flex h-[88px] items-center justify-center sm:h-[102px] lg:h-[116px]"
          >
            <Image
              src={orb.image}
              alt={orb.alt}
              width={164}
              height={164}
              className={`h-auto object-contain ${orb.imageClassName ?? "w-[80%]"}`}
              priority
            />
          </ProductOrbShell>
        </motion.div>

        {orb.marketIcons?.map((icon) => (
          <MarketOrbitBadge
            key={icon.alt}
            icon={icon}
            isVisible={showMarketIcons}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}