import {useEffect, useState} from "react"
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";

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

    fetch("/data/products.json")
      .then((res) => {
        if (!res.ok) {
          // Si la respuesta es vacia, lanzo un error
          throw new Error("Productos no encontrados")
        }
        return res.json()
      })
      .then((data) => {
        // AHORA, si no filtro lo que meretona el fetch, estaria obteniendo
        // todos los datos del json, entonces, debo filtrar lo que realmente me interesa

        // element es el elemento que me retorna el fetch, y lo comparo con el 
        // id que viene de la url (params.id), me retorna el objeto encontrado
        // de lo contrario me retorna un Undefine.

        // userParams() siempre devuelve un str, mientras que en el json estan almacenados
        // como numeros, tonces la comparacion esctricta === sera False. Para solucionarlo
        // hay que convertir el srg a number
        const item = data.find(element => element.id === Number(params.id))
        if (item) {
          // Actualizo el estado del itemDetail con lo que obtuve del fetch
          setItemDetail(item)
          return;
        }        
      })
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
