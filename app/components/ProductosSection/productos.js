import image1 from "../../..//public/imagesPrueba/1-1.jpg"
import image12 from "../../..//public/imagesPrueba/1-2.jpg"
import image13 from "../../..//public/imagesPrueba/1-3.jpg"
import image14 from "../../..//public/imagesPrueba/1-4.jpg"
import image15 from "../../..//public/imagesPrueba/1-5.jpg"

import image2 from "../../..//public/imagesPrueba/2-1.jpg"
import image22 from "../../..//public/imagesPrueba/2-2.jpg"
import image23 from "../../..//public/imagesPrueba/2-3.jpg"




const ObtenerProductos = () => {
    const productos = [
        {
            name: "Producto de prueba 1",
            descripcion: "descripcion de prueba 1",
            images: [image1, image12, image13, image14, image15]
          },
        {
            name: "Producto de prueba 2",
            descripcion: "descripcion de prueba 2",
            images: [image2, image22, image23]
        },
        {
            name: "Producto de prueba 2",
            descripcion: "descripcion de prueba 2",
            images: [image2, image22, image23]
        },
        {
            name: "Producto de prueba 2",
            descripcion: "descripcion de prueba 2",
            images: [image2, image22, image23]
        },
        {
            name: "Producto de prueba 1",
            descripcion: "descripcion de prueba 1",
            images: [image1, image12, image13, image14, image15]
          },
          {
            name: "Producto de prueba 1",
            descripcion: "descripcion de prueba 1",
            images: [image1, image12, image13, image14, image15]
          },
          {
            name: "Producto de prueba 1",
            descripcion: "descripcion de prueba 1",
            images: [image1, image12, image13, image14, image15]
          },
    ]

    return productos;
}

export default ObtenerProductos;
