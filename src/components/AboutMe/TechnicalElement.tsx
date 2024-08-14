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
      <div className="w-80 h-80 bg-gray-100 md:mx-4 mb-4 flex flex-col items-center justify-center space-y-2 border-2 border-gray-300 rounded-xl z-10">
        <i className={`bx ${icon} bx-md bx-tada-hover`}></i>
        <h3 className="mb-2 font-semibold text-gray-900">{title}</h3>
          <button
          onClick={openPopUp}
          className="px-3 py-2 bg-gray-500 text-white rounded-lg shadow-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105"
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
