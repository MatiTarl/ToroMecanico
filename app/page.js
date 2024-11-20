import Header from "./components/header/Header";
import DescubrirSection from "./components/Section_1/DescubrirSection";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <DescubrirSection/>
      <Footer/>
    </div>
  );
}
