import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";

// declaro AuthContext como un contexto
export const AuthContext = createContext()

// Creo un custom hook que usara el contexto AuthContext
export const useAuth = () => {
    const context = useContext(AuthContext)

    // Lanzo un error si estamos fuera de contexto
    if (!context) {
        throw new Error("useAuth debe usarse dentro de un AuthProvider")
    }

    return context
}

export const AuthProvider = ({children}) => {
    // estado que va a compartir el contexto
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // auth: viene del config.js de firebase cuando se autentica
        // luego, onAuthStateChanged, necesita la instancia de auth (de config.js), se la pasamos y
        // nos retorna el usuario en firebaseUser el usuario logueado
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            setUser(firebaseUser)
            console.log(user)
            setLoading(false)
        })
        // se desmonta al terminar
        return unsubscribe
    }, [])
    
    const login = (email, password) => {
        // esto es para el formulario de login, por defecto ya es asincrona        
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = async () => {
        try {
            await signOut(auth)
        } catch (error) {
            console.error("Error al cerrar sesion: ", error)
        }
    }

    return (
        <AuthContext.Provider value={{ 
            user, 
            loading, 
            login, 
            logout 
        }}>
            {children}
        </AuthContext.Provider>
    )
}