import { Link, useParams } from "react-router-dom";
import { useEffect, useState, } from "react";
import { getOne } from "../services/clothingService";

export default function Details() {
    const { id, gender, type, categorie } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        getOne(id)
            .then(data => {
                setProduct(data);
            })
            .catch(err => console.log(err))
    }, [id])


    return (
        <>
            <div className="everythingDetails">
                <div className="discount">
                    <p>NEW HERE? Get 15% off everything!</p>
                    <p>With code: HELLOSELLME</p>
                </div>
                <p></p>
                <p className="path"><Link to="/">SellMe.com</Link> / <Link to="/catalog">catalog</Link> / <Link to={`/catalog/${categorie}/${gender}/all`}>{gender}</Link> / <Link to={`/catalog/${categorie}/${gender}/${type}`}>{type}</Link> / <Link to={`/${categorie}/${gender}/${type}/${id}/details`} className="strong">{product.name}</Link></p>
                <p className="detailsName">{product.name}</p>
                <div>
                    <div className="photos">
                        <img className="detailsImg" src={product.photo1} />
                        <img className="detailsImg" src={product.photo2} />
                        <img className="detailsImg" src={product.photo3} />
                        <img className="detailsImg" src={product.photo4} />
                    </div >
                    <div className="detailsText">
                        <p>Brand:Brand: {product.brand}</p>
                        <p>Price: {product.price}$</p>
                        <p>Gender: {product.gender}</p>
                        <p>Size: {product.size}</p>
                    </div>
                </div>



            </div>
        </>
    )
}
