import React from 'react'
import { useState } from "react";
import { TbCircleLetterR } from "react-icons/tb";
import { FaAngleLeft } from "react-icons/fa6";
import { MdDashboardCustomize } from "react-icons/md";
import { IoAdd } from "react-icons/io5";
import { MdCarRental } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { FaStoreAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", icon: <MdDashboardCustomize className='text-3xl'/>,link:"" },
    { title: "Store", icon: <FaStoreAlt className='text-3xl'/>,link:"store" },
    { title: "Add Car", icon: <IoAdd className='text-3xl'/>,link:"Add car" },
    { title: "Rental request", icon: <MdCarRental className='text-3xl'/>,link:"request" },
    { title: "Setting", icon: <IoIosSettings className='text-3xl'/>,link:"setting" },
  ];

  return (
    <div
    className={` ${
      open ? "w-72" : "w-20 "
    } bg-gray-800 h-screen p-5  pt-8 relative duration-300`}
   >
    <FaAngleLeft
      className={`absolute cursor-pointer -right-3 top-9 h-7 w-7 border-dark-purple
       border-2 rounded-full bg-white font-thin  ${!open && "rotate-180"}`}
      onClick={() => setOpen(!open)}
    />
    <div className="flex gap-x-4 items-center">
     <TbCircleLetterR className="cursor-pointer duration-500 text-white text-5xl rotate-[360deg]" />
      <h1
        className={`text-white origin-left font-medium text-xl duration-200 ${
          !open && "hidden"
        }`}
      >
        Robi car rental
      </h1>
    </div>
    <ul className="pt-6">
      {Menus.map((Menu, index) => (
        <Link
          key={index}
          className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
          ${Menu.gap ? "mt-9" : "mt-2"} ${
            index === 0 && "bg-light-white"
          } `}
          to={Menu.link}
        >
          {/* <img src={`./src/assets/${Menu.src}.png`} /> */}
          {Menu.icon}
          <span className={`${!open && "hidden"} origin-left duration-200 text-xl`}>
            {Menu.title}
          </span>
        </Link>
      ))}
    </ul>
  </div>
  )
}

export default Sidebar
