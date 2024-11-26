import React from 'react';
import ObtenerProductos from './productos';
import Image from 'next/image';

const ProductosSection = () => {
    const productosToMap = ObtenerProductos();
    console.log(productosToMap);
    
    return (
        <main className='h-full w-full py-5 justify-center items-center flex flex-col'>
            <h1 className='text'> Todos nuestros Productos</h1>
            {productosToMap.map( (producto, key) => {
               return <>
                 <div className='grid grid-cols-2' key={key}>
                    <div className={`w-40 h-40`}>
                        <div>
                            <Image src={producto.images[0]} width={111} height={111} alt='ImageProtada'/>
                        </div>
                        <h1>{producto.name}</h1>
                        <p>{producto.descripcion}</p>
                    </div>
                 </div>
                </>
            })}
        </main>
    );
}

export default ProductosSection;
