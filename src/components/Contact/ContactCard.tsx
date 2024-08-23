const ContactSection = () => {
  return (
    <section className="bg-gray-400 text-gray-200 py-12 px-4 sm:px-6" id="contact">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-gray-100">Contact Me</h2>
        <p className="mb-4 sm:mb-6 lg:text-xl">
          If you want to know more about me or my work, feel free to reach out!
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-6">
          <a
            href="mailto:joangoma24@gmail.com"
            className="flex items-center space-x-2 text-gray-300 hover:text-gray-100 transition duration-300"
          >
            <i className='bx bx-envelope'></i>
            <span className="text-sm sm:text-base lg:text-lg">joangoma24@gmail.com</span>
          </a>
          <a
            href="https://github.com/joangoma"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-300 hover:text-gray-100 transition duration-300"
          >
            <i className='bx bxl-github'></i>
            <span className="text-sm sm:text-base lg:text-lg">github.com/joangoma</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
