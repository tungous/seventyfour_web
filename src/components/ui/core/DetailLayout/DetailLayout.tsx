import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface DetailLayoutProps {
  children: React.ReactNode;
  currentProjectIndex: number;
  isPushedDown?: boolean;
  variant:
    | "Project1"
    | "Project2"
    | "Project3"
    | "Project4"
    | "Project5"
    | "Project6";
  className?: string;
  onAnimationComplete?: () => void;
}

interface ProjectContentProps {
  children: React.ReactNode;
  className?: string;
  variant: DetailLayoutProps["variant"];
}

interface MediaProps {
  src: string;
  alt?: string;
  className?: string;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  aspectRatio?: "16/9" | "9/16";
}

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

const variants = {
  Project1: "grid w-full",
  Project2: "grid w-full",
  Project3: "grid w-full",
  Project4: "grid w-full",
  Project5: "grid w-full",
  Project6: "grid w-full",
};

const DetailLayout = ({
  children,
  isPushedDown,
  variant,
  onAnimationComplete,
}: DetailLayoutProps) => {
  return (
    <motion.div
      initial={{
        y: 0,
        opacity: 0,
        filter: "blur(100px) brightness(2)",
      }}
      animate={{
        y: isPushedDown ? -150 : 0,
        opacity: isPushedDown ? 1 : 0,
        filter: isPushedDown
          ? "blur(0px) brightness(1)"
          : "blur(100px) brightness(1)",
      }}
      exit={{
        y: 0,
        opacity: 0,
        filter: isPushedDown
          ? "blur(10px) brightness(1)"
          : "blur(100px) brightness(1)",
      }}
      transition={{
        duration: 0.7,
        y: { duration: 1, ease: "easeInOut" },
      }}
      onAnimationComplete={onAnimationComplete}
      className="absolute w-full"
      style={{ zIndex: 3 }}
    >
      {/* Gradient overlay */}
      <div
        className="absolute w-full z-2"
        style={{
          top: "calc(100vh - 200px)",
          height: "200px",
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.6) 75%, rgba(0,0,0,0.8) 85%, rgba(0,0,0,1) 100%)",
          pointerEvents: "none",
          opacity: isPushedDown ? 1 : 0,
          transition: "opacity 0.8s ease-in-out",
        }}
      />

      {/* Main content container */}
      <div
        className="relative  top-[calc(100vh)] flex flex-col justify-start items-center w-full z-2 min-h-screen pt-5 bg-black tracking-tight"
        id="scrollable-project-details"
      >
        {React.Children.map(children, (child) =>
          React.isValidElement<ProjectContentProps>(child)
            ? React.cloneElement(child, { variant })
            : child
        )}

        {/* Moved Gradient overlay */}
        <div
          className="absolute lg:bottom-150 bottom-50 left-0 w-full z-1 lg:h-[200px] h-[100px]"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.6) 75%, rgba(0,0,0,0.8) 85%, rgba(0,0,0,1) 100%)",
            pointerEvents: "none",
            opacity: isPushedDown ? 1 : 0,
            transition: "opacity 0.8s ease-in-out",
          }}
        />
      </div>
    </motion.div>
  );
};

// Project content component - Revert to original
const ProjectContent = ({
  children,
  className,
  variant,
}: ProjectContentProps) => {
  return (
    <motion.div
      key={variant}
      className={cn(variants[variant], className)}
      style={{ textShadow: "0px 0px 6px rgba(255, 255, 255, 1)" }}
      initial={{
        y: 0,
        opacity: 0,
        filter: "blur(100px) brightness(2)",
      }}
      animate={{
        y: 0,
        opacity: 1,
        filter: "blur(0px) brightness(1)",
      }}
      exit={{
        y: 0,
        opacity: 0,
        filter: "blur(100px) brightness(1)",
      }}
      transition={{
        duration: 1.3,
        delay: 0.2,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

// Image component
const DetailImage = ({
  src,
  alt = "",
  className,
  fill = true,
  sizes = "100vw",
  priority = false,
  aspectRatio = "16/9",
}: MediaProps) => {
  const aspectRatioClass = {
    "16/9": "aspect-[16/9]",
    "9/16": "aspect-[9/16]",
  }[aspectRatio];

  const objectFitClass =
    aspectRatio === "9/16" ? "object-contain" : "object-cover";

  return (
    <div className={cn("relative w-full", aspectRatioClass, className)}>
      <Image
        src={src}
        alt={alt}
        fill={fill}
        sizes={sizes}
        className={objectFitClass}
        priority={priority}
      />
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0px_6px_6px_black] lg:shadow-[inset_0_0px_15px_15px_black]" />
    </div>
  );
};

// Video component - Modified for Lazy Loading on Click
const Video = ({ src, className }: MediaProps) => {
  const [loadVideo, setLoadVideo] = useState(false);
  const isVimeoUrl = typeof src === "string" && src.includes("vimeo.com");

  const handleLoadVideo = () => {
    setLoadVideo(true);
  };

  if (isVimeoUrl) {
    const vimeoId = src.split("/").pop();

    return (
      <div
        className={cn(
          "relative aspect-[16/9] w-full overflow-hidden",
          className
        )}
        style={{ willChange: "transform" }}
        onClick={!loadVideo ? handleLoadVideo : undefined}
      >
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}?autoplay=0&loop=1&title=0&byline=0&portrait=0`}
          className="w-full h-full absolute top-0 left-0 py-10"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  }

  // Regular video file
  return (
    <div
      className={cn("relative aspect-[16/9] w-full overflow-hidden", className)}
      style={{ willChange: "transform" }}
    >
      <video src={src} className="w-full h-full object-cover" controls muted />
    </div>
  );
};

// Text component
const Text = ({ children, className }: TextProps) => {
  return <div className={cn(className)}>{children}</div>;
};

// Attach components as static properties
DetailLayout.ProjectContent = ProjectContent;
DetailLayout.Image = DetailImage;
DetailLayout.Video = Video;
DetailLayout.Text = Text;

export default DetailLayout;
