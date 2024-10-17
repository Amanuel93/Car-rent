import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Navlinks } from "./Navbar";

const ResponsiveMenu = ({ showMenu,onClick}) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div className="card">
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} />
          <div>
            <h1 className="font-bold">TECHNO FURNITURE</h1>
            <h1 className="text-sm text-slate-500">Ensures comfort</h1>
          </div>
        </div>
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {Navlinks.map((data,index) => (
              <li key={index}>
                <Link to={data.link} className="mb-5 inline-block" onClick={onClick}>
                  {data.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="footer">
        <h1 className="text-[14px] font-bold">
          All rights reserved 2024{" "}
        </h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
