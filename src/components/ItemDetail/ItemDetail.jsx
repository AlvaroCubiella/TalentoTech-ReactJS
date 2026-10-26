
import "./ItemDetail.css"
import { Item } from "../Item/Item";
import { useCart } from "../../context/CartContext"
import { useState } from "react";

export const ItemDetail = ({ item }) => {
    // importo el custom Hook que usa el contexto catrContext
    const {addItem} = useCart();
    const [quantity, setQuantity] = useState(1);

    const handleDecrement = () => {
        if (quantity > 1) setQuantity((prev) => prev - 1);
    };

    const handleIncrement = () => {
        if (quantity < 100) setQuantity((prev) => prev + 1);
    };

    return(
        <div className="detail-wrapper">
            {/* Aca abro y cierro porque item tiene children, paso item
            como un spread operator */}
            <Item {...item}>
                {/* el boton es un children que pasa para item*/}
                <div className="counter">
                    <button className="btn btn-secondary" onClick={() => handleDecrement()}>
                        −
                    </button>
                    <span>{quantity}</span>
                    <button className="btn btn-secondary" onClick={() => handleIncrement()}>
                        +
                    </button>
                </div>

                <button
                    className="btn bg-primary primari"
                    onClick={() => addItem(item, quantity)}
                >
                Agregar al carrito
                </button>
            </Item>
        </div>
    );
};