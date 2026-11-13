import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import "./Login.css"
import { useState } from "react"

export const Login = () => {
    const {login} = useAuth()       // customHook
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email:"",
        password:"",
    })

    // mantiene los valores actualizados ante cualquier cambio en los inputs
    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = async(e) => {
        // Proceso el login a firebase, como tiene comunicacion a un servicio externo await
        e.preventDefault()

        try{
            await login(formData.email, formData.password)
            // replace: true es apra no poder volver atras y ver info sensible del login
            navigate("/admin", {replace: true})
        } catch (error) {
            console.error(error)
            alert("Error al iniciar sesión")
        }
    }

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <h2>Iniciar sesión</h2>

            <div className="form-group">
                <label>Email</label>
                <input 
                    type="email"
                    name="email"
                    placeholder="Correo electronico"
                    value={formData.email}
                    onChange={handleChange}     
                    required           
                />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input 
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={formData.password}
                    onChange={handleChange}                
                    required
                />
            </div>

            <button className="btn bg-primary" type="submit">
                Ingresar
            </button>
        </form>
    )
}