'use client'

import { useState } from "react";
import React from 'react';
import Image from 'next/image';
import "./module.css";
import ImageAllProduct169 from "@/public/Seccion-ImagenObjetos/Todas las piezas 16-9.jpg";
import SignoMas from '@/public/icons/signoMas';

export default function ControlDeMando() {
  const [selected, setSelected] = useState(null);

  function ButtonHandler(index, event) {
    const rect = event.target.getBoundingClientRect(); // Posición del botón en la pantalla
    const parentRect = event.target.closest(".relative")?.getBoundingClientRect(); // Posición del contenedor
    if (!parentRect) return;

    setSelected({
      index,
      position: {
        top: `${rect.top - parentRect.top + rect.height / 2}px`,
        left: `${rect.left - parentRect.left + rect.width / 2}px`
      }
    });
  }

  function CloseModal() {
    setSelected(null);
  }

  const TextoPredefinido = {
    0: "TEXTO 0 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    1: "TEXTO 1 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    2: "TEXTO 2 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    3: "TEXTO 3 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    4: "TEXTO 4 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    5: "TEXTO 5 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    6: "TEXTO 6 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    7: "TEXTO 7 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  };

  const buttonPositions = [
    { bottom: '20%', left: '48%' },
    { bottom: '13%', left: '64.25%' },
    { bottom: '45%', left: '65%' },
    { bottom: '43.5%', right: '8%' },
    { bottom: '50%', left: '15%' },
    { top: '26%', left: '36%' },
    { top: '18%', right: '6%' }
  ];

  return (
    <section id="1-Section" className="py-5 md:py-7">
      <div className="flex flex-col font-roboto">
        <div className="animation-right flex justify-center text-center pb-5 md:px-0 md:text-base">
          <h1 className='text-2xl md:text-3xl'>
            <span className="text-rojoprincipal font-bold">¡ Descubre </span> más sobre nuestros{" "}
            <span className="text-rojoprincipal font-bold">productos !</span>
          </h1>
        </div>
        <div className="relative w-full mx-auto">
          {/* Botones con animación */}
          {buttonPositions.map((pos, index) => (
            <div key={index} className="absolute w-[5vw] h-[5vw] lg:w-[3vw] lg:h-[3vw]" style={pos}>
              <div className="absolute w-full h-full bg-white rounded-full animate-pulse-scale"></div>
              <button className="flex items-center justify-center bg-white rounded-full w-[5vw] h-[5vw] lg:w-[3vw] lg:h-[3vw] z-10 transform" onClick={(event) => ButtonHandler(index, event)}>
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

          {/* Modal dentro de la imagen */}
          {selected !== null && (
            <div
              className="absolute bg-white p-[1vw] rounded-lg shadow-lg w-[30vw] flex flex-col items-end z-50 transition-all duration-300 ease-out opacity-100 scale-100 animate-modal"
              style={{
                top: selected.position.top,
                left: selected.position.left,
                transform: "translate(-50%, -50%) scale(0.9)"
              }}
            >
              <div className="text-start flex flex-col w-full">
                <h2 className="text-[1vw] font-bold">Titulo</h2>
                <p className="text-[1vw]">{TextoPredefinido[selected.index]}</p>
              </div>
              <button
                className="absolute px-[0.5vw] py-[0.25vw] bg-[#ecc238] text-white text-[0.5vw] rounded-sm hover:scale-105 duration-300 transition-transform text-center animate-modal"
                onClick={CloseModal}
              >
                x
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
