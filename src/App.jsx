import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Contact } from "./components/Contact/Contact";
import { CartView } from "./components/Cart/CartView";

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
            path="/products/:category" 
            element={
              <ItemListContainer 
                titulo={"Accesorios"}
                url={"/data/products.json"}
              />
            } 
          />

          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<CartView />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
