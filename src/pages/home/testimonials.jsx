import React from "react";
import quote from "../../images/assets/icons/quote.svg";
import people1 from "../../images/assets/people1.png";
import people2 from "../../images/assets/people2.png";
import people3 from "../../images/assets/people3.png";
import Review from "./review";

const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      review: "",
      location: "California",
      img: people1,
    },
    {
      _id: 2,
      name: "Winson Herry",
      review: "",
      location: "California",
      img: people2,
    },
    {
      _id: 3,
      name: "Winson Herry",
      review: "",
      location: "California",
      img: people3,
    },
  ];

  return (
    <section className="md:my-24 my-16">
      <div className="flex justify-between">
        <div>
          <h4 className="text-xl text-primary font-bold">Testimonials</h4>
          <h2 className="text-3xl">What our Patients say</h2>
        </div>
        <div>
          <img className="md:w-48 w-24" src={quote} alt="" />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
        {reviews?.map((review) => (
          <Review key={review._id} review={review} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
