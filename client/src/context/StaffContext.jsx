import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const StaffContext = createContext();

const StaffContextProvider = ({ children }) => {
    const [staff, setStaff] = useState([])
    const getAllStaff = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/staff`);
            setStaff(response.data);
        } catch (error) {
            console.error("Error fetching staff:", error);
            return [];
        }
    };


    useEffect(() => {
        getAllStaff()
    }, [])

    console.log(staff)
    return (
        <StaffContext.Provider value={{ staff, getAllStaff }}>
            {children}
        </StaffContext.Provider>
    );
};



export default StaffContextProvider