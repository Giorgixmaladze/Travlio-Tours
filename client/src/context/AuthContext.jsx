import { createContext, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    const signup = async (userData) => {
        try {
            const response = await axios.post(import.meta.env.VITE_API_URL + "/api/auth/register", userData)
            console.log(response.data)
            return { success: true, data: response.data };
        } catch (error) {
            console.log(error)
            return {
                success: false,
                message: error.response?.data?.message || "An error occurred during sign up"
            };
        }
    }



    const login = async (userData) => {
        try {
            const res = await axios.post(import.meta.env.VITE_API_URL + "/api/auth/login", userData)
            console.log(res.data)
            return { success: true, data: res.data };
        } catch (error) {
            console.log(error)
            return {
                success: false,
                message: error.response?.data?.message || "An error occurred during login"
            };
        }
    }


    return (
        <AuthContext.Provider value={{ signup, login }}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthProvider
