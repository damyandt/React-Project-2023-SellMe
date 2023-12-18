import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/authContext';
import { Navigate } from "react-router-dom";


export default function Header() {
    const { isAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate();


    const search = (e) => {
        e.preventDefault();
        const value = document.getElementById("search").value;
        const data = { value: value };
        navigate("/catalog", {
            state: data
        });
    }


    return (
        <>
            <div className='everything'>
                <Link to="/"><img src="./photos/logo.jpeg" className='logo' /></Link>
                <nav>
                    <div>
                        <ul className='menu'>
                            <div className='categoriesBtn'>
                                <div>
                                    <Link className='btnCategory' to="/catalog">Categories</Link>
                                    <i className="fa fa-angle-down"></i>
                                </div>

                                <div className='dropdown-menu'>
                                    <ul>
                                        <div className='genders'>
                                            <li className='link'><Link to="/catalog/clothing/man/all">Man</Link></li>
                                            <li><Link to="/catalog/clothing/man/all">View all</Link></li>
                                            <li><Link to="/catalog/clothing/man/hoodies">Best sellers</Link></li>
                                            <li><Link to="/catalog/clothing/man/hoodies">Hoodies & Sweatshirts</Link></li>
                                            <li><Link to="/catalog/clothing/man/t-shirts">T-Shirts & Tops</Link></li>
                                            <li><Link to="/catalog/clothing/man/jeans">Jeans</Link></li>
                                            <li><Link to="/catalog/clothing/man/jackets">Jackets & coats</Link></li>
                                            <li><Link to="/catalog/clothing/man/swimmwear">Swimmwear</Link></li>
                                            <li><Link to="/catalog/clothing/man/underwear">Underwear</Link></li>
                                        </div>

                                        <div className='genders'>
                                            <li className='link'><Link to="/catalog/clothing/woman/all">Woman</Link></li>
                                            <li><Link to="/catalog/clothing/woman/all">View all</Link></li>
                                            <li><Link to="/catalog/clothing/woman/jeans">Best sellers</Link></li>
                                            <li><Link to="/catalog/clothing/woman/hoodies">Hoodies & Sweatshirts</Link></li>
                                            <li><Link to="/catalog/clothing/woman/t-shirts">T-Shirts & Tops</Link></li>
                                            <li><Link to="/catalog/clothing/woman/dresses">Dresses & skirts</Link></li>
                                            <li><Link to="/catalog/clothing/woman/jackets">Jackets & coats</Link></li>
                                            <li><Link to="/catalog/clothing/woman/jeans">Jeans</Link></li>
                                            <li><Link to="/catalog/clothing/woman/underwear">Underwear</Link></li>
                                            <li><Link to="/catalog/clothing/woman/swimmwear">Swimmwear</Link></li>

                                        </div>

                                        <div className='genders'>
                                            <li className='link'><Link to="/catalog/accessories/unisex/all">Accessories</Link></li>
                                            <li><Link to="/catalog/accessories/unisex/all" type='viewAll'>View all</Link></li>
                                            <li><Link to="/catalog/accessories/unisex/sunglasses">Best sellers</Link></li>
                                            <li><Link to="/catalog/accessories/unisex/sunglasses">Sunglasses</Link></li>
                                            <li><Link to="/catalog/accessories/unisex/bags">Bags & Suitcases</Link></li>
                                            <li><Link to="/catalog/accessories/unisex/umbrellas">Umbrellas</Link></li>
                                            <li><Link to="/catalog/accessories/unisex/hats">Hats</Link></li>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </ul>
                    </div>
                    <div>
                        <form onSubmit={search}>
                            <div>
                                <button onClick={search} className="fa fa-search search1"></button>
                                <input name="search" id="search" className='search' placeholder='Search for brand, model, ...' ></input>
                            </div>
                        </form>
                    </div>







                    <div className='leftBtns'>
                        <ul>
                            <li><Link to="/sell">Sell</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                            {!isAuthenticated && <li><Link to="/login">Sign in</Link></li>}
                            {isAuthenticated && <li><Link to="/logout">Logout</Link></li>}
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}