import React from "react";
import banner from "../image/9antra1.jpg";

const Banner = () => {
  return (
    <div className="bg-cover bg-center">

      <img src={banner} alt="Banner" width={"100%"} />
      
      <div className="bg-white bg-opacity-75 absolute  right-0 left-0 top-0 bottom-0 mx-auto my-auto  p-14  w-fit h-fit flex flex-col items-center justify-center ">
        <p className="text-2xl text-black font-bold">
          Improve your skills on your own
        </p>
        <p className="text-2xl text-black font-bold mb-5">
          To prepare for a better future
        </p>
        <button className="bg-pink-800 rounded-3xl text-white px-8 py-3 font-bold my-2">
          REGISTER NOW
        </button>
      </div>
    </div>
  );
};

export default Banner;
