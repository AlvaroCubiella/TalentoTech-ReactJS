import "./Nav.css";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

export const Nav = () => {
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
          </Link>
        </li>
      </ul>
    </nav>
  );
};
