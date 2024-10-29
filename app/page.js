import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <header className="w-full justify-between flex items-center px-10 py-6 top-0 fixed z-40">
        <div className="w-1/2 justify-center flex">
          <h1 className="text-3xl">TEXAS BULL</h1>
        </div>
        <Navbar />
      </header>
      <section className="bg-black h-screen w-screen text-center relative overflow-hidden">
        <div className="relative z-30 h-full flex flex-col font-roboto">
          <header className=" pt-52">
            {/* <h1 className="text-start">TEXAS BULL</h1> */}
            <h2 className=" text-5xl font-medium">Siente la adrenalina de los toros mecánicos más reales</h2>
            <h5 className="text-xl">Experiencia y seguridad en cada desafío</h5>
          </header>

          <footer className="flex-grow flex flex-col justify-end pb-32">
            <div className="">
              <a href="#" className="text-xl border-2 rounded font-medium px-12 py-2 inline-block">Descubre más</a>
            </div>
          </footer>
        </div>
        <div className="absolute top-0 bottom-0">
          <video autoPlay muted loop src="/hombreEnToro4k.webm" className="object-cover object-center h-full 2xl:h-auto"></video>
        </div>
      </section>
    </div>
  );
}
