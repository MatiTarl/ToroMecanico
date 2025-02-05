import Header from "./components/header/Header";
import DescubrirSection from "./components/Section_1/DescubrirSection";
import Footer from "./components/footer/Footer";
import ControlDeMando from "./components/ControlDeMandoSection/ControlDeMando";
import Nosotros from "./components/NosotrosSection/Nosotros";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <DescubrirSection/>
      <ControlDeMando/>
      <Nosotros/>
      <Footer/>
    </div>
  );
}
