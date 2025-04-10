import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Helper function to get a random number in a range
const getRandomSize = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};

interface AnimatedImageProps {
  isVisible: boolean;
  isExiting: boolean;
  randomX: number;
  randomY: number;
  imageNumber: number;
  onHoverChange: (imageNumber: number) => void;
  imageSrc: string;
  delay?: number;
  className?: string;
  minVw?: number;
  maxVw?: number;
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({
  isVisible,
  isExiting,
  randomX,
  randomY,
  imageNumber,
  onHoverChange,
  imageSrc,
  delay = 0,
  className = "absolute z-1",
  minVw,
  maxVw,
}) => {
  const [randomizedMaxWidth, setRandomizedMaxWidth] = useState<string>("auto");

  useEffect(() => {
    if (
      isVisible &&
      typeof minVw === "number" &&
      typeof maxVw === "number" &&
      minVw < maxVw
    ) {
      const randomSize = getRandomSize(minVw, maxVw);
      setRandomizedMaxWidth(`${randomSize}vw`);
    }
  }, [isVisible, minVw, maxVw]);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          initial={{
            opacity: 0,
            filter: "blur(10px) brightness(4)",
            x: randomX,
            y: randomY,
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px) brightness(1)",
          }}
          exit={{
            opacity: 0,
            filter: "blur(10px) brightness(4)",
          }}
          transition={{
            duration: isExiting ? 0.7 : 0.8,
            delay: isExiting ? 0 : delay,
          }}
          className={className}
          style={{ maxWidth: randomizedMaxWidth }}
        >
          <Image
            src={imageSrc}
            alt="Sample image"
            width={2000}
            height={2000}
            className="object-cover w-full h-full"
            onMouseEnter={() => onHoverChange(imageNumber)}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default AnimatedImage;
