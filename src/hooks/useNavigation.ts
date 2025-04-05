import { useState, useEffect, useRef, useCallback } from "react";

export function useNavigation() {
  const [isAboutClicked, setIsAboutClicked] = useState(false);
  const [isCreativesClicked, setIsCreativesClicked] = useState(false);
  const [isProjectsClicked, setIsProjectsClicked] = useState(false);
  const [justifyProp, setJustifyProp] = useState("justify-between");
  const [isDisabled, setIsDisabled] = useState(false);
  const [hasScrolledToProjects, setHasScrolledToProjects] = useState(false);
  // Function reference for resetting project index
  const [resetProjectIndexFn, setResetProjectIndexFn] = useState<
    (() => void) | null
  >(null);

  const handleProjectsClick = useCallback(() => {
    if (isDisabled) return;
    setIsDisabled(true);
    setTimeout(() => setIsDisabled(false), 700);

    // Reset other states first
    setIsAboutClicked(false);
    setIsCreativesClicked(false);

    if (!isProjectsClicked) {
      setIsProjectsClicked(true);
      setTimeout(() => {
        setJustifyProp("justify-end");
      }, 700);
    } else {
      setIsProjectsClicked(false);
      setHasScrolledToProjects(false);
      setJustifyProp("justify-between");
    }
  }, [isDisabled, isProjectsClicked, setJustifyProp]);

  // Keep track of wheel handler state to avoid stale closures
  const stateRef = useRef({
    isAboutClicked,
    isCreativesClicked,
    isProjectsClicked,
    hasScrolledToProjects,
  });

  // Update ref when state changes
  useEffect(() => {
    stateRef.current = {
      isAboutClicked,
      isCreativesClicked,
      isProjectsClicked,
      hasScrolledToProjects,
    };
  }, [
    isAboutClicked,
    isCreativesClicked,
    isProjectsClicked,
    hasScrolledToProjects,
  ]);

  // Register reset function
  const registerResetProjectIndex = (fn: () => void) => {
    setResetProjectIndexFn(() => fn);
  };

  // Handle wheel event to activate projects
  const handleWheelEvent = useCallback(
    (e: WheelEvent) => {
      const state = stateRef.current;
      // Only trigger on downward wheel movement (positive deltaY)
      // and only if no navigation has been clicked yet
      if (
        !state.hasScrolledToProjects &&
        !state.isAboutClicked &&
        !state.isCreativesClicked &&
        !state.isProjectsClicked &&
        e.deltaY > 50
      ) {
        e.preventDefault();
        setHasScrolledToProjects(true);

        // First ensure project index is reset to 0
        if (resetProjectIndexFn) {
          resetProjectIndexFn();
        }

        // Then activate projects view
        handleProjectsClick();
      }
    },
    [handleProjectsClick, resetProjectIndexFn]
  );

  // Set up the wheel event listener only once
  useEffect(() => {
    window.addEventListener("wheel", handleWheelEvent, { passive: false });
    return () => window.removeEventListener("wheel", handleWheelEvent);
  }, [handleWheelEvent]);

  function handleLogoClick() {
    window.location.reload();
  }

  function handleAboutClick() {
    if (isDisabled) return;
    setIsDisabled(true);
    setTimeout(() => setIsDisabled(false), 700);

    // Reset other states first
    setIsCreativesClicked(false);
    setIsProjectsClicked(false);
    setJustifyProp("justify-between");

    if (!isAboutClicked) {
      setIsAboutClicked(true);
      return true; // Signal that About was turned on
    } else {
      setIsAboutClicked(false);
      return false; // Signal that About was turned off
    }
  }

  function handleCreativesClick() {
    if (isDisabled) return;
    setIsDisabled(true);
    setTimeout(() => setIsDisabled(false), 700);

    // Reset other states first
    setIsAboutClicked(false);
    setIsProjectsClicked(false);

    if (!isCreativesClicked) {
      setIsCreativesClicked(true);
      setTimeout(() => {
        setJustifyProp("justify-center");
      }, 700);
    } else {
      setIsCreativesClicked(false);
      setJustifyProp("justify-between");
    }
  }

  return {
    isAboutClicked,
    isCreativesClicked,
    isProjectsClicked,
    justifyProp,
    handleLogoClick,
    handleAboutClick,
    handleCreativesClick,
    handleProjectsClick,
    hasScrolledToProjects,
    registerResetProjectIndex,
  };
}
