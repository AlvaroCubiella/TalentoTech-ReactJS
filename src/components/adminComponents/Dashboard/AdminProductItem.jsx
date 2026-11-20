import "./AdminProductItem.css"
import { FaEdit, FaTrashAlt } from "react-icons/fa";

// Recibe 3 props desde el componente padre (el Dashboard):
// 1. product: el objeto con los datos del producto (nombre, precio, imagen, etc.).
// 2. onEdit: la función que se ejecutará al hacer clic en "Editar".
// 3. onDelete: la función que se ejecutará al hacer clic en "Eliminar".
export const AdminProductItem = ({ product, onEdit, onDelete }) => {
    return (
        <div className="admin-product-row">
        {/* --- SECCIÓN 1: LA IMAGEN (Izquierda) --- */}
        {/* Mostramos la imagen del producto. Vista mini por css.
        Usamos product.image (el campo de Firestore). */}
        <img 
            src={product.image} 
            alt={product.name} 
            className="admin-product-img" 
        />
        
        {/* --- SECCIÓN 2: LA INFORMACIÓN (Centro) --- */}
        {/* Este div agrupa el nombre y los detalles. En el CSS tiene flex-grow: 1, lo que significa que 
        ocupa todo el espacio sobrante en el medio. */}
        <div className="admin-product-info">
            {/* Nombre del producto (título principal de la fila) */}
            <h3>{product.name}</h3>
            
            {/* Subtexto con la categoría y el precio. 
                Usamos product.category y product.price de Firestore. */}
            <p>{product.category} - ${product.price}</p>
        </div>

        {/* --- SECCIÓN 3: LOS BOTONES (Derecha) --- */}
        {/* Este div agrupa los botones de acción.
        En el CSS tiene display: flex y gap: 0.5rem 
        para que los botones queden uno al lado del otro con un pequeño espacio. */}
        <div className="admin-product-actions">
            
            {/* Botón de Editar.
            Al hacer clic, llama a la función 'onEdit' (que viene del Dashboard) 
            y le pasa el ID del producto para que el Dashboard sepa cuál editar. */}
            <button 
            className="btn btn-secondary btn-icon" 
            onClick={() => onEdit(product.id)}
            title="Editar producto"
            >
            <FaEdit size={24}/>
            </button>
            
            {/* Botón de Eliminar.
            Al hacer clic, llama a la función 'onDelete' (que viene del Dashboard) 
            y le pasa el ID del producto para que el Dashboard sepa cuál borrar. */}
            <button 
            className="btn bg-delete btn-icon" 
            onClick={() => onDelete(product.id)}
            title="Eliminar producto"
            >
            <FaTrashAlt size={24}/>
            </button>
        </div>

        </div>
    );
};