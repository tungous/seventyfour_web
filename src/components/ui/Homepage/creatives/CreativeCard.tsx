import { motion } from "motion/react";
import Image from "next/image";

interface CreativeProps {
  currentCreativeIndex: number;
  backgroundImage: string;
  isBlurred: boolean;
}

export default function CreativeCard({
  currentCreativeIndex,
  backgroundImage,
  isBlurred,
}: CreativeProps) {
  return (
    <motion.div
      key={currentCreativeIndex}
      initial={{
        opacity: 0.5,
        filter: "blur(50px) brightness(2)",
      }}
      animate={{
        opacity: 1,
        filter: isBlurred
          ? "blur(30px) brightness(1.3)"
          : "blur(0px) brightness(1)",
      }}
      exit={{
        opacity: 0,
        filter: "blur(100px) brightness(2)",
      }}
      transition={{ duration: 1.3, filter: { duration: 1.3 } }}
      className="fixed min-h-screen z-2 w-full pointer-events-none"
    >
      <Image
        src={backgroundImage}
        fill
        quality={85}
        priority={true}
        alt="Creative image background"
        className="object-cover pointer-events-none"
      />
    </motion.div>
  );
}
