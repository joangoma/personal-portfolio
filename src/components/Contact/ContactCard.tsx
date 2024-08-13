// src/components/ContactSection.jsx
import React from 'react';
import { FaEnvelope, FaGithub } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section className="bg-gray-400 text-gray-200 py-16 px-8" id="contact">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-100    ">Contact Me</h2>
        <p className="mb-6">
          If you want to know more about me or my work, feel free to reach out!
        </p>
        <div className="flex justify-center items-center space-x-6 mb-6">
          <a
            href="mailto:your-email@example.com"
            className="flex items-center space-x-2 text-gray-300 hover:text-gray-100 transition duration-300"
          >
            <FaEnvelope />
            <span>joangoma24@gmail.com</span>
          </a>
          <a
            href="https://github.com/joangoma"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-300 hover:text-gray-100 transition duration-300"
          >
            <FaGithub />
            <span>github.com/joangoma</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
