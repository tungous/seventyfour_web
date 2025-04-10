"use client";

import DetailLayout from "@/components/ui/core/DetailLayout/DetailLayout";
import Footer from "@/components/ui/core/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger if not done globally
gsap.registerPlugin(ScrollTrigger);

interface ProjectDetailScrollProps {
  visible: boolean;
  currentProjectIndex: number;
  isPushedDown?: boolean;
  onAnimationComplete?: () => void;
}

// Project data mapping
const projectData = [
  {
    id: 1,
    title: "KOLAUDACKA",
    description:
      "A beautiful and innovative project showcasing modern design principles.",
    creative1: "PHOTOGRAPHER: MINH VIET PHAM",
    creative2: "CREATIVE DIRECTOR: MINH VIET PHAM, BAZO, DAVID PHAM",
    creative3: "DJ: AIIZA BAZO, AIIZA PHAMINHO (DAVID PHAM)",
    location: "LOCATION: KAPLANOVA 2252/8, PRAHA 4",
    variant: "Project1" as const,
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    id: 2,
    title: "Project 2",
    description:
      "An exploration of interactive experiences and user engagement.",
    creative1: "PHOTOGRAPHER: ADAM KUZELKA",
    location: "LOCATION: KAPLANOVA 2252/8, PRAHA 4",
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
    title: "SEVENTYFOUR: BEGIN",
    description:
      "A journey through time, blending past and present in perfect harmony.",
    creative1: "DIRECTOR, DP, EDITOR: T. TUNG MAI",
    creative2: "DESIGNER: LEO PHAM",
    creative3: "SOUND: TOMAS NGUYEN",
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
  onAnimationComplete,
}) => {
  const project = projectData[currentProjectIndex % projectData.length];
  const footerRef = useRef<HTMLDivElement>(null);

  return (
    <DetailLayout
      currentProjectIndex={currentProjectIndex}
      isPushedDown={isPushedDown}
      variant={project.variant}
      onAnimationComplete={onAnimationComplete}
    >
      <DetailLayout.ProjectContent variant={project.variant}>
        {/* <DetailLayout.Text>
          <h1 className="text-xs px-4 uppercase font-bold">{project.title}</h1>
          <p className="text-xs px-4 uppercase">{project.description}</p>
        </DetailLayout.Text> */}

        {/* Project-specific content based on variant */}
        {project.variant === "Project1" && (
          <>
            <div className="relative w-full ">
              <DetailLayout.Image src="/bazo.jpg" alt="Project 1" />
              <div className="absolute inset-0 flex flex-col justify-center items-center p-8 lg:text-xs text-[8px] uppercase font-bold text-left mix-blend-difference">
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
            <div className="relative w-full">
              <DetailLayout.Image src="/nostalgia.gif" alt="Project 1" />
            </div>
          </>
        )}

        {project.variant === "Project2" && (
          <>
            <div className="relative w-full">
              <DetailLayout.Image src="/nostalgia.gif" alt="Project 2" />
            </div>
            <div className="relative w-full">
              <DetailLayout.Video
                src="https://vimeo.com/958547140"
                alt="Project 2"
              />
            </div>
            <div className="relative w-full">
              <DetailLayout.Image src="/nostalgia.gif" alt="Project 2" />
            </div>
          </>
        )}

        {project.variant === "Project3" && (
          <>
            <DetailLayout.Image src="/cinematic2.jpg" alt="Project 3" />
            <DetailLayout.Image src="/cinematic3.jpg" alt="Project 3" />
            <DetailLayout.Image src="/home.jpeg" alt="Project 3" />
            <DetailLayout.Image src="/home.jpeg" alt="Project 3" />
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
            <div className="relative w-full mb-10">
              <DetailLayout.Image
                src="/seventyfour-begin-21.jpg"
                alt="Project 1"
              />

              <div className="absolute inset-0 flex flex-col justify-center items-center lg:px-16 px-2 mix-blend-difference lg:text-xs text-[8px] uppercase font-bold text-left">
                <div className="flex flex-col">
                  <p
                    className="text-justify"
                    style={{ textShadow: "0px 0px 2px rgba(255,255,255,1)" }}
                  >
                    DIRECTOR, DP, EDITOR: T. TUNG MAI
                    <br />
                    DESIGNER: LEO PHAM
                    <br />
                    SOUND: TOMAS NGUYEN
                    <br />
                    <br />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aperiam nihil laboriosam nam sequi dolores nobis atque
                    minima id optio. Cumque labore laudantium aliquid vel iusto
                    quo deleniti, repellat ratione assumenda quasi quaerat,
                    rerum exercitationem? Adipisci, assumenda eius sapiente
                    impedit ratione dolorum quae ipsam minima nemo doloremque
                    labore aspernatur consequuntur alias exercitationem. Quas
                    quod mollitia hic adipisci consequatur iste aperiam id
                    praesentium quasi quisquam.
                  </p>
                </div>
              </div>
            </div>
            {/* <div className=" inset-0 flex flex-row justify-center items-center px-16 mix-blend-difference lg:text-xs text-[8px] uppercase font-bold">
              <div className="flex flex-col">
                <p
                  className="text-justify"
                  style={{ textShadow: "0px 0px 2px rgba(255,255,255,1)" }}
                >
                  DIRECTOR, DP, EDITOR: T. TUNG MAI
                  <br />
                  DESIGNER: LEO PHAM
                  <br />
                  SOUND: TOMAS NGUYEN
                  <br />
                  <br />
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aperiam nihil laboriosam nam sequi dolores nobis atque minima
                  id optio.
                </p>
              </div>
            </div> */}
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
      {/* Gradient overlay */}

      {/* Remove motion.div wrapper, pass ref directly */}
      <Footer project={project} footerRef={footerRef} />
    </DetailLayout>
  );
};
