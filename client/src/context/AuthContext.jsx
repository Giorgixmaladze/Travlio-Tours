import { createContext, useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        // Check if user is already logged in on component mount
        const checkAuth = async () => {
            try {
                const res = await axios.get(`/api/auth/me`, {
                    withCredentials: true
                })
                if (res.data.status === "success" && res.data.data.user) {
                    setUser(res.data.data.user)
                }
            } catch (error) {
                console.log("No user logged in or token expired")
            } finally {
                setLoading(false)
            }
        }
        checkAuth()
        autoLogin()
    }, [])

    
    // controller for signup
    const signup = async (userData) => {
        try {
            const response = await axios.post(`/api/auth/signup`, userData, {
                withCredentials: true
            })
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


    /// controller for login
    const login = async (userData) => {
        try {
            const res = await axios.post(`/api/auth/login`, userData, {
                withCredentials: true
            })
            console.log(res.data)
            setUser(res.data.data.user)
            return { success: true, data: res.data };
        } catch (error) {
            console.log(error)
            return {
                success: false,
                message: error.response?.data?.message || "An error occurred during login"
            };
        }
    }

// controller for logout
    const logout = async () => {
        try {
            await axios.post(`/api/auth/logout`, {}, {
                withCredentials: true
            })
            setUser(null)
            navigate("/signin")
            return { success: true };
        } catch (error) {
            console.log(error)
            return {
                success: false,
                message: error.response?.data?.message || "An error occurred during logout"
            };
        }
    }
    // controller for auto-login
    const autoLogin = async () => {
        try {
            const res = await fetch(`/api/auth/auto-login`, {
                method: "GET",
                credentials: "include",
            })

            if (res.ok) {
                const data = await res.json()
                if (data.status === "success" && data.data.user) {
                    setUser(data.data.user)
                    console.log("Auto-login successful:", data.data.user)
                    navigate("/profile")
                }
            } else {

                setUser(null)
            }
        } catch (err) {
            console.error("Auto-login error:", err)
            setUser(null)
        }
    }

    // controller for updating profile
    const updateProfile = async (userData) =>{
        try{
            const res = await fetch(`/api/auth/update-profile`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify(userData)
            })
            if(res.ok){
                const data = await res.json()
                if(data.status === "success" && data.data.user){
                    setUser(data.data.user)
                    console.log("Profile updated successfully:", data.data.user)
                }
            }
            return { success: res.ok };
        }catch(error){
            console.log(error)
            return {
                success: false,
                message: error.message || "An error occurred during profile update"
            };
        }
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-50">
                <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        )
    }

    return (
        <AuthContext.Provider value={{ signup, login, user, logout, updateProfile }}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthProvider
