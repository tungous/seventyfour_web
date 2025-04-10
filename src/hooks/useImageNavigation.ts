import { useState, useEffect, useCallback } from "react";

export function useImageNavigation() {
  // Desktop states
  const [firstImgVisible, setFirstImgVisible] = useState(false);
  const [secondImgVisible, setSecondImgVisible] = useState(false);
  const [thirdImgVisible, setThirdImgVisible] = useState(false);
  const [firstImageDelay, setFirstImageDelay] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [randomX, setRandomX] = useState(0);
  const [randomY, setRandomY] = useState(0);

  // Mobile states
  const [isMobile, setIsMobile] = useState(false);
  const [currentMobileImage, setCurrentMobileImage] = useState(1);
  const [mobileRandomX, setMobileRandomX] = useState(0);
  const [mobileRandomY, setMobileRandomY] = useState(0);
  // Track if about section is active for mobile visibility
  const [isAboutActive] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Desktop hover functionality
  function onHoverChange(imageNumber: number) {
    if (imageNumber === 1) {
      setFirstImgVisible(false);
      setSecondImgVisible(true);
      setThirdImgVisible(false);
    } else if (imageNumber === 2) {
      setFirstImgVisible(false);
      setSecondImgVisible(false);
      setThirdImgVisible(true);
    } else {
      setFirstImgVisible(true);
      setSecondImgVisible(false);
      setThirdImgVisible(false);
    }
  }

  // Generate random positions for mobile
  const generateMobileRandomPosition = useCallback(() => {
    const currentImageNum = currentMobileImage || 1;

    // Approximate image width based on the current image
    const estimatedImgWidth =
      currentImageNum === 3 ? window.innerWidth * 0.6 : window.innerWidth * 0.5;

    // Approximate image height
    const estimatedImgHeight = estimatedImgWidth * 0.75;

    // Calculate maximum possible position values
    const maxX = Math.max(window.innerWidth - estimatedImgWidth, 0);

    // Set usable vertical space
    const navbarHeight = 80;
    const usableHeight = window.innerHeight - navbarHeight;

    // Allow images to appear higher up
    const topOffset = 100;
    const minY = Math.min(topOffset, usableHeight * 0.3);
    const maxY = Math.max(usableHeight - estimatedImgHeight, 0);

    // Generate random positions within boundaries
    const paddingX = 10;
    const randomXPos = Math.random() * Math.max(maxX - paddingX, 0);
    const randomYPos = Math.random() * (maxY + minY) - minY;

    setMobileRandomX(randomXPos);
    setMobileRandomY(randomYPos);
  }, [currentMobileImage]);

  // Auto-rotate images on mobile
  useEffect(() => {
    // Use isAboutActive instead of firstImgVisible for mobile
    if (!isMobile || !isAboutActive || isExiting) return;

    // Initial random position
    generateMobileRandomPosition();

    const interval = setInterval(() => {
      setCurrentMobileImage((prev) => (prev === 3 ? 1 : prev + 1));
      // Generate new random position each time image changes
      generateMobileRandomPosition();
    }, 3000);

    return () => clearInterval(interval);
  }, [isMobile, isAboutActive, isExiting, generateMobileRandomPosition]);

  // Get visibility for mobile images
  const getMobileVisibility = useCallback(
    (imageNum: number) => {
      if (!isMobile) return false;
      // Use isAboutActive instead of firstImgVisible
      return isAboutActive && currentMobileImage === imageNum;
    },
    [isMobile, isAboutActive, currentMobileImage]
  );

  // Desktop random position generation
  useEffect(() => {
    const updateRandomPosition = () => {
      // Keep maxX constrained somewhat to avoid edges
      const maxX = Math.max(window.innerWidth * 0.7, 0);
      // Allow Y positioning across most of the screen height, subtracting a buffer
      const estimatedImageHeight = window.innerHeight * 0.3; // Estimate based on image size
      const maxY = Math.max(window.innerHeight - estimatedImageHeight - 100, 0); // Subtract estimated height and some padding

      const newRandomX = Math.random() * maxX;
      const newRandomY = Math.random() * maxY;

      setRandomX(newRandomX);
      setRandomY(newRandomY);
    };

    updateRandomPosition();

    window.addEventListener("resize", updateRandomPosition);

    return () => window.removeEventListener("resize", updateRandomPosition);
  }, [firstImgVisible, secondImgVisible, thirdImgVisible]);

  // Handle about section toggling
  const handleAboutToggle = useCallback((isAboutClicked: boolean) => {
    if (isAboutClicked) {
      setFirstImgVisible(true);
      setIsExiting(false);
    } else {
      setIsExiting(true);

      const timer = setTimeout(() => {
        setFirstImgVisible(false);
        setSecondImgVisible(false);
        setThirdImgVisible(false);
        setIsExiting(false);
      }, 700);

      return () => clearTimeout(timer);
    }
  }, []);

  return {
    // Desktop states
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

    // Mobile states and functions
    isMobile,
    currentMobileImage,
    mobileRandomX,
    mobileRandomY,
    getMobileVisibility,
  };
}
