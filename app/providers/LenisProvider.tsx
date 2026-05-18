"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";

type LenisProviderProps = {
  children: ReactNode;
};

export default function LenisProvider({
  children,
}: LenisProviderProps) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6,
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1,
      lerp: 0.08,
    });

    let frameId = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };

    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}