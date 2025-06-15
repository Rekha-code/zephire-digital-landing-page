import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <div
        className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
        style={{ backgroundImage: "url('/header_img.jpg')" }}
        id="Header"
      >
        <Navbar />
        <div className="container text-center z-10 px-4 max-w-4xl mx-auto text-white md:px-2 lg:px-34">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Go Beyond Online Presence
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Short description of Zephire Digital
          </p>
          <div>
            <button className="bg-white text-primary px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300 ">
              Book a Free Consultation
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
