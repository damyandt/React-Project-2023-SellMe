import { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/authContext';


export default function Header() {
    const { isAuthenticated } = useContext(AuthContext);


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
                                            <li><Link to="/catalog/clothing/man/bestSellers">Best sellers</Link></li>
                                            <li><Link to="/catalog/clothing/man/hoodies">Hoodies & Sweatshirts</Link></li>
                                            <li><Link to="/catalog/clothing/man/t-shirts">T-Shirts & Tops</Link></li>
                                            <li><Link to="/catalog/clothing/man/jeans">Jeans</Link></li>
                                            <li><Link to="/catalog/clothing/man/jackets">Jackets and coats</Link></li>
                                            <li><Link to="/catalog/clothing/man/swimmwear">Swimmwear</Link></li>
                                            <li><Link to="/catalog/clothing/man/underwear">Underwear</Link></li>
                                        </div>

                                        <div className='genders'>
                                            <li className='link'><Link to="/catalog/clothing/woman/all">Woman</Link></li>
                                            <li><Link to="/catalog/clothing/woman/all">View all</Link></li>
                                            <li><Link to="/catalog/clothing/woman/bestSellers">Best sellers</Link></li>
                                            <li><Link to="/catalog/clothing/woman/hoodies">Hoodies & Sweatshirts</Link></li>
                                            <li><Link to="/catalog/clothing/woman/t-shirts">T-Shirts & Tops</Link></li>
                                            <li><Link to="/catalog/clothing/woman/dresses">Dresses and skirts</Link></li>
                                            <li><Link to="/catalog/clothing/woman/jackets">Jackets and coats</Link></li>
                                            <li><Link to="/catalog/clothing/woman/jeans">Jeans</Link></li>
                                            <li><Link to="/catalog/clothing/woman/underwear">Underwear</Link></li>
                                            <li><Link to="/catalog/clothing/woman/swimmwear">Swimmwear</Link></li>

                                        </div>

                                        <div className='genders'>
                                            <li className='link'><Link to="/register">Accessories</Link></li>
                                            <li><Link to="/catalog/accessories/unisex/all" type='viewAll'>View all</Link></li>
                                            <li><Link to="/catalog/accessories/unisex/bestSellers">Best sellers</Link></li>
                                            <li><Link to="/catalog/accessories/unisex/sunglasses">Sunglasses</Link></li>
                                            <li><Link to="/catalog/accessories/unisex/bags">Bags and suitcases</Link></li>
                                            <li><Link to="/catalog/accessories/unisex/umbrellas">Umbrellas</Link></li>
                                            <li><Link to="/catalog/accessories/unisex/hats">Hats</Link></li>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </ul>
                    </div>
                    <div>
                        <a href="#" className="fa fa-search"></a>
                        <textarea name="search" id="search" className='search' placeholder='Search for brand, model, ...'></textarea>
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