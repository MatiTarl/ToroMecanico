import "./module.css";


const CardProductos = ({producto}) => {
  return (
    <div className="wrapper">
      <div className={`container  bg-${producto.image}`}>
        <div className="top"></div>
        <div className="bottom">
          <div className="left">
            <div className="details">
              <h1>Lorem ipsum dolor sit</h1>
              <a href={""}>
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
            <tr>
              <th>Width</th>
              <th>Height</th>
            </tr>
            <tr>
              <td>3000mm</td>
              <td>4000mm</td>
            </tr>
            <tr>
              <th>Something</th>
              <th>Something</th>
            </tr>
            <tr>
              <td>200mm</td>
              <td>200mm</td>
            </tr>
            <tr>
              <th>Something</th>
              <th>Something</th>
            </tr>
            <tr>
              <td>200mm</td>
              <td>200mm</td>
            </tr>
            <tr>
              <th>Something</th>
              <th>Something</th>
            </tr>
            <tr>
              <td>200mm</td>
              <td>200mm</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CardProductos;
