import axios from "axios";
import { createContext, useContext, useState } from "react";

export const AdviceContext = createContext();

export const AdviceProvider = ({ children }) => {
    const [advice, setAdvice] = useState({});

    // Function to fetch advice and update the state
    const fetchAdvice = async () => {
        try {
            const response = await axios.get(`https://api.adviceslip.com/advice`);
            setAdvice(response.data.slip); 
        } catch (error) {
            console.error('Error fetching advice:', error);
        }
    };

    // Provide `advice` and `fetchAdvice` to the context
    return (
        <AdviceContext.Provider value={{ advice, fetchAdvice }}>
            {children}
        </AdviceContext.Provider>
    );
};

// Custom hook to use the AdviceContext
export const useAdviceContext = () => useContext(AdviceContext);
