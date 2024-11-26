import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import ProductosSection from "../components/ProductosSection/ProductosSection";



export default function productos() {
  return (
    <div className="flex flex-col w-full h-full ">
      <div className="flex top-0 fixed z-50 h-16 w-full bg-white">
        <Navbar />
      </div>
      <div className="pt-16">
      <ProductosSection />
      </div>
      <Footer />
    </div>
  );
}
