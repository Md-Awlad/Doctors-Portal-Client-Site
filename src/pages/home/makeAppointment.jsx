import React from "react";
import doctor from "../../images/assets/doctor.png";
import appointment from "../../images/assets/appointment.png";
import PrimaryButton from "../../shared/primaryButton";

const MakeAppointment = () => {
  return (
    <section
      className="flex justify-center items-center md:my-28 my-16"
      style={{ background: `url(${appointment})` }}
    >
      <div className="flex-1 lg:block hidden">
        <img className="mt-[-150px]" src={doctor} alt="doctor" />
      </div>
      <div className="flex-1 space-y-5 lg:p-0 md:px-12 px-6 py-10">
        <h3 className="text-xl text-primary font-bold">Appointment</h3>
        <h2 className="lg:text-5xl text-3xl text-neutral">
          Make an Appointment Today
        </h2>
        <p className="text-neutral">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
          deserunt sint eos. Pariatur architecto, amet veniam iure adipisci
          placeat alias corporis quae ducimus exercitationem totam velit
          molestiae suscipit aperiam atque.
        </p>
        <PrimaryButton>get started</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppointment;
