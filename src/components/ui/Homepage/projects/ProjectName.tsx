import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface ProjectProps {
  names: string[];
  currentIndex: number;
  scrollInterval?: number;
  onNameClick?: (index: number) => void;
  setCurrentProjectIndex: (index: number) => void;
  isPushedDown?: boolean;
}

export default function ProjectName({
  names,
  currentIndex,
  onNameClick,
  setCurrentProjectIndex,
  isPushedDown = false,
}: ProjectProps) {
  const listRef = useRef<HTMLUListElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [safeIndex, setSafeIndex] = useState(0);
  const previousIndexRef = useRef(-1);

  // Sync with parent index when it changes
  useEffect(() => {
    if (names.length > 0) {
      let newIndex = 0;
      if (!Number.isNaN(currentIndex) && Number.isFinite(currentIndex)) {
        newIndex = Math.max(0, Math.min(currentIndex, names.length - 1));
      }

      previousIndexRef.current = newIndex;
      setSafeIndex(newIndex);
    }
  }, [currentIndex, names.length]);

  // Scroll to center the active item when safeIndex changes
  useEffect(() => {
    if (listRef.current && names.length > 0) {
      try {
        const selector = `li:nth-child(${safeIndex + 1})`;
        const activeElement = listRef.current.querySelector(selector);

        if (activeElement) {
          setTimeout(() => {
            activeElement.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }, 50);
        }
      } catch {
        // Silent error handling
      }
    }
  }, [safeIndex, names.length]);

  // Simple easing function that performs better on Safari
  const simpleEaseOut = (t: number): number => {
    // Simple quadratic ease-out function
    return 1 - (1 - t) * (1 - t);
  };

  const handleNameClick = (index: number) => {
    previousIndexRef.current = index;
    setSafeIndex(index);
    setCurrentProjectIndex(index);

    // Safari-optimized smooth scroll implementation
    const startPosition = window.scrollY;
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const duration = 600; // Shorter duration for better performance
      const progress = Math.min(elapsed / duration, 1);

      // Using our simpler easing function instead of Framer Motion's easeInOut
      const easeProgress = simpleEaseOut(progress);

      window.scrollTo(0, startPosition * (1 - easeProgress));

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);

    if (onNameClick) {
      onNameClick(index);
    }
  };

  return (
    <div className="relative flex items-center justify-center h-full">
      {/* Center marker - helps to visually see the center alignment */}
      <div className="absolute left-0 right-0 bg-transparent z-10 pointer-events-none" />

      <motion.div
        ref={containerRef}
        className={`inline-block ${
          isPushedDown ? "" : "max-h-[63vh] overflow-hidden"
        }`}
        style={{
          textShadow:
            "0px 0px 2px rgba(255, 255, 255, 1), 0px 0px 2px rgba(255, 255, 255, 1)",
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE and Edge
        }}
        key={`project-title-${names.join("-")}`}
        initial={{
          opacity: 0,
          fontWeight: 400,
          filter: "blur(10px) drop-shadow(0px 0px 0px rgba(0, 0, 0, 0))",
        }}
        animate={{
          opacity: 1,
          fontWeight: 700,
          filter: "blur(0px) drop-shadow(0px 0px 6px rgba(0, 0, 0, 1))",
        }}
        exit={{
          opacity: 0,
          fontWeight: 400,
          filter: "blur(10px) drop-shadow(0px 0px 0px rgba(0, 0, 0, 0))",
        }}
        transition={{ duration: 0.7 }}
      >
        <AnimatePresence mode="wait">
          {
            <motion.ul
              key="name-list"
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{
                opacity: 1,
                filter: "blur(0px)",
                transition: { duration: 0.7 },
              }}
              exit={{
                opacity: 0,
                filter: "blur(10px)",
                transition: { duration: 0 },
              }}
              className="text-white list-none py-[30vh] text-left lg:w-[200px]"
              ref={listRef}
            >
              {names.map((name, index) => (
                <li
                  key={index}
                  className={`project-name-item lg:py-2 py-1 transition-all duration-300 ease-in-out px-1.5 ${
                    index === safeIndex
                      ? "font-bold opacity-100 active"
                      : "font-normal opacity-60"
                  } cursor-pointer hover:opacity-90`}
                  onClick={() => handleNameClick(index)}
                >
                  {name}
                </li>
              ))}
            </motion.ul>
          }
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
