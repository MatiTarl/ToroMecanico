import React from 'react';
import Image from 'next/image';
import "./module.css";
import ImageAllProduct169 from "@/public/Seccion-ImagenObjetos/TolasLasPiezas-16-9.png";
import LupaBlack from '@/public/icons/lupa';

export default function ControlDeMando() {
  return (
    <section id="1-Section" className="py-5 md:py-7">
      <div className="flex flex-col font-roboto">
        <div className="animation-right flex justify-center text-center pb-5 md:px-0 md:text-base">
          <h1 className='text-2xl md:text-3xl'>
            <span className="text-rojoprincipal font-bold">¡ Descubre </span> mas sobre nuestros{" "}
            <span className="text-rojoprincipal font-bold">
              productos !
            </span>
          </h1>
        </div>
        <div>
          <div className='absolute z-50 w-6 h-6'><LupaBlack/></div>
          <Image
            width={Infinity}
            height={Infinity}
            src={ImageAllProduct169}
            alt="ImageAllProduct"
            className="z-10 rounded-br-none md:rounded-s-md"
          ></Image>
        </div>
      </div>
    </section>
  )
}
