import React from "react";
import logo from "../../image/LogoBridge.png";
import LogoutIcon from "@mui/icons-material/Logout";
import AddIcon from "@mui/icons-material/Add";
import Creat from "./Creat";

const NavBarAdmin = () => {
  return (
    <div className="m-8 flex justify-between">
      <img src={logo} alt="Logo" />

      <div className="flex gap-3">
        <button
          className="bg-pink-800 rounded-3xl text-white px-10 py-2 font-bold my-2"
          data-modal-target="Creat-modal"
          data-modal-toggle="Creat-modal"
        >
          <AddIcon className="mr-4" />
          ADD PRODUCT
        </button>

        <button className="bg-pink-800 rounded-3xl text-white px-10 py-2 font-bold my-2">
          <LogoutIcon className="mr-4" />
          SORTY
        </button>
        <Creat />
      </div>
    </div>
  );
};

export default NavBarAdmin;
