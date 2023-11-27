import { Link } from "react-router-dom"
export const CatalogCard = (data) => {


    return (
        <>
            <div className="catalogCardWrapper">

                <Link className="LinkCss" to={`/${data.categorie}/${data.gender}/${data.type}/${data.id}/details`}>
                    <img className="CatalogCardImg" src={data.photo1} />
                    <img className="CatalogCardImg2" src={data.photo2} />
                </Link>
  
                <div className="catalogItemDetails">
                    <Link to={`/${data.categorie}/${data.gender}/${data.type}/${data.id}/details`}>{data.name}</Link>
                    <Link to={`/${data.categorie}/${data.gender}/${data.type}/${data.id}/details`}>{data.price}$</Link>
                </div>

            </div>
        </>
    )
}