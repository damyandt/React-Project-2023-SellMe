import { Link } from "react-router-dom";
import { Card } from "./Card";

export default function Home() {
console.log(Number(true))

    return (
        <>
            <div className="clothing">
                <div className="mansClothing">
                    <Link to="/catalog/clothing/man/all" className="manBtn">Shop Man</Link>
                </div>
                <div className="womansClothing">
                    <Link to="/catalog/clothing/woman/all" className="womanBtn">Shop Woman</Link>
                </div>
            </div>
            <div className="delivery">
                <div className="textDelivery">  <a className="fa fa-truck"></a>Worldwide delivery!</div>
            </div>
            <div className="appMsg">
                <p>THE SELL ME APP</p>
                <p>Soon new application, so you can shop fast and easy from your phone!</p>
                <p>(Available on App Store   <img className="app-store" src="./photos/app-store-ios.svg" />   and Google Play   <img className="app-store" src="./photos/google-play.svg" />)</p>
            </div>
            <div className="cards">
                <Card img={"./photos/adidas1.avif"} brand={"accessories"} />
                <Card img={"./photos/nike.webp"} brand={"woman"}/>
                <Card img={"./photos/champion.webp"} brand={"man"}/>

            </div >
           

        </>

    )
}