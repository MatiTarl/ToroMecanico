import React from "react";
import "./module.css";

export default function Navbar() {
  return (
    <nav className="container flex justify-center w-full">
      <ul className="flex flex-row text-xl space-x-14 text-rojoprincipal font-black text-shadow">
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
