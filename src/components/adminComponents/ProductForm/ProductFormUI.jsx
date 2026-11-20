export const ProductFormUI = ({
    product, 
    errors, 
    loading, 
    onChange, 
    onFileChange, 
    onSubmit,
    isEditing,
}) => {
    
    return <section>
        <form className="product-form" onSubmit={onSubmit}>
            {/*Gestionamos de manera dinamica segun el estado de isEditing */}
            <h2>
                {isEditing ? "Editar produto": "Agregar nuevo producto"}
            </h2>
            <div>
                <label>Nombre:</label>
                <input 
                    type="text" 
                    name="name" 
                    value={product.name} 
                    onChange={onChange}
                />
                {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div>
                <label>Precio:</label>
                <input 
                    type="text" 
                    name="price" 
                    value={product.price} 
                    onChange={onChange}
                />
                {errors.price && <p className="error">{errors.price}</p>}
            </div>
            <div>
                <label>Categoria:</label>
                <input 
                    type="text" 
                    name="category" 
                    value={product.category} 
                    onChange={onChange}
                />
                {errors.category && <p className="error">{errors.category}</p>}
            </div>
            <div>
                <label>Descripcion:</label>
                <textarea 
                    name="description" 
                    value={product.description}
                    onChange={onChange}
                    rows="3" // Le damos 4 líneas de altura inicial
                />
                {errors.description && <p className="error">{errors.description}</p>}
            </div>
            <div>
                <label>Imagen:</label>
                {/* Si estamos editando, mostramos la imagen actual */}
                {isEditing && product.image && (
                    // Le pongo el estyle aca para no hacer un css por dos lineas
                    <div style={{ marginBottom: '10px' }}>
                        <img src={product.image} alt="Imagen actual" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
                        <p style={{ fontSize: '0.8rem', color: '#666' }}>Imagen actual</p>
                    </div>
                )}

                <input 
                    type="file" 
                    accept="image/*" 
                    onChange={onFileChange}
                />
                {errors.file && <p className="error">{errors.file}</p>}
                {isEditing && <p style={{ fontSize: '0.8rem', color: '#666' }}>Dejar vacío para mantener la imagen actual</p>}
            </div>
            
            <button className="btn bg-primary" type="submit" disabled={loading}>
                {/* Texto dinámico */}
                {loading ? "Guardando..." : (isEditing ? "Actualizar Producto" : "Guardar Producto")}
            </button>

            {errors.general && <p className="error">{errors.general}</p>}

        </form>
    </section>
}