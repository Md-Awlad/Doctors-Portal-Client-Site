import React from "react";
import chair from "../../images/assets/chair.png";
import PrimaryButton from "../../shared/primaryButton";

const Banner = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 items-center mt-20">
      <div className="order-last lg:order-first">
        <h1 className="md:text-5xl text-3xl font-bold capitalize">
          your new smile starts here
        </h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
        <PrimaryButton>get started</PrimaryButton>
      </div>
      <img
        src={chair}
        className="w-[100%] rounded-lg shadow-2xl order-first lg:order-last"
        alt="chair"
      />
    </div>
  );
};

export default Banner;
