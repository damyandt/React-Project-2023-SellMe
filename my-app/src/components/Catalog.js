import React, { useContext } from "react"
import { useParams } from "react-router-dom";
import { ClothingContext } from "../contexts/clothingContext";
import { CatalogCard } from "./CatalogCard";

export const Catalog = () => {
    const { clothing } = useContext(ClothingContext);
    const { categorie, accessories, gender, type } = useParams();

    let newClothing = [];
    for (const x of Object.values(clothing)) {
        newClothing.push(x);

    }

    if (categorie != undefined) {
        newClothing = newClothing.filter(x => x.categorie == categorie)
    }
    if (gender != undefined) {
        newClothing = newClothing.filter(x => x.gender == gender);
    }
    if (type != undefined && type != 'all') {
        newClothing = newClothing.filter(x => x.type == type);
    }



    return (

        <>
            <div className="discount">
                <p>NEW HERE? Get 15% off everything!</p>
                <p>With code: HELLOSELLME</p>
            </div>
            {type == 'all' || type == undefined ?
                <h3 className="catalogTitle"><p>All {gender != undefined ? `${gender}\`s` : ""} clothing </p></h3> :
                <h3 className="catalogTitle"><p>{gender != "unisex" ? `${gender}\`s` : ""} {type}</p></h3>}

            <hr className="hr1" />

            <div className="catalogItemsWrapper">
                {newClothing.map((x) => (
                    <CatalogCard key={x.id} {...x} />
                ))}
            </div>
        </>
    )
}