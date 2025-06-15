import React from "react";
import {
  FaLaptopCode,
  FaPaintBrush,
  FaMobileAlt,
  FaPenNib,
  FaShareAlt,
  FaChartLine,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      name: "Website Design",
      description:
        "Crafting visually stunning, user-friendly, and highly functional websites that convert visitors into customers.",
      icon: FaLaptopCode,
    },
    {
      name: "Branding",
      description:
        "Building strong, recognizable, and memorable brand identities that resonate with your target audience and stand out.",
      icon: FaPaintBrush,
    },
    {
      name: "Mobile App Development",
      description:
        "Creating intuitive, powerful, and scalable mobile applications for iOS and Android that enhance user experience.",
      icon: FaMobileAlt,
    },
    {
      name: "Content Creation",
      description:
        "Developing engaging, high-quality, and SEO-optimized content strategies that attract, inform, and convert.",
      icon: FaPenNib,
    },
    {
      name: "Social Media Strategies",
      description:
        "Designing effective, data-driven social media campaigns that boost engagement, build communities, and drive conversions.",
      icon: FaShareAlt,
    },
    {
      name: "Digital Marketing",
      description:
        "Comprehensive digital marketing strategies to enhance your online visibility, drive traffic, and achieve your business goals.",
      icon: FaChartLine,
    },
  ];
  return (
    <>
      <section
        className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100 text-primary"
        id="Services"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500">
            Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-105
                         border-t-4 border-b-4 border-transparent hover:border-blue-500 relative overflow-hidden"
              >
                {/* Background gradient effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-0"></div>

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="mb-6">
                    {React.createElement(service.icon, {
                      className:
                        "text-6xl text-blue-500 group-hover:text-purple-600 transition-colors duration-500 transform group-hover:rotate-6",
                    })}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-primary group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500">
                    {service.name}
                  </h3>
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-500">
                    {service.description}
                  </p>
                  <button
                    className="mt-8 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold shadow-md
                                   hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform group-hover:scale-105 opacity-0 group-hover:opacity-100"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
