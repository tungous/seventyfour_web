"use client";

import { useImageNavigation } from "@/hooks/useImageNavigation";
import { useNavigation } from "@/hooks/useNavigation";
import { useContentScroll } from "@/hooks/useContentScroll";
import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { Creative } from "@/components/ui/Homepage/creatives/Creative";
import { Project } from "@/components/ui/Homepage/projects/Project";
import { MainLayout } from "@/components/ui/Homepage/layout/MainLayout";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

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

  useGSAP(() => {
    // Instantiate Lenis
    const lenis = new Lenis();

    // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
    lenis.on("scroll", ScrollTrigger.update);

    // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
    // This ensures Lenis's smooth scroll animation updates on each GSAP tick
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); // Convert time from seconds to milliseconds
    });

    // Disable lag smoothing in GSAP to prevent any delay in scroll animations
    gsap.ticker.lagSmoothing(0);
  }); // No dependencies needed for this basic setup

  // Effect to manage body scroll
  useEffect(() => {
    if (isAboutClicked) {
      // Highest priority: About is open, always hide scroll
      document.body.style.overflow = "hidden";
    } else if (isImagePushedDown) {
      // Next priority: Project details are shown, allow scroll
      document.body.style.overflow = "auto";
    } else if (isMobileMenuOpen) {
      // Next priority: Mobile menu is open (and About/Details are not), hide scroll
      document.body.style.overflow = "hidden";
    } else {
      // Default state: No overlays active, hide scroll
      document.body.style.overflow = "hidden";
    }

    // Cleanup function resets to a general default
    return () => {
      document.body.style.overflow = "unset";
    };
    // Add isAboutClicked to dependencies
  }, [isAboutClicked, isMobileMenuOpen, isImagePushedDown]);

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
    <div
      className={`h-screen ${
        isMobileMenuOpen && !isImagePushedDown ? "overflow-hidden" : ""
      }`}
    >
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
