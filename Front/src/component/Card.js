import React from "react";
import card from "../image/card.png";

const Card = () => {
  return (
    <div className="flex flex-col text-black font-bold mb-5">

      <img className="w-100" src={card} alt="cours" />
      <p className="p-2">Spring Boot / Angular</p>
      <p className="p-2 text-pink-800">350 DT/ Month</p>

    </div>
  );
};

export default Card;
