import React from "react";
import InfoCard from "./infoCard";
import clock from "../../images/assets/icons/clock.svg";
import marker from "../../images/assets/icons/marker.svg";
import phone from "../../images/assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:my-0 my-5">
      <InfoCard
        cardTitle="Opening Hours"
        bgClass="bg-gradient-to-r from-secondary to-primary"
        img={clock}
      />
      <InfoCard cardTitle="Our Locations" bgClass="bg-accent" img={marker} />
      <InfoCard
        cardTitle="Contact Us"
        bgClass="bg-gradient-to-r from-secondary to-primary"
        img={phone}
      />
    </div>
  );
};

export default Info;
