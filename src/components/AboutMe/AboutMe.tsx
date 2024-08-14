import { TitleSubtitileParagraph } from "../types";
import { AboutMeSkillsElement } from "./TechnicalElement";
import { Hobby } from "./Hobby"
import { codingPopUp, workingExperiencePopUp, sportPopUp } from "../webContent";
import "boxicons";

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
        <h3 className="text-2xl md:text-3xl lg:text-4xl  text-gray-600 mb-12 text-center">{subtitle}</h3>

        <div className="flex flex-col items-center justify-center lg:flex-row mb-8">
          <div className="w-full lg:w-1/3 flex justify-center mb-8">
            <img
              src="/src/assets/Profile_image.png"
              alt="Description of the image"
              className="w-full h-full md:w-96 md:h-96 object-cover"
            />
          </div>
          <div className="flex flex-col items-start self-center w-full lg:w-1/3">
            <div className="flex flex-col md:flex-row lg:flex-row w-full justify-center">
              <Hobby title="Coding" icon="bx-code-alt" text="5 years coding" />
              <Hobby title="Music" icon="bxs-music" text="10 years playing saxophone" />
              <Hobby title="Sports" icon="bxs-basketball" text="Weekly basketball games" />
            </div>
            <div className="mt-6 w-full">
              {descriptions.map((item, index) => (
                <p key={index} className="text-gray-600 mb-4 text-justify">{item}</p>
              ))}
            </div>
          </div>
        </div>
        <h3 className="text-2xl md:text-3xl lg:text-4xl text-gray-600 mb-12 text-center">Techincall skills & Work experience</h3>
        <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center">
          <AboutMeSkillsElement data={codingPopUp} icon='bx-code-block'></AboutMeSkillsElement>
          <AboutMeSkillsElement data={workingExperiencePopUp} icon='bxs-briefcase'></AboutMeSkillsElement>
          <AboutMeSkillsElement data={sportPopUp} icon='bx-award'></AboutMeSkillsElement>
        </div>

      </div>
    </div>
  );
};
