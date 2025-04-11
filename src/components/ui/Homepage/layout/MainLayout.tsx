import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AboutImages } from "@/components/ui/Homepage/about/AboutImages";
import { AboutInfo } from "@/components/ui/Homepage/about/AboutInfo";
import { LogoTitle } from "@/components/ui/Homepage/header/LogoTitle";
import { Navigation } from "@/components/ui/Homepage/header/Navigation";
import { projectType } from "@/components/ui/Homepage/projects/ProjectItems";
import { creativeType } from "@/components/ui/Homepage/creatives/CreativeItems";
import { cn } from "@/lib/utils";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Define SvgFilters component here
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

interface MainLayoutProps {
  isAboutClicked: boolean;
  isProjectsClicked: boolean;
  isCreativesClicked: boolean;
  isExiting: boolean;
  firstImgVisible: boolean;
  secondImgVisible: boolean;
  thirdImgVisible: boolean;
  firstImageDelay: boolean;
  randomX: number;
  randomY: number;
  onHoverChange: (imageNumber: number) => void;
  justifyProp: string;
  currentProject: projectType;
  currentProjectIndex: number;
  currentCreative: creativeType;
  currentCreativeIndex: number;
  handleLogoClick: () => void;
  handleAboutClick: () => void;
  handleCreativesClick: () => void;
  handleProjectsClick: () => void;
  setCurrentCreativeIndex: (index: number) => void;
  setCurrentProjectIndex: (index: number) => void;
  handleMenuClick: () => void;
  isMobileMenuOpen: boolean;
  isPushedDown?: boolean;
  isHeaderVisible: boolean;
  isHeaderAnimatingOut: boolean;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  isAboutClicked,
  isProjectsClicked,
  isCreativesClicked,
  isExiting,
  firstImgVisible,
  secondImgVisible,
  thirdImgVisible,
  firstImageDelay,
  randomX,
  randomY,
  onHoverChange,
  justifyProp,
  currentProject,
  currentProjectIndex,
  currentCreative,
  currentCreativeIndex,
  handleLogoClick,
  handleAboutClick,
  handleCreativesClick,
  handleProjectsClick,
  setCurrentCreativeIndex,
  setCurrentProjectIndex,
  handleMenuClick,
  isMobileMenuOpen,
  isPushedDown,
  isHeaderVisible,
  isHeaderAnimatingOut,
}) => {
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
      !ua.includes("crios") && // Chrome on iOS
      !ua.includes("chromium") // General Chromium check
    ) {
      setIsSafari(true);
    }
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log("Refreshing ScrollTrigger due to project index change...");
      ScrollTrigger.refresh();
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [currentProjectIndex]);
  return (
    <>
      {/* Conditionally render SVG Filters only if NOT Safari AND NOT Windows */}
      {!isSafari && !isWindows && <SvgFilters />}

      <motion.div
        initial={{ backgroundColor: "#00000", opacity: 0 }}
        animate={{
          backgroundColor:
            isAboutClicked || isProjectsClicked ? "#000000" : "#FCFBF4",
          opacity: 1,
        }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className={`fixed min-h-screen w-full z-1 ${
          isAboutClicked ? "about-active" : ""
        } ${isMobileMenuOpen ? "menu-active" : ""}`}
      />
      <div className="w-full h-screen z-1">
        <AboutImages
          isAboutClicked={isAboutClicked}
          isExiting={isExiting}
          firstImgVisible={firstImgVisible}
          secondImgVisible={secondImgVisible}
          thirdImgVisible={thirdImgVisible}
          firstImageDelay={firstImageDelay}
          randomX={randomX}
          randomY={randomY}
          onHoverChange={onHoverChange}
        />
        <AboutInfo
          isVisible={isAboutClicked}
          isSafari={isSafari}
          isWindows={isWindows}
          isExiting={isExiting}
        />
      </div>

      <div
        className={cn(
          "fixed top-0 left-0 flex-row flex items-center w-full h-screen",
          isHeaderVisible || isHeaderAnimatingOut ? "z-4" : "z-2"
        )}
        style={{ pointerEvents: "none" }}
      >
        <motion.div
          className="flex flex-row w-full items-center justify-between"
          initial={{ opacity: 1, filter: "blur(30px)" }}
          animate={{
            opacity: isHeaderVisible ? 1 : 0,
            filter: isHeaderVisible ? "blur(0px)" : "blur(10px)",
          }}
          exit={{ opacity: 1, filter: "blur(30px)" }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          style={{ pointerEvents: isHeaderVisible ? "auto" : "none" }}
        >
          <LogoTitle
            setCurrentCreativeIndex={setCurrentCreativeIndex}
            setCurrentProjectIndex={setCurrentProjectIndex}
            isProjectsClicked={isProjectsClicked}
            isCreativesClicked={isCreativesClicked}
            isAboutClicked={isAboutClicked}
            currentProject={currentProject}
            currentProjectIndex={currentProjectIndex}
            currentCreative={currentCreative}
            currentCreativeIndex={currentCreativeIndex}
            handleLogoClick={handleLogoClick}
            isMobileMenuOpen={isMobileMenuOpen}
            isPushedDown={isPushedDown}
          />

          <Navigation
            justifyProp={justifyProp}
            isProjectsClicked={isProjectsClicked}
            isAboutClicked={isAboutClicked}
            isCreativesClicked={isCreativesClicked}
            handleAboutClick={handleAboutClick}
            handleCreativesClick={handleCreativesClick}
            handleProjectsClick={handleProjectsClick}
            handleMenuClick={handleMenuClick}
            handleLogoClick={handleLogoClick}
          />
        </motion.div>
      </div>
    </>
  );
};
