import React from "react";
import {
  FaUsers,
  FaChartLine,
  FaLightbulb,
  FaTools,
  FaHandshake,
} from "react-icons/fa"; // Install react-icons: npm install react-icons

const WhyChooseUs = () => {
  const usps = [
    {
      title: "Dedicated Team",
      description:
        "A passionate and skilled team of experts committed to understanding your vision and delivering exceptional results tailored to your needs.",
      icon: FaUsers,
    },
    {
      title: "ROI-Focused Strategies",
      description:
        "We craft data-driven strategies designed to maximize your return on investment, ensuring every effort contributes to your measurable growth.",
      icon: FaChartLine,
    },
    {
      title: "Creative-First Approach",
      description:
        "Innovation is at our core. We bring fresh, out-of-the-box thinking to every project, ensuring your brand stands out with unique solutions.",
      icon: FaLightbulb,
    },
    {
      title: "Full-Stack Expertise",
      description:
        "From intricate website development to comprehensive digital marketing, our holistic approach covers all aspects of your online presence.",
      icon: FaTools,
    },
    {
      title: "Client-Centric Partnership",
      description:
        "Your success is our priority. We foster transparent communication and collaborative partnerships, ensuring your goals are always met.",
      icon: FaHandshake,
    },
  ];

  return (
    <section className="py-20 px-4 bg-white text-primary" id="WhyChooseUs">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500">
          Why Choose Zephire Digital?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {usps.map((usp, index) => (
            <div
              key={index}
              className="group bg-gray-50 p-10 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-105
                         border-l-4 border-r-4 border-transparent hover:border-orange-500 relative overflow-hidden"
            >
              {/* Background gradient effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-0"></div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-6">
                  {React.createElement(usp.icon, {
                    className:
                      "text-6xl text-orange-500 group-hover:text-pink-600 transition-colors duration-500 transform group-hover:scale-110",
                  })}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-orange-600 to-pink-600 transition-all duration-500">
                  {usp.title}
                </h3>
                <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-500">
                  {usp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
