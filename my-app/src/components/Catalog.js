import React, { useContext } from "react"
import { useLocation, useParams } from "react-router-dom";
import { ClothingContext } from "../contexts/clothingContext";
import { CatalogCard } from "./CatalogCard";

export const Catalog = () => {

    const location = useLocation();
    const data = location.state;


    const { clothing } = useContext(ClothingContext);
    const { categorie, accessories, gender, type } = useParams();
    let newClothing = [];
    for (const x of Object.values(clothing)) {
        newClothing.push(x);
    }
    let newClothing1 = []
    let newClothing2 = []
    let newClothing3 = []

    if (data != null) {
        newClothing1 = newClothing.filter(x => (x.name).toLowerCase().includes(data.value.toLowerCase()));
        newClothing2 = newClothing.filter(x => (x.brand).toLowerCase().includes(data.value.toLowerCase()));
        newClothing2 = newClothing.filter(x => (x.type).toLowerCase().includes(data.value.toLowerCase()));

        if (newClothing2.length > newClothing1.length && newClothing2.length > newClothing3.length) {
            newClothing = newClothing2
        } else if (newClothing1.length > newClothing2.length && newClothing1.length > newClothing3.length) {
            newClothing = newClothing1
        } else {
            newClothing = newClothing3
        }
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
            {gender == "unisex" ? <h3 className="catalogTitle"><p>All {gender == "all" ? "Accosories" : `${type}`} </p></h3> : type == 'all' || type == undefined ?
                <h3 className="catalogTitle"><p>All {gender != undefined ? `${gender}\`s` : ""} clothing </p></h3> :
                <h3 className="catalogTitle"><p>{gender != "unisex" ? `${gender}\`s` : ""} {type}</p></h3>}
            {/* {type == 'all' || type == undefined ?
                <h3 className="catalogTitle"><p>All {gender != undefined ? `${gender}\`s` : ""} clothing </p></h3> :
                <h3 className="catalogTitle"><p>{gender != "unisex" ? `${gender}\`s` : ""} {type}</p></h3>} */}

            <hr className="hr1" />

            <div className="catalogItemsWrapper">
                {newClothing.map((x) => (
                    <CatalogCard key={x.id} {...x} />
                ))}
            </div>
        </>
    )
}