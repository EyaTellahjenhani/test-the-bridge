import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Edit from "./Edit";
import Delet from "./Delet";
import Read from "./Read";

const CardAdmin = ({ cours }) => {
  return (
    <div className="mt-10">
      <div className="flex flex-col text-black font-bold mb-5">
        <img className="w-100" src={cours.image} alt="cours" />
        <p className="p-2">{cours.title}</p>
        <p className="p-2 text-pink-800">{cours.price} DT/ Month</p>
        <div className="flex justify-end gap-3 text-pink-800">
          <VisibilityIcon
            data-modal-target="default-modal"
            data-modal-toggle="default-modal"
          />
          <EditIcon
            data-modal-target="Edit-modal"
            data-modal-toggle="Edit-modal"
          />
          <DeleteIcon
            data-modal-target="Delet-modal"
            data-modal-toggle="Delet-modal"
          />
        </div>
        <Edit cours={cours} />
        <Delet />
        <Read cours={cours}/>
      </div>
    </div>
  );
};

export default CardAdmin;
