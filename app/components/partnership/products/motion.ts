export const headerReveal = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  viewport: { once: true, amount: 0.25 },
};

export const sceneReveal = {
  initial: { opacity: 0, y: 28, scale: 0.985 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  viewport: { once: true, amount: 0.2 },
};

export function buildEntrance(index: number, baseDelay = 0.08) {
  return {
    initial: { opacity: 0, scale: 0.92, y: 18 },
    whileInView: { opacity: 1, scale: 1, y: 0 },
    transition: {
      duration: 0.6,
      delay: index * baseDelay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
    viewport: { once: true, amount: 0.3 },
  };
}

export function buildFloat(
  floatX: number[],
  floatY: number[],
  duration: number,
) {
  return {
    animate: {
      x: floatX,
      y: floatY,
    },
    transition: {
      duration,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  };
}

export const hoverLift = {
  whileHover: { y: -3, scale: 1.012 },
  transition: { duration: 0.24, ease: [0.22, 1, 0.36, 1] as const },
};