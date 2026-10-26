import { useCart } from "../../context/CartContext"

export const CartSummary = () => {
    const { getCartTotal, checkout } = useCart();
    const total = getCartTotal();
    return (
        <>
            <p> TOTAL a PAGAR: ${total} </p>
            <button 
                className="btn bg-sucess primary" 
                onClick={checkout}
            >
                Finalizar Compra
            </button>
        </>
    )
}