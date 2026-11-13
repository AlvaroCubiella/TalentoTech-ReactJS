export const validateProduct = (product) => {
    const errors = {}

    if (!product.name.trim()){
        errors.name = "El nombre es obligatorio"
    }

    if (!product.price || product.price <= 0) {
        errors.price = "El precio debe ser mayor que 0"
    }

    if (!product.description.trim()) {
        errors.description = "El producto debe contener una descripcion"
    }

    if (!product.category.trim()){
        errors.category = "No se asigno una categoria"
    }

    if (!product.file) {
        errors.file = "Debe cargar una imagen del producto"
    }

    return errors;
}