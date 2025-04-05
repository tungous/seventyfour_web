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
  const generateMobileRandomPosition = useCallback(() => {
    const currentImageNum = currentMobileImage || 1;

    // Approximate image width based on the current image
    const estimatedImgWidth =
      currentImageNum === 3 ? window.innerWidth * 0.6 : window.innerWidth * 0.5;
    const estimatedImgHeight = estimatedImgWidth * 0.75;

    // Calculate maximum possible position values
    const maxX = Math.max(window.innerWidth - estimatedImgWidth, 0);

    // Set usable vertical space
    const navbarHeight = 80;
    const usableHeight = window.innerHeight - navbarHeight;

    // Define a restricted vertical area where images can appear
    // Make images appear in the top 70% of the screen only
    const topOffset = 100; // How high above the standard content the images can go
    const minY = Math.min(topOffset, usableHeight * 0.3); // Allow images to go higher up

    // Restrict maxY to be no more than 60% down the screen
    // This prevents images from appearing too far down
    const restrictedMaxY = Math.min(
      usableHeight * 0.6 - estimatedImgHeight,
      usableHeight - estimatedImgHeight
    );
    const maxY = Math.max(restrictedMaxY, 0);

    // Generate random positions within boundaries
    const paddingX = 10;
    const randomXPos = Math.random() * Math.max(maxX - paddingX, 0);

    // For Y position, use the restricted range from top to middle area
    const randomYPos = Math.random() * (maxY + minY) - minY;

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
        className="absolute w-1/5 z-30"
        maxWidth={isMobile ? "50vw" : "25vw"}
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
        className="absolute w-1/5 z-30"
        maxWidth={isMobile ? "50vw" : "25vw"}
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
        className="absolute w-1/3 z-39"
        maxWidth={isMobile ? "60vw" : "30vw"}
      />
    </>
  );
};
