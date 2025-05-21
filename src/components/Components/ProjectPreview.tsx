import React from "react";
import ProjectTag from "./ProjectTag";
import * as assets from "../../assets";
// import { Link } from "react-router";

interface ProjectPreviewProps {
  bgColor?: string;
  aspect: "square" | string;
  colSpan?: number;
  children?: React.ReactNode;
  className?: string;
  tags: string[];
  title: string;
  link: string;
  video: keyof typeof assets;
  // slug: string;
  description: string
}

export default function ProjectPreview({
  bgColor = "#F6F6F6",
  aspect,
  colSpan,
  children,
  className = "",
  tags,
  title,
  link = "#",
  video,
  // slug,
  description
}: ProjectPreviewProps) {
  const colSpanClass = colSpan ? `col-span-${colSpan}` : "";
  const aspectClass =
    aspect === "square" ? "aspect-square" : `aspect-[${aspect}] `;

  return (
    <div
      // to={`/projects/${slug}`}
      className={`${className} bg-[${bgColor}] ${aspectClass} ${colSpanClass} border border-gray-100 rounded-2xl   relative group `}
    >
      {children}

      <div className="absolute top-4 left-4 flex gap-2 ">
        {tags.map((tag, index) => {
          return <ProjectTag value={tag} key={index} />;
        })}
      </div>
      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center z-10 text-white font-medium font-[lato] lg:opacity-0 lg:group-hover:opacity-100 opacity-100 transition-opacity duration-300 gap-4 ">
        <div className="">
          <p className="lg:text-lg text-sm">{title}</p>
          <div className="lg:text-sm text-[10px]">
            {description}
          </div>
        </div>
        <button
          //   href={link}
          onClick={() => window.open(link, "_blank")}
          className="transform hover:scale-110 duration-300 cursor-pointer lg:w-[50px] w-[25px] mr-2 lg:-mr-3"
          //   target="_blank"
          //   rel="noopener noreferer"
        >
          <img src={assets.hyperlinkWhite} alt="hyperlink" className="" />
        </button>
      </div>
      <div className="w-full h-full">
        {/* <img
          className=" inset-0 w-full h-full rounded-2xl object-cover"
          src={assets[image]}
          alt=""
        /> */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{ width: "auto", height: "100%" }}
          className=" inset-0 w-full h-full rounded-2xl   object-cover "
        >
          <source src={assets[video]} type="video/mp4" />
        </video>
      </div>
      <div
        className="
        absolute 
        bottom-0 
        left-0 
        right-0 
        h-2/3 
        bg-gradient-to-t 
        from-black/70 
        to-transparent 
        lg:opacity-0 
        lg:group-hover:opacity-100 
        opacity-100 
        transition-opacity 
        duration-300
        rounded-br-2xl 
        rounded-bl-2xl
        
      "
      />
    </div>
  );
}
