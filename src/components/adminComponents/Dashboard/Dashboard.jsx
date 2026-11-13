import { Link } from "react-router-dom"
import { useAuth } from "../../../context/AuthContext"
import "./Dashboard.css"

export const Dashboard = () => {
    const { logout } = useAuth()

    return (
        <div className="dashboard">
            <header className="dashboard-header">
                <h2>Panel de administracion</h2>

                <div className="header-actions">
                    <Link to= "/" className="btn btn-secondary">
                        Volver a la tienda
                    </Link>
                    <button className="btn bg-delete primary" onClick={logout}>
                        Cerrar sesión
                    </button>
                </div>
            </header>
            <section className="dashboard-actions">
                <h3>Acciones rapidas</h3>
                <div className="actions-grid">
                    <Link to="/admin/products/new" className="action-card">
                        ➕ Cargar
                    </Link>

                    <Link to="#" className="action-card disabled">
                        ✏️ Modificar
                    </Link>

                    <Link to="#" className="action-card disabled">
                        🗑️ Eliminar
                    </Link>
                </div>
            </section>
            <section className="dashboard-help">
                <h3>Ayuda</h3>
                <p>Desde este panel podés gestionar los productos de la tienda.</p>
            </section>
        </div>
    )
}