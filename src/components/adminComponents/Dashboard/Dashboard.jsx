import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../../context/AuthContext"
import "./Dashboard.css"
import { useEffect, useState } from "react"
import { deleteProduct, getProducts } from "../../../services/productsService"
import { AdminProductItem } from "./AdminProductItem"
import { FaPlus } from "react-icons/fa"

export const Dashboard = () => {
    const { logout } = useAuth()
    // Estados para manejar la lista de productos y el estado de carga    
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // useEffect para traer los productos de Firebase cuando carga el Dashboard
    useEffect(() => {
        const fetchProducts = async () => {
            try{
                // Obtengo los productos
                const data = await getProducts()
                setProducts(data)
            } catch (error) {
                console.error ("Error al cargar productos!!: ", error)
            }  finally {
                setLoading(false)
            }
        };
        fetchProducts();
    }, []); // Se ejectura una vez al cargar

    // Funcion que gestiona la eliminacion de un producto
    const handleDelete = async (id) => {
        //Pedimos la confirmacion ante de eliminar definitivamente
        const confirDelet = window.confirm("Esta seguro que desea eliminar el producto seleccionado?")

        if (confirDelet){
            try{
                // llamamos al servicio de firebase
                await deleteProduct(id);

                // Refresto el estado actual para que el producto desaparezca de la vista
                setProducts((prev) => prev.filter(prod => prod.id !== id))
                alert("Producto eliminado correctamente");
            } catch (error) {
                alert("No fue posible eliminar el producto")
            }
        }
    }

    const handleEdit = async (id) => {
        // Redirijo al formulario de edicion
        navigate(`/admin/products/edit/${id}`)
    }

    return (
        <div className="dashboard">
            <header className="dashboard-header">
                <h2>Panel de administración</h2>
            </header>

            {/* 👇 NUEVO CONTENEDOR GRID: Divide la vista en 2 columnas */}
            <div className="dashboard-grid">
                
                {/* COLUMNA IZQUIERDA: Lista de productos */}
                <section className="dashboard-list">
                    <h3>Productos en la tienda</h3>
                    
                    {loading ? (
                        <p>Cargando productos...</p>
                    ) : products.length === 0 ? (
                        <p>No hay productos cargados en la base de datos.</p>
                    ) : (
                        <div className="admin-products-container">
                            {products.map((product) => (
                                <AdminProductItem 
                                    key={product.id} 
                                    product={product} 
                                    onEdit={handleEdit} 
                                    onDelete={handleDelete} 
                                />
                            ))}
                        </div>
                    )}
                </section>

                {/* COLUMNA DERECHA: Acciones y Ayuda */}
                <aside className="dashboard-sidebar">
                    <section className="dashboard-actions">
                        <h3>Acciones rápidas</h3>
                        <div className="actions-grid">
                            <Link to="/admin/products/new" className="action-card bg-success">
                                <FaPlus size={22} /> Cargar Producto
                            </Link>
                        </div>
                    </section>

                    <section className="dashboard-help">
                        <h3>Ayuda</h3>
                        <p>Desde este panel podés gestionar los productos de la tienda.</p>
                    </section>
                </aside>

            </div>
        </div>
    );
};