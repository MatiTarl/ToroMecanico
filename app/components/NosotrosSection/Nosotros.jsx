import React from "react";
import Image from "next/image";

export default function Nosotros() {
  const ImagenAgustin =
    "https://res.cloudinary.com/ddhhhd0lc/image/upload/f_auto,q_auto/bzqxillpa0ptoxi8r0zi";
  return (
    <section className="w-full pb-5 font-roboto">
      <div className="w-full h-auto lg:h-full flex flex-col pt-1 lg:justify-center">
        <div className="w-full flex items-center justify-center mb-4">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-black text-xl lg:text-2xl xl:text-3xl 2xl:text-6xl font-roboto font-bold lg:mt-4">
              ¿<span className="text-rojoprincipal ">Quienes</span> somos?
            </h1>

            <span className="w-[90%] text-center font-light">
              <br />
              Acá en juegos inflables ofrecemos calidad, somos una empresa
              familiar con más de 20 años de experiencia en la fabricación de
              juegos inflables y mecánicos. Tenemos toros mecánicos, relojes
              derribadores, toboganes premium, castillos, carreras de obstáculos
              y más, con garantía de un año en todos nuestros productos.
              <br />
              <br />
              Desde Mendoza, Argentina,{" "}
              <span className="text-rojoprincipal ">
                distribuimos a todo el país
              </span>{" "}
              y trabajamos para llevar nuestra calidad y diversión a más lugares
              del mundo.
            </span>
          </div>
        </div>
        <div className="flex items-top justify-center w-[100%] pt-3 xl:pt-10">
          <div className="min-w-[50%] lg:w-auto flex lg:items-end justify-center items-start">
            <div className=" rounded-md items-end h-[140px] w-1/6 z-0 bg-rojoprincipal opacity-50 absolute justify-end -translate-x-[10vw] -translate-y-[2vw] lg:translate-y-[18%] lg:-translate-x-[13%] 2xl:translate-y-[10%] 2xl:translate-x-[75%] transition-transform"></div>
            <div className="w-full items-end justify-end flex">
              <Image
                height={1197}
                width={2123}
                src={ImagenAgustin}
                alt="ImageAllProduct"
                className="object-cover rounded-t-lg rounded-bl-lg max-w-[40vw] min-h-36 z-10 lg:max-w-80 2xl:max-w-96  "
              ></Image>
            </div>
          </div>
          <div className="min-w-[50%] mx-5 lg:mx-10 lg:min-h-full flex flex-col text-sm 2xl:text-xl">
            <h1 className="2xl:text-4xl text-xl font-roboto">Agustin Ortiz</h1>
            <span className="h-[2px] bg-rojosecundario w-[120px] 2xl:w-[22%] mb-2"></span>
            <span className="text-black text-left 2xl:max-w-[25vw] mt-5 font-light">
              Soy Agustín Ortiz, encargado en ventas, desarrollo de productos y
              mi objetivo es seguir haciendo crecer la empresa, llevando
              nuestros juegos a más lugares y garantizando la mejor experiencia
              para nuestros clientes.
            </span>
            <div className="h-full flex items-end mb-10">
              <div className="pt-5 md:pt-14">
                <a href="https://wa.me/542615782398?text=Hola,%20me%20contacto%20desde%20la%20página%20web">
                  <div className="text-sm lg:text-3xl xl:text-4xl 2xl:text-4xl font-medium border-rojoprincipal text-rojoprincipal border-2 px-6 py-0.5 md:px-12 md:py-1.5 inline-block text-center z-40">
                    Contacto
                  </div>
                  <div className=" w-[108px] h-[26px] lg:w-[13.5rem] lg:h-[52px] xl:w-60 xl:h-[54px] 2xl:w-[245px] 2xl:h-[55px] bg-rojoprincipal opacity-20 absolute hover:translate-x-0 hover:-translate-y-7 translate-x-2 -translate-y-5 md:translate-x-4 md:-translate-y-11 md:hover:translate-x-0 lg:hover:-translate-y-[54px] xl:hover:-translate-y-[56px]  2xl:hover:-translate-y-[55px] transition-transform duration-500 z-0 "></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
