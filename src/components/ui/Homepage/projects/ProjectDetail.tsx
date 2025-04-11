"use client";

import React, { useRef } from "react";
import DetailLayout from "@/components/ui/core/DetailLayout/DetailLayout";
import Footer from "@/components/ui/core/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { describe } from "node:test";

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
    title: "JUN",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    creative1: "GRAPHIC DESIGNER: LEO PHAM",
    creative2: "PHOTOGRAPHER: MINH VIET PHAM",
    creative3: "VIDEOGRAPHER: T. TUNG MAI",
    variant: "Project1" as const,
    backgroundImage: "/jun_pobocka_2.jpg",
  },
  {
    id: 2,
    title: "SK SLOVAN KUNRATICE",
    description:
      "",
    creative1: "FILM BY: T. TUNG MAI",
    creative2: "CONCEPT: BAZO",
    variant: "Project2" as const,
    backgroundImage: "/sk_slovan_kunratice_1.jpg",
  },
  {
    id: 3,
    title: "KOLAUDACKA",
    description:
      "",
    creative1: "PHOTOGRAPHER: MINH VIET PHAM",
    creative2: "CREATIVE DIRECTOR: MINH VIET PHAM, BAZO, DAVID PHAM",
    creative3: "DJ: AIIZA BAZO, AIIZA PHAMINHO (DAVID PHAM)",
    location: "LOCATION: KAPLANOVA 2252/8, PRAHA 4",
    variant: "Project3" as const,
    backgroundImage: "/aizza.jpg",
  },
  {
    id: 4,
    title: "SEVENTYFOUR: SILVER",
    description:
      "A handmade silver pendant for our closes friends, family and Skejterboi.",
    creative1: "DESIGNER: LEO PHAM, T. TUNG MAI",
    creative2: "FILM BY: T. TUNG MAI",
    location: "LOCATION: KAPLANOVA 2252/8, PRAHA 4",
    variant: "Project4" as const,
    backgroundImage: "/seventyfour_silver.jpg", 
  },
  {
    id: 4,
    title: "SEVENTYFOUR: BEGIN",
    description:
      "A journey through time, blending past and present in perfect harmony.",
    creative1: "DIRECTOR, DP, EDITOR: T. TUNG MAI",
    creative2: "DESIGNER: LEO PHAM",
    creative3: "SOUND BY: TOMAS NGUYEN",
    variant: "Project5" as const,
    backgroundImage: "/74-begin-gif.gif",
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
            <div className="relative w-full grid grid-cols-1 grid-rows-1 gap-4">
              <DetailLayout.Image
                src="/jun_pobocka_1.jpg"
                alt="JUN"
                aspectRatio="16/9"
                className="max-h-[100vh]"
              />

              <div className="absolute inset-0 flex flex-col justify-center items-center p-8 lg:text-xs text-[8px] uppercase font-bold text-left mix-blend-difference">
                <div>
                  <p
                    className="w-full"
                    style={{ textShadow: "0px 0px 2px rgba(255,255,255,1)" }}
                  ></p>
                </div>
              </div>
            </div>
          </>
        )}
        {project.variant === "Project2" && (
          <>
            <div className="relative w-full grid grid-cols-1 grid-rows-1 gap-4">
              <DetailLayout.Image
                src="/sk_slovan_kunratice_2.jpg"
                alt="SK SLOVAN KUNRATICE PHOTO 1"
                aspectRatio="16/9"
                className="max-h-[100vh]"
              />

              <div className="absolute inset-0 flex flex-col justify-center items-center p-8 lg:text-xs text-[8px] uppercase font-bold text-left mix-blend-difference">
                <div>
                  <p
                    className="w-full"
                    style={{ textShadow: "0px 0px 2px rgba(255,255,255,1)" }}
                  ></p>
                </div>
              </div>
            </div>
          </>
        )}
        {project.variant === "Project3" && (
          <>
            <div className="relative w-full grid lg:grid-cols-2 grid-cols-1 grid-rows-1 gap-4">
              <DetailLayout.Image
                src="/aiiza_bazo_1.jpeg"
                alt="Project 1"
                aspectRatio="9/16"
                className="h-[100vh]"
              />
              <DetailLayout.Image
                src="/aiiza_david_1.jpeg"
                alt="Project 1"
                aspectRatio="9/16"
                className="h-[100vh]"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center p-8 lg:text-xs text-[8px] uppercase font-bold text-left mix-blend-difference">
                <div>
                  <p
                    className="w-full"
                    style={{ textShadow: "0px 0px 2px rgba(255,255,255,1)" }}
                  ></p>
                </div>
              </div>
            </div>

            <div className="relative  w-full grid grid-cols-1 grid-rows-1 gap-4">
              <DetailLayout.Image
                src="/aiiza_vertical.jpeg"
                alt="Project 1"
                aspectRatio="9/16"
                className="max-h-[100vh]"
              />

              <div className="absolute inset-0 flex flex-col justify-center items-center p-8 lg:text-xs text-[8px] uppercase font-bold text-left mix-blend-difference">
                <div>
                  <p
                    className="w-full"
                    style={{ textShadow: "0px 0px 2px rgba(255,255,255,1)" }}
                  >
                    AIIZA
                  </p>
                </div>
              </div>
            </div>
            <div className="relative w-full grid lg:grid-cols-2 grid-cols-1 grid-rows-1 gap-4">
              <DetailLayout.Image
                src="/aiiza_david_2.jpeg"
                alt="Project 1"
                aspectRatio="9/16"
                className="h-[100vh]"
              />
              <DetailLayout.Image
                src="/aiiza_bazo_2.jpeg"
                alt="Project 1"
                aspectRatio="9/16"
                className="h-[100vh]"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center p-8 lg:text-xs text-[8px] uppercase font-bold text-left mix-blend-difference">
                <div>
                  <p
                    className="w-full"
                    style={{ textShadow: "0px 0px 2px rgba(255,255,255,1)" }}
                  ></p>
                </div>
              </div>
            </div>
          </>
        )}

        {project.variant === "Project4" && (
          <>
            <div className="relative w-full">
              <DetailLayout.Video
                src="https://vimeo.com/958547140"
                alt="SEVENTYFOUR: SILVER"
              />
            </div>
            <div className="relative w-full grid grid-cols-1 grid-rows-1 gap-4">
              <DetailLayout.Image
                src="/silver_poster.png"
                alt="SEVENTYFOUR: SILVER POSTER"
                aspectRatio="9/16"
                className="max-h-[100vh]"
              />

              <div className="absolute inset-0 flex flex-col justify-center items-center p-8 lg:text-xs text-[8px] uppercase font-bold text-left mix-blend-difference">
                <div>
                  <p
                    className="w-full"
                    style={{ textShadow: "0px 0px 2px rgba(255,255,255,1)" }}
                  ></p>
                </div>
              </div>
            </div>
          </>
        )}

        {project.variant === "Project5" && (
          <>
            <div className="relative w-full mb-10">
              <DetailLayout.Image
                src="/seventyfour_begin_1.jpg"
                alt="Project 1"
              />

              <div className="absolute inset-0 flex flex-col justify-center items-center p-8 mix-blend-difference lg:text-xs text-[8px] uppercase font-bold text-left">
                <div className="">
                  <p
                    className="w-full"
                    style={{ textShadow: "0px 0px 2px rgba(255,255,255,1)" }}
                  >
                    {/* DIRECTOR, DP, EDITOR: T. TUNG MAI
                    <br />
                    DESIGNER: LEO PHAM
                    <br />
                    SOUND: TOMAS NGUYEN */}
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
      </DetailLayout.ProjectContent>
      {/* Gradient overlay */}

      {/* Remove motion.div wrapper, pass ref directly */}
      <Footer project={project} footerRef={footerRef} />
    </DetailLayout>
  );
};
