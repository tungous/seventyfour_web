import { motion } from "motion/react";

interface CreativeProps {
  currentCreativeIndex: number;
  info: string;
  onHoverChange: (isHovered: boolean) => void; // New callback prop
}

export default function CreativeInfo({
  currentCreativeIndex,
  info,
  onHoverChange,
}: CreativeProps) {
  const processText = (text: string) => {
    const linkPattern = /\[(.*?)\]\((.*?)\)/g;

    if (linkPattern.test(text)) {
      linkPattern.lastIndex = 0;

      const match = linkPattern.exec(text);
      if (match) {
        const linkText = match[1];
        const linkUrl = match[2];

        return (
          <a
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="italic hover:opacity-80 transition-opacity"
            onMouseEnter={() => onHoverChange(true)}
            onMouseLeave={() => onHoverChange(false)}
          >
            {linkText}
          </a>
        );
      }
    }

    return text;
  };
  return (
    <motion.div
      initial={{
        opacity: 0,
        fontWeight: 400,
        filter: "blur(10px) drop-shadow(0px 0px 0px rgba(0, 0, 0, 0))",
      }}
      animate={{
        opacity: 1,
        fontWeight: 700,
        filter: "blur(0px) drop-shadow(0px 0px 6px rgba(0, 0, 0, 1))",
      }}
      exit={{
        opacity: 0,
        fontWeight: 400,
        filter: "blur(10px) drop-shadow(0px 0px 0px rgba(0, 0, 0, 0))",
      }}
      transition={{ duration: 0.7 }}
      key={`project-info-${currentCreativeIndex}`}
      className="text-white flex flex-col justify-center items-center z-50 h-screen w-screen fixed lg:text-xs text-[10px] cursor-pointer uppercase tracking-tight pointer-events-none"
      style={{
        textShadow:
          "0px 0px 2px rgba(255, 255, 255, 1), 0px 0px 2px rgba(255, 255, 255, 1)", // white glow
        touchAction: "none", // Prevents touch scrolling/sliding
        userSelect: "none",
        overflow: "hidden",
      }}
    >
      <div className="text-left pointer-events-auto">
        {info.split("\n").map((line, index) => (
          <div key={index} className="lg:py-2 py-1">
            {processText(line)}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
