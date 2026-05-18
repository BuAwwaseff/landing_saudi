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

export default function ProductOrb({
  orb,
  index,
  slot,
  showMarketIcons = false,
}: {
  orb: ProductOrbConfig;
  index: number;
  slot: OrbitSlot;
  showMarketIcons?: boolean;
}) {
  const float = buildFloat(orb.floatX, orb.floatY, orb.duration);
  const hasOrbitIcons = Boolean(orb.marketIcons?.length);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 18, left: slot.left, top: slot.top }}
      animate={{ opacity: 1, scale: 1, y: 0, left: slot.left, top: slot.top }}
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
      className={`absolute z-20 -translate-x-1/2 -translate-y-1/2 ${
        hasOrbitIcons
          ? "h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] lg:h-[340px] lg:w-[340px]"
          : ""
      }`}
    >
      <motion.div
        animate={float.animate}
        transition={float.transition}
        className={hasOrbitIcons ? "absolute inset-0" : ""}
      >
        <motion.div whileHover={hoverLift.whileHover}>
          <ProductOrbShell
            sizeClass={
              hasOrbitIcons
                ? "absolute left-1/2 top-1/2 h-[166px] w-[166px] -translate-x-1/2 -translate-y-1/2 sm:h-[194px] sm:w-[194px] lg:h-[220px] lg:w-[220px]"
                : "h-[158px] w-[158px] sm:h-[186px] sm:w-[186px] lg:h-[214px] lg:w-[214px]"
            }
            label={orb.label}
            imageAreaClassName={
              hasOrbitIcons
                ? "flex h-[86px] items-center justify-center sm:h-[98px] lg:h-[112px]"
                : "flex h-[82px] items-center justify-center sm:h-[94px] lg:h-[108px]"
            }
            labelClassName="text-[15px] sm:text-[16px] lg:text-[17px]"
          >
            <Image
              src={orb.image}
              alt={orb.alt}
              width={136}
              height={136}
              className={`h-auto object-contain ${orb.imageClassName ?? "w-[74%]"}`}
              priority={index < 2}
            />
          </ProductOrbShell>
        </motion.div>

        {hasOrbitIcons &&
          orb.marketIcons?.map((icon) => (
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