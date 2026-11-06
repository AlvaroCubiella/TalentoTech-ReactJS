import { addDoc, collection, doc, getDoc, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase/config"


// Obtengo la referencia a la coleccion, que en este caso se llama productos
const productsRef = collection(db, "products");

// Traigo los productos, con una funcion asincronica
export const getProducts = async () => {
    try{
        // esto es de como viene la consulta 
        // una foto instantanea al momento de realizar la consulta
        const snapshot = await getDocs(productsRef);    // espero que responda del firestore

        // asis e hace por como lo resulve firestore
        const productsFormat = snapshot.docs.map((doc) => {
            // Firebase me trae el id separado del objeto que contiene el resto de los datos del elemento,
            // entonces de esta manera hacemos que el id del producto quede dentro del objeto
            return { id: doc.id, ...doc.data() }
        })
        return productsFormat;
        
    }catch(error){
        console.log ("Error al traer productos", error)
        throw error;
    }
}

// Traigo los productos por id
export const getProductsById = async (id) => {
    try{
        // Creo la referencia por el objeto
        const docRef = doc(productsRef, id)

        // Traemos el documento, ATENCION que no teiene S porque es uno solo
        const snapshot = await getDoc(docRef)

        // Verificamos si existe
        if (snapshot.exists()) {
            const product = {id: snapshot.id, ...snapshot.data()};
            console.log("Doc: ", product)
            return product
        } else {
            return null;
        }
    } catch (error) {
        console.error(" Error al traer el producto por ID: ", error)
    }
};

// Filtramos por categoria
export const getByCategory = async (category) => {
    try{
        let queryRef;
        if (category){
            queryRef = query(productsRef, where("category", "==", category));
        } else {
            queryRef = productsRef;
        }

        // Traigo los documentos
        const snapshot = await getDocs(queryRef);
        // Mapeo de datos para darles formato
        const productsFormat = snapshot.docs.map((doc) => {
            // "meto" el id dentro del spreadoperator del doc, para mantener la integridad
            // y que no se rompa el resto de los componentes
            return {id: doc.id, ...doc.data()};
        });
        return productsFormat;
    } catch (error) {
        console.error ("Error al filtrar productos: ", error);
        throw error;        
    }
}

// Alta de producto
export const createProduct = async (productData) => {
    try{

        // funcion asincrona que recibe el objeto, y espero el retorno de la funcion addDoc
        const docRef = await addDoc(productsRef, productData)
        
        // retorno el id del producto recien subido a firebase
        return docRef.id
    } catch (error) {
        console.error("Error al crear el producto: ", error)
        throw error
    }

}