import { Link } from "react-router-dom"
export const Card = (data) => {

    return (
        <>
            <div className="cardWrapper">
                <Link to="/catalog"><img src={data.img} alt="for card"/></Link>
                <p>Everything from {data.brand}</p>
            </div>
        </>
    )
}