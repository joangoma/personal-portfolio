import { TitleParagraph, TitleSubtitileParagraph } from "../types";
import { Hobby } from "./Hobby"
import "boxicons";
import ImageCarousel from "./ImageCarrousel";

const images = [
  { src: "./src/assets/hobby_web.jpg", alt: "Description of the image" },
  { src: "./src/assets/saxo_web.jpg", alt: "Another image description" },
  { src: "./src/assets/castells1.jpg", alt:"hola"},
  // Add more images as needed
];

export const AboutMe = ({
  title,
  descriptions,
}: TitleParagraph) => {

  return (
    <div className="bg-gray-200 justify-center py-16" id="about">
      <div className="mx-8">  
        <h2 className="text-3xl md:text-4xl  text-center mb-12 font-bold tracking-tight text-gray-900">
          {title}
        </h2>

        <div className="flex flex-col items-center justify-center lg:flex-row mb-8">
          <div className="sm:w-72 md:w-80 lg:w-96 flex justify-center mb-8 md:mr-8">
            <ImageCarousel images={images} />
          </div>
          <div className="flex flex-col items-start self-center w-full lg:w-1/3">
            <div className="flex flex-col md:flex-row lg:flex-row w-full justify-center">
              <Hobby title="Hiking & Climbing" icon="bx-landscape" text="" />
              <Hobby title="Saxophone player since 2009" icon="bxs-music" text="" />
              <Hobby title="Human towers team member" icon="bxs-castle" text="" />
            </div>
            <div className="mt-6 w-full">
              {descriptions.map((item, index) => (
                <p key={index} className="text-gray-600 mb-4 text-justify">{item}</p>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
