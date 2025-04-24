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

    if (currentIndex > previousIndex) {
      setDirection("up"); // Forward = bottom to top
    } else {
      setDirection("down"); // Backward = top to bottom
    }

    previousPath.current = pathname;

    setIsTransitioning(true);
    setShowChildren(false);

    const timeout = setTimeout(() => {
      setIsTransitioning(false);
      setShowChildren(true);
    }, 400);

    return () => clearTimeout(timeout);
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
