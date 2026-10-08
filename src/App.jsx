import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Contact } from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer
                titulo={"Lista de productos"}
                url={"/data/products.json"}
              />
            }
          />
          
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          {/* Pendiente para implementar el filtro por categoria */}
          <Route 
            path="/products/:subcategory" 
            element={
              <ItemListContainer 
                titulo={"Accesorios"}
                url={"/data/products.json"}
              />
            } 
          />

          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<h1>Carrito provisorio</h1>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
