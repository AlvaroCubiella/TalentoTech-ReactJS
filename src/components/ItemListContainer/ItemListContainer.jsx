import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import { ItemList } from "../ItemList/ItemList";

// A ItemListontainer le añado props para poder darle un poco mas de dinamismo ante los
// productos y sus titulos. De momento para que esto funcione, deberia estar
// con dos archivos JSON distintos
export const ItemListContainer = ({ titulo, url }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // Para capturar el parametrod e la URL, sino no tiene nada es undefined y listara todo
  const {category} = useParams()
  useEffect(() => {
    setProducts([])
    setLoading(true)
    setError(null)

    fetch(url)
      .then((response) => {
        // Corroboro si la respuesta del archivo JSON fue exitosa
        if (!response.ok) {
          // Si la respuesta no es exitosa, lanzo un error
          throw new Error("Archivo JSON no encontrado");
        }
        return response.json();
      })
      .then((data) => {
        // Si hay una categoria en la URL, filtramos los productos
        console.log(category)
        if (category){
          const filtred = data.filter(
            (element) => element.category === category
          );
          setProducts(filtred)
        } else {
          // actualizo el estado de products con los datos obtenidos del archivo JSON
          setProducts(data);
          // actualizo el estado de loading a false para indicar que la carga ha finalizado
        }
      })
      .catch((error) => {
        // Si ocurre un error durante la carga del archivo JSON, actualizo el estado de error con el
        // mensaje del error y actualizo el estado de loading a false
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url, category]);

  useEffect(() => {
    if (category) {
      // Si estamos en una categoría, capitalizamos la primera letra para que quede prolijo
      const categoryFormatted = category.charAt(0).toUpperCase() + category.slice(1);
      document.title = `${categoryFormatted} | Mi Tienda`;
    } else {
      // Si estamos en el inicio / Home
      document.title = titulo || "Inicio | Mi Tienda";
    }
  }, [category, titulo]);

  // Manejo los earlyreturns para mostrar mensajes de carga o error antes de renderizar la lista de productos
  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error al cargar productos: {error}</p>;

  //ahora que ya no hay error ni loading, puedo renderizar la lista de productos
  return (
    <section>      
      <h1>{titulo +' para ' + category}</h1>
      {/* le paso a la prop products el estado de products que contiene los datos obtenidos del archivo JSON.
        // muestro la lista de productos en el componente ItemList, que se encargará de renderizar cada producto individualmente. */}
      <ItemList products={products} />
    </section>
  );
};
