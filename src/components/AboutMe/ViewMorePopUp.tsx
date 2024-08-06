import { TitleSubtitileParagraph } from "../types";

interface PopUpProps {
  closePopUp: () => void;
  titleSubPara: TitleSubtitileParagraph;
}

const PopUp = ({ closePopUp, titleSubPara }: PopUpProps) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {titleSubPara.title}
        </h2>
        <p className="text-gray-700 mb-4 text-center">
          {titleSubPara.subtitle}
        </p>

        <ul className="list-none mb-4 text-gray-700">
          {titleSubPara.descriptions.map((item) => (
            <>
              <li className="flex items-center justify-center mb-2">
                <i className="bx bx-check-circle mr-2 text-blue-500"></i>
                <span>{item}</span>
              </li>
            </>
          ))}
        </ul>
        <div className="flex justify-center">
          <button
            onClick={closePopUp}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
