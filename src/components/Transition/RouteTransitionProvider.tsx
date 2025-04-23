"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import RouteTransition from "./RouteTransition";

export default function RouteTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [showChildren, setShowChildren] = useState(true); // Keep current page visible
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Trigger transition animation on route change
    setIsTransitioning(true);
    setShowChildren(false);

    const timeout = setTimeout(() => {
      setIsTransitioning(false); // End transition after 0.4s
      setShowChildren(true); // Show the new page content
    }, 400); // Match RouteTransition duration

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isTransitioning && <RouteTransition key={pathname} />}
      </AnimatePresence>

      {showChildren && children}
    </>
  );
}
