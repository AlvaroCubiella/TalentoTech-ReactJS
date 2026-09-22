import "./ItemList.css";
import { Item } from "../Item/Item";

export const ItemList = ({ products }) => {
    if(!products || products.length === 0) {
        return <p>No hay productos disponibles</p>;
    };
    return <div className="product-container">
        {/* Renderizo cada producto individualmente usando el componente Item,         
        pasando las props necesarias, en este caso como un Spread Operator */}      
        {products.map((product) => (
            <Item key={product.id} {...product} />
        ))}
    </div>
};