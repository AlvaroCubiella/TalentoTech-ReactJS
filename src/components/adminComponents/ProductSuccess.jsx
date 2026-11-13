import { useParams } from "react-router-dom"
import "./ProductSuccess.css"

export const ProductSuccess = () => {
    const { id } = useParams();     // Capturo de la ruta del navegador definido en app.jsx

    return (
        <section className="success-page">
            <div className="succes-icon0">OK</div>

            <h2>Producto cargado con exito</h2>
            <p>ID de prodcto: {id}</p>
            <p>Puede cargar otro haciendo click en en boton.</p>

            <div className="success-action">
                {/* <Link className="btn bg-primary" to="/admin/dashboard">
                    Volver al panel
                <Link> */}
                {/* <Link className="btn bg-success" to="/admin/products/new">
                    Cargar otro producto
                <Link> */}
                <Link className="btn bg-seccess primary" to="/*admin">
                    Cargar otro producto
                </Link>
            </div>

        </section>
    )
}