import React from "react";
import ObtenerProductos from "./productos";
import Image from "next/image";

const ProductosSection = () => {
  const productosToMap = ObtenerProductos();

  return (
    <main className="h-full w-full py-5 px-1 justify-center items-center flex flex-col">
      <h1 className="text ratio text-xl text-rojosecundario ">Nuestros Productos</h1>

      <div className="grid grid-cols-2 gap-2 justify-center pt-10">
        {productosToMap.map((producto, key) => {
          return (
            <a href={``}  key={key}>
              <div className="flex flex-col">
                <div className={`w-36 h-36 rounded-md border border-black justify-center items-center flex flex-col   `}>
                  <div>
                    <Image
                      src={producto.images[0]}
                      width={80}
                      height={80}
                      alt="ImageProtada"
                    />
                  </div>
                  <p className=" font-lato text-center">{producto.name}</p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </main>
  );
};

export default ProductosSection;
