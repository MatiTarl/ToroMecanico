import React from "react";
import TexasIcon from "@/public/icons/TexasBull_2.0.png";
import Image from "next/image";
import "./module.css";
//-----------------------ICONOS START-----------------//
import FaceIcon from "@/public/icons/facebook";
import InstaIcon from "@/public/icons/instagram";
import WhatsIcon from "@/public/icons/whatsapp";
//-----------------------ICONOS END-----------------//

export default function Footer() {
  return (
    <footer className="w-full h-28 mt-10 flex-col justify-center space-x-10 md:mt-5 md:h-52 md:flex md:flex-row md:space-x-0 md:items-center bg-rojosecundario text-slate-100 font-lato md:text-xl">
      <div className="hidden md:flex items-center w-[33%] justify-center">
        <div className="w-[100px] h-32">
          <Image
            src={TexasIcon}
            height={Infinity}
            width={Infinity}
            alt="Logo image"
          />
        </div>
      </div>
      <div className="flex justify-center flex-col items-center">
        <h1 className="hidden md:flex ">Seguinos en nuestras redes:</h1>
        <ul className=" flex justify-center space-x-5 pt-5 md:space-x-5 md:w-[33%] md:items-center ">
          <li className="transition-transform duration-500 hover:-translate-y-2 ">
            <a className="" href="#">
              <FaceIcon className="" />
            </a>
          </li>
          <li className="transition-transform duration-500 hover:-translate-y-2">
            <a className="" href="#">
              <InstaIcon />
            </a>
          </li>
          <li className="transition-transform duration-500 hover:-translate-y-2">
            <a className="" href="#">
              <WhatsIcon />
            </a>
          </li>
        </ul>
      </div>
      <div className="md:items-center md:flex md:w-[33%] md:justify-center">
      <ul className="flex justify-center space-x-5 py-5 md:flex-col md:space-x-0 md:space-y-2">
        <li className="">
          <a className="" href="#">
            Inicio
          </a>
        </li>
        <li className="">
          <a className="" href="#">
            Nosotros
          </a>
        </li>
        <li className="">
          <a className="" href="#">
            Servicios
          </a>
        </li>
        <li className="">
          <a className="" href="#">
            Contacto
          </a>
        </li>
      </ul>
      </div>
    </footer>
  );
}
