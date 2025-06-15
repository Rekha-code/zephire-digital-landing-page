import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import CallToActionSticky from "./components/CallToActionSticky";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";

const App = () => {
  return (
    <>
      <div className="w-full overflow-hidden">
        <Header />
        <About />
        <Services />
        <Portfolio />
        <WhyChooseUs />
        <Testimonials />
        <Footer />
        <CallToActionSticky />
      </div>
    </>
  );
};

export default App;
