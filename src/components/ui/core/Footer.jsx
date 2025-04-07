import React from "react";

export default function Footer({ project }) {
  if (!project) {
    return null;
  }

  return (
    <div
      className="relative h-[800px] w-full bg-[#FCFBF4] text-black lg:px-22 px-7"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+800px)] -top-[100vh]">
        <div
          className="h-[800px] sticky top-[calc(100vh-700px)]  flex flex-col justify-end text-left uppercase font-bold"
          style={{
            textShadow: "0px 0px 6px rgba(0, 0, 0, 1)",
            filter: "drop-shadow(0px 0px 3px rgba(0, 0, 0, 1))",
          }}
        >
          <h2 className="lg:text-6xl text-4xl mb-4 ">{project.title}</h2>
          <p className="lg:text-xs text-[10px] mb-2">{project.creative1}</p>
          <p className="lg:text-xs text-[10px] mb-2">{project.creative2}</p>
          <p className="lg:text-xs text-[10px] mb-2">{project.creative3}</p>
        </div>
      </div>
    </div>
  );
}
