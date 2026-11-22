// src/components/adminComponents/Dashboard/UsersDashboard.jsx
import { Link } from "react-router-dom";
import "./Dashboard.css";

export const UsersDashboard = () => {
    return (
        <div className="dashboard">
            <header className="dashboard-header">
                <h2>Gestión de Usuarios</h2>
            </header>

            <div className="dashboard-grid">
                <section className="dashboard-list">
                    <h3>Usuarios del sistema</h3>
                    <p>Aquí se listarán los usuarios (próximamente).</p>
                    
                </section>

                <aside className="dashboard-sidebar">
                    <section className="dashboard-actions">
                        <h3>Acciones rápidas</h3>
                        <div className="actions-grid">
                            <Link to="#" className="action-card bg-success">
                                ➕ Agregar Usuario
                            </Link>
                        </div>
                    </section>

                    <section className="dashboard-help">
                        <h3>Ayuda</h3>
                        <p>Desde este panel podés gestionar quién tiene acceso al sistema.</p>
                    </section>
                </aside>
            </div>
        </div>
    );
};