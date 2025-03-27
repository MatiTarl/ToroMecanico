/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import { useState, useEffect } from "react";
import React from "react";
import "./module.css";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenProducts, setIsOpenProducts] = useState(false);
  const [isOpenProductsMid, setisOpenProductsMid] = useState(false);
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

  const logoTexas =
    "https://res.cloudinary.com/ddhhhd0lc/image/upload/v1742930868/uqotkc2cxmj7dkiudw20.png";

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleProduct = () => {
    setIsOpenProducts(!isOpenProducts);
  };

  const toggleOpenProductMid = () => {
    setisOpenProductsMid(true);
  };

  const toggleCloseProductMid = () => {
    setisOpenProductsMid(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="w-full flex fixed top-0 z-50 h-16 bg-black border-b border-white border-opacity-20 ">
      <div className="flex items-center justify-between w-full pl-4 md:px-20 ">
        {/* Logo */}
        <a href="/" className="w-60 h-16 relative">
          <div className="w-full h-full flex items-center justify-center">
            <Image
              width={655}
              height={100}
              src={logoTexas}
              alt="Logo"
              className="w-52 md:w-64"
            />
          </div>
        </a>
        {/* Botón de Menú para celular */}
        <button
          className="md:hidden text-white focus:outline-none pr-5"
          onClick={toggleMenu}
        >
          <svg
            className={`w-7 h-7 transition-all duration-700 
              ${isOpen ? "svg-open" : "svg-closed"} `}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Menú Principal*/}
        <ul
          className={`${
            isOpen ? "show" : ""
          } navbar-menu-animacion border-b border-slate-300 absolute top-16 right-0 w-[50%] grid-cols-1 grid text-black bg-white md:flex md:space-x-8 md:static md:w-auto md:bg-transparent md:text-white text-center md:text-left md:border-none `}
        >
          <li className="py-2 md:py-0">
            <a
              href="/"
              className="animated-link block px-4"
              style={{ letterSpacing: "0.1em" }}
            >
              Inicio
            </a>
          </li>
          {/* <li
            className="py-2 md:py-0 animated-link px-4 justify-center flex"
            onMouseEnter={() => toggleOpenProductMid()}
            onMouseLeave={() => toggleCloseProductMid()}
            style={{ letterSpacing: "0.1em" }}
          >
            <button onClick={toggleProduct}>
              {screenSize.width >= 758 ? (
                <a href="/productos">Productos</a>
              ) : (
                "productos"
              )}
            </button>
            <ul
              className={`${
                isOpenProductsMid && screenSize.width >= 758
                  ? "showProducts"
                  : ""
              } navbar-menu-Products-animacion rounded-sm top-5 grid-cols-1 grid text-black md:justify-center md:items-center md:bg-gradient-to-t from-white via-white to-transparent`}
            >
              <li className="py-1 mt-10">
                <a
                  href="/"
                  className="block px-4"
                  style={{ letterSpacing: "0.1em" }}
                >
                  Producto
                </a>
              </li>
              <li className="py-1 ">
                <a
                  href="/"
                  className="block px-4"
                  style={{ letterSpacing: "0.1em" }}
                >
                  Producto
                </a>
              </li>
              <li className="py-1">
                <a
                  href="/"
                  className="block px-4"
                  style={{ letterSpacing: "0.1em" }}
                >
                  Producto
                </a>
              </li>
              <li className="py-1">
                <a
                  href="/"
                  className="block px-4"
                  style={{ letterSpacing: "0.1em" }}
                >
                  Producto
                </a>
              </li>
            </ul>
          </li> */}
          <li className="py-2 md:py-0">
            <a
              href="/nosotros"
              className="animated-link block px-4"
              style={{ letterSpacing: "0.1em" }}
            >
              Nosotros
            </a>
          </li>
          <li className="py-2 md:py-0">
            <a
              href="/contactanos"
              className="animated-link block px-4"
              style={{ letterSpacing: "0.1em" }}
            >
              Contactanos
            </a>
          </li>
        </ul>
        {/* Menú de productos*/}
        <div
          className={`${
            isOpenProducts && isOpen && screenSize.width <= 758
              ? "showProducts"
              : ""
          } conectorMenu md:hidden w-[5%] items-center justify-center h-[3px] absolute bg-black top-[122px] right-0 left-[50%] z-50 `}
        ></div>
        <ul
          className={`${
            isOpenProducts && isOpen && screenSize.width <= 758
              ? "showProducts"
              : ""
          } navbar-menu-Products-animacion rounded-sm border-slate-300 top-28 w-[48%] grid-cols-1 grid text-black bg-white`}
        >
          <li className="py-1">
            <a
              href="/"
              className="block px-4 text-center"
              style={{ letterSpacing: "0.1em" }}
            >
              Producto
            </a>
          </li>
          <li className="py-1 ">
            <a
              className="block px-4 text-center"
              style={{ letterSpacing: "0.1em" }}
            >
              Producto
            </a>
          </li>
          <li className="py-1">
            <a
              href="/nosotros"
              className="block px-4 text-center"
              style={{ letterSpacing: "0.1em" }}
            >
              Producto
            </a>
          </li>
          <li className="py-1">
            <a
              href="/contactanos"
              className="block px-4 text-center"
              style={{ letterSpacing: "0.1em" }}
            >
              Producto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
