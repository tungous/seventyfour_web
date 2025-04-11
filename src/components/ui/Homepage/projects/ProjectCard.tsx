import { motion } from "motion/react";
import Image from "next/image";
import { useEffect } from "react";

// Create a motion version of Next.js Image component
const MotionImage = motion(Image);

interface ProjectProps {
  currentProjectIndex: number;
  backgroundImage: string;
  isBlurred: boolean;
  onClick?: () => void;
  isPushedDown: boolean;
  setIsPushedDown: (pushed: boolean) => void;
}

export default function ProjectCard({
  currentProjectIndex,
  backgroundImage,
  isBlurred,
  onClick,
  isPushedDown,
  setIsPushedDown,
}: ProjectProps) {
  // Use a global event listener for clicks instead of relying on component click events
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Check if click is on element with logo data attribute
      if (target.closest('[data-logo-element="true"]')) {
        return; // Exit early for logo clicks
      }

      // More comprehensive logo detection
      // Check for logo SVG, image with logo in path or alt text
      const isLogoElement = (element: Element | null): boolean => {
        if (!element) return false;

        // Check for image elements with logo in src or alt
        if (element.tagName === "IMG") {
          const img = element as HTMLImageElement;
          const src = img.src || "";
          const alt = img.alt || "";
          if (
            src.includes("logo") ||
            alt.toLowerCase().includes("logo") ||
            alt.toLowerCase().includes("seventyfour") ||
            src.includes("/logo.svg")
          ) {
            return true;
          }
        }

        // Check if it's part of a logo component by checking parent elements
        const parent = element.parentElement;
        if (
          (parent && parent.getAttribute("data-testid") === "logo") ||
          (parent && parent.className.includes("logo"))
        ) {
          return true;
        }

        return false;
      };

      // Check if the clicked element or any of its parents is a logo
      let currentElement: Element | null = target;
      while (currentElement) {
        if (isLogoElement(currentElement)) {
          return; // Exit early if it's a logo element
        }
        currentElement = currentElement.parentElement;
      }

      // Simplified UI element check
      const isUIElement = target.closest(
        "button, nav, li, .pointer-events-auto"
      );

      // Check if clicking on black details area when pushed down
      const isDetailArea = target.closest("#scrollable-project-details");

      // If not clicking on UI elements or details area
      if (!isUIElement && !isDetailArea) {
        const viewportHeight = window.innerHeight;
        const absoluteClickY = e.pageY; // This gives us the click position including scroll

        // When not pushed down, check central area
        if (!isPushedDown) {
          const inCentralArea =
            e.clientY > viewportHeight * 0.25 &&
            e.clientY < viewportHeight * 0.75;

          if (inCentralArea) {
            setIsPushedDown(true);
            if (onClick) onClick();
          }
        } else {
          // When pushed down, check if click is in the visible portion of the image
          // Subtract 150px only when pushed down to account for the shift
          const maxClickHeight = isPushedDown
            ? viewportHeight - 150
            : viewportHeight;
          const isInVisibleImageArea = absoluteClickY < maxClickHeight;

          if (isInVisibleImageArea) {
            setIsPushedDown(false);
            if (onClick) onClick();
          }
        }
      }
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [onClick, isPushedDown, setIsPushedDown]);

  return (
    <>
      <motion.div
        key={currentProjectIndex}
        data-project-index={currentProjectIndex}
        initial={{
          opacity: 0.5,
          filter: "blur(50px) brightness(1.5)",
        }}
        animate={{
          opacity: 1,
          filter: isBlurred
            ? "blur(30px) brightness(1.3)"
            : "blur(0px) brightness(1)",
        }}
        exit={{
          opacity: 0,
          filter: "blur(100px) brightness(1.5)",
        }}
        transition={{ duration: 1.3, filter: { duration: 1.3 } }}
        className={`absolute min-h-screen z-2 w-full`}
      >
        {/* The image that will move down to reveal details */}
        <MotionImage
          src={backgroundImage}
          quality={85}
          priority={true}
          fill
          alt="Project image background"
          className="object-cover z-2 cursor-pointer"
          transition={{
            filter: { duration: 0.3 },
          }}
        />
      </motion.div>
    </>
  );
}
