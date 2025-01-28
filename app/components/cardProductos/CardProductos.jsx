import Image from "next/image";
import "./module.css";


const CardProductos = ({ producto }) => {
  return (
    <div className="wrapper">
      <div className={`container`}>
        <div className="top flex items-center">
          <Image
            className="w-full"
            src={producto.images[0]}
            width={80}
            height={80}
            alt="ImageProtada"
          />
        </div>
        <div className="bottom">
          <div className=" bg-slate-400 h-full w-1/2 flex items-center justify-center">
            <div className="flex flex-col items-center w-full">
              <h1>{producto.name}</h1>
              <a href={""} className="flex items-center justify-center">
                <p>Consultar Precio</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="inside">
        <div className="icon">
          <i className="material-icons">info_outline</i>
        </div>
        <div className="contents">
          <table>
            <thead>
              <tr>
                <th>{producto.descripcion}</th>
              </tr>
            </thead>
            <tbody>
            <tr>
              <td>Lorem ipsum dolor</td>
              <td>Lorem ipsum dolor</td>
            </tr>
            <tr>
              <th>Lorem ipsum dolor</th>
              <th>Lorem ipsum dolor</th>
            </tr>
            <tr>
              <td>Lorem ipsum dolor</td>
              <td>Lorem ipsum dolor</td>
            </tr>
            <tr>
              <th>Lorem ipsum dolor</th>
              <th>Lorem ipsum dolor</th>
            </tr>
            <tr>
              <td>Lorem ipsum dolor</td>
              <td>Lorem ipsum dolor</td>
            </tr>
            <tr>
              <th>Lorem ipsum dolor</th>
              <th>Lorem ipsum dolor</th>
            </tr>
            <tr>
              <td>Lorem ipsum dolor</td>
              <td>Lorem ipsum dolor</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CardProductos;
