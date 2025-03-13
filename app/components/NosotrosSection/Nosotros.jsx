import React from "react";
import ImagePersona from "@/public/Nosotros/ImagenDeEjemploPersona.webp";
import ImageCorporativa from "@/public/Nosotros/fotografia-corporativa.webp";
import Image from "next/image";

export default function Nosotros() {
  return (
    <section className="w-full pb-5 font-roboto">
      <div className="w-full h-auto lg:h-full flex flex-col p-1 lg:justify-center">
        <div className="w-full flex items-center justify-center mb-4">
          <div className="w-[50%] flex flex-col items-center justify-center text-center">
          <h1 className="text-black text-xl lg:text-2xl xl:text-3xl 2xl:text-6xl font-extrabold lg:mt-4">
              ¿<span className="text-rojoprincipal">Quienes</span> somos? 
            </h1>
            <span className=" md:hidden h-[1px] bg-rojosecundario w-[50%] mb-2"></span>
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="w-[50%] lg:w-auto flex lg:items-center justify-center ">
            <div className=" rounded-md items-start h-[140px] w-1/6 z-0 bg-rojoprincipal opacity-50 absolute justify-start -translate-x-11 translate-y-4 lg:translate-y-[18%] [1920px]:translate-y-[17%] lg:-translate-x-[13%] transition-transform"></div>
            <Image
              height={Infinity}
              width={Infinity}
              src={ImageCorporativa}
              alt="ImageAllProduct"
              className="object-cover rounded-lg max-w-32 min-h-36 z-10 lg:max-w-80  "
            ></Image>
          </div>
          <div className="w-[50%] lg:w-[30%] lg:mx-10 lg:h-full flex flex-col text-sm">
            <span className="text-black text-left lg:max-w-56">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              quasi nam quam dolorum neque minus ipsam totam enim ut magnam.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
