import { Item } from "../Item/Item";
import { Link } from "react-router-dom";
import "./ItemList.css";

export const ItemList = ({ products }) => {
  // Si product viene vacio entonces muestro...
  if (!products || products.length === 0) {
    return <p>No hay productos disponibles</p>;
  }
  return (
    <div className="product-container">
      {/* Renderizo cada producto individualmente usando el componente Item,         
        pasando las props necesarias, en este caso como un Spread Operator */}
      {products.map((product) => (
        /* Armo los link de rutas relativas partiendo del id de cada objeto */
        <Link to = {`/product/${product.id}`} key={product.id}>
          <Item {...product} />
        </Link> 
      ))}
    </div>
  );
};
