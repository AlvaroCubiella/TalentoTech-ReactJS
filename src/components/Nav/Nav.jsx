import "./Nav.css";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";


export const Nav = () => {
  const { logout } = useAuth()
  // importo el custom Hook que usa el contexto catrContext
  const {getTotalItems} = useCart()
  const totalitems = getTotalItems()
  // Detecta la ruta actual y aplica la clase "active" al enlace correspondiente
  const location = useLocation();
  // si la ruta comienza con /admin entonces estamos en el panel de administración
  const isAdminPath = location.pathname.startsWith("/admin");
  
  return (
    <nav className="nav-container">
      <ul className="nav-list">
        {isAdminPath ? (
          /* NAV del administrador */
          <>
            <li className="nav-item">
              <Link to="/admin/dashboard">Gestión de Productos</Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/users">Gestión de Usuarios</Link>
            </li>
            <li className="nav-item">
              <Link to="/">Volver a la tienda</Link>
            </li>
            <li className="nav-item">
              <Link onClick={logout} style={{ color: 'var(--primary)' }}>Cerrar sesión</Link>
            </li>
          </>
        ) : (
          /* NAV publico */
          <>
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
                <ShoppingCart size={22} /> 
                {totalitems > 0 && <span className="incart">{totalitems}</span>}
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
