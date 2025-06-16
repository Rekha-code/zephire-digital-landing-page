import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);
  return (
    <>
      <div className="absolute top-0 left-0 w-full z-10">
        <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
          {/* <img src={assets.logo_dark_1} alt="" className="w-20" /> */}
          <h2 className="text-white">Zephire Digital</h2>
          <ul className="hidden md:flex gap-7 text-white">
            <a href="#Header" className="cursor-pointer hover:text-gray-400">
              Home
            </a>
            <a href="#About" className="cursor-pointer hover:text-gray-400">
              About
            </a>
            <a href="#Services" className="cursor-pointer hover:text-gray-400">
              Services
            </a>
            <a
              href="#WhyChooseUs"
              className="cursor-pointer hover:text-gray-400"
            >
              WhyChooseUs
            </a>
            <a href="#Portfolio" className="cursor-pointer hover:text-gray-400">
              Portfolio
            </a>
            <a
              href="#Testimonials"
              className="cursor-pointer hover:text-gray-400"
            >
              Testimonials
            </a>
          </ul>
          <img
            onClick={() => setShowMobileMenu(true)}
            src={assets.menu_icon}
            className="md:hidden w-7 cursor-pointer"
            alt=""
          />
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-3/4 md:w-0 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50
          ${showMobileMenu ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex p-6 justify-end ">
            <img
              onClick={() => setShowMobileMenu(false)}
              src={assets.cross_icon}
              className="w-6 cursor-pointer"
              alt=""
            />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <a
              onClick={() => setShowMobileMenu(false)}
              href="#Header"
              className="px-4 py-2 rounded-full inline-block"
            >
              Home
            </a>
            <a
              onClick={() => setShowMobileMenu(false)}
              href="#About"
              className="px-4 py-2 rounded-full inline-block"
            >
              About
            </a>
            <a
              onClick={() => setShowMobileMenu(false)}
              href="#Services"
              className="px-4 py-2 rounded-full inline-block"
            >
              Services
            </a>
            <a
              onClick={() => setShowMobileMenu(false)}
              href="#WhyChooseUs"
              className="px-4 py-2 rounded-full inline-block"
            >
              WhyChooseUs
            </a>
            <a
              onClick={() => setShowMobileMenu(false)}
              href="#Portfolio"
              className="px-4 py-2 rounded-full inline-block"
            >
              Portfolio
            </a>
            <a
              onClick={() => setShowMobileMenu(false)}
              href="#Testimonials"
              className="px-4 py-2 rounded-full inline-block"
            >
              Testimonials
            </a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
