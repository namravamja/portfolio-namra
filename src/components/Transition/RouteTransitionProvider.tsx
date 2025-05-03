"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import RouteTransition from "./RouteTransition";

const routeOrder = [
  "/",
  "/About",
  "/Projects",
  "/Experience",
  "/Blog",
  "/Contact",
];

export default function RouteTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [showChildren, setShowChildren] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<"up" | "down">("up");
  const previousPath = useRef(pathname);

  useEffect(() => {
    const currentIndex = routeOrder.indexOf(pathname);
    const previousIndex = routeOrder.indexOf(previousPath.current);

    setDirection(currentIndex > previousIndex ? "up" : "down");
    previousPath.current = pathname;

    // Hide scrollbar
    document.body.style.overflow = "hidden";

    setIsTransitioning(true);
    setShowChildren(false);

    const timeout = setTimeout(() => {
      setIsTransitioning(false);
      setShowChildren(true);
      // Restore scrollbar
      document.body.style.overflow = "";
    }, 400);

    return () => {
      clearTimeout(timeout);
      document.body.style.overflow = ""; // ensure scrollbar is reset
    };
  }, [pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isTransitioning && (
          <RouteTransition key={pathname} direction={direction} />
        )}
      </AnimatePresence>

      {showChildren && children}
    </>
  );
}
