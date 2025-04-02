import React from "react";

interface ProjectPreviewProps {
  bgColor?: string;
  aspect: "square" | "2/1" | string;
  colSpan?: number;
  children?: React.ReactNode;
}

export default function ProjectPreview({
  bgColor,
  aspect,
  colSpan,
  children,
}: ProjectPreviewProps) {
  const bgClass = bgColor ? bgColor : "#F6F6F6";
  const colSpanClass = colSpan ? `col-span-${colSpan}` : "";
  const aspectClass =
    aspect === "square" ? "aspect-square" : `aspect-[${aspect}] `;

  return (
    <div
      className={`bg-[${bgClass}] ${aspectClass} ${colSpanClass} rounded-2xl`}
    >
      {children}
    </div>
  );
}
