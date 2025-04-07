"use client";

import { useImageNavigation } from "@/hooks/useImageNavigation";
import { useNavigation } from "@/hooks/useNavigation";
import { useContentScroll } from "@/hooks/useContentScroll";
import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { Creative } from "@/components/ui/Homepage/creatives/Creative";
import { Project } from "@/components/ui/Homepage/projects/Project";
import { MainLayout } from "@/components/ui/Homepage/layout/MainLayout";

export default function Hero() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isHeaderAnimatingOut, setIsHeaderAnimatingOut] = useState(false);
  const animationDuration = 700;

  const navigation = useNavigation();
  const {
    isAboutClicked,
    isCreativesClicked,
    isProjectsClicked,
    justifyProp,
    handleLogoClick,
    handleAboutClick,
    handleCreativesClick,
    handleProjectsClick,
  } = navigation;

  const images = useImageNavigation();
  const {
    firstImgVisible,
    secondImgVisible,
    thirdImgVisible,
    firstImageDelay,
    setFirstImageDelay,
    isExiting,
    randomX,
    randomY,
    onHoverChange,
    handleAboutToggle,
  } = images;

  // Create a proper navigation handler for scrolling between sections
  const handleNavigate = (section: "projects" | "creatives") => {
    if (section === "projects") {
      handleProjectsClick();
    } else if (section === "creatives") {
      handleCreativesClick();
    }
  };

  // Update the useContentScroll hook to use the correct navigation handler
  const content = useContentScroll(
    isProjectsClicked,
    isCreativesClicked,
    isAboutClicked,
    handleNavigate,
    isMobileMenuOpen
  );
  const {
    setIsBackgroundBlurred,
    currentProjectIndex,
    currentProject,
    currentCreativeIndex,
    currentCreative,
    setCurrentCreativeIndex,
    setCurrentProjectIndex,
    isImagePushedDown,
    setIsImagePushedDown,
  } = content;

  // Connect the about click handler to the image toggling
  const handleAboutToggleRef = useRef(handleAboutToggle);

  // Update ref if function changes
  useEffect(() => {
    handleAboutToggleRef.current = handleAboutToggle;
  }, [handleAboutToggle]);

  // Use the ref in the effect that depends on isAboutClicked
  useEffect(() => {
    handleAboutToggleRef.current(isAboutClicked);
  }, [isAboutClicked]);

  // Manage first image delay when about is clicked
  const wrappedHandleAboutClick = () => {
    const isActivating = handleAboutClick();
    if (isActivating) {
      setTimeout(() => {
        setFirstImageDelay(true);
      }, 700);
      setFirstImageDelay(false);
    }
  };

  // Handle mobile menu toggle
  const handleMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Add effect to manage body scroll
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log("Lenis scroll event:", e);
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  // Effect to handle header visibility on scroll when a project is clicked
  useEffect(() => {
    if (!isProjectsClicked) {
      setIsHeaderVisible(true);
      setIsHeaderAnimatingOut(false);
      return;
    }

    let ticking = false;
    let animationTimeoutId: NodeJS.Timeout | null = null;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollHeight = document.documentElement.scrollHeight;
      const isAtTop = currentScrollY <= 100;
      const isAtBottom = currentScrollY + windowHeight >= scrollHeight - 200;
      const shouldBeVisible = isAtTop || isAtBottom;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (shouldBeVisible && animationTimeoutId) {
            clearTimeout(animationTimeoutId);
            animationTimeoutId = null;
            setIsHeaderAnimatingOut(false);
          }

          if (isHeaderVisible !== shouldBeVisible) {
            if (!shouldBeVisible) {
              setIsHeaderVisible(false);
              setIsHeaderAnimatingOut(true);
              animationTimeoutId = setTimeout(() => {
                setIsHeaderAnimatingOut(false);
                animationTimeoutId = null;
              }, animationDuration);
            } else {
              setIsHeaderVisible(true);
              setIsHeaderAnimatingOut(false);
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationTimeoutId) {
        clearTimeout(animationTimeoutId);
      }
    };
  }, [isProjectsClicked, isHeaderVisible]);

  return (
    <div className={`h-screen ${isMobileMenuOpen ? "overflow-hidden" : ""}`}>
      <Creative
        isCreativesClicked={isCreativesClicked}
        currentCreativeIndex={currentCreativeIndex}
        currentCreative={currentCreative}
        setIsBackgroundBlurred={setIsBackgroundBlurred}
        isMobileMenuOpen={isMobileMenuOpen}
      />

      <Project
        isProjectsClicked={isProjectsClicked}
        currentProjectIndex={currentProjectIndex}
        currentProject={currentProject}
        isMobileMenuOpen={isMobileMenuOpen}
        isImagePushedDown={isImagePushedDown}
        setIsImagePushedDown={setIsImagePushedDown}
      />

      <MainLayout
        setCurrentCreativeIndex={setCurrentCreativeIndex}
        setCurrentProjectIndex={setCurrentProjectIndex}
        isAboutClicked={isAboutClicked}
        isProjectsClicked={isProjectsClicked}
        isCreativesClicked={isCreativesClicked}
        isExiting={isExiting}
        firstImgVisible={firstImgVisible}
        secondImgVisible={secondImgVisible}
        thirdImgVisible={thirdImgVisible}
        firstImageDelay={firstImageDelay}
        randomX={randomX}
        randomY={randomY}
        onHoverChange={onHoverChange}
        justifyProp={justifyProp}
        currentProject={currentProject}
        currentProjectIndex={currentProjectIndex}
        currentCreative={currentCreative}
        currentCreativeIndex={currentCreativeIndex}
        handleLogoClick={handleLogoClick}
        handleAboutClick={wrappedHandleAboutClick}
        handleCreativesClick={handleCreativesClick}
        handleProjectsClick={handleProjectsClick}
        handleMenuClick={handleMenuClick}
        isMobileMenuOpen={isMobileMenuOpen}
        isPushedDown={isImagePushedDown}
        isHeaderVisible={isHeaderVisible}
        isHeaderAnimatingOut={isHeaderAnimatingOut}
      />
    </div>
  );
}
