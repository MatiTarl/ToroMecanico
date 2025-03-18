import React from "react";
import Image from "next/image";
import "./module.css";

export default function DescubrirSection() {
  const ImageBull = "https://res.cloudinary.com/ddhhhd0lc/image/upload/f_auto,q_auto/crpmarqpn5h6tkcpsfln"
  return (
    <section id="1-Section" className="py-5 md:pt-20">
      <div className="flex flex-col font-roboto">
        <div className="sec2 flex justify-center text-center text-sm px-3 md:px-0 md:text-base">
          <h1>
            <span className="text-rojoprincipal font-bold">Texas bull:</span> El
            proveedor y fabricante internacional de juegos mecánicos -{" "}
            <span className="text-rojoprincipal font-bold">
              desde hace más de 10 años.
            </span>
          </h1>
        </div>
        <div className="flex flex-row-reverse pt-10 md:pt-14 md:flex-row space-x-5 md:space-x-[20%]">
          <div className="flex justify-center md:w-1/2 md:h-screen">
            <div className=" flex flex-col flex-wrap content-center h-full">
              <div className="sec2Left w-2/3 flex flex-col flex-grow justify-center">
                <h1 className="text-sm lg:text-3xl xl:text-4xl 2xl:text-5xl">
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Fames
                  imperdiet conubia urna eget amet.
                </h1>
              </div>
              <div className="flex flex-col flex-grow justify-center">
                <h1 className="text-xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-rojoprincipal font-extrabold">
                  Toros mecánicos
                </h1>
                <div className="pt-5 md:pt-14">
                  <a href="/productos">
                    <div className="text-sm lg:text-3xl xl:text-4xl 2xl:text-5xl font-medium border-rojoprincipal text-rojoprincipal border-2 px-6 py-0.5 md:px-12 md:py-1.5 inline-block text-center z-40">
                      Descubir
                    </div>
                    <div className=" w-[108px] h-[26px] lg:w-[13.5rem] lg:h-[52px] xl:w-60 xl:h-[54px] 2xl:w-72 2xl:h-[60px]  bg-rojoprincipal opacity-20 absolute hover:translate-x-0 hover:-translate-y-7 translate-x-2 -translate-y-5 md:translate-x-4 md:-translate-y-11 md:hover:translate-x-0 lg:hover:-translate-y-[54px] xl:hover:-translate-y-[56px]  2xl:hover:-translate-y-[62px] transition-transform duration-500 z-0 "></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full h-full md:max-h-none md:w-1/3 flex justify-end">
            <div className="hidden md:flex rounded-md h-3/4 w-1/6 z-0 bg-rojoprincipal opacity-50 absolute justify-start lg:translate-y-[18%] [1920px]:translate-y-[17%] lg:-translate-x-[10%] transition-transform "></div>
            <Image
              width={200}
              height={200}
              src={ImageBull}
              alt="ImageHeaderBull_1"
              className="z-10 rounded-md rounded-br-none md:rounded-s-md lg:mr-10"
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
}
