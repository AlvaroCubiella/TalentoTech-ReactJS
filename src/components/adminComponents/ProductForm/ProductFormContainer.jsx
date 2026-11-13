import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ProductFormUI } from "./ProductFormUI"
import { validateProduct } from "../../../utils/validateProduct"
import { uploadImage } from "../../../services/uploadimage"
import { createProduct } from "../../../services/productsService"
import "./ProductFormContainer.css"

export const ProductFormContainer = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState({})
    const [file, setFile] = useState(null)
    const [product, setProducts] = useState({
        name: "",
        price: "",
        category: "",
        description: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setProducts({ ...product, [name]: value })
    }

    const handleFileChange = (e) => {
        const selectedFile  = e.target.files[0] || null;
        setFile(selectedFile );
    }

    const handleSubmit = async (e) => {
        // esta funcion envia todo a cargar
        e.preventDefault();
        // Modifico los estados para el "loading" mientras se procesa
        setErrors({});
        setLoading(true);
        // valido los inputs
        const newErrors = validateProduct({ ...product, file})
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            setLoading(false);
            return;
        }

        try{
            // subo imagen
            const imageUrl = await uploadImage(file);

            // Armo la estructura del producto
            const productData = {
                ...product,
                price: Number(product.price),
                image: imageUrl,
            }

            // alta - Creo el producto
            const id = await createProduct(productData);  
            
            // vaciar el formulario
            setProducts({
                name: "",
                price: "",
                category: "",
                description: "",
            });
            setFile(null)

            // navegar a la vista de exito. el replace lo que hace es reemplazar la 
            // ruta del formulario, es para evitar volver a atras y tener nuevamente 
            // el formulario con todo cargado. Con esto no es posible hacerlo
            navigate(`product/success/${id}`, {replace: true})

        } catch (error) {
            // Capturo alguno error que no sea condiderado en el formulario de validacion
            setErrors({general: error.message})
        } finally {
            setLoading(false)
        }
    }

    return (
        <ProductFormUI
            product={product}
            errors={errors}
            loading={loading}
            onChange={handleChange}
            onFileChange={handleFileChange}
            onSubmit={handleSubmit}
        />
    )
}