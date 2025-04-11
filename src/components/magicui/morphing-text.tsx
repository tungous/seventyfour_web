"use client";
import { useEffect, useRef, useCallback } from "react";

// A simple utility to join Tailwind classes
function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

/**
 * The built-in threshold filter. We'll apply it with Tailwind's `[filter:url(#threshold)]`.
 */
const SvgFilters: React.FC = () => (
  <svg
    id="filters"
    className="fixed h-0 w-0"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <filter id="threshold">
        <feColorMatrix
          in="SourceGraphic"
          type="matrix"
          values="1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 250 -140"
        />
      </filter>
    </defs>
  </svg>
);

/**
 * Cubic ease-out function:
 *   0 -> 0
 *   1 -> 1
 *   starts fast, slows near the end
 */
function cubicEaseOut(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

/**
 * A morphing text component that:
 *   - Fades in when visible is true
 *   - Fades out when visible is false
 *   - Uses a cubic ease-out for smooth transitions
 */
export const MorphingText: React.FC<{
  text: string;
  visible: boolean; // Controls whether to show or hide the text
  morphTime?: number; // total fade duration in seconds (e.g. 5)
}> = ({ text, visible, morphTime = 8 }) => {
  const startTimeRef = useRef<number | null>(null);
  const requestIdRef = useRef<number | null>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const lastVisibleRef = useRef<boolean>(visible);
  const isFirstRenderRef = useRef<boolean>(true);

  const animate = useCallback(
    (timestampMs: number) => {
      if (startTimeRef.current === null) {
        // Apply offset only for fade-in, not for fade-out
        startTimeRef.current = timestampMs - (visible ? 3600 : 0);

        // For fade-out, ensure we start at full opacity
        if (!visible && textRef.current) {
          textRef.current.style.opacity = "100%";
          textRef.current.style.filter = "blur(0px)";
        }
      }

      // Convert ms → seconds
      const elapsedSeconds = (timestampMs - startTimeRef.current) / 1000;
      // Linear fraction from 0 -> 1
      let fraction = elapsedSeconds / morphTime;
      if (fraction > 1) {
        fraction = 1;
      }

      // Apply cubic ease-out
      const eased = cubicEaseOut(fraction);

      if (textRef.current) {
        if (visible) {
          // Fading in: 0% -> 100% opacity
          textRef.current.style.opacity = `${eased * 100}%`;
          // Blur from 8px -> 0px
          const blurAmount = 8 * (1 - eased);
          textRef.current.style.filter = `blur(${blurAmount}px)`;
        } else {
          // Fading out: 100% -> 0% opacity
          textRef.current.style.opacity = `${(1 - eased) * 100}%`;
          // Blur from 0px -> 8px
          const blurAmount = 8 * eased;
          textRef.current.style.filter = `blur(${blurAmount}px)`;
        }
      }

      if (fraction < 1) {
        requestIdRef.current = requestAnimationFrame(animate);
      } else {
        // If fully faded out, make sure we're at 0 opacity
        if (!visible && textRef.current) {
          textRef.current.style.opacity = "0";
        }
      }
    },
    [morphTime, visible]
  );

  useEffect(() => {
    // Skip animation on first render
    if (isFirstRenderRef.current) {
      isFirstRenderRef.current = false;
      lastVisibleRef.current = visible;
      return;
    }

    // Start a new animation only when visibility changes
    if (visible !== lastVisibleRef.current) {
      lastVisibleRef.current = visible;
      startTimeRef.current = null;

      if (requestIdRef.current) {
        cancelAnimationFrame(requestIdRef.current);
      }

      requestIdRef.current = requestAnimationFrame(animate);
    }
  }, [visible, morphTime, animate]);

  // Cleanup animation on unmount
  useEffect(() => {
    return () => {
      if (requestIdRef.current) {
        cancelAnimationFrame(requestIdRef.current);
      }
    };
  }, []);

  return (
    <div
      className={cn(
        "relative ml-1 font-sans lg:text-[12px] text-[10px] font-bold [filter:url(#threshold)] w-[200px] lg:w-full lg:max-w-screen-md "
      )}
      style={{
        opacity: visible ? 1 : 0,
        transition: `opacity 0.7s ease-in-out${
          visible ? ", filter 0.7s ease-in-out" : ""
        }`,
        filter: visible
          ? "blur(0px) drop-shadow(0px 0px 6px rgba(0, 0, 0, 1))"
          : "blur(8px) drop-shadow(0px 0px 0px rgba(0, 0, 0, 1))",
        textShadow:
          "0px 0px 2px rgba(255, 255, 255, 1), 0px 0px 2px rgba(255, 255, 255, 1)",
      }}
    >
      <span
        style={{
          opacity: "0", // We'll control opacity via animation
          filter: "blur(8px)", // Initial state
          display: "inline-block", // Ensures the text takes up space even when invisible
        }}
        ref={textRef}
      >
        {text}
      </span>
      <SvgFilters />
    </div>
  );
};
