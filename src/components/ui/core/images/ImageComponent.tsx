import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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
  maxWidth?: string;
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
  className = "absolute w-1/5 z-30",
  maxWidth = "25vw",
}) => {
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
          style={{ maxWidth }}
        >
          <Image
            src={imageSrc}
            alt="Sample image"
            width={2000}
            height={2000}
            className="object-cover"
            onMouseEnter={() => onHoverChange(imageNumber)}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default AnimatedImage;
