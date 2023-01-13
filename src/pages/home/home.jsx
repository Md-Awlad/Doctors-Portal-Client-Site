import React from "react";
import Banner from "./banner";
import Contact from "./contact";
import Exceptional from "./exceptional";
import Info from "./info";
import MakeAppointment from "./makeAppointment";
import Services from "./services";
import Testimonials from "./testimonials";

const Home = () => {
  return (
    <div>
      <div className="md:px-12 px-6 md:space-y-24 space-y-16">
        <Banner />
        <Info />
        <Services />
        <Exceptional />
      </div>
      <MakeAppointment />
      <div className="md:px-12 px-6 ">
        <Testimonials />
      </div>
      <Contact />
    </div>
  );
};

export default Home;
