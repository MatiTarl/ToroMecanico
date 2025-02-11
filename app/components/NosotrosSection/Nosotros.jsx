import React from "react";
import ImagePersona from "@/public/Nosotros/ImagenDeEjemploPersona.webp";
import Image from "next/image";

export default function Nosotros() {
  return (
    <section className="w-full pb-5">
      <div className="w-full h-40 flex p-1">
        <div className="w-[50%] flex max-w-[300px] aspect-[2/3] justify-center">
          <div className=" rounded-md items-start h-[140px] w-1/6 z-0 bg-rojoprincipal opacity-50 absolute justify-start -translate-x-11 translate-y-4 lg:translate-y-[18%] [1920px]:translate-y-[17%] lg:-translate-x-[100%] transition-transform"></div>
          <Image
            height={Infinity}
            width={Infinity}
            src={ImagePersona}
            alt="ImageAllProduct"
            className="object-cover rounded-lg max-w-32 min-h-36 z-10"
          ></Image>
        </div>
        <div className="w-[50%] flex flex-col text-xs font-roboto">
          <h1 className="text-rojoprincipal text-xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold">
            Nombre ejemplo
          </h1>
          <span className=" md:hidden h-[1px] bg-rojosecundario w-[50%] mb-2"></span>
          <span className="text-black text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            quasi nam quam dolorum neque minus ipsam totam enim ut magnam.
          </span>
        </div>
      </div>
    </section>
  );
}
