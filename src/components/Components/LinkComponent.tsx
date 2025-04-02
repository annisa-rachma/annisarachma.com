import * as assets from "../../assets"

interface LinkComponentProps {
  link: string;
  title: string
}

export default function LinkComponent({ link, title }: LinkComponentProps) {
  return (
    <a href={link} className="flex space-x-2 w-fit hover:bg-amber-200" target="_blank">
      <p>{title}</p>
      <img src={assets.hyperlink} alt="hyperlink" className="-mb-1" />
    </a>
  );
}
