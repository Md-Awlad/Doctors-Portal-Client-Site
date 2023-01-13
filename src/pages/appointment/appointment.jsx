import React, { useState } from "react";
import AppointmentBanner from "./appointmentBanner";
import AvailableAppointment from "./availableAppointment";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className="mt-20 md:px-12 px-6 space-y-20">
      <AppointmentBanner date={date} setDate={setDate}/>
      <AvailableAppointment date={date} setDate={setDate}/>
    </div>
  );
};

export default Appointment;
