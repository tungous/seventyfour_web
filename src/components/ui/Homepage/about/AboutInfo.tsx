import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

interface AboutInfoProps {
  isVisible: boolean;
  isSafari: boolean;
  isWindows: boolean;
  isExiting: boolean;
}

export const AboutInfo: React.FC<AboutInfoProps> = ({
  isVisible,
  isSafari,
  isWindows,
  isExiting,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const targetsRef = useRef<HTMLElement[]>([]);
  // Internal state to track the full 2s exit animation
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  // Helper function to get targets
  const getTargets = () => {
    if (!targetsRef.current || targetsRef.current.length === 0) {
      targetsRef.current = gsap.utils.toArray<HTMLElement>(
        containerRef.current?.querySelectorAll("p, a") || []
      );
    }
    return targetsRef.current;
  };

  // Use useGSAP for initial state setting only
  useGSAP(
    () => {
      // Set initial state immediately, considering Safari/Windows
      gsap.set(getTargets(), {
        opacity: 0,
        filter: isSafari || isWindows ? "blur(0px)" : "blur(15px)",
      });
    },
    { scope: containerRef, dependencies: [isSafari, isWindows] } // Re-run if browser flags change (unlikely, but safe)
  );

  // Handle animations based on props and internal state
  useEffect(() => {
    const targets = getTargets();
    if (targets.length === 0) return;

    gsap.killTweensOf(targets); // Prevent overlaps

    // Determine target filter based on browser
    const targetVisibleFilter =
      isSafari || isWindows ? "blur(0px)" : "blur(0.5px)";
    const targetHiddenFilter =
      isSafari || isWindows ? "blur(0px)" : "blur(15px)";

    if (isVisible && !isExiting) {
      // --- ENTER ---
      setIsAnimatingOut(false);
      gsap.to(targets, {
        opacity: 1,
        filter: targetVisibleFilter, // Use calculated target filter
        duration: 2,
        ease: "power1.out",
        stagger: 0.3,
        delay: 0.1,
        overwrite: true,
      });
    } else if (isExiting && !isAnimatingOut) {
      // --- START EXIT ---
      setIsAnimatingOut(true);
      gsap.to(targets, {
        opacity: 0,
        filter: targetHiddenFilter, // Use calculated target filter for exit
        duration: 2,
        ease: "power1.in",
        stagger: 0.1,
        overwrite: true,
        onComplete: () => {
          setIsAnimatingOut(false);
        },
      });
    }
  }, [isVisible, isExiting, isSafari, isWindows, isAnimatingOut]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "fixed bottom-0 lg:px-22 px-7 pb-11  text-white z-2 lg:text-xs text-[10px] tracking-tighter uppercase font-bold flex flex-col space-y-1 pointer-events-auto mix-blend-difference",
        // Apply filter ONLY if NOT Safari AND NOT Windows
        (isVisible || isAnimatingOut) && !isSafari && !isWindows
          ? "[filter:url(#threshold)]"
          : "",
        // Container Opacity
        isVisible || isAnimatingOut ? "opacity-100" : "opacity-0"
      )}
      style={{
        // Apply text shadow ONLY on Safari/Windows when visible/animating out
        textShadow:
          (isVisible || isAnimatingOut) && (isSafari || isWindows)
            ? "0px 0px 6px rgba(255, 255, 255, 1)"
            : "0px 0px 6px rgba(255, 255, 255, 1",
      }}
    >
      <p>Based in Prague</p>
      <a
        href="https://www.instagram.com/seventyfour.collective"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        @seventyfour.collective
      </a>
      <a href="mailto:collective@seventyfour.work" className="hover:underline">
        collective@seventyfour.work
      </a>
      <p>Kaplanova 2252/8, 148 00 Praha 4, Czech Republic</p>
    </div>
  );
};
