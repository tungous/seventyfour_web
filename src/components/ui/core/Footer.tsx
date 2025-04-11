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

// Define a more complete project type, matching ProjectItems.tsx
export interface FooterProjectType {
  name?: string; // Optional, based on ProjectItems
  info?: string; // Optional, based on ProjectItems
  backgroundImage?: string; // Add this field
  title?: string; // Keep existing optional fields
  description?: string;
  creative1?: string;
  creative2?: string;
  creative3?: string;
}

export default function Footer({
  project,
  footerRef,
}: {
  project: FooterProjectType; // Use the updated type
  footerRef: RefObject<HTMLDivElement | null>;
}) {
  // Refs for the elements to animate
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const creative1Ref = useRef<HTMLParagraphElement>(null);
  const creative2Ref = useRef<HTMLParagraphElement>(null);
  const creative3Ref = useRef<HTMLParagraphElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null); // <-- Add ref for background

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
      // Target text elements
      const textTargets = [
        titleRef.current,
        descriptionRef.current,
        creative1Ref.current,
        creative2Ref.current,
        creative3Ref.current,
      ].filter(Boolean);

      // Target background element
      const backgroundTarget = backgroundRef.current;

      // Initial state for text
      if (textTargets.length > 0) {
        gsap.set(textTargets, {
          opacity: 0,
          filter: isSafari || isWindows ? "blur(0px)" : "blur(15px)",
        });
      }

      // Initial state for background (only if image exists)
      if (backgroundTarget && project.backgroundImage) {
        gsap.set(backgroundTarget, {
          opacity: 1,
          filter: "blur(60px) brightness(2)", // Start more blurred
        });
      }

      // Use matchMedia for responsive ScrollTrigger settings
      ScrollTrigger.matchMedia({
        // Desktop (adjust breakpoint as needed)
        "(min-width: 768px)": function () {
          gsap.to(textTargets, {
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

          // Animate background (if image exists)
          if (backgroundTarget && project.backgroundImage) {
            gsap.to(backgroundTarget, {
              opacity: 1,
              filter: "blur(10px) brightness(1)", // Animate to blur-md equivalent
              duration: 1, // Match text duration or adjust
              ease: "power1.out",
              force3D: "auto",
              scrollTrigger: {
                trigger: footerRef.current,
                start: "top bottom-=500", // Same trigger as text or adjust
                end: "-=0",
                toggleActions: "restart none none reverse",
              },
            });
          }
        },

        // Mobile (adjust breakpoint as needed)
        "(max-width: 767px)": function () {
          // Text animation (Mobile)
          if (textTargets.length > 0) {
            gsap.to(textTargets, {
              opacity: 1,
              filter: isSafari || isWindows ? "blur(0px)" : "blur(0.5px)",
              duration: 2,
              ease: "power1.out",
              stagger: 0.3,
              scrollTrigger: {
                trigger: footerRef.current,
                start: "top bottom-=200",
                end: "-=0",
                toggleActions: "restart none none reverse",
              },
            });
          }

          // Background animation (Mobile - if image exists)
          if (backgroundTarget && project.backgroundImage) {
            gsap.to(backgroundTarget, {
              opacity: 1,
              filter: "blur(4px) brightness(1)", // Animate to blur-xs equivalent on mobile
              duration: 1, // Match text duration or adjust
              ease: "power1.out",
              force3D: "auto",
              scrollTrigger: {
                trigger: footerRef.current,
                start: "top bottom-=200", // Same trigger as text or adjust
                end: "-=0",
                toggleActions: "restart none none reverse",
              },
            });
          }
        },
      });
    },
    {
      scope: footerRef,
      dependencies: [isSafari, isWindows, project.backgroundImage],
    } // <-- Add backgroundImage dependency
  );

  if (!project) {
    return null;
  }

  // Construct the background style conditionally
  const backgroundStyle: React.CSSProperties = {
    clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)", // Keep existing clipPath
  };

  // Prepare inline style for the dedicated background div
  const dedicatedBackgroundStyle: React.CSSProperties = {};
  if (project.backgroundImage) {
    dedicatedBackgroundStyle.backgroundImage = `url(${project.backgroundImage})`;
  }

  return (
    <>
      {/* Conditionally render SVG Filters only if NOT Safari AND NOT Windows */}
      {!isSafari && !isWindows && <SvgFilters />}
      <div
        ref={footerRef}
        className="relative lg:h-[800px] h-[300px] w-full lg:px-22 px-7 overflow-hidden" // Removed bg color, added overflow-hidden for clipPath
        style={{ clipPath: backgroundStyle.clipPath }} // Only apply clipPath here
      >
        {/* Dedicated Background Div */}
        <div
          ref={backgroundRef} // <-- Assign ref
          className="absolute inset-0 bg-cover bg-center bg-[#FCFBF4] z-0" // <-- Removed blur-md
          style={dedicatedBackgroundStyle} // Apply background image here
        />

        {/* Content Div (Remains on top) */}
        <div
          className={`relative z-10 lg:h-[800px] h-[300px] flex flex-col text-white justify-end text-left uppercase font-bold pb-11 mix-blend-difference ${
            // Ensure this is above background
            // Apply filter only if NOT Safari AND NOT Windows
            !isSafari && !isWindows ? "[filter:url(#threshold)]" : ""
          }`}
          style={{
            // Apply text shadow ONLY on Safari/Windows
            textShadow: "0px 0px 6px rgba(255, 255, 255, 1)",
          }}
        >
          <h2 ref={titleRef} className="lg:text-6xl text-3xl lg:mb-4 mb-2">
            {project.title}
          </h2>
          <p ref={descriptionRef} className="lg:text-xs text-[10px] lg:mb-2 mb-1">
            {project.description}
          </p>
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
