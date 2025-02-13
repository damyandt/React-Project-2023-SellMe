import { Link, useNavigate } from "react-router-dom";
import { deletePost } from "../services/clothingService";

export const ProfileCard = (data) => {
    const navigate = useNavigate();

    const deletePost1 = () => {
        deletePost(data.id);
    }

    const editPost = () => {
      navigate(`/${data.id}/edit`)
    }

    return (
        <>
            <div className="profileCardWrapper">
                <div>
                    <Link className="ProfileLinkCss" to={`/${data.categorie}/${data.gender}/${data.type}/${data.id}/details`}>
                        <img className="ProfileCardImg" src={data.photo1} alt="profileImg"/>
                    </Link>

                    <div className="profileItemDetails">
                        <Link to={`/${data.categorie}/${data.gender}/${data.type}/${data.id}/details`}>{data.name}</Link>
                    </div>
                </div>
                <div className="editDelBtn">
                    <button onClick={deletePost1}>Delete</button>
                    <button onClick={editPost}>Edit</button>
                </div>

            </div>
        </>
    )
}

