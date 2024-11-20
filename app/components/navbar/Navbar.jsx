"use client";
import React from "react";
import "./module.css";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="flex justify-end w-full items-end px-5">
      <div className="flex w-full">
        <div
          className={`${
            isOpen ? "max-h-96" : "max-h-0" 
          } overflow-hidden transition-all duration-700 ease-out w-full justify-center md:flex md:items-center md:max-h-full mx-3 pt-52 md:pt-0`}
        >
          <ul className={`flex flex-col text-base xl:text-xl md:flex-row md:space-x-14 text-black md:text-white text-shadow bg-slate-100 md:bg-transparent rounded-lg font-lato font-bold mr-auto ml-auto right-0 left-0 `}>
            <li className="mx-1 my-1 hover:bg-slate-500 hover:bg-opacity-25  hover: transition-all duration-200 ease-out rounded-md text-start h-0.5 md:hover:bg-white bg-bottom">
              <a href="#" className="px-4 lg:px-0 2xl:px-4">Inicio</a>
            </li>
            <li className="mx-1 my-1 hover:bg-slate-500 hover:bg-opacity-25 md:hover:bg-transparent transition-all duration-200 ease-out rounded-md text-start">
              <a href="/productos" className="px-4 lg:px-0 2xl:px-4">Productos</a>
            </li>
            <li className="mx-1 my-1 hover:bg-slate-500 hover:bg-opacity-25 md:hover:bg-transparent transition-all duration-200 ease-out rounded-md text-start">
              <a href="/nosotros" className="px-4 lg:px-0 2xl:px-4">Nosotros</a>
            </li>
            <li className="mx-1 my-1 hover:bg-slate-500 hover:bg-opacity-25 md:hover:bg-transparent transition-all duration-200 ease-out rounded-md text-start">
              <a href="/contactanos" className="px-4 lg:px-0 2xl:px-4">Contactanos</a>
            </li>
          </ul>
        </div>

        <button
          className="text-white absolute right-5 top-4 focus:outline-none md:hidden"
          onClick={toggleMenu}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="red"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
