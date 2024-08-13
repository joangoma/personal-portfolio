import { NavBar } from "../types";
import { useState } from "react";

const Navbar = ({ items }: NavBar) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-200 py-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-gray-800 text-xl font-bold">
          GomaCortes
        </a>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row md:items-center`}
        >
          {items.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-600 hover:text-gray-800 px-3 py-2 md:px-4 md:py-0"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
