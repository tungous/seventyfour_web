import { motion } from "motion/react";

interface ProjectProps {
  currentProjectIndex: number;
  info: string;
  onClick: () => void;
  onHoverChange: (isHovered: boolean) => void;
}

export default function ProjectInfo({
  currentProjectIndex,
  info,
  onClick,
  onHoverChange,
}: ProjectProps) {
  // Function to process text that might contain link indicators
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
            onClick={(e) => {
              e.stopPropagation();
            }}
            onMouseEnter={() => onHoverChange(false)}
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
        fontWeight: 700,
        filter: "blur(10px) drop-shadow(0px 0px 0px rgba(0, 0, 0, 0))",
      }}
      animate={{
        opacity: 1,
        fontWeight: 700,
        filter: "blur(0px) drop-shadow(0px 0px 6px rgba(0, 0, 0, 1))",
      }}
      exit={{
        opacity: 0,
        fontWeight: 700,
        filter: "blur(10px) drop-shadow(0px 0px 0px rgba(0, 0, 0, 0))",
      }}
      transition={{ duration: 1.3 }}
      key={`project-info-${currentProjectIndex}`}
      className="absolute text-white flex flex-col justify-center items-center z-10 h-screen w-screen lg:text-xs text-[10px] uppercase tracking-tight"
      style={{
        textShadow:
          "0px 0px 2px rgba(255, 255, 255, 1), 0px 0px 2px rgba(255, 255, 255, 1)",
        touchAction: "none",
        userSelect: "none",
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      <div
        className="text-left cursor-pointer pointer-events-auto"
        onClick={onClick}
        onMouseEnter={() => onHoverChange(true)}
        onMouseLeave={() => onHoverChange(false)}
      >
        {info.split("\n").map((line, index) => (
          <div key={index} className="lg:py-2 py-1">
            {processText(line)}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
