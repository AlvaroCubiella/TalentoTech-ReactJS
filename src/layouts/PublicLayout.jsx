import { Footer } from "../components/Footer/Footer"
import { Header } from "../components/Header/Header"
import { Outlet } from "react-router-dom"

export const PublicLayout = () => {
    //Outlet es como un children, para que renderice cada 
    // Route que este envolviendo el PublicLayout
    return(
        <>
            <Header />
            <main>    
                <Outlet/>    
            </main>        
            <Footer />
        </>
    )
}