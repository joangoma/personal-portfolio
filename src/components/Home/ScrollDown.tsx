import React, { useState, useEffect } from 'react';

const ScrollDown = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={`flex justify-center items-center mt-6 transition-opacity duration-300 ease-in-out ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="animate-bounce">
        <svg
          className="h-9 w-9 text-gray-600"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 17a.75.75 0 01-.53-.22l-5.25-5.25a.75.75 0 111.06-1.06L10 14.94l4.72-4.72a.75.75 0 111.06 1.06l-5.25 5.25a.75.75 0 01-.53.22z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <p className="text-gray-600 ml-2">Scroll down for more</p>
    </div>
  );
};

export default ScrollDown;