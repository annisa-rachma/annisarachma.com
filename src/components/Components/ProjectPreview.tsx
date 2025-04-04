import React from "react";
import ProjectTag from "./ProjectTag";
import * as assets from "../../assets";
import { Link } from "react-router";

interface ProjectPreviewProps {
  bgColor?: string;
  aspect: "square" | string;
  colSpan?: number;
  children?: React.ReactNode;
  className?: string;
  tags: string[];
  title: string;
  link: string;
  image: keyof typeof assets;
  slug: string;
}

export default function ProjectPreview({
  bgColor = "#F6F6F6",
  aspect,
  colSpan,
  children,
  className = "",
  tags,
  title,
  link= "#",
  image,
  slug,
}: ProjectPreviewProps) {
  const colSpanClass = colSpan ? `col-span-${colSpan}` : "";
  const aspectClass =
    aspect === "square" ? "aspect-square" : `aspect-[${aspect}] `;

  return (
    <Link
      to={`/projects/${slug}`}
      className={`${className} bg-[${bgColor}] ${aspectClass} ${colSpanClass} rounded-2xl cursor-pointer relative group `}
    >
      {children}

      <div className="absolute top-4 left-4 flex gap-2 ">
        {tags.map((tag, index) => {
          return <ProjectTag value={tag} key={index} />;
        })}
      </div>
      <div className="absolute bottom-4 left-4 right-5 flex justify-between items-center z-10 text-white font-medium font-[lato] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-lg">{title}</p>
        <button
        //   href={link}
          onClick={() => window.open(link, '_blank')}
          className="transform hover:scale-110 duration-300"
        //   target="_blank"
        //   rel="noopener noreferer"
        >
          <img src={assets.hyperlinkWhite} alt="hyperlink" className="" />
        </button>
      </div>
      {/* <div className="w-full h-full"> */}
        <img
          className=" inset-0 w-full h-full rounded-2xl object-cover"
          src={assets[image]}
          alt=""
        />
      {/* </div> */}
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
    </Link>
  );
}
