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
  const videoPantallaGrande = "https://res.cloudinary.com/darvfxd1u/video/upload/v1743192260/ucqtf0kcpdgecd5jeow7.mov";
  const VideoPantallaChica = "https://res.cloudinary.com/darvfxd1u/video/upload/v1743192256/fvz6g40j6ljpfr45zxck.mov";
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
        <div className="relative z-30 h-full flex flex-col font-roboto">
          <div className="w-full mt-60 text-center items-center justify-center flex flex-col">
            <h1 className="text-5xl font-alfaSlabOne text-slate-50">Juegos inflables</h1>
            <span className="h-[1.5px] bg-rojosecundario w-[50%] lg:w-[30%] 2xl:w-[20%] my-1"></span>
            <h5 className="text-xl flex items-center justify-center text-white">Fábrica de juegos inflables y mecánicos</h5>
          </div>
          <a href="https://wa.me/542615782398?text=Hola,%20me%20contacto%20desde%20la%20página%20web" className="flex-col flex items-center py-3">
            <div className=" md:text-xl font-medium rounded-sm w-auto inline-block px-7 py-2 p-2 transition-all duration-700 text-slate-50 border-2 border-rojoprincipal">
              Nuestros productos
            </div>
          </a>
        <footer className="flex-grow flex flex-col justify-end pb-10">
          <a href="#1-Section" className="flex-col flex items-center ">
            <div className=" md:text-xl font-medium rounded w-auto inline-block text-white border p-2 hover:scale-110 transition-transform duration-300">
              Ver más
            </div>
          </a>
        </footer>
        </div>
        <div className="absolute top-0 bottom-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            src={`${screenSize.width >= 758 ? videoPantallaGrande : VideoPantallaChica}`}
            className="object-cover object-center h-full w-full opacity-50"
          ></video>
        </div>
      </section>
    </div>
  );
};

export default Header;
