import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import NavBarItem from "@/components/ui/navbar/NavBarItem";
import NavbarMobileMenu from "@/components/ui/navbar/NavbarMobileMenu";

interface NavigationProps {
  justifyProp: string;
  isProjectsClicked: boolean;
  isAboutClicked: boolean;
  isCreativesClicked: boolean;
  handleAboutClick: () => void;
  handleCreativesClick: () => void;
  handleProjectsClick: () => void;
  handleMenuClick?: () => void;
  handleLogoClick: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  justifyProp,
  isProjectsClicked,
  isAboutClicked,
  isCreativesClicked,
  handleAboutClick,
  handleCreativesClick,
  handleProjectsClick,
  handleMenuClick,
  handleLogoClick,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isInitialRender = useRef(true);
  const prevStateRef = useRef(false);
  const [showMenuButton, setShowMenuButton] = useState(false);

  const toggleMobileMenu = () => {
    // Toggle the mobile menu state
    setIsMobileMenuOpen(!isMobileMenuOpen);

    // Call the parent handler if provided
    if (handleMenuClick && typeof handleMenuClick === "function") {
      handleMenuClick();
    }
  };

  // Initial effect to handle delayed menu button appearance
  useEffect(() => {
    // On initial load, wait for logo animation to complete
    const initialMenuTimeout = setTimeout(() => {
      setShowMenuButton(true);
    }, 800); // Same delay as LogoText (800ms)

    return () => clearTimeout(initialMenuTimeout);
  }, []);

  // Reset button visibility when navigation state changes
  useEffect(() => {
    if (!isInitialRender.current) {
      // Hide menu button on state change
      setShowMenuButton(false);

      // Set timeout to show menu button after logo animation completes
      const menuTimeout = setTimeout(() => {
        setShowMenuButton(true);
      }, 800);

      return () => clearTimeout(menuTimeout);
    }
  }, [isAboutClicked, isProjectsClicked, isCreativesClicked]);

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      prevStateRef.current =
        isAboutClicked || isProjectsClicked || isCreativesClicked;
    }
  }, [isAboutClicked, isProjectsClicked, isCreativesClicked]);

  return (
    <>
      <div
        className={`text-black flex lg:flex-row flex-col lg:pr-16 z-50 lg:w-[50vw] right-[0] fixed ${
          isAboutClicked ||
          isProjectsClicked ||
          isCreativesClicked ||
          isMobileMenuOpen
            ? "drop-shadow(0px 0px 10px rgba(0, 0, 0, 1)) text-white"
            : "text-black"
        } ${justifyProp}`}
      >
        <AnimatePresence>
          {!isProjectsClicked && !isCreativesClicked && (
            <NavBarItem
              name="About"
              handleButtonClick={handleAboutClick}
              isAboutClicked={isAboutClicked}
              isCreativesClicked={isCreativesClicked}
              isProjectsClicked={isProjectsClicked}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {!isProjectsClicked && !isAboutClicked && (
            <NavBarItem
              name="Creatives"
              handleButtonClick={handleCreativesClick}
              isAboutClicked={isAboutClicked}
              isCreativesClicked={isCreativesClicked}
              isProjectsClicked={isProjectsClicked}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {!isAboutClicked && !isCreativesClicked && (
            <NavBarItem
              name="Projects"
              handleButtonClick={handleProjectsClick}
              isAboutClicked={isAboutClicked}
              isCreativesClicked={isCreativesClicked}
              isProjectsClicked={isProjectsClicked}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {!isMobileMenuOpen && showMenuButton && (
            <motion.button
              key={`menu-button-${
                isAboutClicked || isProjectsClicked || isCreativesClicked
                  ? "active"
                  : "inactive"
              }`}
              initial={{
                opacity: 0,
                filter:
                  isAboutClicked || isProjectsClicked || isCreativesClicked
                    ? "blur(10px) drop-shadow(0px 0px 0px rgba(0, 0, 0, 1))"
                    : "blur(10px) drop-shadow(0px 0px 0px rgba(0, 0, 0, 1))",
              }}
              animate={{
                opacity: 1,
                filter:
                  isAboutClicked || isProjectsClicked || isCreativesClicked
                    ? "blur(0px) drop-shadow(0px 0px 6px rgba(0, 0, 0, 1))"
                    : "blur(0px) drop-shadow(0px 0px 0px rgba(0, 0, 0, 1))",
              }}
              exit={{
                opacity: 0,
                filter:
                  isAboutClicked || isProjectsClicked || isCreativesClicked
                    ? "blur(10px) drop-shadow(0px 0px 0px rgba(0, 0, 0, 1))"
                    : "blur(10px) drop-shadow(0px 0px 0px rgba(0, 0, 0, 1))",
              }}
              transition={{
                duration: 0.7,
                filter: { duration: 0.3 },
                boxShadow: { duration: 0.3 },
              }}
              style={{
                willChange: "filter, opacity",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                textShadow:
                  isAboutClicked || isProjectsClicked || isCreativesClicked
                    ? "0px 0px 2px rgba(255, 255, 255, 1), 0px 0px 1px rgba(255, 255, 255, 1)"
                    : "0px 0px 2px rgba(0, 0, 0, 1), 0px 0px 1px rgba(0, 0, 0, 1)",
              }}
              className="block lg:hidden lg:p-4 mr-2 lg:mr-0 font-normal text-[10px] cursor-pointer uppercase tracking-tight lg:w-20 z-[999] relative pointer-events-auto"
              onClick={toggleMobileMenu}
            >
              Menu
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <NavbarMobileMenu
        isOpen={isMobileMenuOpen}
        onClose={toggleMobileMenu}
        onAboutClick={handleAboutClick}
        onCreativesClick={handleCreativesClick}
        onProjectsClick={handleProjectsClick}
        handleLogoClick={handleLogoClick}
        isAboutClicked={isAboutClicked}
        isCreativesClicked={isCreativesClicked}
        isProjectsClicked={isProjectsClicked}
      />
    </>
  );
};
