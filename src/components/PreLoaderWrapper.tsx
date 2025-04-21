"use client";

import { useState, useEffect } from "react";
import Preloader from "../components/PreLoader";

interface PreloaderWrapperProps {
  children: React.ReactNode;
}

const PreloaderWrapper = ({ children }: PreloaderWrapperProps) => {
  const [showPreloader, setShowPreloader] = useState(true);
  const [hasShownBefore, setHasShownBefore] = useState(false);

  useEffect(() => {
    // Check if we've shown the preloader before in this session
    const preloaderShown = sessionStorage.getItem("preloaderShown");

    if (preloaderShown === "true") {
      setShowPreloader(false);
      setHasShownBefore(true);
    }
  }, []);

  const handlePreloaderFinish = () => {
    setShowPreloader(false);
    // Mark that we've shown the preloader in this session
    sessionStorage.setItem("preloaderShown", "true");
  };

  // If we've checked and found we've shown the preloader before, just return children
  if (hasShownBefore) {
    return <>{children}</>;
  }

  return (
    <>
      {showPreloader && <Preloader onFinish={handlePreloaderFinish} />}
      <div style={{ visibility: showPreloader ? "hidden" : "visible" }}>
        {children}
      </div>
    </>
  );
};

export default PreloaderWrapper;
