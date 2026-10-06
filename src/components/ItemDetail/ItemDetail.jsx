
import "./ItemDetail.css"
import { Item } from "../Item/Item";

export const ItemDetail = ({ item }) => {
    return(
        <div className="detail-wrapper">
            {/* Aca abro y cierro porque item tiene children, paso item
            como un spread operator */}
            <Item {...item}>
                {/* el boton es un children que pasa para item*/}
                <button className="btn bg-primary primari">
                    Agregar al carrito
                </button>
            </Item>
        </div>
    );
}