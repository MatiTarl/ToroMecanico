/* eslint-disable @next/next/no-html-link-for-pages */

"use client";
import React from "react";
import "./module.css";
import { useState } from "react";
import logoTexas from "@/public/LogoNavbar.png";
import logoTexas2 from "@/public/LogoNavbar2.png";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full justify-between flex top-0 fixed z-50 h-16 bg-black">
      <div className="w-full h-full justify-between flex flex-col md:flex-row border-b border-white border-opacity-20 xl:items-center ">
        <div className="w-1/2 md:w-1/3 pl-10 md:pl-20 items-center flex h-full">
          <a href="/">
            <h1 className="text-2xl sm:text-2xl md:text-4xl ratio text-rojosecundario">
              <Image src={logoTexas2} alt="Logo" width={Infinity} height={Infinity} className="max-w-28"/>
            </h1>
          </a>
        </div>
        <div className="flex justify-end md:pr-[15%] w-full items-end">
          <div className="w-full absolute md:sticky md:w-1/2 h-16 flex items-center bordeCortado ">
            <div className="flex w-full justify-center">
              <div
                className={`animation overflow-hidden md:overflow-visible absolute w-full top-16 md:top-auto h-screen justify-center md:flex md:items-center md:max-h-full md:pt-0`}
              >
                <ul
                  className={` ${
                    isOpen ? "show" : ""
                  } ul text-base xl:text-xl md:flex-row md:space-x-4 xl:space-x-10 text-black bg-white md:bg-transparent rounded-b-sm font-lato font-bold mr-auto right-0 left-0 py-2 md:py-0 grid grid-cols-2 md:grid-cols-none md:flex`}
                >
                  <li className="mx-1 my-1 xl:mt-0 transition-all duration-200 ease-out rounded-md text-center  ">
                    <a
                      href="/"
                      className="lg:text-white  px-4 lg:px-0 2xl:px-4 hover:border-b hover:border-rojosecundario transition-all duration-300 ease-linear focus:border-b focus:border-rojosecundario"
                    >
                      Inicio
                    </a>
                  </li>
                  <li className="mx-1 my-1 xl:mt-0 rounded-md text-center">
                    <a
                      href="/productos"
                      className="lg:text-white px-4 lg:px-0 2xl:px-4 hover:border-b hover:border-rojosecundario transition-all duration-300 ease-linear focus:border-b focus:border-rojosecundario"
                    >
                      Productos
                    </a>
                  </li>
                  <li className="mx-1 my-1 xl:mt-0 rounded-md text-center">
                    <a
                      href="/nosotros"
                      className="lg:text-white px-4 lg:px-0 2xl:px-4 hover:border-b hover:border-rojosecundario transition-all duration-300 ease-linear focus:border-b focus:border-rojosecundario"
                    >
                      Nosotros
                    </a>
                  </li>
                  <li className="mx-1 my-1 xl:mt-0 rounded-md text-center">
                    <a
                      href="/contactanos"
                      className="lg:text-white px-4 lg:px-0 2xl:px-4 hover:border-b hover:border-rojosecundario transition-all duration-300 ease-linear focus:border-b focus:border-rojosecundario"
                    >
                      Contactanos
                    </a>
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
                    stroke="white"
                    // stroke="#B92326"
                    d={
                      isOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
