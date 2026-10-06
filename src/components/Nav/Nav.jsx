import "./Nav.css";
import { Link } from "react-router-dom";

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
          <Link to="/cart">Carrito</Link>
        </li>
      </ul>
    </nav>
  );
};
