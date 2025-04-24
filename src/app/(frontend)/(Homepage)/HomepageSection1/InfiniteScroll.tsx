import { useRef, useEffect, useState } from "react";

const InfiniteScroll: React.FC<{ text: string }> = ({ text }) => {
  const [width, setWidth] = useState(0);
  const [scrollingDown, setScrollingDown] = useState(true);
  const scrollContainer = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const motionValue = useRef(0);
  const animationRef = useRef<number | null>(null);

  // Measure container width and update on resize
  useEffect(() => {
    const updateWidth = () => {
      if (scrollContainer.current) {
        setWidth(scrollContainer.current.scrollWidth / 2);
      }
    };

    updateWidth();

    // Add resize listener for responsiveness
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  // Custom animation function that maintains position when direction changes
  const animateText = () => {
    if (!scrollContainer.current || width === 0) return;

    // Update position based on direction - increased speed values
    if (scrollingDown) {
      motionValue.current += 4.5; // Increased speed when scrolling down (left to right)
    } else {
      motionValue.current -= 4.5; // Increased speed when scrolling up (right to left)
    }

    // Create infinite loop effect by resetting position when needed
    if (motionValue.current > 0) {
      motionValue.current = -width;
    } else if (motionValue.current < -width) {
      motionValue.current = 0;
    }

    // Apply the transform
    if (scrollContainer.current) {
      scrollContainer.current.style.transform = `translateX(${motionValue.current}px)`;
    }

    // Continue animation
    animationRef.current = requestAnimationFrame(animateText);
  };

  // Detect scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        // Scrolling down
        if (!scrollingDown) {
          setScrollingDown(true);
        }
      } else {
        // Scrolling up
        if (scrollingDown) {
          setScrollingDown(false);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollingDown]);

  // Start/stop animation
  useEffect(() => {
    // Start animation
    animationRef.current = requestAnimationFrame(animateText);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [scrollingDown, width]);

  return (
    <div className="overflow-hidden whitespace-nowrap w-full">
      <div
        ref={scrollContainer}
        className="flex whitespace-nowrap"
        style={{
          display: "flex",
          whiteSpace: "nowrap",
        }}
      >
        {/* First copy */}
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={`first-${i}`}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl mx-2 sm:mx-3 md:mx-4 lg:mx-6 text-black whitespace-nowrap"
            >
              {text}
            </span>
          ))}
        </div>

        {/* Second copy for seamless looping */}
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={`second-${i}`}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl mx-2 sm:mx-3 md:mx-4 lg:mx-6 text-black-800 whitespace-nowrap"
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
