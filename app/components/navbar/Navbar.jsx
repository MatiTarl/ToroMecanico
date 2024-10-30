import React from "react";
import "./module.css";

export default function Navbar() {
  return (
    <nav className="container flex justify-around w-full items-center">
      <ul className="flex flex-row space-x-20 text-red-700 font-black text-shadow">
        <li className="">
          <a href="">INICIO</a>
        </li>
        <li className="">
          <a href="">PRODUCTOS</a>
        </li>
        <li className="">
          <a href="">NOSOTROS</a>
        </li>
        <li className="">
          <a href="">CONTACTANOS</a>
        </li>
      </ul>
    </nav>
  );
}
