import React, { useState } from "react";
import ViewMorePopUp from "./ViewMorePopUp";
import { codingPopUp } from "../webContent";

export const AboutMeSkills = () => {
  const [isViewMorePopUpOpen, setIsViewMorePopUpOpen] = useState(false);

  const openViewMorePopUp = () => {
    setIsViewMorePopUpOpen(true);
  };

  const closeViewMorePopUp = () => {
    setIsViewMorePopUpOpen(false);
  };

  return (
    <div className="skills">
      <div className="flex justify-center space-x-7">
        <div className="w-80 h-80 bg-gray-100 flex flex-col items-center justify-center space-y-2 border-2 border-gray-300 rounded-xl">
          <i className="bx bx-code-alt bx-md bx-tada-hover"></i>
          <h3 className="mb-2 font-semibold text-gray-900">Coding</h3>
          <span className="font text-gray-600">Bla bla bla</span>

          <button
            onClick={openViewMorePopUp}
            className="px-3 py-2 bg-gray-500 text-white rounded-lg shadow-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105"
          >
            View More
          </button>
          {isViewMorePopUpOpen && (
            <ViewMorePopUp
              closePopUp={closeViewMorePopUp}
              titleSubPara={codingPopUp}
            />
          )}
        </div>
        <div className="w-80 h-80 bg-gray-100 border-2 border-gray-300 text-center content-center rounded-xl ">
          <i className="bx bx-award bx-md bx-tada-hover "></i>
          <h3 className="font-semibold text-gray-900">Sport</h3>
          <span className="font text-gray-600">Bla bla bla</span>
        </div>
        <div className="w-80 h-80 bg-gray-100 border-2 border-gray-300 text-center content-center rounded-xl ">
          <i className="bx bx-briefcase-alt bx-md bx-tada-hover "></i>
          <h3 className="font-semibold text-gray-900">Sport</h3>
        </div>
      </div>
    </div>
  );
};
