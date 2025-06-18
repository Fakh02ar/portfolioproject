import React from "react";

const Projects = () => {
  const projectData = [
    { src: "./pel.png", link: "https://pelproject.vercel.app/" },
    { src: "./figma.png", link: "https://woocommerceproject.vercel.app/" },
  ];

  return (
    <>
      {/* Hero Section with Background */}
      <div
        className="relative py-16 px-4 bg-cover bg-center mt-20"
        style={{ backgroundImage: "url('/port.jpg')" }}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Title Content */}
        <div id="projects" className="relative text-center px-4 z-10">
          <span className="uppercase montserrat font-bold text-[18px] sm:text-[26px] md:text-[32px] lg:text-[36px] leading-tight tracking-[0.25em] border-[6px] md:border-[10px] border-black px-4 sm:px-10 py-3 md:py-5 inline-block bg-white text-black">
            Projects
          </span>
        </div>
      </div>

      {/* Projects Grid Section */}
      <div className="bg-black py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {projectData.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-md"
            >
              <img
                src={item.src}
                alt={`Project ${index + 1}`}
                className="h-[200px] sm:h-[250px] md:h-[280px] lg:h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <span className="text-white text-sm sm:text-base md:text-lg font-semibold underline">
                  Go to Project
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
