import React from 'react';
import Image from 'next/image';
import "./module.css";
import ImageAllProduct169 from "@/public/Seccion-ImagenObjetos/TolasLasPiezas-16-9.png";
import Exclamacion from '@/public/icons/signoExclamacion';

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

          {/* palos amarillos */}
          <div className='absolute z-50 w-6 h-6 animate-pulse rounded-full p-1 right-[50%] translate-y-[148px] translate-x-6'><Exclamacion/></div>

          {/* cuadrado gris, panel de control */}
          <div className='absolute z-50 w-6 h-6 animate-pulse rounded-full p-1 right-[50%] translate-y-[175px] translate-x-20'><Exclamacion/></div>

          {/* Cuadrado con texto Danger */}
          <div className='absolute z-50 w-6 h-6 animate-pulse rounded-full p-1 right-[50%] -translate-x-7 translate-y-24'><Exclamacion/></div> 

          {/* toro mecanico negro */}
          <div className='absolute z-50 w-6 h-6 animate-pulse rounded-full p-1 right-[50%] translate-x-16 translate-y-24'><Exclamacion/></div>

          {/* lona verde */}
          <div className='absolute z-50 w-6 h-6 animate-pulse rounded-full p-1 translate-x-12 translate-y-20'><Exclamacion/></div>

          {/* triangulo azul con maquina de corcobeo */}
          <div className='absolute z-50 w-6 h-6 animate-pulse rounded-full p-1 right-0 -translate-x-3 translate-y-9'><Exclamacion/></div>

          {/* Turbina abajo derecha */}
          <div className='absolute z-50 w-6 h-6 animate-pulse rounded-full p-1 right-0 -translate-x-6 translate-y-[115px]'><Exclamacion/></div> 
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
