import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Contact } from "./components/Contact/Contact";
import { CartView } from "./components/Cart/CartView";
import { ProductFormContainer } from "./components/adminComponents/ProductForm/ProductFormContainer";
import { ProductSuccess } from "./components/adminComponents/ProductSuccess";
import { PublicLayout } from "./layouts/PublicLayout";
import { AdminLayout } from "./layouts/AdminLayout";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { Login } from "./components/Login/Login";
import { Dashboard } from "./components/adminComponents/Dashboard/Dashboard";

function App() {
  return (
    <>
        {/* # --------------- Rutas publicas ----------------- */}
        <Routes>
          <Route element={<PublicLayout />}>
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
          </Route>


          {/* Importar el comonente del Login */}
          <Route path="/admin/login" element={<Login />}/>

          {/* 
          Si el Route que envuelve rutas, se le declara un path, entonces, todo lo que tiene 
          va a quedar anidado dentro de la ruta que tenga el path. En este caso /admin
          */}
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute> 
                <AdminLayout /> 
              </ProtectedRoute>
            }
          >
            {/* Rutas de administrador */}
            {/* Como tiene index, es lo primero que se renderia al ingresar a /admin*/}
            <Route index element={<Navigate to={"dashboard"} />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route 
              path="products/new" 
              element={<ProductFormContainer />}
            />
            <Route 
              path="product/success/:id"
              element={<ProductSuccess />}
            /> 
          </Route>

        </Routes>

    </>
  );
}

export default App;
