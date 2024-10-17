import React, { useState } from "react";
import { Outlet } from 'react-router-dom'
import Sidebar from './components/Dashboard/Sidebar'
import DashboardNav from "./components/Dashboard/DashboardNav";
import { useTheme } from "./ThemeContext";

const DashboardLoayout = () => {

 const { theme, setTheme } = useTheme();

  return (
    <div className='flex flex-col lg:flex-row dark:bg-dark dark:text-white'>
      <div className="hidden lg:flex">
        <Sidebar/>
      </div>
      <div className="lg:hidden">
       <DashboardNav/>
      </div>
      <div className="h-screen flex-1 p-7 overflow-y-auto">
        <Outlet/>
      </div>
    </div>
  )
}

export default DashboardLoayout
