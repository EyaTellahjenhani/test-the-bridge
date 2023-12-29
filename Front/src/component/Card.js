import React from "react";

const Card = ({cours}) => {
  return (
    <div className="flex flex-col text-black font-bold mb-5">

      <img className="w-100" src={cours.image} alt="cours" />
      <p className="p-2">{cours.title}</p>
      <p className="p-2 text-pink-800">{cours.price} DT/ Month</p>

    </div>
  );
};

export default Card;
