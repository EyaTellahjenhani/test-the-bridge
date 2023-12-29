import React from "react";
import logo from "../image/LogoBridge.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="m-8 flex justify-between">
      <img src={logo} alt="Logo" />
      <Link to="/admin">
        <button className="bg-pink-800 rounded-3xl text-white px-10 py-2 font-bold my-2">
          ADMIN
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
