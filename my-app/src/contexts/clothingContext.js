import { createContext, useState, useEffect, useContext } from "react";

import { create, edit, getAll } from "../services/clothingService";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./authContext";
import { postValidation } from "../utils/validation";


export const ClothingContext = createContext();

export const ClothingProvider = ({
    children
}) => {
    const { userEmail } = useAuthContext();


    const navigate = useNavigate();
    const [clothing, setClothing] = useState([]);

    useEffect(() => {
        getAll().then((result) => {
            setClothing(result)
        });
    }, []);

    const onPostSubmit = async (data) => {
        data.ownerId = userEmail.split("@")[0].slice(1)

        const errors = postValidation(data);
        if (Object.values(errors).length > 0) {
            alert(Object.values(errors)[0]);
        } else {
            await create(data);
            navigate("/catalog");

            document.location.reload();
        }

    };
    const onEditSubmit = async (data, id) => {

        const errors = postValidation(data);
        if (Object.values(errors).length > 0) {
            alert(Object.values(errors)[0]);
        } else {

            await edit(id, data);
            navigate(`/${data.categorie}/${data.gender}/${data.type}/${id}/details`);

        }

    };

    const contextValues = {
        clothing,
        onPostSubmit,
        onEditSubmit
    }

    return (
        <ClothingContext.Provider value={contextValues}>
            {children}
        </ClothingContext.Provider>
    )
};

export const useClothingContext = () => {
    const context = useContext(ClothingContext)

    return context;
}