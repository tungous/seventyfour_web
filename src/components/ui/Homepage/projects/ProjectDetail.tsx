import React from "react";
import DetailLayout from "@/components/ui/core/DetailLayout/DetailLayout";

interface ProjectDetailScrollProps {
  visible: boolean;
  currentProjectIndex: number;
  isPushedDown?: boolean;
}

// Project data mapping
const projectData = [
  {
    id: 1,
    title: "Project 1",
    description:
      "A beautiful and innovative project showcasing modern design principles.",
    variant: "Project1" as const,
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    id: 2,
    title: "Project 2",
    description:
      "An exploration of interactive experiences and user engagement.",
    variant: "Project2" as const,
  },
  {
    id: 3,
    title: "Project 3",
    description:
      "A showcase of cutting-edge technology and seamless integration.",
    variant: "Project3" as const,
  },
  {
    id: 4,
    title: "Project 4",
    description:
      "A journey through time, blending past and present in perfect harmony.",
    variant: "Project4" as const,
  },
  {
    id: 5,
    title: "Project 5",
    description:
      "Pushing boundaries with innovative solutions and creative thinking.",
    variant: "Project5" as const,
  },
  {
    id: 6,
    title: "Project 6",
    description:
      "A masterpiece of design and functionality working in perfect sync.",
    variant: "Project6" as const,
  },
];

export const ProjectDetail: React.FC<ProjectDetailScrollProps> = ({
  isPushedDown,
  currentProjectIndex,
}) => {
  const project = projectData[currentProjectIndex % projectData.length];

  return (
    <DetailLayout
      currentProjectIndex={currentProjectIndex}
      isPushedDown={isPushedDown}
      variant={project.variant}
    >
      <DetailLayout.ProjectContent variant={project.variant}>
        {/* <DetailLayout.Text>
          <h1 className="text-xs px-4 uppercase font-bold">{project.title}</h1>
          <p className="text-xs px-4 uppercase">{project.description}</p>
        </DetailLayout.Text> */}

        {/* Project-specific content based on variant */}
        {project.variant === "Project1" && (
          <>
            <div className="relative w-full">
              <DetailLayout.Image src="/bazo.jpg" alt="Project 1" />
              <div className="absolute inset-0 flex flex-col justify-center items-center p-8  lg:text-xs text-[8px] uppercase font-bold text-left mix-blend-difference">
                <div className="max-w-md ">
                  <p
                    className="w-full"
                    style={{ textShadow: "0px 0px 2px rgba(255,255,255,1)" }}
                  >
                    {project.title}
                    <br />
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="relative w-full">
              <DetailLayout.Image src="/nostalgia.gif" alt="Project 1" />
            </div>
          </>
        )}

        {project.variant === "Project2" && (
          <>
            <div className="relative w-full">
              <DetailLayout.Image src="/nostalgia.gif" alt="Project 2" />
              <div className="absolute inset-0 pt-10 pointer-events-none">
                {/* Gradient overlay at the top */}
                <div className="absolute top-0 left-0 right-0 lg:h-22 h-6 bg-gradient-to-b from-black to-transparent"></div>
                {/* Gradient overlay at the bottom */}
                <div className="absolute bottom-0 left-0 right-0 lg:h-22 h-6 bg-gradient-to-t from-black to-transparent"></div>
              </div>
            </div>
            <div className="relative w-full">
              <DetailLayout.Video
                src="https://vimeo.com/958547140"
                alt="Project 2"
              />
              <div className="absolute inset-0 pt-10 pointer-events-none">
                {/* Gradient overlay at the top */}
                <div className="absolute top-0 left-0 right-0 lg:h-22 h-6 bg-gradient-to-b from-black to-transparent"></div>
                {/* Gradient overlay at the bottom */}
                <div className="absolute bottom-0 left-0 right-0 lg:h-22 h-6 bg-gradient-to-t from-black to-transparent"></div>
              </div>
            </div>
          </>
        )}

        {project.variant === "Project3" && (
          <>
            <DetailLayout.Image src="/cinematic2.jpg" alt="Project 3" />
            <DetailLayout.Image src="/cinematic3.jpg" alt="Project 3" />
            <DetailLayout.Image src="/home.jpeg" alt="Project 3" />
          </>
        )}

        {project.variant === "Project4" && (
          <>
            <div className="relative w-full mb-10">
              <DetailLayout.Image
                src="/seventyfour_begin_1.jpg"
                alt="Project 1"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center p-8 mix-blend-difference lg:text-xs text-[8px] uppercase font-bold text-left">
                <div className="max-w-md">
                  <p
                    className="w-full"
                    style={{ textShadow: "0px 0px 2px rgba(255,255,255,1)" }}
                  >
                    DIRECTOR, DP, EDITOR: T. TUNG MAI
                    <br />
                    DESIGNER: LEO PHAM
                    <br />
                    SOUND: TOMAS NGUYEN
                  </p>
                </div>
              </div>
            </div>
            <div className="relative w-full mb-10">
              <DetailLayout.Video
                src="https://vimeo.com/957811693"
                alt="Project 1"
              />
            </div>
          </>
        )}

        {project.variant === "Project5" && (
          <>
            <DetailLayout.Image src="/viet.jpg" alt="Project 5" />
            <DetailLayout.Video src="/viet2.jpg" alt="Project 5" />
            <DetailLayout.Image src="/tung.jpg" alt="Project 5" />
          </>
        )}

        {project.variant === "Project6" && (
          <>
            <DetailLayout.Image src="/quang_thanh.jpg" alt="Project 6" />
            <DetailLayout.Image src="/leo.jpg" alt="Project 6" />
          </>
        )}
      </DetailLayout.ProjectContent>
    </DetailLayout>
  );
};
