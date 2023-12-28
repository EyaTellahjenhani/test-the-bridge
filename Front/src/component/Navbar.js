import React from 'react'
import logo from "../image/LogoBridge.png"


const Navbar = () => {
  return (
    <div className='m-8 flex justify-between'>
        <img src={logo} alt="Logo" />

        <button className="bg-pink-800 rounded-3xl text-white px-10 py-2 font-bold my-2">
          ADMIN
        </button>

    </div>
  )
}

export default Navbar