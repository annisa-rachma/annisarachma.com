import React from "react";
import ProjectTag from "./ProjectTag";
import * as assets from "../../assets"

interface ProjectPreviewProps {
  bgColor?: string;
  aspect: "square" | "2/1" | string;
  colSpan?: number;
  children?: React.ReactNode;
  className?: string;
  tags: string[];
  title: string;
  link: string
}

export default function ProjectPreview({
  bgColor = "#F6F6F6",
  aspect,
  colSpan,
  children,
  className = "",
  tags,
  title,
  link
}: ProjectPreviewProps) {
  const colSpanClass = colSpan ? `col-span-${colSpan}` : "";
  const aspectClass =
    aspect === "square" ? "aspect-square" : `aspect-[${aspect}] `;

  return (
    <div
      className={`${className} bg-[${bgColor}] ${aspectClass} ${colSpanClass} rounded-2xl cursor-pointer relative group p-4`}
    >
      {children}

      <div className="flex gap-2">
        {tags.map((tag, index) => {
          return <ProjectTag value={tag} key={index} />;
        })}
      </div>
      <div className="absolute bottom-4 left-4 right-5 flex justify-between items-center z-10 text-white font-medium font-[lato] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-lg">{title}</p>
        <a href={link} className="" target="_blank">
            <img src={assets.hyperlinkWhite} alt="hyperlink" />
        </a>
      </div>
      <div
        className="
        absolute 
        bottom-0 
        left-0 
        right-0 
        h-2/3 
        bg-gradient-to-t 
        from-black/30 
        to-transparent 
        opacity-0 
        group-hover:opacity-100 
        transition-opacity 
        duration-300
        rounded-br-2xl 
        rounded-bl-2xl
      "
      />
    </div>
  );
}
