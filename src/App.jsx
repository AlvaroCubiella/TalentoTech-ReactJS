import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";

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

          <Route path="/products/gas" element={<h1>Accesorios para Gas</h1>} />
          <Route
            path="/products/agua"
            element={<h1>Accesorios para Agua</h1>}
          />
          <Route path="/product/:id" element={<ItemDetailContainer />} />

          <Route path="/cart" element={<h1>Carrito provisorio</h1>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
