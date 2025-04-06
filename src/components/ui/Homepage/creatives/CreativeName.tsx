import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

interface CreativeProps {
  names: string[];
  currentIndex: number;
  scrollInterval?: number;
  onNameClick?: (index: number) => void;
  setCurrentCreativeIndex: (index: number) => void;
}

export default function CreativeName({
  names,
  currentIndex,
  onNameClick,
  setCurrentCreativeIndex,
}: CreativeProps) {
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

  const handleNameClick = (index: number) => {
    previousIndexRef.current = index;
    setSafeIndex(index);
    setCurrentCreativeIndex(index);
    if (onNameClick) {
      onNameClick(index);
    }
  };

  return (
    <div className="relative flex items-center justify-center h-full">
      {/* Center marker - helps to visually see the center alignment */}
      <div className="absolute left-0 right-0  bg-transparent z-10 pointer-events-none" />

      <motion.div
        ref={containerRef}
        className="inline-block max-h-[63vh] overflow-hidden"
        style={{
          textShadow:
            "0px 0px 2px rgba(255, 255, 255, 1), 0px 0px 2px rgba(255, 255, 255, 1)", // white glow
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE and Edge
        }}
        key={`project-title-${names.join("-")}`}
        initial={{
          opacity: 0,
          fontWeight: 700,
          filter: "blur(10px) drop-shadow(0px 0px 0px rgba(0, 0, 0, 0))",
        }}
        animate={{
          opacity: 1,
          fontWeight: 700,
          filter: "blur(0px) drop-shadow(0px 0px 6px rgba(0, 0, 0, 1))",
        }}
        exit={{
          opacity: 0,
          fontWeight: 700,
          filter: "blur(10px) drop-shadow(0px 0px 0px rgba(0, 0, 0, 0))",
        }}
        transition={{ duration: 0.7 }}
      >
        <ul
          className="text-white list-none py-[30vh] px-0 m-0 text-left w-[200px] "
          ref={listRef}
        >
          {names.map((name, index) => (
            <li
              key={index}
              className={`lg:py-2 py-1 transition-all duration-300 ease-in-out pl-1.5 ${
                index === safeIndex
                  ? "font-bold opacity-100"
                  : "font-normal opacity-60"
              } cursor-pointer hover:opacity-90`}
              onClick={() => handleNameClick(index)}
            >
              {name}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
