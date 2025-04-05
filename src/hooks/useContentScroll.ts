import { useState, useEffect } from "react";
import {
  projects,
  projectType,
} from "@/components/ui/Homepage/projects/ProjectItems";
import {
  creatives,
  creativeType,
} from "@/components/ui/Homepage/creatives/CreativeItems";

export function useContentScroll(
  isProjectsClicked: boolean,
  isCreativesClicked: boolean,
  isAboutClicked: boolean,
  onNavigate?: (section: "projects" | "creatives") => void,
  isMobileMenuOpen?: boolean
) {
  const [, setIsBackgroundBlurred] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentProject, setCurrentProject] = useState<projectType>(
    projects[0]
  );
  const [currentCreativeIndex, setCurrentCreativeIndex] = useState(0);
  const [currentCreative, setCurrentCreative] = useState<creativeType>(
    creatives[0]
  );
  const [isScrolling, setIsScrolling] = useState(false);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);
  const [isImagePushedDown, setIsImagePushedDown] = useState(false);

  // Reset blur state on content change
  useEffect(() => {
    setIsBackgroundBlurred(false);
  }, [currentProjectIndex, currentCreativeIndex]);

  // Update current content when index changes
  useEffect(() => {
    setCurrentProject(projects[currentProjectIndex]);
  }, [currentProjectIndex]);

  useEffect(() => {
    setCurrentCreative(creatives[currentCreativeIndex]);
  }, [currentCreativeIndex]);

  // Main page scrolling effect - wheel events (desktop)
  useEffect(() => {
    // Only active when we're on the main page (no sections clicked)
    if (
      isProjectsClicked ||
      isCreativesClicked ||
      isAboutClicked ||
      !onNavigate ||
      isMobileMenuOpen
    )
      return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (isScrolling) return;
      setIsScrolling(true);

      // Navigate based on scroll direction
      if (e.deltaY > 0) {
        // Scrolled down - go to Projects
        onNavigate("projects");
      } else {
        // Scrolled up - go to Creatives
        onNavigate("creatives");
      }

      setTimeout(() => {
        setIsScrolling(false);
      }, 1500);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [
    isProjectsClicked,
    isCreativesClicked,
    isAboutClicked,
    isScrolling,
    onNavigate,
    isMobileMenuOpen,
  ]);

  // Main page scrolling effect - touch events (mobile)
  useEffect(() => {
    // Only active when we're on the main page
    if (
      isProjectsClicked ||
      isCreativesClicked ||
      isAboutClicked ||
      !onNavigate ||
      isMobileMenuOpen
    )
      return;

    const handleTouchStart = (e: TouchEvent) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      // Prevent default to disable browser's native scrolling
      e.preventDefault();
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStartY === null || isScrolling) return;

      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;

      // Only proceed if the swipe is significant enough
      if (Math.abs(deltaY) < 50) return;

      setIsScrolling(true);

      // Navigate based on swipe direction
      if (deltaY > 0) {
        // Swiped up - go to Projects
        onNavigate("projects");
      } else {
        // Swiped down - go to Creatives
        onNavigate("creatives");
      }

      setTimeout(() => {
        setIsScrolling(false);
      }, 1500);
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: false });

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [
    isProjectsClicked,
    isCreativesClicked,
    isAboutClicked,
    isScrolling,
    touchStartY,
    onNavigate,
    isMobileMenuOpen,
  ]);

  // Reset pushed down state when projects section is toggled
  useEffect(() => {
    setIsImagePushedDown(false);
  }, [isProjectsClicked]);

  return {
    setIsBackgroundBlurred,
    currentProjectIndex,
    currentProject,
    currentCreativeIndex,
    currentCreative,
    setCurrentCreativeIndex,
    setCurrentProjectIndex,
    isImagePushedDown,
    setIsImagePushedDown,
  };
}
