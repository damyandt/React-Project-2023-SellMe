import { Link } from "react-router-dom";


export const LikedPosts = (data) => {

    return (
        <>
            <div className="profileCardWrapper">
                <div>
                    <Link className="ProfileLinkCss" to={`/${data.categorie}/${data.gender}/${data.type}/${data.id}/details`}>
                        <img className="ProfileCardImg" src={data.photo1} alt="profile icon"/>
                    </Link>

                    <div className="profileItemDetails">
                        <Link to={`/${data.categorie}/${data.gender}/${data.type}/${data.id}/details`}>{data.name}</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

