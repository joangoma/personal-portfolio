import { HomeData } from "../types";
import "./Home.css";
import ScrollDown from "./ScrollDown";

const Home = ({ title, subtitle, description }: HomeData) => {
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col items-center justify-center" id="home">
      <div className="m-8">

        <div className="flex flex-col md:felx-row lg:flex-row">
          <div className="w-full  lg:w-1/2 mt-8 flex flex-col ">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 self-start">{title}</h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-600 mb-6 self-start">{subtitle}</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-lg mb-6 self-start text-justify">{description}</p>
          </div>

          <div className="w-full  lg:w-1/2 flex justify-center mt-6 md:mt-0">
            <div className="home_image"></div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-12">
          {" "}
          <ScrollDown />
        </div>
      </div>
    </div>
  );
};

export default Home;
