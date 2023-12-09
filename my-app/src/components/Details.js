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

    const showSizeGuide = () => {

    }

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
                        <p className="brand">{product.brand}</p>
                        <div className="priceBox">
                            <p className="price">{product.price} $</p><p className="vat">VAT included</p>
                        </div>

                        <div className="sizeGuide">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="20" viewBox="0 0 640 512"><path d="M211.8 0c7.8 0 14.3 5.7 16.7 13.2C240.8 51.9 277.1 80 320 80s79.2-28.1 91.5-66.8C413.9 5.7 420.4 0 428.2 0h12.6c22.5 0 44.2 7.9 61.5 22.3L628.5 127.4c6.6 5.5 10.7 13.5 11.4 22.1s-2.1 17.1-7.8 23.6l-56 64c-11.4 13.1-31.2 14.6-44.6 3.5L480 197.7V448c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64V197.7l-51.5 42.9c-13.3 11.1-33.1 9.6-44.6-3.5l-56-64c-5.7-6.5-8.5-15-7.8-23.6s4.8-16.6 11.4-22.1L137.7 22.3C155 7.9 176.7 0 199.2 0h12.6z" /></svg>
                                <p>Not sure of your size?</p>
                            </div>
                            <button onClick={showSizeGuide}>Size Guide</button>
                        </div>
                        <p className="size">Size: {product.size}</p>

                        <div className="deliveryBox">
                            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="20" viewBox="0 0 640 512"><path d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" /></svg>
                            <div className="delPrice"><p> <strong>2-5 workiing days</strong> </p> <p>Free</p></div>
                            <p>Standard delivery</p>
                        </div>
                        <div className="deliveryBox1">
                            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="20" viewBox="0 0 640 512"><path d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" /></svg>
                            <div className="delPrice"><p> <strong>1-2 workiing days</strong> </p> <p>8,99 $</p></div>
                            <p>Premium delivery</p>
                        </div>
                        <div className="deliveryBox1">
                            <p><svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M125.7 160H176c17.7 0 32 14.3 32 32s-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32s32 14.3 32 32v51.2L97.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L125.7 160z" /></svg><strong>100 day return policy</strong></p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
