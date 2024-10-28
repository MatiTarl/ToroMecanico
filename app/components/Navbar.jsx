import React from "react";

export default function Navbar() {
  return (
    <section className="container flex p-3 justify-around w-full pt-10 pl-5 items-center">
      <h1 className="text-3xl w-[70%]">TEXAS BULL</h1>
      <div className="flex justify-center w-[70%]">
        <li className="flex flex-row space-x-40">
          <ul className="">
            <a href="">INICIO</a>
          </ul>
          <ul className="">
            <a href="">PRODUCTOS</a>
          </ul>
          <ul className="">
            <a href="">NOSOTROS</a>
          </ul>
          <ul className="">
            <a href="">CONTACTANOS</a>
          </ul>
        </li>
      </div>
    </section>
  );
}
