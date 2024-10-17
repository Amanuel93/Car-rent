import React, { useState } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import DashboardReponsive from "./DashboardReponsive";
import { Link } from "react-router-dom";

const DashboardNav = ({ theme, setTheme }) => {
    const Menus = [
        { name: "Dashboard",link:"" },
        { name: "Add Car",link:"Add car" },
        { name: "Rental request",link:"request" },
        { name: "Setting",link:"setting" },
      ];

    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };
  return (
    <div
      className="relative z-10 shadow-md  w-full dark:bg-black dark:text-white duration-300 dark:gray-900 py-4
    "
    >
      <div className="container py-2 md:py-0">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/"><span className="text-xl md:text-3xl font-bold font-serif"><span className="text-red-500">RO</span><span className="text-yellow-500">BI</span> Car rental</span></Link>
          </div>
          
          {/* Mobile view  */}
          <div className="flex items-center gap-4 lg:hidden ">
            {/* dark  mode */}
            {theme === "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-2xl"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="text-2xl"
              />
            )}
            {/* Mobile Hamburger icon */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className=" cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <DashboardReponsive showMenu={showMenu} onClick={toggleMenu} menu={Menus}/>
    </div>
  );
};

export default DashboardNav;
