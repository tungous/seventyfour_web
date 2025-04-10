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

  // State to track if the browser is Safari
  const [isSafari, setIsSafari] = useState(false);

  // Detect Safari on component mount (client-side only)
  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    // Check for "safari" but exclude "chrome" or "crios" (Chrome on iOS)
    if (
      ua.includes("safari") &&
      !ua.includes("chrome") &&
      !ua.includes("crios")
    ) {
      setIsSafari(true);
    }
  }, []); // Empty dependency array ensures this runs only once on mount

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

      // Set initial state: invisible and blurred
      gsap.set(targets, { opacity: 0, filter: "blur(15px)" }); // Start blurred

      // Use matchMedia for responsive ScrollTrigger settings
      ScrollTrigger.matchMedia({
        // Desktop (adjust breakpoint as needed)
        "(min-width: 768px)": function () {
          gsap.to(targets, {
            opacity: 1,
            filter: "blur(0.5px)",
            duration: 2,
            ease: "power1.out",
            stagger: 0.3,
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top bottom-=500", // Original start for desktop
              end: "-=0",
              toggleActions: "restart none none reverse",
            },
          });
        },

        // Mobile (adjust breakpoint as needed)
        "(max-width: 767px)": function () {
          gsap.to(targets, {
            opacity: 1,
            filter: "blur(0.5px)",
            duration: 1.2,
            ease: "power1.out",
            stagger: 0.3,
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top bottom-=200", // Adjusted start for mobile
              end: "-=0",
              toggleActions: "restart none none reverse",
            },
          });
        },
      });
    },
    { scope: footerRef } // Scope GSAP selectors to the footerRef container
  );

  if (!project) {
    return null;
  }

  return (
    <>
      {/* Conditionally render SVG Filters only if NOT Safari */}
      {!isSafari && <SvgFilters />}
      <div
        ref={footerRef}
        className="relative lg:h-[800px]  h-[300px] w-full bg-[#FCFBF4] text-black lg:px-22 px-7"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div
          className={`lg:h-[800px] h-[300px] flex flex-col justify-end text-left uppercase font-bold pb-11 ${
            !isSafari ? "[filter:url(#threshold)]" : ""
          }`}
          style={{
            textShadow: "0px 0px 6px rgba(0, 0, 0, 1)",
          }}
        >
          <h2 ref={titleRef} className="lg:text-6xl text-3xl mb-4">
            {project.title}
          </h2>
          <p ref={creative1Ref} className="lg:text-xs text-[8px] mb-2">
            {project.creative1}
          </p>
          <p ref={creative2Ref} className="lg:text-xs text-[8px] mb-2">
            {project.creative2}
          </p>
          <p ref={creative3Ref} className="lg:text-xs text-[8px] mb-2">
            {project.creative3}
          </p>
        </div>
      </div>
    </>
  );
}
