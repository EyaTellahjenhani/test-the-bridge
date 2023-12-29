import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Banner from "../component/Banner";
import Contact from "../component/Contact";
import Card from "../component/Card";
import axios from "axios";

const HomePage = () => {
  const [coursList, setCoursList] = useState([]);

  useEffect(() => {
    const getCoursList = async () => {
      const response = await axios.get("/api/cours/");
      setCoursList(response.data.cours);
      console.log(response)
    };
console.log(coursList)
    getCoursList();
  }, []);

  return (
    <div>
      <Navbar />
      <Banner />
      <div className="flex flex-col">
        <div className="flex justify-between m-10">
          <h1 className="font-bold text-3xl">Discover Our Courses</h1>
          <button className="rounded-2xl bg-pink-800 px-4 py-1 text-sm text-white font-bold">
            View More{" "}
          </button>
        </div>
        <div className="grid grid-cols-3 place-items-center flex-wrap items-center justify-center ">
          {coursList?.map((cours) => (
            <Card cours={cours} key={cours.id} />
          ))}
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default HomePage;
