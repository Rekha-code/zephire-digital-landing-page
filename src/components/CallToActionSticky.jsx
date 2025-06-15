import React from "react";

const CallToActionSticky = () => {
  return (
    <>
      <div className="fixed bottom-4 right-4 z-50">
        <button className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300 animate-bounce">
          Book a Free Consultation
        </button>
      </div>
    </>
  );
};

export default CallToActionSticky;
