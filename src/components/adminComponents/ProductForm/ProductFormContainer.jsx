import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ProductFormUI } from "./ProductFormUI"
import { validateProduct } from "../../../utils/validateProduct"
import { uploadImage } from "../../../services/uploadImage"
import { createProduct, getProductsById, updateProduct } from "../../../services/productsService"
import "./ProductFormContainer.css"

export const ProductFormContainer = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const isEditing = Boolean(id)
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState({})
    const [file, setFile] = useState(null)
    const [product, setProducts] = useState({
        name: "",
        price: "",
        category: "",
        description: "",
    });

    useEffect(() => {
        // si useParams no captura Id, entoces no se edita
        if (!isEditing) return;

        setLoading(true)
        getProductsById(id)        
        .then((data) => {
            console.log("Producto cargado desde Firebase:", data); 
            if (data) {
                setProducts({
                    name: data.name,
                    price: data.price,
                    category: data.category,
                    description: data.description,
                    image: data.image
                })
            }
        }).catch ((error) => console.error ("Error al traer el producto", error))
        .finally ( () => setLoading(false))        
    }, [id, isEditing])


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
        const productValidate = {
            ...product,
            file: file || (
                isEditing ? product.image: null
            )
        }
        // valido los inputs
        const newErrors = validateProduct(productValidate)
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            setLoading(false);
            return;
        }

        try{
            // Mantenemos imagen por defecto
            let imageUrl = product.image
            // Si el usuario seleccionó un archivo nuevo, lo subimos
            if (file) {
                imageUrl = await uploadImage(file);
            }

            // Armo la estructura del producto
            const productData = {
                ...product,
                price: Number(product.price),
                image: imageUrl,
            }

            if (isEditing) {
                // Si estamos editando
                await updateProduct(id, productData)
                navigate(`/admin/product/success/${id}`, {replace: true})
            } else {
                // Si es un nuevo producto, lo creamos
                const newId = await createProduct(productData)
                navigate(`/admin/product/success/${newId}`, {replace: true})
            }

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
            isEditing={isEditing}
        />
    )
}