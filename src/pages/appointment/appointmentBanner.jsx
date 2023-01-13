import React from "react";
import chair from "../../images/assets/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 items-center mt-20 mb-5">
      <div className="order-last lg:order-first shadow-xl p-6 text-center">
        <DayPicker
          className="m-auto"
          mode="single"
          selected={date}
          onSelect={setDate}
        />
      </div>
      <img
        src={chair}
        className="w-[100%] rounded-lg shadow-2xl order-first lg:order-last"
        alt="chair"
      />
    </div>
  );
};

export default AppointmentBanner;
