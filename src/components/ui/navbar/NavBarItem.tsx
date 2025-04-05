import { motion } from "motion/react";

interface NavBarItemProps {
  name: string;
  handleButtonClick?: () => void;
  isAboutClicked?: boolean;
  isCreativesClicked?: boolean;
  isProjectsClicked?: boolean;
}

export default function NavBarItem({
  name,
  handleButtonClick,
  isAboutClicked,
  isCreativesClicked,
  isProjectsClicked,
}: NavBarItemProps) {
  // Check if any button is clicked
  const isAnyButtonClicked =
    isAboutClicked || isCreativesClicked || isProjectsClicked;

  return (
    <motion.div
      key={name}
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 0.7 }}
      style={{
        WebkitTransform: "translateZ(0)",
        transform: "translateZ(0)",
      }}
    >
      <button
        className={`hidden lg:block lg:p-4 py-2 lg:py-0 font-normal lg:text-xs text-[10px] cursor-pointer uppercase tracking-tight w-20 text-right lg:text-center mr-2.5 lg:mr-0`}
        style={{
          textShadow: isAnyButtonClicked
            ? "0px 0px 2px rgba(255, 255, 255, 1), 0px 0px 2px rgba(255, 255, 255, 1)"
            : "0px 0px 2px rgba(0, 0, 0, 1), 0px 0px 2px rgba(0, 0, 0, 1)",
          // Apply filter directly as a style instead of animating it
          filter: isAnyButtonClicked
            ? "blur(0px) drop-shadow(0px 0px 6px rgba(0, 0, 0, 1))"
            : "blur(0px)",
          WebkitFilter: isAnyButtonClicked
            ? "blur(0px) drop-shadow(0px 0px 6px rgba(0, 0, 0, 1))"
            : "blur(0px)",
        }}
        onClick={handleButtonClick}
      >
        {name}
      </button>
    </motion.div>
  );
}
