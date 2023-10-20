import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <nav>
            <div>
                <ul>
                    {/* <li><Link to="/">Home</Link></li>
                    <li><Link to="/catalog">Catalog</Link></li>
                     */}

                    <li className='btnCategory'><a>Categories</a></li>
                    <i class="fa fa-angle-down"></i>
                </ul>
            </div>

            <div>
                <a href="#" class="fa fa-search"></a>
                <textarea name="search" id="search" className='search' placeholder='Search for brand, model, ...'></textarea>
            </div>
            <div className='leftBtns'>
                <ul>
                    <li><Link to="/sell">Sell</Link></li>
                    <li><Link to="/sell">Help</Link></li>
                    <li> <Link to="/login">Sign in</Link> </li>
                    {/* <li> <Link to="/register">Register</Link> </li> */}
                </ul>
                {/* <ul >
                    <li> <a>Profile</a></li>
                    <li> <a>Logout</a></li>
                </ul> */}
            </div>
        </nav>
    )
}