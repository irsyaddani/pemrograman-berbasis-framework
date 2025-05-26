import Image, { StaticImageData } from "next/image";
import image1 from "../../../public/images/project1.png";
import image2 from "../../../public/images/project2.png";

type ProjectItemProps = {
  name: string;
  url: string;
  urlDisplay: string;
  imgSrc: StaticImageData;
};

export default function Projects() {
  return <div>Proyek</div>;
}
