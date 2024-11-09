import Header from "./components/header/Header";
import Image from "next/image";
import ImageBull from "@/public/headerImage1.jpg"

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <section id="2-Section" className="py-7">
        <div className="flex flex-col font-roboto">
          <div className="flex justify-center">
            <h1> <span className="text-rojoprincipal font-bold">Texas bull:</span> El proveedor y fabricante internacional de juegos mecanicos - <span className="text-rojoprincipal font-bold">desde hace más de 10 años.</span></h1>
          </div>
          <div className="pt-14 flex space-x-[20%]">
            <div className="w-1/2 flex justify-center h-screen">
              <div className=" flex flex-col flex-wrap content-center h-full">
                <div className="w-2/3 flex flex-col flex-grow justify-center">
                  <h1 className="text-5xl">
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Fames imperdiet conubia urna eget amet.
                  </h1>
                </div>
                <div className="flex flex-col flex-grow justify-center">
                  <div className="">
                    <h1 className="text-6xl text-rojoprincipal font-extrabold">Toros Mecanicos</h1>
                  </div>
                  <div className="pt-14">
                    <a href="#">
                      <div className="text-5xl font-medium border-rojoprincipal text-rojoprincipal border-2 px-12 py-1.5 inline-block text-center z-40">
                        Descubir
                      </div>
                      <div className="w-72 h-[60px] bg-rojoprincipal opacity-20 absolute translate-x-4 -translate-y-11 z-0 hover:translate-x-0 hover:-translate-y-[62px] transition-transform "></div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/3 flex items-end justify-end">
              <div className="h-3/4 w-1/6 z-0 bg-rojoprincipal opacity-70 absolute justify-start translate-y-5 -translate-x-80"></div>
              <Image width={Infinity} height={Infinity} src={ImageBull} alt="ImageHeaderBull_1" className="z-40"></Image>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
