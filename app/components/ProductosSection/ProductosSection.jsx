import React from "react";
import ObtenerProductos from "./productos";
import Image from "next/image";
import CardProductos from "../cardProductos/CardProductos";

const ProductosSection = () => {
  const productosToMap = ObtenerProductos();

  return (
    <main className="flex">
      <div className="w-[0%] bg-black">

      </div>
      <div className="h-full py-5 px-1 justify-center items-center flex flex-col w-full">
        <div className="w-full text-center">
          <h1 className="font-anton text-4xl mb-3">Productos</h1>
          <span className="">¡ Elige entre nuestra amplia gama de juegos mecánicos !</span>
        </div>
        {/* Navbar */}
        <div className="p-4 mb-6">
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Buscar productos..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Buscar
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 justify-center pt-10 w-full">
          {productosToMap.map((producto, key) => {
            return (
              <div className="flex w-full justify-center items-center" key={key}>
                <CardProductos producto={producto} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-[0%] bg-black">
      </div>
    </main>
  );
};

export default ProductosSection;
