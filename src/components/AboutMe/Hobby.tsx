interface HobbyProps {
  title: string;
  icon: string;
  text: string;
}

export const Hobby = ({ title, icon, text }: HobbyProps) => {
  return (
    <div className="w-full h-32 md:w-1/3 mb-4 md:mx-4 bg-gray-100 text-center flex flex-col justify-center rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="mx-2">
        <i className={`bx ${icon} bx-sm bx-tada-hover`}></i>
        <h4 className="font-medium text-gray-700 text-lg md:text-xl lg:text-lg xl:text-xl">
          {title}
        </h4>

        <span className="font text-gray-600">{text}</span>
      </div>
    </div>
  );
};
