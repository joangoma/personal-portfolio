import { HomeData } from "../types";
import "./Home.css";
import ScrollDown from "./ScrollDown";

const Home = ({ title, subtitle, description }: HomeData) => {
  return (
    <div
      className="bg-gray-200 min-h-screen flex flex-col items-center justify-center p-4 sm:p-8"
      id="home"
    >
      <div className="w-full max-w-screen-lg">

        {/* Main Flex Container */}
        <div className="flex flex-col md:flex-row lg:flex-row items-center md:items-start">
          
          {/* Text Section */}
          <div className="w-full lg:w-1/2 mt-8 md:mt-0 md:mr-6 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              {title}
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-6">
              {subtitle}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-lg mb-6 text-justify">
              {description}
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center mt-6 md:mt-0">
            <div className="home_image"></div>
          </div>
        </div>

        {/* Scroll Down Component */}
        <div className="flex justify-center items-center mt-12">
          <ScrollDown />
        </div>
      </div>
    </div>
  );
};

export default Home;
