import Navbar from "./components/navbar/Navbar";
import Image from "next/image";
import BullIcon from "@/public/icons/bull";

export default function Home() {
  return (
    <div>
      <header className="w-full justify-between flex items-center px-10 py-1 top-0 fixed z-40 bg-opacity-70 bg-black">
        <div className="w-1/2 justify-center flex items-center">
          <BullIcon
          
          />
        </div>
        <Navbar />
      </header>
      <section className="bg-black h-screen w-screen text-center relative overflow-hidden ">
        <div className="relative z-30 h-full flex flex-col font-sans">
          <header className=" pt-52">
            <h2 className=" text-5xl font-semibold bg-gradient-to-r from-red-700 via-white to-red-700 text-transparent bg-clip-text">
              Subite a la experiencia más intensa
            </h2>
            <h5 className="text-xl">Experiencia y seguridad en cada desafío</h5>
          </header>

          <footer className="flex-grow flex flex-col justify-end pb-32">
            <div className="">
              <a
                href="#"
                className="text-xl border-2 rounded font-medium px-12 py-2 inline-block"
              >
                Descubre más
              </a>
            </div>
          </footer>
        </div>
        <div className="absolute top-0 bottom-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            src="/hombreEnToro4k.webm"
            className="object-cover object-center h-full w-full opacity-70"
          ></video>
        </div>
      </section>
    </div>
  );
}
