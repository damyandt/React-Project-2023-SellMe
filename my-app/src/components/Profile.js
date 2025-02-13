import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/authContext";
import { Link, useNavigate } from "react-router-dom";
import { ClothingContext } from "../contexts/clothingContext";
import { ProfileCard } from "./userPost";
import { responceDataStructure } from "../utils/structureData";
import { LikedPosts } from "./LikedPosts";

export default function Profile() {
    const { isAuthenticated, userEmail } = useContext(AuthContext);
    const { clothing } = useContext(ClothingContext);
    const navigate = useNavigate();

    const [OverviewClicked, setOverview] = useState(true);
    const [postesClicked, setPosts] = useState(false);
    const [LikedClicked, setLiked] = useState(false);
    const [AccInfo, setAccInfo] = useState(false);

    let allPosts = [];
    let userPosts = [];
    let likedPosts = [];
    let username = userEmail.split("@")[0];


    if (username[0] === "\"") {
        username = username.slice(1)
    }

    useEffect(() => {
        if (!isAuthenticated) {
            return navigate('/login');
        }
    }, [isAuthenticated, navigate])

    for (const x of Object.values(clothing)) {
        allPosts.push(x);
        if (x.likes) {
            const responce = responceDataStructure(x.likes, username);
            if (responce === true) {
                likedPosts.push(x);
            }
        }
    }
    userPosts = allPosts.filter((x) => x.ownerId === username);

    const showPosts = () => {
        setAccInfo(false);
        setOverview(false);
        setLiked(false);
        setPosts(true);
    }
    const showOverview = () => {
        setAccInfo(false);
        setOverview(true);
        setLiked(false);
        setPosts(false);
    }
    const showAccInfo = () => {
        setAccInfo(true);
        setOverview(false);
        setLiked(false);
        setPosts(false);
    }
    const showLiked = () => {
        setAccInfo(false);
        setOverview(false);
        setLiked(true);
        setPosts(false);
    }

    const btns = true;

    return (
        <>
            <div className="profilePage">
                <div className="discount">
                    <p>NEW HERE? Get 15% off everything!</p>
                    <p>With code: HELLOSELLME</p>
                </div>
                <div className="accountWrapper">
                    <div className="accMenu">
                        <p>Your Account</p>
                        <ul>
                            <li><button onClick={showOverview}>Overview</button> </li>
                            <li><button onClick={showPosts}>Posts</button></li>
                            <li> <button onClick={showAccInfo}>Personal Details</button></li>
                            <li> <button onClick={showLiked}>Liked</button></li>
                        </ul>
                    </div>
                    {/* overview */}
                    {OverviewClicked && <div className="staticInfo">
                        <img src="./photos/acc.jpeg" className="acc" alt="acc"/>
                        <div className="profileText1">
                            <p>Your Account</p>
                            <p className="text">Welcome to your private corner of SellMe. You can manage your posts, returns and account info right here.</p>
                        </div>
                        <div className="needMargin">
                            <svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 448 512"><path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" /></svg>

                            <div className="accountBtn">
                                <p className="firstP">You’re all caught up.</p>
                                <p>When we have relevant updates, you will find them here.</p>
                                <Link to="/catalog">Continue shopping</Link>
                            </div>
                        </div>

                    </div>}
                    {/* posts */}
                    {postesClicked && <div className="staticInfo">
                        <img src="./photos/acc.jpeg" className="acc" alt="acc"/>

                        {userPosts.length !== 0 ? <div className="postText"><p className="profileText1">Your Posts</p><p className="text2">Here you can find all your posts!</p></div> : <p className="profileText1">You have no posts yet!</p>}
                        <div className="profileItemsWrapper">
                            {userPosts.map((x) => (
                                <ProfileCard key={x.id} {...x} buttuns={btns} />
                            ))}
                        </div>
                    </div>}

                    {AccInfo && <div className="staticInfo padd">
                        <img src="./photos/acc.jpeg" className="acc" alt="acc"/>

                        <div className="postText">
                            <p className="profileText1">Personal Details</p>
                            <p className="text2">View and update your details right here. Manage your login options and passwords here.</p>
                        </div>
                        <div>
                            <div className="forChange">
                                <div >
                                    <svg xmlns="http://www.w3.org/2000/svg" height="100" width="55" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" /></svg>
                                    <div className="personalInfoText">
                                        <p><strong>Username</strong></p>
                                        <p>{username}</p>
                                    </div>
                                </div>
                                <hr />
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="100" width="55" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" /></svg>
                                    <div className="personalInfoText">
                                        <p><strong>Email</strong></p>
                                        <p>{userEmail.slice(1, userEmail.length - 1)}</p>
                                    </div>
                                </div>
                                <hr />
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="100" width="55" viewBox="0 0 448 512"><path d="M144 144c0-44.2 35.8-80 80-80c31.9 0 59.4 18.6 72.3 45.7c7.6 16 26.7 22.8 42.6 15.2s22.8-26.7 15.2-42.6C331 33.7 281.5 0 224 0C144.5 0 80 64.5 80 144v48H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64H144V144z" /></svg>
                                    <div className="personalInfoText">
                                        <p><strong>Password</strong></p>
                                        <p>*************</p>
                                    </div>
                                </div>
                            </div>
                            <div className="howToText">
                                <p>If you want to change something from your personal details, please send email to sellMe@av.bg or call this number: +44 567 4352</p>
                            </div>
                        </div>


                    </div>}
                    {LikedClicked && <div className="staticInfo">
                        <img src="./photos/acc.jpeg" className="acc" alt="acc"/>

                        {likedPosts.length !== 0 ? <div className="postText"><p className="profileText1">Liked Posts</p><p className="text2">Here you can find all liked posts!</p></div> : <p className="profileText1">You have no liked posts yet!</p>}
                        <div className="profileItemsWrapper">
                            {likedPosts.map((x) => (
                                <LikedPosts key={x.id} {...x} />
                            ))}

                        </div>

                    </div>
                    }


                </div>






            </div>
        </>

    )
}