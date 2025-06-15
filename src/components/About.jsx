import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden text-primary"
        id="About"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
          <img
            src={assets.about}
            alt=""
            className="w-full sm:1/2 max-w-lg rounded-t-full"
          />
          <div className="flex felx-col items-center md:items-start mt-10">
            <p className="my-10 max-w-lg text-lg leading-relaxed">
              At Zephire Digital, our mission is to empower brands to thrive in
              the digital landscape by providing innovative, full-stack digital
              solutions. We envision a world where businesses not only have an
              online presence but truly "Go Beyond Online Presence" through
              strategic development and marketing that drives measurable growth
              and lasting impact.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
