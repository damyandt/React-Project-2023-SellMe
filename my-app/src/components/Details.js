import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState, } from "react";
import { getAll, getOne } from "../services/clothingService";
import { like, unlike } from "../services/likeService";
import { getCommentId, responceDataStructure } from "../utils/structureData";
import { SizeGuide } from "./sizeGuide";


export default function Details() {
    const { id, gender, type, categorie } = useParams();
    const [product, setProduct] = useState([]);
    const [sizeGuide, showTheSizeGuide] = useState(false);
    const [heart, showHeart] = useState(false);

    const [isAlreadyLiked, setIsAlreadyLiked] = useState(false);

    const username = localStorage.getItem("user").split("@")[0].slice(1)
    console.log(username)

    useEffect(() => {
        getOne(id)
            .then(data => {
                if (data.likes) {
                    const responce = responceDataStructure(data.likes, username);
                    setIsAlreadyLiked(responce)
                }

                setProduct(data);
            })
            .catch(err => console.log(err))
    }, [id])


    const showSizeGuide = () => {
        showTheSizeGuide(sizeGuide => !sizeGuide)
    }
    const hideSizeGuide = () => {
        showTheSizeGuide(false)
    }
    const likePost = (e) => {
        e.preventDefault();

        showHeart(heart => !heart)
        like(id, username).then((responce) => {
            setIsAlreadyLiked(true);
        }).catch((err) => console.log(err));
    }
    const unlikePost = (e) => {
        e.preventDefault();

        showHeart(heart => !heart)
        const idComment = ''
        getOne(id).then(data => {
            const responce = responceDataStructure(data.likes, username);
            setIsAlreadyLiked(responce);
            idComment = getCommentId(idComment);
            setIsAlreadyLiked(false);
        }).catch(err => console.log(err))

        unlike(id, idComment).then(() => {
            setIsAlreadyLiked(false);
        })
    }

    return (
        <>
            <div className="everythingDetails" id="blur">
                <div className="discount">
                    <p>NEW HERE? Get 15% off everything!</p>
                    <p>With code: HELLOSELLME</p>
                </div>
                <p></p>
                <p className="path"><Link to="/">SellMe.com</Link> / <Link to="/catalog">catalog</Link> / <Link to={`/catalog/${categorie}/${gender}/all`}>{gender}</Link> / <Link to={`/catalog/${categorie}/${gender}/${type}`}>{type}</Link> / <Link to={`/${categorie}/${gender}/${type}/${id}/details`} className="strong">{product.name}</Link></p>
                <p className="detailsName">{product.name}</p>
                <div >
                    <div className="photos">
                        <img className="detailsImg" src={product.photo1} />
                        <img className="detailsImg" src={product.photo2} />
                        <img className="detailsImg" src={product.photo3} />
                        <img className="detailsImg" src={product.photo4} />
                    </div >
                    <div className="detailsText">
                        <div className="brandAndLove">
                            <p className="brand">{product.brand}</p>
                            {username == "}" ? "" : isAlreadyLiked ?
                                <svg onClick={unlikePost} xmlns="http://www.w3.org/2000/svg" height="50" width="50" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" /></svg> :
                                <svg onClick={likePost} xmlns="http://www.w3.org/2000/svg" height="50" width="50" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>
                            }
                        </div>

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
                        <div className="deliveryBox1">
                            <p><strong>Contacts info</strong></p>
                            <p><svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>{product.phone}</p>
                        </div>

                    </div>
                </div>
            </div>
            {sizeGuide && <div className="imgAndBtn"><SizeGuide /><button onClick={hideSizeGuide}><svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg></button></div >}
        </>
    )
}
