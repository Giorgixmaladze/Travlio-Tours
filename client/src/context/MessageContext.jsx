import { createContext, useContext, useState } from "react";
export const MessageContext = createContext();



const MessageProvider = ({ children }) => {
    const sendMessage = async (messageData) => {
        const response = await fetch("http://localhost:3000/api/messages/send-message", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
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

export { MessageProvider }