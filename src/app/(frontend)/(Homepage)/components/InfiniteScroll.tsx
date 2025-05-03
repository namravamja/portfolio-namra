import { useRef, useEffect, useState, useCallback } from "react";

const InfiniteScroll: React.FC<{ text: string }> = ({ text }) => {
  const [width, setWidth] = useState(0);
  const [scrollingDown, setScrollingDown] = useState(true);
  const scrollContainer = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const motionValue = useRef(0);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (scrollContainer.current) {
        setWidth(scrollContainer.current.scrollWidth / 2);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const animateText = useCallback(() => {
    if (!scrollContainer.current || width === 0) return;

    if (scrollingDown) {
      motionValue.current += 4.5;
    } else {
      motionValue.current -= 4.5;
    }

    if (motionValue.current > 0) {
      motionValue.current = -width;
    } else if (motionValue.current < -width) {
      motionValue.current = 0;
    }

    if (scrollContainer.current) {
      scrollContainer.current.style.transform = `translateX(${motionValue.current}px)`;
    }

    animationRef.current = requestAnimationFrame(animateText);
  }, [scrollingDown, width]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        if (!scrollingDown) setScrollingDown(true);
      } else {
        if (scrollingDown) setScrollingDown(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollingDown]);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animateText);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animateText]);

  return (
    <div className="overflow-hidden whitespace-nowrap w-full">
      <div
        ref={scrollContainer}
        className="flex whitespace-nowrap"
        style={{ display: "flex", whiteSpace: "nowrap" }}
      >
        {/* First copy */}
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={`first-${i}`}
              className="text-7xl xl:text-9xl mx-2 sm:mx-3 md:mx-4 lg:mx-6 text-black whitespace-nowrap"
            >
              {text}
            </span>
          ))}
        </div>

        {/* Second copy */}
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={`second-${i}`}
              className="text-7xl xl:text-9xl mx-2 sm:mx-3 md:mx-4 lg:mx-6 text-black-800 whitespace-nowrap"
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteScroll;
