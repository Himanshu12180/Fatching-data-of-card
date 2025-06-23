import React from "react";

const Card = ({ image, title, description }) => {
  return (
    <div className="card">
      <img src={image} alt="Random" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button>More get</button>
      </div>
    </div>
  );
};

export default Card;