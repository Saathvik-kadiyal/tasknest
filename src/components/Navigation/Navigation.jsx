import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTasks, FaBook, FaLightbulb, FaBars } from "react-icons/fa";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="md:hidden fixed top-0 left-0 w-full bg-gradient-to-r from-slate-700/80 to-gray-800/80 p-4 flex items-center justify-between z-50 backdrop-blur-md">
        <h1 className="text-white text-lg font-bold">Menu</h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          <FaBars size={24} />
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden fixed top-14 left-0 w-full bg-gradient-to-b from-slate-700 to-gray-800 p-4 flex flex-col items-center gap-4 z-40">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-indigo-400 flex items-center gap-2 transition-transform transform scale-105 duration-200"
                : "text-white flex items-center gap-2 hover:text-indigo-300 transition-transform transform scale-100 hover:scale-105 duration-200"
            }
            to="/"
            onClick={() => setIsOpen(false)}
          >
            <FaTasks size={20} />
            Daily Task
          </NavLink>
          <NavLink
            to="/docs"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-400 flex items-center gap-2 transition-transform transform scale-105 duration-200"
                : "text-white flex items-center gap-2 hover:text-indigo-300 transition-transform transform scale-100 hover:scale-105 duration-200"
            }
            onClick={() => setIsOpen(false)}
          >
            <FaBook size={20} />
            Notes
          </NavLink>
          <NavLink
            to="/ideas"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-400 flex items-center gap-2 transition-transform transform scale-105 duration-200"
                : "text-white flex items-center gap-2 hover:text-indigo-300 transition-transform transform scale-100 hover:scale-105 duration-200"
            }
            onClick={() => setIsOpen(false)}
          >
            <FaLightbulb size={20} />
            Ideas
          </NavLink>
        </div>
      )}

      {/* Desktop Navigation */}
      <div className="hidden md:flex fixed top-1/2 left-8 transform -translate-y-1/2 bg-gradient-to-b from-slate-500/80 to-gray-800/90 backdrop-blur-sm rounded-3xl h-[22rem] w-[16rem] flex items-center justify-center ring-4 ring-indigo-500/50 shadow-xl shadow-indigo-500/40 z-50 p-5">
        <ul className="list-none flex flex-col items-center gap-8 text-lg font-medium">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-400 flex items-center gap-2 transition-transform transform scale-105 duration-200"
                  : "text-white flex items-center gap-2 hover:text-indigo-300 transition-transform transform scale-100 hover:scale-105 duration-200"
              }
              to="/"
            >
              <FaTasks size={20} />
              Daily Task
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/docs"
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-400 flex items-center gap-2 transition-transform transform scale-105 duration-200"
                  : "text-white flex items-center gap-2 hover:text-indigo-300 transition-transform transform scale-100 hover:scale-105 duration-200"
              }
            >
              <FaBook size={20} />
              Notes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ideas"
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-400 flex items-center gap-2 transition-transform transform scale-105 duration-200"
                  : "text-white flex items-center gap-2 hover:text-indigo-300 transition-transform transform scale-100 hover:scale-105 duration-200"
              }
            >
              <FaLightbulb size={20} />
              Ideas
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navigation;
