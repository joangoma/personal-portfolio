import { HomeData } from "../types";
import "./Home.css";
import ScrollDown from "./ScrollDown";

const Home = ({ title, subtitle, description }: HomeData) => {
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto px-6 md:flex md:items-center md:justify-center">
        <div className="md:w-2/5 flex flex-col items-start">
          <h1 className="text-6xl font-bold text-gray-800 mb-4">{title}</h1>
          <h2 className="text-3xl text-gray-600 mb-6">{subtitle}</h2>
          <p className="text-lg text-gray-600 max-w-lg mb-6">{description}</p>
        </div>
        <section>
          <div className="home_image"></div>
        </section>
      </div>
      <div className="flex justify-center items-center mt-12">
        {" "}
        <ScrollDown />
      </div>
    </div>
  );
};

export default Home;
