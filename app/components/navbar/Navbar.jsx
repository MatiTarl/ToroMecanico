import React from "react";
import "./module.css";

export default function Navbar() {
  return (
    <nav className="container flex justify-end w-full items-end">
      <ul className="flex flex-row space-x-14 text-red-700 font-black text-shadow">
        <li className="">
          <a href="">INICIO</a>
        </li>
        <li className="">
          <a href="/productos">PRODUCTOS</a>
        </li>
        <li className="">
          <a href="/nosotros">NOSOTROS</a>
        </li>
        <li className="">
          <a href="/contactanos">CONTACTANOS</a>
        </li>
      </ul>
    </nav>
  );
}
