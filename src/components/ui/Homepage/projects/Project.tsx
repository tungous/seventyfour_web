import { AnimatePresence } from "motion/react";
import { projects, projectType } from "./ProjectItems";
import ProjectCard from "./ProjectCard";
import ProjectInfo from "./ProjectInfo";
import { ProjectDetail } from "./ProjectDetail";
import { useEffect, useState } from "react";

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
        // Don't prevent default - we want natural scrolling
        // But we need to stop propagation to prevent other handlers from changing projects
        e.stopPropagation();
      };

      window.addEventListener("wheel", wheelHandler, { capture: true });

      return () => {
        window.removeEventListener("wheel", wheelHandler, { capture: true });
      };
    }
  }, [isImagePushedDown, isHovered]);

  // Set up scrolling when image is pushed down
  useEffect(() => {
    if (isImagePushedDown || isHovered) {
      // Enable scrolling when image is pushed down
      document.body.style.overflow = "auto";
      document.body.style.overflowX = "hidden";
    } else {
      // Simple linear scroll animation that works reliably on Safari
      const startPosition = window.scrollY;
      const startTime = performance.now();
      const duration = 400; // Shorter duration for better reliability

      const animateScroll = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        window.scrollTo(0, startPosition * (1 - progress));

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        } else {
          // Disable scrolling after animation completes
          document.body.style.overflow = "hidden";
        }
      };

      requestAnimationFrame(animateScroll);
    }

    return () => {
      document.body.style.overflow = "hidden";
    };
  }, [isImagePushedDown, isHovered]);

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
          />
        )}
      </AnimatePresence>
    </div>
  );
};
