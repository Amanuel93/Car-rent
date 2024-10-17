import React, { useState } from "react";
import { Outlet } from 'react-router-dom'
import { useTheme } from "./ThemeContext";

const CarsLoayout = () => {

 const { theme, setTheme } = useTheme();

  return (
    <div className='w-full flex flex-col md:flex-row dark:bg-dark dark:text-white'>
     <Outlet/>
    </div>
  )
}

export default CarsLoayout
