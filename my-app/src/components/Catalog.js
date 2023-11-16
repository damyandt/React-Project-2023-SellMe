import React from "react"
import { useParams } from "react-router-dom";
import { getAll } from "../services/clothingService";

export const Catalog = () => {

    const { categorie, accessories, gender, type } = useParams();
    // console.log(categorie, accessories, gender, type)
    getAll();
    // const clothing = getAll();
    // console.log(clothing)

    return (
        <>
            <p>Catalog page!</p>
        </>
    )
}