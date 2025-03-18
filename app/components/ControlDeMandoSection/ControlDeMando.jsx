"use client";

import { useState, useEffect, useRef } from "react";
import React from "react";
import Image from "next/image";
import "./module.css";
import ImageAllProduct169 from "@/public/Seccion-ImagenObjetos/TolasLasPiezas-16-9.png";
import SignoMas from "@/public/icons/signoMas";

export default function ControlDeMando() {
  const [selected, setSelected] = useState(null);
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const modalRef = useRef(null); // Referencia para obtener el tamaño del modal
  let modalSize = "";

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function ButtonHandler(index, event) {
    if (selected?.index === index) {
      CloseModal();
      return;
    }

    const rect = event.target.getBoundingClientRect();
    const parentRect = event.target
      .closest(".relative")
      ?.getBoundingClientRect();
    if (!parentRect) return;

    const centerX = windowWidth / 2;
    const modalDirection = rect.left > centerX ? "left" : "right";

    let modalLeft = 5 + rect.left - parentRect.left + rect.width / 2;
    let modalTop = 10 + rect.top - parentRect.top + rect.height / 2;

    let modalWidth = 300;

    if (parentRect.width >= 1536) {
      modalWidth = 500;
      modalTop -= 0;
    }

    if (modalLeft > centerX) modalLeft -= modalWidth + 10;

    setSelected({
      index,
      position: { top: `${modalTop}px`, left: `${modalLeft}px` },
      modalDirection,
    });
  }

  function CloseModal() {
    setSelected(null);
  }

  const TextoPredefinido = {
    0: "Están recubiertos con goma espuma de alta densidad y forrados con lona Zonda 900.",
    1: "Equipado con variadores de velocidad de alta calidad, lo que permite un control preciso del juego.",
    2: "Fabricado en fibra de vidrio de alta resistencia, con montura de cuero y cuernos rellenos de goma espuma, forrados con lona Zonda 900.",
    3: "TEXTO 3 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    4: "Fabricado con lona Zonda 900, un material exclusivo para juegos inflables gracias a su tramado, que evita el desgarre, y su protección UV, que impide la decoloración.",
    5: "Con un tamaño de 70 cm de ancho y 80 cm de alto, está recubierto con goma espuma para mayor seguridad (parte del derribador).",
    6: "Equipado con un motor de 1.5 HP, que proporciona un movimiento realista al toro. Además, cuenta con una base de giro con un motor de 1 HP, permitiendo el giro y contragiro tanto del toro mecánico como del derribador.",
  };
  const TituloPredefinido = {
    0: "Brazos del derribador",
    1: "Control del juego",
    2: "Toro mecanico",
    3: "Turbina de 3/4hp",
    4: "Inflable",
    5: "Cartel",
    6: "Maquina de corcoveo",
  };

  const buttonPositions = [
    { bottom: "20%", left: "48%" },
    { bottom: "13%", left: "64.25%" },
    { bottom: "45%", left: "65%" },
    { bottom: "43.5%", right: "8%" },
    { bottom: "50%", left: "15%" },
    { top: "26%", left: "36%" },
    { top: "18%", right: "6%" },
  ];

  return (
    <section id="1-Section" className="py-5 md:py-7 lg:py-7 xl:py-7 2xl:py-7">
      <div className="flex flex-col font-roboto">
        <div className="animation-right flex justify-center text-center pb-5 md:px-0 md:text-base">
          <h1 className="text-2xl md:text-3xl">
            <span className="text-rojoprincipal font-bold">¡Mira </span>{" "}
            nuestro{" "}
            <span className="text-rojoprincipal font-bold">producto </span>
            a detalle!
          </h1>
        </div>
        <div className="relative w-full mx-auto">
          {buttonPositions.map((pos, index) => (
            <div
              key={index}
              className="absolute items-center justify-center w-[5vw] h-[5vw] lg:w-[3vw] lg:h-[3vw]"
              style={pos}
            >
              <div
                className={`absolute w-[6vw] h-[6vw] items-center justify-center lg:w-[3vw] lg:h-[3vw] transition-colors duration-300 rounded-full animate-pulse-scale ${
                  selected?.index === index ? "bg-rojoprincipal" : "bg-white"
                }`}
              ></div>
              <button
                className={`flex items-center justify-center bg-white rounded-full w-[6vw] h-[6vw] lg:w-[3vw] lg:h-[3vw] z-10 transform transition-all duration-300 border border-white ${
                  selected?.index === index ? "rotate-45" : ""
                }`}
                onClick={(event) => ButtonHandler(index, event)}
              >
                <div className="flex items-center justify-center w-[3vw] h-[3vw] lg:w-[1.5vw] lg:h-[1.5vw]">
                  <SignoMas />
                </div>
              </button>
            </div>
          ))}

          <Image
            width={Infinity}
            height={Infinity}
            src={ImageAllProduct169}
            alt="ImageAllProduct"
            className="z-10 w-full rounded-br-none md:rounded-s-md"
          />
          {windowWidth > 500 && selected !== null ? (
            <div
              ref={modalRef} // Asignamos la referencia al modal
              className={`absolute flex bg-white p-4 rounded-lg shadow-lg w-[300px] 2xl:w-[500px] flex-col items-end z-20 transition-all duration-300 ${
                selected.modalDirection === "left"
                  ? "animate-slide-in-left"
                  : "animate-slide-in-right"
              }`}
              style={{
                top: selected.position.top,
                left: selected.position.left,
              }}
            >
              <div className="text-start flex flex-col w-full">
                <h2 className="text-lg font-bold">
                  {TituloPredefinido[selected.index]}
                </h2>
                <p className="text-base">{TextoPredefinido[selected.index]}</p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="relative w-full mx-auto z-20 min-h-1 transition-all duration-500">
          {windowWidth < 500 && selected !== null ? (
            <div
              className={`flex relative bg-white p-4 shadow-lg w-full flex-col items-end z-10 transition-all duration-300 min-h-40`}
            >
              <div className="text-start flex flex-col w-full">
                <h2 className="text-lg font-bold">
                  {TituloPredefinido[selected.index]}
                </h2>
                <p className="text-base">{TextoPredefinido[selected.index]}</p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
}
