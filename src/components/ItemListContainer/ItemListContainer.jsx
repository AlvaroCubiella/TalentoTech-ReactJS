import { useEffect } from "react";
import { useState } from "react";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
      fetch("/data/products.json")
        .then((response) => {
          // Corroboro si la respuesta del archivo JSON fue exitosa  
          if (!response.ok) {
            // Si la respuesta no es exitosa, lanzo un error
            throw new Error("Archivo JSON no encontrado");
          }
          return response.json();
        })
        .then((data) => {
          // actualizo el estado de products con los datos obtenidos del archivo JSON
          setProducts(data);
          // actualizo el estado de loading a false para indicar que la carga ha finalizado
        })        
        .catch((error) => {
          // Si ocurre un error durante la carga del archivo JSON, actualizo el estado de error con el 
          // mensaje del error y actualizo el estado de loading a false
          setError(error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }, []);

    // Manejo los earlyreturns para mostrar mensajes de carga o error antes de renderizar la lista de productos
    if (loading) return <p>Cargando productos...</p>;
    if (error) return <p>Error al cargar productos: {error}</p>;

    //ahora que ya no hay error ni loading, puedo renderizar la lista de productos
    return <section>
        {console.log("Llego aca")}
        <h1>Lista de Productos</h1>
        {/* le paso a la prop products el estado de products que contiene los datos obtenidos del archivo JSON.
        // muestro la lista de productos en el componente ItemList, que se encargará de renderizar cada producto individualmente. */}
        <ItemList products={products} />
    </section>;

};