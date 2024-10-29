import React from "react";

export default function Navbar() {
  return (
    <nav className="container flex justify-around w-full items-center">
      <ul className="flex flex-row space-x-20 font-roboto">
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
