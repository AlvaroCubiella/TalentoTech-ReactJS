import {useEffect, useState} from "react"
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { getProductsById } from "../../services/productsService";

export const ItemDetailContainer = () => {
  const params = useParams();
  const [itemDetail, setItemDetail] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  // Al final del useEffect se puede poner el array de dependencias id 
  // a fines de poder volver a renderizar el fetch.
  // Si volvieramos a renderizar el componente porque usamos, por ejemplo, "productos relacionados"
  // se tendria que volver a renderizar ItemDetailContainer con el neuevo detalle.
  // Entonces, el array de dependencias del useEffect debe ir acompalado con el id y se deberá resetear
  // los estados de los useState de "error" y "loading"
  useEffect(()=>{
    // Reinicio los estadosde "error" y "loading"
    setItemDetail(null)
    setError(null)
    setLoading(true)

    getProductsById(params.id)
      .then((data) => setItemDetail(data))            
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false))
  }, [params.id]
  );

  // Establezco los retornos tempranos mientras...
  if (loading) return <p>Cargando detalles...</p>
  if (error) return <p>{error}</p>;
  if (!itemDetail) return <p>Producto {params.id} no encontrado</p>
  

  return (
    <section>
      <h2>Detalle del producto</h2>
      <div className="products-container">
        <ItemDetail item={itemDetail} />
      </div>
    </section>
  );
};
