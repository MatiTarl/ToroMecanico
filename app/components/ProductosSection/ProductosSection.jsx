import React from "react";
import ObtenerProductos from "./productos";
import Image from "next/image";

const ProductosSection = () => {
  const productosToMap = ObtenerProductos();

  return (
    <main className="h-full w-full py-5 px-1 justify-center items-center flex flex-col">
      <div className="grid grid-cols-1 gap-4 justify-center pt-10 w-full">
        {productosToMap.map((producto, key) => {
          return (
              <div className="flex w-full justify-center items-center" key={key}>
                <div
                  className={`w-[90%] h-96 max-w-[250px] rounded-sm border border-rojoprincipal shadow items-center flex flex-col justify-between`}
                >
                  <div className="h-1/2 flex justify-start items-center w-full">
                    <Image
                      className="w-full p-2"
                      src={producto.images[0]}
                      width={80}
                      height={80}
                      alt="ImageProtada"
                    />
                  </div>
                  <div className="h-1/3 justify-start flex flex-col w-[80%]">
                    <h5 className="font-lato">{producto.name}</h5>
                    <button className=" bg-slate-100 mt-10 rounded-sm h-8 border border-slate-200 shadow">
                    <a href="" className="text-center ">Consultar precio</a>
                    </button>
                  </div>
                </div>
              </div>
          );
        })}
      </div>
    </main>
  );
};

export default ProductosSection;
