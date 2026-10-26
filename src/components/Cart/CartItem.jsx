import { useCart } from "../../context/CartContext"
import { Item } from "../Item/Item"

export const CartItem = ({item}) => {
    const { removeItem, incrementQuantity, decrementQuantity } = useCart();
    return (
        <Item {...item}>
            <div className="counter">
            <button className="btn btn-secondary" onClick={() => decrementQuantity(item.id)}>
                −
            </button>
            <span>{item.quantity}</span>
            <button className="btn btn-secondary" onClick={() => incrementQuantity(item.id)}>
                +
            </button>
            </div>

            <button className="btn bg-delete primary" onClick={() => removeItem(item.id)}>
            Eliminar
            </button>
        </Item>
    );
};