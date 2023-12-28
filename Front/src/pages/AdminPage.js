import React from 'react'
import NavBarAdmin from '../component/admin/NavBarAdmin'
import CardAdmin from '../component/admin/CardAdmin'
import image from '../image/card.png'


const AdminPage = () => {

  const fakeCoursList=[
    {
      id: 1,
      title: "Spring Boot / Angular",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
      price: 100,
      image: image,
    },
    {
      id: 2,
      title: "Cours 2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
      price: 200,
      image: image,
    },
    {
      id: 3,
      title: "Cours 3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
      price: 300,
      image: image,
    },
    {
      id: 4,
      title: "Cours 4",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
      price: 400,
      image: image,
    },
    {
      id: 5,
      title: "Cours 5",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
      price: 500,
      image: image,
    },
    {
      id: 6,
      title: "Cours 6",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
      price: 600,
      image: image,
    },
   
   
    
  ]
  
  return (
    <div>
      <NavBarAdmin />
      <hr />
      <div className="grid grid-cols-3 place-items-center flex-wrap items-center justify-center ">
        {fakeCoursList.map((cours) => (
          <CardAdmin cours={cours} />
        ))}
        </div>
    </div>
  )
}

export default AdminPage