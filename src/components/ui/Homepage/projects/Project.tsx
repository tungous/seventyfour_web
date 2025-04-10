import { AnimatePresence } from "motion/react";
import { projects, projectType } from "./ProjectItems";
import ProjectCard from "./ProjectCard";
import ProjectInfo from "./ProjectInfo";
import { ProjectDetail } from "./ProjectDetail";
import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

// Register plugin if not done globally
gsap.registerPlugin(ScrollTrigger);

interface ProjectProps {
  isProjectsClicked: boolean;
  currentProjectIndex: number;
  currentProject: projectType;
  isMobileMenuOpen?: boolean;
  isImagePushedDown: boolean;
  setIsImagePushedDown: (pushed: boolean) => void;
}

export const Project = ({
  isProjectsClicked,
  currentProjectIndex,
  currentProject,
  isMobileMenuOpen = false,
  isImagePushedDown,
  setIsImagePushedDown,
}: ProjectProps) => {
  // State to control detail visibility with animation delay
  const [detailVisible, setDetailVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Update detail visibility with slight delay for animation
  useEffect(() => {
    if (isImagePushedDown || isHovered) {
      setDetailVisible(true);
    } else {
      // Delay hiding to allow animation to complete
      const timer = setTimeout(() => {
        setDetailVisible(false);
      }, 1500); // Slightly longer than the animation duration to ensure completion

      return () => clearTimeout(timer);
    }
  }, [isImagePushedDown, isHovered]);

  // Directly intercept wheel events to prevent project switching when pushed down
  useEffect(() => {
    if (isImagePushedDown || isHovered) {
      const wheelHandler = (e: WheelEvent) => {

        e.stopPropagation();
      };

      window.addEventListener("wheel", wheelHandler, { capture: true });

      return () => {
        window.removeEventListener("wheel", wheelHandler, { capture: true });
      };
    }
  }, [isImagePushedDown, isHovered]);

  const handleDetailAnimationComplete = () => {
    // Ensure ScrollTrigger is refreshed after the detail animation completes
    console.log("Detail animation complete, refreshing ScrollTrigger...");
    ScrollTrigger.refresh();
  };

  return (
    <div>
      <AnimatePresence mode="wait">
        {isProjectsClicked && (
          <ProjectCard
            currentProjectIndex={currentProjectIndex}
            backgroundImage={
              projects[currentProjectIndex % projects.length].backgroundImage
            }
            isBlurred={false}
            isPushedDown={isImagePushedDown || isHovered}
            setIsPushedDown={setIsImagePushedDown}
          ></ProjectCard>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isProjectsClicked && !isMobileMenuOpen && !isImagePushedDown && (
          <ProjectInfo
            currentProjectIndex={currentProjectIndex}
            info={currentProject.info}
            onClick={() => setIsImagePushedDown(true)}
            onHoverChange={setIsHovered}
          ></ProjectInfo>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {isProjectsClicked && detailVisible && (
          <ProjectDetail
            visible={true}
            currentProjectIndex={currentProjectIndex}
            isPushedDown={isImagePushedDown || isHovered}
            onAnimationComplete={handleDetailAnimationComplete}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
