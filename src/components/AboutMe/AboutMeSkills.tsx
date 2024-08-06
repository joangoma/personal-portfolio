import React, { useState } from "react";
import ViewMorePopUp from "./ViewMorePopUp";
import { codingPopUp, workingExperiencePopUp, sportPopUp } from "../webContent";

export const AboutMeSkills = () => {
  const [viewMorePopUpType, setViewMorePopUpType] = useState(null);

  const openViewMorePopUp = (type: any) => {
    setViewMorePopUpType(type);
  };

  const closeViewMorePopUp = () => {
    setViewMorePopUpType(null);
  };

  let popUpContent;
  if (viewMorePopUpType === 'coding') {
    popUpContent = codingPopUp;
  } else if (viewMorePopUpType === 'workingExperience') {
    popUpContent = workingExperiencePopUp;
  } else if (viewMorePopUpType === 'sport') {
    popUpContent = sportPopUp;
  }

  return (
    <div className="skills">
      <div className="flex justify-center space-x-7">
        <div className="w-80 h-80 bg-gray-100 flex flex-col items-center justify-center space-y-2 border-2 border-gray-300 rounded-xl">
          <i className="bx bx-code-alt bx-md bx-tada-hover"></i>
          <h3 className="mb-2 font-semibold text-gray-900">Coding</h3>
          <span className="font text-gray-600">Bla bla bla</span>
          <button
            onClick={() => openViewMorePopUp('coding')}
            className="px-3 py-2 bg-gray-500 text-white rounded-lg shadow-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105"
          >
            View More
          </button>
        </div>
        <div className="w-80 h-80 bg-gray-100 flex flex-col items-center justify-center space-y-2 border-2 border-gray-300 rounded-xl">
          <i className="bx bx-briefcase-alt bx-md bx-tada-hover "></i>
          <h3 className="font-semibold text-gray-900">Working Experience</h3>
          <span className="font text-gray-600">Bla bla bla</span>
          <button
            onClick={() => openViewMorePopUp('workingExperience')}
            className="px-3 py-2 bg-gray-500 text-white rounded-lg shadow-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105"
          >
            View More
          </button>
        </div>
        <div className="w-80 h-80 bg-gray-100 flex flex-col items-center justify-center space-y-2 border-2 border-gray-300 rounded-xl">
          <i className="bx bx-award bx-md bx-tada-hover "></i>
          <h3 className="font-semibold text-gray-900">Sport</h3>
          <span className="font text-gray-600">Bla bla bla</span>
          <button
            onClick={() => openViewMorePopUp('sport')}
            className="px-3 py-2 bg-gray-500 text-white rounded-lg shadow-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105"
          >
            View More
          </button>
        </div>
      </div>
      {viewMorePopUpType && (
        <ViewMorePopUp
          closePopUp={closeViewMorePopUp}
          titleSubPara={popUpContent!}
        />
      )}
    </div>
  );
};
