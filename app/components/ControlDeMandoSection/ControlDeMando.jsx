
import React from 'react';
import Image from 'next/image';
import "./module.css";
import ImageAllProduct169 from "@/public/Seccion-ImagenObjetos/TolasLasPiezas-16-9.png";
import Exclamacion from '@/public/icons/signoExclamacion';
import SignoMas from '@/public/icons/signoMas';


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


          {/* Botones con animación */}
          {[
            { bottom: '20%', left: '48%' , lgBottom:'', lgLeft: ''}, // Palos amarillos
            { bottom: '13%', left: '64.25%' , lgBottom:'', lgLeft: '' }, // Cuadrado gris
            { bottom: '45%', left: '65%' , lgBottom:'', lgLeft: '' }, // Toro mecánico
            { bottom: '43.5%', right: '8%' , lgBottom:'', lgRight: '' }, // Turbina
            { bottom: '50%', left: '15%' , lgBottom:'', lgLeft: '' }, // Lona verde
            { top: '26%', left: '36%' , lgTop:'', lgLeft: '' }, // Cuadrado negro
            { top: '18%', right: '6%' , lgTop:'', lgRight: '' } // Máquina de corcobeo
          ].map((pos, index) => (
            <div
              key={index}
              className={`absolute w-[5vw] h-[5vw] lg:w-[3vw] lg:h-[3vw]`}
              style={pos}
            >
              {/* Círculo animado */}
              <div className="absolute w-full h-full bg-white rounded-full animate-pulse-scale"></div>

              {/* Signo Más (fijo) */}
              <button className="flex items-center justify-center bg-white rounded-full w-[5vw] h-[5vw] lg:w-[3vw] lg:h-[3vw] top-1/2 left-1/2 transform z-10">
                <div className='w-[2vw] h-[2vw] lg:w-[1.5vw] lg:h-[1.5vw]'>
                  <SignoMas />
                </div>
              </button>
            </div>
          ))}

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
