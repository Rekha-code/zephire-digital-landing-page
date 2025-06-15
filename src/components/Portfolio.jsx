import React, { useEffect, useState } from "react";
import { assets, projectsData } from "../assets/assets";

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(projectsData.length);
      } else {
        setCardsToShow(1);
      }
    };
    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };
  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };
  return (
    <>
      <section
        className="container mx-auto py-16 px-4 bg-white text-primary"
        id="Portfolio"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500">
            Our Portfolio
          </h2>
          <p className="text-lg mb-8">
            Here you would see our impressive portfolio of projects. Imagine
            stunning web designs, impactful branding, and innovative mobile
            apps!
          </p>
          {/* slider buttons */}
          <div className="flex justify-end items-center mb-8">
            <button
              onClick={prevProject}
              className="p-3 bg-gray-200 rounded mr-2"
              aria-label="Previous Project"
            >
              <img src={assets.left_arrow} alt="Previous" />
            </button>
            <button
              onClick={nextProject}
              className="p-3 bg-gray-200 rounded mr-2"
              aria-label="Next Project"
            >
              <img src={assets.right_arrow} alt="Next" />
            </button>
          </div>

          {/* project slider container */}
          <div className="overflow-hidden">
            <div
              className="flex gap-8 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  (currentIndex * 100) / cardsToShow
                }%)`,
              }}
            >
              {projectsData.map((project, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0 w-full sm:w-1/4"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto mb-14"
                  />
                  <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                    <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                      <h2 className="text-xl font-semibold text-gray-800">
                        {project.title}
                      </h2>
                      <p className="text-gray-500 text-sm">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
