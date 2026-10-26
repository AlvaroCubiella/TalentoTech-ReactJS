import { useCart } from "../../context/CartContext"
import { CartList } from "./CartList";
import { CartSummary } from "./CartSummary";
import "./CartView.css"
import { Link } from "react-router-dom";

export const CartView = () => {
    const { cart } = useCart();

    return (
        <section className="cart-container">
            <h1>Tu carrito de compras</h1>

            {cart.length ? (
                /* Como se peude retornar una sola cosa por ternario, entoces envuevlo los Cart en un fragment para agruparlos */               
                <>
                    <CartList />
                    <CartSummary />
                </>
            ):(
                <>
                <p className="empty-cart"> El carrito esta vacío </p>
                <Link className="btn primary bg-primary" to = {"/"}>
                    Volver
                </Link>    
                
                </>
            )}
        </section>
    );
};