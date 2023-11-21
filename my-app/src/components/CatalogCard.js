import { Link } from "react-router-dom"
export const CatalogCard = (data) => {

    return (
        <>
            <div className="catalogCardWrapper">

                <Link className="LinkCss" to={`/${data.categorie}/${data.gender}/${data.type}/${data.id}/details`}>
                    <img className="CatalogCardImg" src={data.photos.photo1} />
                    <img className="CatalogCardImg2" src={data.photos.photo2} />
                </Link>

                <div className="catalogItemDetails">
                    <p>{data.name}</p>
                    <p>{data.price}$</p>
                </div>

            </div>
        </>
    )
}