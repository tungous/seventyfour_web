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
    title: "Nostalgia",
    description:
      "A journey through time, blending past and present in perfect harmony.",
    variant: "Nostalgia" as const,
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
        <DetailLayout.Text>
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <p className="text-xl">{project.description}</p>
        </DetailLayout.Text>

        {/* Project-specific content based on variant */}
        {project.variant === "Project1" && (
          <>
            <DetailLayout.Image src="/bazo.jpg" alt="Project 1" />
            <DetailLayout.Text>
              <h2 className="text-2xl font-semibold">Key Features</h2>
              <ul className="list-disc list-inside space-y-2">
                {project.features?.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </DetailLayout.Text>
          </>
        )}

        {project.variant === "Project2" && (
          <>
            <DetailLayout.Image src="/bazo.jpg" alt="Project 2" />
            <DetailLayout.Image src="/cinematic1.jpg" alt="Project 2" />
          </>
        )}

        {project.variant === "Project3" && (
          <>
            <DetailLayout.Image src="/cinematic2.jpg" alt="Project 3" />
            <DetailLayout.Image src="/cinematic3.jpg" alt="Project 3" />
            <DetailLayout.Image src="/home.jpeg" alt="Project 3" />
          </>
        )}

        {project.variant === "Nostalgia" && (
          <>
            <DetailLayout.Image src="/home2.jpeg" alt="Nostalgia" />
            <DetailLayout.Image src="/home3.jpeg" alt="Nostalgia" />
            <DetailLayout.Image src="/home4.jpg" alt="Nostalgia" />
          </>
        )}

        {project.variant === "Project5" && (
          <>
            <DetailLayout.Image src="/viet.jpg" alt="Project 5" />
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
