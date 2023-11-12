import { Link } from "react-router-dom"
export const Card = (data) => {

    return (
        <>
            <div className="cardWrapper">
                <Link to="/catalog"><img src={data.img} /></Link>
                <p>Everything from {data.brand}</p>
            </div>
        </>
    )
}