import { createContext, useState, useEffect, useContext } from "react";
// import { useNavigate } from "react-router-dom";
import { getAll } from "../services/clothingService";

export const ClothingContext = createContext();

export const ClothingProvider = ({
    children
}) => {
    // const navigate = useNavigate();
    const [clothing, setClothing] = useState([]);


    useEffect(() => {
        getAll().then((result) => {
            setClothing(result)
   
        });
    }, []);

    const contextValues = {
        clothing
    }

    return (
        <ClothingContext.Provider value={contextValues}>
            {children}
        </ClothingContext.Provider>
    )
};

export const useCarContext = () => {
    const context = useContext(ClothingContext)

    return context;
}