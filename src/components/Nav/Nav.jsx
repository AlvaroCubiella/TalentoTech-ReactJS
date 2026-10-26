import "./Nav.css";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../../context/CartContext";


export const Nav = () => {
  // importo el custom Hook que usa el contexto catrContext
  const {getTotalItems} = useCart()
  const totalitems = getTotalItems()
  return (
    <nav className="nav-container">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">Productos</Link>
        </li>
        <li className="nav-item">
          <Link to="/products/gas">Gas</Link>
        </li>
        <li className="nav-item">
          <Link to="/products/agua">Agua</Link>
        </li>
        <li className="nav-item">
          <Link to="/products/neumatica">Neumática</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact">Contacto</Link>
        </li>
        <li className="nav-item">
          <Link to="/cart" className="cart-link">
            {/* Renderizo el icono con tamaño personalizado */}
            <ShoppingCart size={22} /> 
            {totalitems>0 && <span className="incart">{totalitems}</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
