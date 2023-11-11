import { Link } from "react-router-dom"

export default function Home() {
    return (
        <>
            <div>
                <div className="clothing">
                    <div className="mansClothing">
                        <Link to="/catalog" className="manBtn">Shop Man</Link>
                    </div>
                    <div className="womansClothing">
                        <Link to="/catalog" className="womanBtn">Shop Woman</Link>
                    </div>

                </div>
            </div>
        </>
    )
}