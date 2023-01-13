import React from "react";
import fluoride from "../../images/assets/fluoride.png";
import cavity from "../../images/assets/cavity.png";
import whitening from "../../images/assets/whitening.png";
import Service from "./service";

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Fluoride Treatment",
      description: "Fluoride treatment section",
      img: fluoride,
    },
    {
      _id: 2,
      name: "Cavity Filling",
      description: "Cavity filling section",
      img: cavity,
    },
    {
      _id: 3,
      name: "Teeth Whitening",
      description: "Teeth whitening section",
      img: whitening,
    },
  ];

  return (
    <div className="space-y-5">
      <div className="text-center">
        <h3 className="text-primary text-xl font-bold uppercase">
          Our Service
        </h3>
        <h3 className="md:text-5xl text-3xl">Services We Provider</h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
        {services.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
