"use-client"
import React from "react";
import Image from "next/image";
import Navbar from "../navbar/Navbar";
// --------------------IMPORT ICONOS START---------------------
import imageIcon from "@/public/icons/TexasBull_2.0.png";
import ArrowDown from "@/public/icons/downArrow";
// --------------------IMPORT ICONOS END---------------------
const Header = () => {
  return (
    <div className="shadow-md shadow-slate-400">
      <header className="w-full justify-between flex top-0 fixed z-50 h-16 backdrop-blur-[4px]">
        <div className="w-full h-full justify-between flex flex-col md:flex-row">
          <div className="md:w-1/3 pl-10 md:pl-20 items-center flex h-full">
            <h1 className="text-2xl sm:text-2xl md:text-4xl ratio">TEXAS BULL</h1>
          </div>
          <div className="w-full absolute md:sticky md:w-1/2 h-16 flex items-center bordeCortado ">
            <Navbar />
          </div>
        </div>
      </header>
      <section className="bg-black h-screen w-full text-center relative overflow-hidden ">
        <div className="relative z-30 h-full flex flex-col font-sans">
          <footer className="flex-grow flex flex-col justify-end pb-10">
            <h3 className="pb-10 text-white font-roboto text-2xl md:text-4xl">
              Lorem ipsum dolor, adipisicing elit.
            </h3>
            <a href="#1-Section">
              <div className=" md:text-xl font-medium rounded animate-bounce w-7 md:w-10 inline-block text-white">
                <ArrowDown />
              </div>
            </a>
          </footer>
        </div>
        <div className="absolute top-0 bottom-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            src="/VideoFondoTexas.mov"
            className="object-cover object-center h-full w-full opacity-70"
          ></video>
        </div>
      </section>
    </div>
  );
};

export default Header;
