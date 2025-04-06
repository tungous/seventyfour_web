import React from "react";
import { motion } from "motion/react";
import { AboutImages } from "@/components/ui/Homepage/about/AboutImages";
import { LogoTitle } from "@/components/ui/Homepage/header/LogoTitle";
import { Navigation } from "@/components/ui/Homepage/header/Navigation";
import { projectType } from "@/components/ui/Homepage/projects/ProjectItems";
import { creativeType } from "@/components/ui/Homepage/creatives/CreativeItems";

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
}) => {
  return (
    <>
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

      <div
        className={`block w-full fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-2 items-center`}
      >
        
        <div className="block">
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
        </div>
      </div>
    </>
  );
};
