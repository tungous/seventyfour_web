import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

// Create a motion version of the Next.js Image component
const MotionImage = motion(Image);

interface LogoProps {
  handleLogoClick: () => void;
  isProjectsClicked: boolean;
  isCreativesClicked: boolean;
  isAboutClicked: boolean;
  isMobileMenuOpen: boolean;
}

export const Logo = ({
  handleLogoClick,
  isProjectsClicked,
  isCreativesClicked,
  isAboutClicked,
  isMobileMenuOpen,
}: LogoProps) => {
  // Add state to track when any button state changes
  const [animationKey, setAnimationKey] = useState(0);

  // Update the animation key when any button state changes
  useEffect(() => {
    setAnimationKey((prevKey) => prevKey + 1);
  }, [isProjectsClicked, isCreativesClicked, isAboutClicked]);

  // Base filter effects (without blur)
  const baseFilter =
    isProjectsClicked || isCreativesClicked || isAboutClicked
      ? "drop-shadow(0px 0px 1px rgba(255, 255, 255, 1)) drop-shadow(0px 0px 3px rgba(255, 255, 255, 1)) drop-shadow(0px 0px 4px rgba(0, 0, 0, 1))"
      : "invert(1) drop-shadow(0px 0px 1px rgba(0, 0, 0, 1)) drop-shadow(0px 0px 1px rgba(0, 0, 0, 1))";

  return (
    <AnimatePresence mode="wait">
      {!isMobileMenuOpen && (
        <MotionImage
          key={`logo-${animationKey}`}
          src="/logo.svg"
          alt="Seventyfour logo"
          width={16}
          height={16}
          className="object-contain cursor-pointer"
          style={{
            position: "relative",
            transform: "translateZ(0)", // Force hardware acceleration for Safari
            willChange: "filter", // Optimize for filter animations
            verticalAlign: "middle", // Ensure vertical alignment with text
            display: "inline-block", // Maintain consistent behavior with text
          }}
          onClick={handleLogoClick}
          data-logo-element="true"
          initial={{
            opacity: 0,
            filter: `blur(15px) ${baseFilter}`, // Start with blur AND base filter
            y: 0, // Ensure vertical position stays consistent
          }}
          animate={{
            opacity: 1,
            filter: `blur(0px) ${baseFilter}`, // End with no blur BUT keep base filter
            y: 0, // Ensure vertical position stays consistent
          }}
          exit={{
            opacity: 0,
            filter: `blur(15px) ${baseFilter}`, // Exit with blur AND base filter
            y: 0, // Ensure vertical position stays consistent
          }}
          transition={{
            duration: 0.7,
            filter: { type: "spring", damping: 20 }, // Add spring animation for smoother Safari transitions
          }}
        />
      )}
    </AnimatePresence>
  );
};
