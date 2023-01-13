import React from "react";

const InfoCard = ({ img, cardTitle, bgClass }) => {
  return (
    <div className={`card md:card-side shadow-xl ${bgClass}`}>
      <figure className="md:pl-5 md:pt-0 pt-4">
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body text-neutral">
        <h2 className="card-title">{cardTitle}</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
};

export default InfoCard;
