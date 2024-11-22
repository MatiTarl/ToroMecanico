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
      <div className="flex w-full justify-center">
        <div
          className={`animation overflow-hidden md:overflow-visible absolute w-full top-16 md:top-auto h-screen justify-center md:flex md:items-center md:max-h-full md:pt-0`}
        >
          <ul className={` ${
            isOpen ? "show" : "" 
          } ul text-base xl:text-xl md:flex-row md:space-x-14 text-black bg-white md:bg-transparent rounded-b-sm font-lato font-bold mr-auto right-0 left-0 py-2 md:py-0 grid grid-cols-2 md:grid-cols-none md:flex`}>
            <li className="mx-1 my-1 transition-all duration-200 ease-out rounded-md text-center ">
              <a href="#" className="px-4 lg:px-0 2xl:px-4 hover:border-b hover:border-rojosecundario transition-all duration-300 ease-linear focus:border-b focus:border-rojosecundario">Inicio</a>
            </li>
            <li className="mx-1 my-1 rounded-md text-center">
              <a href="/productos" className="px-4 lg:px-0 2xl:px-4 hover:border-b hover:border-rojosecundario transition-all duration-300 ease-linear focus:border-b focus:border-rojosecundario">Productos</a>
            </li>
            <li className="mx-1 my-1 rounded-md text-center">
              <a href="/nosotros" className="px-4 lg:px-0 2xl:px-4 hover:border-b hover:border-rojosecundario transition-all duration-300 ease-linear focus:border-b focus:border-rojosecundario">Nosotros</a>
            </li>
            <li className="mx-1 my-1 rounded-md text-center">
              <a href="/contactanos" className="px-4 lg:px-0 2xl:px-4 hover:border-b hover:border-rojosecundario transition-all duration-300 ease-linear focus:border-b focus:border-rojosecundario">Contactanos</a>
            </li>
          </ul>
        </div>

        <button
          className="absolute right-5 top-4 focus:outline-none md:hidden" 
          onClick={toggleMenu}
        >
          <svg
            className="w-7 h-7 "
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="animate-[move_35s_linear_infinite]"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              stroke="#B92326"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
