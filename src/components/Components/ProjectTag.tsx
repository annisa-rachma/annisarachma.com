// import React from "react";

interface ProjectTagProps {
    value: string;
}

export default function ProjectTag({value} : ProjectTagProps) {
  return (
    <div className="bg-[#EAEAEA] inline-block py-1 px-3 text-sm rounded-2xl text-grey">
      <p>{value}</p>
    </div>
  );
}
