import React from "react";
import treatment from "../../images/assets/treatment.png";
import PrimaryButton from "../../shared/primaryButton";

const Exceptional = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 items-center">
      <img
        src={treatment}
        className="w-[100%] lg:w-96 md:h-[70vh] lg:ml-20 rounded-lg shadow-2xl"
        alt="treatment"
      />
      <div>
        <h1 className="md:text-5xl text-3xl font-bold capitalize">
          exceptional dental care, on your terms
        </h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
        <PrimaryButton>get started</PrimaryButton>
      </div>
    </div>
  );
};

export default Exceptional;
