import { Outlet } from "react-router-dom"
import { Header } from "../components/Header/Header"

export const AdminLayout = () => {
    //Outlet es como un children, para que renderice cada 
    // Route que este envolviendo al AdminLayout, son la vistas protegidas
    return(
        <>
            <Header />            
            <main>    
                <Outlet/>    
            </main>                    
        </>
    )
}
