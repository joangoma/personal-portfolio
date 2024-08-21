import { TitleSubtitileParagraph } from "../types";
import { AboutMeSkillsElement } from "./TechnicalElement";
import { Hobby } from "./Hobby"
import { codingPopUp, workingExperiencePopUp, awardsAndAchievements } from "../webContent";
import "boxicons";
import ImageCarousel from "./ImageCarrousel";

const images = [
  { src: "/src/assets/hobby_web.jpg", alt: "Description of the image" },
  { src: "/src/assets/saxo_web.jpg", alt: "Another image description" },
  // Add more images as needed
];

export const AboutMe = ({
  title,
  subtitle,
  descriptions,
}: TitleSubtitileParagraph) => {

  return (
    <div className="bg-gray-200 justify-center py-20" id="about">
      <div className="mx-8">

        <h2 className="text-3xl md:text-4xl lg:text-5xl  text-center mb-10 font-bold tracking-tight text-gray-900">
          {title}
        </h2>
        <h3 className="text-2xl md:text-3xl text-gray-600 mb-12 text-center">{subtitle}</h3>

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
        <h3 className="text-2xl md:text-3xl text-gray-600 mb-12 text-center">Techincall skills & Work experience</h3>
        <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center">
          <AboutMeSkillsElement data={codingPopUp} icon='bx-code-block'></AboutMeSkillsElement>
          <AboutMeSkillsElement data={awardsAndAchievements} icon='bx-award'></AboutMeSkillsElement>
          <AboutMeSkillsElement data={workingExperiencePopUp} icon='bxs-briefcase'></AboutMeSkillsElement>
        </div>

      </div>
    </div>
  );
};
