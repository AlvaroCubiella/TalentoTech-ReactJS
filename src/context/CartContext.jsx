import { useNavigate } from "react-router-dom";

import { createContext, useContext, useState }  from "react";

/* Creamos el contexto en blanco */
const CartContext = createContext();

/* Creamos un custom HOOK */
export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error ("useCart debe usarse dentro de un CartProvider")
    }
    return context;

};

/* Creamos el PROVEEDOR */
export const CartProvider = ({children}) => {
    const navigate = useNavigate();
    const [cart, setCart] = useState([])
    
    /* Esta funcion es para verificar si el item ya esta en el carrito */
    const isInCart = (item) => {
        /* la funcion some me regresa true o false si item esta en el carrito */
        const inCart = cart.some((element) => element.id === item.id)
        return inCart;
    }

    // Agregar un nuevo item al carrito
    const addItem = (item, quantity) => {
        /* Compruebo si ya esta en el carrito (true o False) usando map para iterar asi no muto el carrito*/
        if (isInCart(item)){
            setCart(
                cart.map((prod) => 
                    prod.id === item.id
                        ?{...prod, quantity: prod.quantity + quantity}
                        : prod
                )
            )
            return
        } else {
            /* implementar la funcion de prevCart, obtengo el estdo previo del carrito y le agrego el nuevo item */
            // No existe → lo agrego con su cantidad
            setCart((prevCart) => [...prevCart, { ...item, quantity }]);

        }        
    }

    // Incrementar cantidad (+1)
    const incrementQuantity = (id) => {
        setCart(
            cart.map((prod) =>
                prod.id === id 
                    ? { ...prod, quantity: prod.quantity + 1 } 
                    : prod
            )
        );
    };

    // Decrementar cantidad (-1) o eliminar si llega a 0
    const decrementQuantity = (id) => {
    setCart(
        cart
        .map((prod) => {
            if (prod.id === id) {
            const newQuantity = prod.quantity - 1;
            return newQuantity > 0 
                ? { ...prod, quantity: newQuantity } 
                : null;
            }
            return prod;
        })
        .filter(Boolean) // Esto filter(Boolean) elimina los elementos nulos (los que llegaron a 0)
    );
    };

    // Eliminar del carrito un elemento
    const removeItem = (id) => {
        setCart((prevCart) => prevCart.filter((element) => element.id !== id))
    }

    // Vaciar carrito
    const clearCart = () => {
        // lo reescribo como un array vacio
        setCart([]);
    }
  
    //Total de items en el carrito
    const getTotalItems=() => {
        return cart.reduce((acc, element) => acc + element.quantity, 0);
    }

    // Precio total del carrito
    const getCartTotal = () => {
        return cart.reduce((acc, element) => acc + element.price * element.quantity, 0)
    }

    const checkout = () => {
        alert("Su compra ha sido realizada")
        // Vacio el carrito
        clearCart();
        // Vuelvo al inicio, navegacion programatica
        navigate("/");
    }

    // Value es el objeto de las cosas que nos va a proveer este contexto        
    const values = {
        cart, 
        addItem, 
        clearCart, 
        removeItem, 
        incrementQuantity,
        decrementQuantity,
        getCartTotal, 
        getTotalItems, 
        checkout
    }

    return <CartContext.Provider value={values}>
        {children}
    </CartContext.Provider>
}