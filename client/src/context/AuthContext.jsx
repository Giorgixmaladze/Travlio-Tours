import { createContext, useState } from "react"
import axios from "axios"

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const signup = async (userData) => {
        try{
            const response = await axios.post("http://localhost:3000/api/auth/signup",userData)
            console.log(response.data)
        }catch(error){
            console.log(error)
        }
    }

    

    return (
        <AuthContext.Provider value={{signup}}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthProvider
