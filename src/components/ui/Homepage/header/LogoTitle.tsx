import React, { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import { MorphingText } from "@/components/magicui/morphing-text";
import ProjectName from "@/components/ui/Homepage/projects/ProjectName";
import CreativeName from "@/components/ui/Homepage/creatives/CreativeName";
import {
  creatives,
  creativeType,
} from "@/components/ui/Homepage/creatives/CreativeItems";
import {
  projects,
  projectType,
} from "@/components/ui/Homepage/projects/ProjectItems";
import { LogoText } from "@/components/ui/Homepage/header/LogoText";
import { Logo } from "@/components/ui/Homepage/header/Logo";

interface LogoTitleProps {
  isProjectsClicked: boolean;
  isCreativesClicked: boolean;
  isAboutClicked: boolean;
  currentProject: projectType;
  currentProjectIndex: number;
  currentCreative: creativeType;
  currentCreativeIndex: number;
  handleLogoClick: () => void;
  setCurrentCreativeIndex: (index: number) => void;
  setCurrentProjectIndex: (index: number) => void;
  isMobileMenuOpen?: boolean;
  isPushedDown?: boolean;
}

export const LogoTitle: React.FC<LogoTitleProps> = ({
  isProjectsClicked,
  isCreativesClicked,
  isAboutClicked,
  currentProjectIndex,
  currentCreativeIndex,
  handleLogoClick,
  setCurrentCreativeIndex,
  setCurrentProjectIndex,
  isMobileMenuOpen = false,
}) => {
  const texts = "IS A COLLECTIVE OF CREATIVES";
  const [showMorphingText, setShowMorphingText] = useState(false);
  const [showListContent, setShowListContent] = useState(false);
  const [showLogoText, setShowLogoText] = useState(false);

  // Track when the Logo animation completes
  useEffect(() => {
    // Reset state when any navigation changes
    setShowLogoText(false);

    // Set a timeout to show the LogoText after logo animation completes
    const logoTextTimeout = setTimeout(() => {
      setShowLogoText(true);
    }, 800); // 800ms should be enough for the logo animation to complete

    return () => clearTimeout(logoTextTimeout);
  }, [isProjectsClicked, isCreativesClicked, isAboutClicked]);

  // Handle the delayed appearance of the morphing text
  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;

    if (isAboutClicked) {
      // Clear any existing timeouts
      if (timeoutId) clearTimeout(timeoutId);
      // Set timeout to show morphing text after LogoText animation completes
      timeoutId = setTimeout(() => {
        setShowMorphingText(true);
      }, 1600); // 800ms for logo + 800ms for LogoText
    } else {
      // Hide immediately when about is unclicked
      setShowMorphingText(false);
    }

    // Cleanup on unmount or when dependencies change
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isAboutClicked]);

  // Handle the delayed appearance of project/creative lists
  useEffect(() => {
    let listTimeoutId: NodeJS.Timeout | null = null;

    if (isProjectsClicked || isCreativesClicked) {
      // Reset state first
      setShowListContent(false);

      // Clear any existing timeouts
      if (listTimeoutId) clearTimeout(listTimeoutId);

      // Set timeout to show lists after logo animation completes
      listTimeoutId = setTimeout(() => {
        setShowListContent(true);
      }, 800); // Increased to ensure it appears after logo and other animations
    } else {
      // Reset when neither is clicked
      setShowListContent(false);
    }

    // Cleanup function
    return () => {
      if (listTimeoutId) clearTimeout(listTimeoutId);
    };
  }, [isProjectsClicked, isCreativesClicked]);

  return (
    <div
      className={`float-left lg:pl-16 z-50 items-center ${
        isAboutClicked ? "text-white" : "text-black"
      } pl-2`}
      style={{ transform: "translateZ(0)" }}
    >
      <div
        className="flex-row flex items-center"
        style={{
          transform: "translateZ(0)",
          willChange: "contents",
          position: "relative",
          height: "auto",
        }}
      >
        <Logo
          handleLogoClick={handleLogoClick}
          isProjectsClicked={isProjectsClicked}
          isCreativesClicked={isCreativesClicked}
          isAboutClicked={isAboutClicked}
          isMobileMenuOpen={isMobileMenuOpen}
        />
        <div
          className={`${
            isAboutClicked ? "text-white" : "text-black"
          } lg:pl-1 lg:text-xs text-[10px] uppercase tracking-tight flex flex-row lg:ml-0 ml-0 items-center`}
          style={{ height: "auto", position: "relative" }}
        >
          <AnimatePresence mode="wait">
            {!isMobileMenuOpen && (
              <>
                {isProjectsClicked
                  ? showListContent && (
                      <ProjectName
                        names={projects.map((project) => project.name)}
                        currentIndex={currentProjectIndex}
                        setCurrentProjectIndex={setCurrentProjectIndex}
                      />
                    )
                  : isCreativesClicked
                  ? showListContent && (
                      <CreativeName
                        names={creatives.map((creative) => creative.name)}
                        currentIndex={currentCreativeIndex}
                        setCurrentCreativeIndex={setCurrentCreativeIndex}
                      />
                    )
                  : // Only show LogoText when showLogoText is true
                    showLogoText && (
                      <LogoText isAboutClicked={isAboutClicked} />
                    )}
              </>
            )}
          </AnimatePresence>
          {/* Only render the MorphingText component when needed */}
          {isAboutClicked && !isMobileMenuOpen && (
            <MorphingText text={texts} visible={showMorphingText} />
          )}
        </div>
      </div>
    </div>
  );
};
