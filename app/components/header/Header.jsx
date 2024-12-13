"use client";

import Image from "next/image";
import Navbar from "../navbar/Navbar";
import { useState, useEffect } from "react";

// --------------------IMPORT ICONOS START---------------------
import imageIcon from "@/public/icons/TexasBull_2.0.png";
import ArrowDown from "@/public/icons/downArrow";
// --------------------IMPORT ICONOS END---------------------

const Header = () => {
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Verifica que estás en el lado del cliente
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Llama a la función una vez para establecer el tamaño inicial
    handleResize();

    // Agrega un event listener para cambios de tamaño
    window.addEventListener("resize", handleResize);

    // Limpia el event listener al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="shadow-md shadow-slate-400">
      <Navbar />
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
            src={`${screenSize.width >= 758 ? "/VideoFondoTexas.mov" : "/VideoFondoTexasCelular.mp4"}`}
            className="object-cover object-center h-full w-full opacity-70"
          ></video>
        </div>
      </section>
    </div>
  );
};

export default Header;
