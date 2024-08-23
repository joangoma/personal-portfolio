import { useState } from "react";
import ViewMorePopUp from "./ViewMorePopUp";
import { TitleSubtitileParagraph } from "../types";

interface TechincalProps {
  icon: string,
  data: TitleSubtitileParagraph
};

export const AboutMeSkillsElement = ({icon, data}: TechincalProps) => {
  let {title, subtitle, descriptions} = data
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const openPopUp = () => setIsPopUpOpen(true);
  const closePopUp = () => setIsPopUpOpen(false);

  return (
    <>
      <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] bg-gray-100 md:mx-4 flex flex-col items-center justify-center space-y-2 lg:space-y-3 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 z-10">
        <i className={`bx ${icon} text-3xl sm:text-4xl md:text-5xl bx-tada-hover text-gray-700`}></i>
        <h3 className="mb-2 text-xl sm:text-2xl font-semibold text-gray-900">{title}</h3>
          <button
          onClick={openPopUp}
          className="px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-3 lg:text-xl bg-gray-500 text-white rounded-lg shadow-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105"
          >
          View More
        </button>
      </div>

      {isPopUpOpen && (
        <ViewMorePopUp
          closePopUp={closePopUp}
          titleSubPara={{ title, subtitle, descriptions }}
        />
      )}
    </>
  );
};
