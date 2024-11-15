import Header from "./components/header/Header";
import DescubrirSection from "./components/DescubrirSection/DescubrirSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <DescubrirSection/>
    </div>
  );
}
