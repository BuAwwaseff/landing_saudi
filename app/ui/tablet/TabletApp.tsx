"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import TabletDetailScreen from "./TabletDetailScreen";
import TabletHomeScreen from "./TabletHomeScreen";
import TabletStatusBar from "./TabletStatusBar";
import type { TabletScreen } from "./tabletData";

type TabletAppProps = {
  section?: Exclude<TabletScreen, "home">;
  initialScreen?: TabletScreen;
};

export default function TabletApp({
  section,
  initialScreen = "home",
}: TabletAppProps) {
  const [activeScreen, setActiveScreen] = useState<TabletScreen>(initialScreen);
  const [direction, setDirection] = useState<"forward" | "back">("forward");

  const statusTitle = useMemo(() => {
    switch (activeScreen) {
      case "offers":
        return "13:49";
      case "products":
        return "13:50";
      case "models":
        return "13:51";
      case "tools":
        return "13:52";
      default:
        return "13:48";
    }
  }, [activeScreen]);

  function openScreen(nextScreen: Exclude<TabletScreen, "home">) {
    setDirection("forward");
    setActiveScreen(nextScreen);
  }

  function goHome() {
    setDirection("back");
    setActiveScreen("home");
  }

  const initialX = direction === "forward" ? 36 : -36;
  const exitX = direction === "forward" ? -36 : 36;

  return (
    <div className="relative flex h-full w-full flex-col text-white">
      <TabletStatusBar title={statusTitle} />

      <div className="relative min-h-0 flex-1 overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          {activeScreen === "home" ? (
            <motion.div
              key="tablet-home"
              initial={{ opacity: 0, x: initialX }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: exitX }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <TabletHomeScreen
                highlightedSection={section}
                onOpen={openScreen}
              />
            </motion.div>
          ) : (
            <motion.div
              key={activeScreen}
              initial={{ opacity: 0, x: initialX }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: exitX }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <TabletDetailScreen
                screen={activeScreen}
                onBack={goHome}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}