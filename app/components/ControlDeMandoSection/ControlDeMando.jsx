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
        <div className="relative w-full mx-auto">
          {/* palos amarillos */}
          <div className='absolute w-[5vw] h-[5vw] lg:h-10 lg:w-10 animate-pulse rounded-full p-1 bottom-[20%] left-[48%]'>
            <button>
              <Exclamacion />
            </button></div>

          {/* cuadrado gris, panel de control */}
          <div className='absolute w-[5vw] h-[5vw] lg:h-10 lg:w-10 animate-pulse rounded-full p-1 bottom-[13%] left-[64.25%]'>
            <button>
              <Exclamacion />
            </button></div>

          {/* toro mecanico negro */}
          <div className='absolute w-[5vw] h-[5vw] lg:h-10 lg:w-10 animate-pulse rounded-full p-1 bottom-[45%] left-[65%]'>
            <button>
              <Exclamacion />
            </button></div>

          {/* Turbina abajo derecha */}
          <div className='absolute w-[5vw] h-[5vw] lg:h-10 lg:w-10 animate-pulse rounded-full p-1 bottom-[43.5%] right-[8%]'>
            <button>
              <Exclamacion />
            </button></div>

          {/* lona verde */}
          <div className='absolute w-[5vw] h-[5vw] lg:h-10 lg:w-10 animate-pulse rounded-full p-1 bottom-[50%] left-[15%]'>
            <button>
              <Exclamacion />
            </button></div>

          {/* Cuadrado negro con texto Danger */}
          <div className='absolute w-[5vw] h-[5vw] lg:h-10 lg:w-10 animate-pulse rounded-full p-1 top-[26%] left-[36%]'>
            <button>
              <Exclamacion />
            </button></div>

            {/* triangulo azul con maquina de corcobeo */}
            <div className='absolute w-[5vw] h-[5vw] lg:h-10 lg:w-10 animate-pulse rounded-full p-1 top-[18%] right-[6%]'>
              <button>
                <Exclamacion />
              </button></div>
              {/* Imagen */}
              <Image
                width={Infinity}
                height={Infinity}
                src={ImageAllProduct169}
                alt="ImageAllProduct"
                className="z-10 w-full rounded-br-none md:rounded-s-md"
              />
            </div>
          </div>
        </section>
        )
}
