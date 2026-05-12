import { createContext, useContext, useState } from "react";
export const MessageContext = createContext();



const MessageProvider = ({ children }) => {
    const sendMessage = async (messageData) => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/messages/send-message`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(messageData),
        });
        return response.json();
    }
    return (
        <MessageContext.Provider value={{ sendMessage }}>
            {children}
        </MessageContext.Provider>
    )
}

export default MessageProvider