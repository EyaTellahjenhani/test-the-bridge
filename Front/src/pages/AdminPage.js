import React, { useEffect, useState } from 'react'
import NavBarAdmin from '../component/admin/NavBarAdmin'
import CardAdmin from '../component/admin/CardAdmin'
import image from '../image/card.png'
import axios from 'axios'


const AdminPage = () => {

  const [coursList, setCoursList] = useState([]);

  useEffect(() => {
    const getCoursList = async () => {
      const response = await axios.get("/api/cours/");
      setCoursList(response.data.cours);
      console.log(response)
    };
console.log(coursList)
    getCoursList();
  }, [coursList]);
  
  return (
    <div>
      <NavBarAdmin />
      <hr />
      <div className="grid grid-cols-3 place-items-center flex-wrap items-center justify-center ">
        {coursList?.map((cours) => (
          <CardAdmin cours={cours} />
        ))}
        </div>
    </div>
  )
}

export default AdminPage