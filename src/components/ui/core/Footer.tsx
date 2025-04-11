import React, { RefObject, useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register GSAP plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

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

export default function Footer({
  project,
  footerRef,
}: {
  project: {
    title?: string;
    creative1?: string;
    creative2?: string;
    creative3?: string;
  };
  footerRef: RefObject<HTMLDivElement | null>;
}) {
  // Refs for the elements to animate
  const titleRef = useRef<HTMLHeadingElement>(null);
  const creative1Ref = useRef<HTMLParagraphElement>(null);
  const creative2Ref = useRef<HTMLParagraphElement>(null);
  const creative3Ref = useRef<HTMLParagraphElement>(null);

  // State to track if the browser is Safari or Windows
  const [isSafari, setIsSafari] = useState(false);
  const [isWindows, setIsWindows] = useState(false);

  // Detect Safari/Windows on component mount (client-side only)
  useEffect(() => {
    const platform = navigator.platform.toLowerCase();
    const ua = navigator.userAgent.toLowerCase();

    // Check for Windows
    if (platform.indexOf("win") > -1) {
      setIsWindows(true);
    }

    // Check for Safari (excluding Chrome/Chromium based browsers)
    if (
      ua.includes("safari") &&
      !ua.includes("chrome") &&
      !ua.includes("crios") &&
      !ua.includes("chromium")
    ) {
      setIsSafari(true);
    }
  }, []);

  useGSAP(
    () => {
      // Target all text elements for the animation
      const targets = [
        titleRef.current,
        creative1Ref.current,
        creative2Ref.current,
        creative3Ref.current,
      ].filter(Boolean); // Filter out null refs just in case

      if (targets.length === 0) return; // Exit if no targets

      // Set initial state: invisible and blurred (conditionally)
      gsap.set(targets, {
        opacity: 0,
        filter: isSafari || isWindows ? "blur(0px)" : "blur(15px)", // Conditional initial blur
      });

      // Use matchMedia for responsive ScrollTrigger settings
      ScrollTrigger.matchMedia({
        // Desktop (adjust breakpoint as needed)
        "(min-width: 768px)": function () {
          gsap.to(targets, {
            opacity: 1,
            // Animate blur only if not Safari/Windows
            filter: isSafari || isWindows ? "blur(0px)" : "blur(0.5px)",
            duration: 2,
            ease: "power1.out",
            stagger: 0.3,
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top bottom-=500",
              end: "-=0",
              toggleActions: "restart none none reverse",
            },
          });
        },

        // Mobile (adjust breakpoint as needed)
        "(max-width: 767px)": function () {
          gsap.to(targets, {
            opacity: 1,
            // Animate blur only if not Safari/Windows
            filter: isSafari || isWindows ? "blur(0px)" : "blur(0.5px)",
            duration: 1.2,
            ease: "power1.out",
            stagger: 0.3,
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top bottom-=200",
              end: "-=0",
              toggleActions: "restart none none reverse",
            },
          });
        },
      });
    },
    { scope: footerRef, dependencies: [isSafari, isWindows] } // Add deps for conditional blur
  );

  if (!project) {
    return null;
  }

  return (
    <>
      {/* Conditionally render SVG Filters only if NOT Safari AND NOT Windows */}
      {!isSafari && !isWindows && <SvgFilters />}
      <div
        ref={footerRef}
        className="relative lg:h-[800px]  h-[300px] w-full bg-[#FCFBF4] text-black lg:px-22 px-7"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div
          className={`lg:h-[800px] h-[300px] flex flex-col justify-end text-left uppercase font-bold pb-11 ${
            // Apply filter only if NOT Safari AND NOT Windows
            !isSafari && !isWindows ? "[filter:url(#threshold)]" : ""
          }`}
          style={{
            // Apply text shadow ONLY on Safari/Windows
            textShadow: "0px 0px 6px rgba(0, 0, 0, 1)",
          }}
        >
          <h2 ref={titleRef} className="lg:text-6xl text-3xl lg:mb-4 mb-2">
            {project.title}
          </h2>
          <p ref={creative1Ref} className="lg:text-xs text-[10px] lg:mb-2 mb-1">
            {project.creative1}
          </p>
          <p ref={creative2Ref} className="lg:text-xs text-[10px] lg:mb-2 mb-1">
            {project.creative2}
          </p>
          <p ref={creative3Ref} className="lg:text-xs text-[10px] lg:mb-2 mb-1">
            {project.creative3}
          </p>
        </div>
      </div>
    </>
  );
}
