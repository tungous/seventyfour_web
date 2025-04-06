import { motion, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect } from "react";

export const LogoText = ({ isAboutClicked }: { isAboutClicked: boolean }) => {
  // Add state tracking for re-rendering
  const [renderKey, setRenderKey] = useState(0);
  const isInitialRender = useRef(true);
  const prevStateRef = useRef(isAboutClicked);
  const [isVisible, setIsVisible] = useState(false);

  // Force re-render when state changes
  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      prevStateRef.current = isAboutClicked;
      return;
    }

    if (prevStateRef.current !== isAboutClicked) {
      setRenderKey((prev) => prev + 1);
      prevStateRef.current = isAboutClicked;

      // Reset visibility when state changes
      setIsVisible(false);

      // Wait for logo animation to complete before showing LogoText
      const timeoutId = setTimeout(() => {
        setIsVisible(true);
      }, 800); // 800ms to allow logo animation (700ms) to complete plus buffer

      return () => clearTimeout(timeoutId);
    }
  }, [isAboutClicked]);

  // Set initial visibility on component mount with a delay
  useEffect(() => {
    const initialTimeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 800);

    return () => clearTimeout(initialTimeoutId);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.span
          key={`title-${renderKey}-${isAboutClicked ? "about" : "default"}`}
          initial={{
            opacity: 0,
            fontWeight: 700,
            filter: isAboutClicked
              ? "blur(10px) drop-shadow(0px 0px 0px rgba(0, 0, 0, 1))"
              : "blur(10px) drop-shadow(0px 0px 0px rgba(0, 0, 0, 1))",
          }}
          animate={{
            opacity: 1,
            fontWeight: 700,
            filter: isAboutClicked
              ? "blur(0px) drop-shadow(0px 0px 6px rgba(0, 0, 0, 1))"
              : "blur(0px) drop-shadow(0px 0px 0px rgba(0, 0, 0, 1))",
          }}
          exit={{
            opacity: 0,
            fontWeight: 700,
            filter: isAboutClicked
              ? "blur(10px) drop-shadow(0px 0px 0px rgba(0, 0, 0, 1))"
              : "blur(10px) drop-shadow(0px 0px 0px rgba(0, 0, 0, 1))",
          }}
          transition={{
            duration: 0.7,
            filter: {
              duration: 0.3, // Faster filter transitions
              type: "tween", // Use tween instead of spring for Safari
            },
            boxShadow: { duration: 0.3 },
          }}
          className="inline-block pl-1.5"
          style={{
            textShadow: isAboutClicked
              ? "0px 0px 2px rgba(255, 255, 255, 1), 0px 0px 2px rgba(255, 255, 255, 1)"
              : "0px 0px 2px rgba(0, 0, 0, 1), 0px 0px 2px rgba(0, 0, 0, 1)",
            display: "inline-block",
            verticalAlign: "middle",
            transform: "translateZ(0)",
            willChange: "filter, opacity",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          Seventyfour
        </motion.span>
      )}
    </AnimatePresence>
  );
};
