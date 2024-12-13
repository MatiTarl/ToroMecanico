/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import React from "react";
import "./module.css";
import { useState } from "react";
import logoTexas3 from "@/public/LogoNavbar3.png";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full flex fixed top-0 z-50 h-16 bg-black border-b border-white border-opacity-20 ">
      <div className="flex items-center justify-between w-full pl-4 md:px-20">
        {/* Logo */}
        <a href="/" className="flex items-center max-w-48">
          <Image
            src={logoTexas3}
            alt="Logo"
            width={320}
            height={80}
            layout="responsive"
            className=""
          />
        </a>
        {/* Botón de Menú para Móvil */}
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

        {/* Menú */}
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
          <li className="py-2 md:py-0 ">
            <a
              href="/productos"
              className="animated-link block px-4"
              style={{ letterSpacing: "0.1em" }}
            >
              Productos
            </a>
          </li>
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
      </div>
    </nav>
  );
}
