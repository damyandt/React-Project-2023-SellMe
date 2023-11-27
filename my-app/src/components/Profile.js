import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/authContext";
import { useNavigate } from "react-router-dom";
import { ClothingContext } from "../contexts/clothingContext";
import { ProfileCard } from "./userPost";

export default function Profile() {
    const { isAuthenticated, userEmail } = useContext(AuthContext);
    const { clothing } = useContext(ClothingContext);
    const navigate = useNavigate();
    let userPosts = [];
    let username = userEmail.split("@")[0]
    if (username[0] === "\"") {
        username = username.slice(1)
    }

    console.log(username)

    useEffect(() => {
        if (!isAuthenticated) {
            return navigate('/login');
        }

    }, [""])

    for (const x of Object.values(clothing)) {
        userPosts.push(x);
    }
    userPosts = userPosts.filter((x) => x.ownerId == username);



    return (
        <>
            <div className="profilePage">
                <div className="discount">
                    <p>NEW HERE? Get 15% off everything!</p>
                    <p>With code: HELLOSELLME</p>
                </div>
                <h3 className="profileTitle">
                    <p >{username}`s Profile</p>
                    <p >Email: {userEmail.slice(1, userEmail.length - 1)}</p>
                </h3>

                <hr />
                {userPosts.length != 0 ? <p className="postsText">Your Posts:</p> : <p className="postsText">You have no posts yet!</p>}

                <div className="profileItemsWrapper">
                    {userPosts.map((x) => (
                        <ProfileCard key={x.id} {...x} />
                    ))}
                </div>
            </div>
        </>

    )
}