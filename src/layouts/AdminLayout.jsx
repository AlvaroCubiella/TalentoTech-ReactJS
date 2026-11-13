import { Outlet } from "react-router-dom"

export const AdminLayout = () => {
    //Outlet es como un children, para que renderice cada 
    // Route que este envolviendo al AdminLayout, son la vistas protegidas
    return(
        <>            
            <main>    
                <Outlet/>    
            </main>                    
        </>
    )
}
