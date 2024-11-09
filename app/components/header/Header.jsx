import React from "react";
import Image from "next/image";
import Navbar from "../navbar/Navbar";
// --------------------IMPORT ICONOS START---------------------
import imageIcon from "@/public/icons/TexasBull_2.0.png";
import ArrowDown from "@/public/icons/downArrow";
// --------------------IMPORT ICONOS END---------------------
const Header = () => {
  return (
    <div>
      <header className="w-full justify-between flex items-center top-0 fixed z-40 h-24">
        <div className="w-1/3 pl-10 pt-4 items-center flex space-x-5">
          <Image
            className="w-16"
            width={Infinity}
            height={Infinity}
            src={imageIcon}
            alt="IconoTexasBull"
          />
          <h1 className="text-4xl ratio">TEXAS BULL</h1>
        </div>
        <div className="bg-opacity-50 mt-4  w-1/2 h-16 flex items-center bordeCortado">
          <Navbar />
        </div>
      </header>
      <section className="bg-black h-screen w-full text-center relative overflow-hidden ">
        <div className="relative z-30 h-full flex flex-col font-sans">
          <footer className="flex-grow flex flex-col justify-end pb-10">
            <h3 className="pb-10 text-white font-roboto text-4xl">Los Mejores Juegos Mecanicos</h3>
            <a href="#">
              <div className="text-xl border-2 rounded font-medium px-4 py-2 inline-block text-white">
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
