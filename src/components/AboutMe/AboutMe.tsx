import { TitleSubtitileParagraph } from "../types";
import { AboutMeSkills } from "./AboutMeSkills";
import "./AboutMe.css";
import "boxicons";

export const AboutMe = ({
  title,
  subtitle,
  descriptions,
}: TitleSubtitileParagraph) => {
  return (
    <div className="bg-gray-200 py-20 about__section">
      <h2 className="text-center mt-2 mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </h2>
      <h3 className="text-center mb-12 text-1xl tracking-tight text-gray-600">
        {subtitle}
      </h3>

      <div className="flex-col items-center mx-auto w-2/3 mb-24">
        <div className="grid grid-cols-2 items-start">
          <div className="flex row-span-2 justify-center items-center ">
            <div className="about_me_image"></div>
          </div>

          <div className="grid grid-cols-3 w-3/4">
            <div className="w-32 h-32 bg-gray-100 border-2 border-gray-300  text-center content-center rounded-xl ">
              <i className="bx bx-code-alt bx-sm bx-tada-hover about__icon"></i>
              <h3 className="font-semibold text-gray-900">Coding</h3>
              <span className="font text-gray-600">5 years coding</span>
            </div>

            <div className="w-32 h-32 bg-gray-100 border-2 border-gray-300  text-center content-center rounded-xl ">
              <i className="bx bxs-music bx-sm bx-tada-hover about__icon"></i>
              <h3 className="font-semibold text-gray-900 ">Music</h3>
              <span className="font text-gray-600">Bla bla bla</span>
            </div>

            <div className="w-32 h-32 bg-gray-100 border-2 border-gray-300 text-center content-center rounded-xl ">
              <i className="bx bxs-landscape bx-sm bx-tada-hover about__icon"></i>
              <h3 className="font-semibold text-gray-900">Sport</h3>
              <span className="font text-gray-600">Bla bla bla</span>
            </div>
          </div>

          <div className="mt-6 col-start-2 justify-center w-2/3">
            {descriptions.map((item) => (
              <p className="text-gray-600 mb-4 text-justify">{item}</p>
            ))}
          </div>
        </div>
      </div>

      <AboutMeSkills></AboutMeSkills>
    </div>
  );
};
