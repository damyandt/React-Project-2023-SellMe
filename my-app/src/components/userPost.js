import { Link } from "react-router-dom";

export const ProfileCard = (data) => {


    return (
        <>
            <div className="profileCardWrapper">
                <div>
                    <Link className="ProfileLinkCss" to={`/${data.categorie}/${data.gender}/${data.type}/${data.id}/details`}>
                        <img className="ProfileCardImg" src={data.photo1} />
                    </Link>

                    <div className="profileItemDetails">
                        <Link to={`/${data.categorie}/${data.gender}/${data.type}/${data.id}/details`}>{data.name}</Link>
                    </div>
                </div>

                <div className="editDelBtn">
                    <ul>
                        <li><button>Delete</button></li>
                        <li><button>Edit</button></li>
                    </ul>

                </div>

            </div>
        </>
    )
}