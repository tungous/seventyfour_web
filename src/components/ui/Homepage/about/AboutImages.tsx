import React, { useState, useEffect, useCallback } from "react";
import AnimatedImage from "@/components/ui/core/images/ImageComponent";

interface AboutImagesProps {
  isAboutClicked: boolean;
  isExiting: boolean;
  firstImgVisible: boolean;
  secondImgVisible: boolean;
  thirdImgVisible: boolean;
  firstImageDelay: boolean;
  randomX: number;
  randomY: number;
  onHoverChange: (imageNumber: number) => void;
}

export const AboutImages: React.FC<AboutImagesProps> = ({
  isAboutClicked,
  isExiting,
  firstImgVisible,
  secondImgVisible,
  thirdImgVisible,
  firstImageDelay,
  randomX,
  randomY,
  onHoverChange,
}) => {
  // Mobile-specific state
  const [isMobile, setIsMobile] = useState(false);
  const [currentMobileImage, setCurrentMobileImage] = useState(1);
  const [mobileRandomX, setMobileRandomX] = useState(0);
  const [mobileRandomY, setMobileRandomY] = useState(0);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Generate random positions for mobile
  // NOTE: This might need adjustment if the randomized sizes affect positioning significantly.
  // For now, keep using estimated fixed sizes for position calculation.
  const generateMobileRandomPosition = useCallback(() => {
    const currentImageNum = currentMobileImage || 1;

    // Approximate image width based on the current image (using fixed estimates for simplicity)
    // Use average random mobile size (55vw) for estimation if needed, or keep fixed.
    const estimatedVw = currentImageNum === 3 ? 60 : 50; // Using fixed estimates
    const estimatedImgWidth = window.innerWidth * (estimatedVw / 100);
    const estimatedImgHeight = estimatedImgWidth * 0.75;

    // Calculate maximum possible position values
    const maxX = Math.max(window.innerWidth - estimatedImgWidth, 0);

    // Set usable vertical space
    const navbarHeight = 80;
    const usableHeight = window.innerHeight - navbarHeight;

    // Define vertical range, allowing some padding top/bottom
    const topPadding = 20; // Minimal padding from the top edge (below navbar)
    const bottomPadding = 20; // Minimal padding from the bottom edge
    const minY = topPadding;
    // Allow positioning down to the bottom, considering image height and padding
    const maxY = Math.max(
      usableHeight - estimatedImgHeight - bottomPadding,
      minY
    );

    // Generate random positions within boundaries
    const paddingX = 10;
    const safeMaxX = Math.max(maxX - paddingX * 2, 0); // Ensure padding on both sides
    const randomXPos = Math.random() * safeMaxX + paddingX;

    // Correct random Y calculation for the range [minY, maxY]
    const randomYPos = Math.random() * (maxY - minY) + minY;

    setMobileRandomX(randomXPos);
    setMobileRandomY(randomYPos);
  }, [currentMobileImage]);

  // Auto-rotate images on mobile
  useEffect(() => {
    if (!isMobile || !isAboutClicked || isExiting) return;

    // Initial random position
    generateMobileRandomPosition();

    const interval = setInterval(() => {
      setCurrentMobileImage((prev) => (prev === 3 ? 1 : prev + 1));
      // Generate new random position each time image changes
      generateMobileRandomPosition();
    }, 3000);

    return () => clearInterval(interval);
  }, [isMobile, isAboutClicked, isExiting, generateMobileRandomPosition]);

  // Get visibility for mobile images
  const getMobileVisibility = useCallback(
    (imageNum: number) => {
      if (!isMobile) return false;
      return isAboutClicked && currentMobileImage === imageNum;
    },
    [isMobile, isAboutClicked, currentMobileImage]
  );

  // Debug log
  useEffect(() => {
    if (isMobile) {
      console.log(
        `Mobile state: isAboutClicked=${isAboutClicked}, currentImage=${currentMobileImage}, randomX=${mobileRandomX}, randomY=${mobileRandomY}`
      );
    }
  }, [
    isMobile,
    isAboutClicked,
    currentMobileImage,
    mobileRandomX,
    mobileRandomY,
  ]);

  // Define size ranges
  const desktopRange1 = { minVw: 5, maxVw: 68 };
  const desktopRange2 = { minVw: 5, maxVw: 68 };
  const desktopRange3 = { minVw: 5, maxVw: 75 };
  const mobileRange = { minVw: 15, maxVw: 85 }; // Single range for rotating mobile images

  return (
    <>
      <AnimatedImage
        isVisible={
          isMobile
            ? getMobileVisibility(1) || (isExiting && firstImgVisible)
            : (isAboutClicked && firstImgVisible) ||
              (isExiting && firstImgVisible)
        }
        isExiting={isExiting}
        randomX={isMobile ? mobileRandomX : randomX}
        randomY={isMobile ? mobileRandomY : randomY}
        imageNumber={1}
        onHoverChange={isMobile ? () => {} : onHoverChange}
        imageSrc="/home2.jpeg"
        delay={firstImageDelay ? 0 : 1}
        className="absolute z-1" // Removed w-1/5
        // Pass conditional size ranges
        minVw={isMobile ? mobileRange.minVw : desktopRange1.minVw}
        maxVw={isMobile ? mobileRange.maxVw : desktopRange1.maxVw}
      />

      <AnimatedImage
        isVisible={
          isMobile
            ? getMobileVisibility(2) || (isExiting && secondImgVisible)
            : (isAboutClicked && secondImgVisible) ||
              (isExiting && secondImgVisible)
        }
        isExiting={isExiting}
        randomX={isMobile ? mobileRandomX : randomX}
        randomY={isMobile ? mobileRandomY : randomY}
        imageNumber={2}
        onHoverChange={isMobile ? () => {} : onHoverChange}
        imageSrc="/home3.jpeg"
        className="absolute z-1" // Removed w-1/5
        // Pass conditional size ranges
        minVw={isMobile ? mobileRange.minVw : desktopRange2.minVw}
        maxVw={isMobile ? mobileRange.maxVw : desktopRange2.maxVw}
      />

      <AnimatedImage
        isVisible={
          isMobile
            ? getMobileVisibility(3) || (isExiting && thirdImgVisible)
            : (isAboutClicked && thirdImgVisible) ||
              (isExiting && thirdImgVisible)
        }
        isExiting={isExiting}
        randomX={isMobile ? mobileRandomX : randomX}
        randomY={isMobile ? mobileRandomY : randomY}
        imageNumber={3}
        onHoverChange={isMobile ? () => {} : onHoverChange}
        imageSrc="/home.jpeg"
        className="absolute z-1" // Removed w-1/3
        // Pass conditional size ranges
        minVw={isMobile ? mobileRange.minVw : desktopRange3.minVw}
        maxVw={isMobile ? mobileRange.maxVw : desktopRange3.maxVw}
      />
    </>
  );
};
