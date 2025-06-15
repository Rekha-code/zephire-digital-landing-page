import React from "react";
import { assets, testimonialsData } from "../assets/assets";
const Testimonials = () => {
  return (
    <>
      <section
        className="container mx-auto py-10 lg:px-32 w-full overflow-hidden bg-gray-100 text-primary"
        id="Testimonials"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Testimonials
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="max-w-[340px] border shadow-lg rounded px-8 py-12 text-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.alt}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h2 className="text-xl text-gray-700 font-medium">
                {testimonial.name}
              </h2>
              <p className="text-gray-500 text-sm mb-4">{testimonial.title}</p>
              <div className="flex justify-center gap-1 text-red-500 mb-4">
                {Array.from({ length: testimonial.rating }, (item, index) => (
                  <img key={index} src={assets.star_icon} />
                ))}
              </div>
              <p className="text-gray-600">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Testimonials;
