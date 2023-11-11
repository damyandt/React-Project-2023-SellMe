import { Link } from "react-router-dom"
export const Card = () => {
    return (
        <>
            <div className="cards">
                <div className="cardWrapper">
                    <Link to="/catalog"><img src="./photos/nike.webp" /></Link>
                    <p>Everything from Nike</p>
                </div>
                <div className="cardWrapper">
                    <Link to="/catalog"><img src="./photos/adidas1.avif" /></Link>
                    <p>Everything from Adidas</p>
                </div>
                <div className="cardWrapper">
                    <Link to="/catalog"><img src="./photos/champion.webp" /></Link>
                    <p>Everything from Champion</p>
                </div>
            </div>

        </>
    )
}