import { Link } from "react-router-dom"
export const Card = (data) => {

    return (
        <>
            <div className="cardWrapper">
                {data.brand == "accessories" && <Link to={`/catalog/${data.brand}/unisex/all`}><img src={data.img} alt="for card" /></Link>}
                {data.brand != "accessories" && <Link to={`/catalog/clothing/${data.brand}/all`}><img src={data.img} alt="for card" /></Link>}
                <p>{data.brand} Collection</p>
            </div>
        </>
    )
}