import { useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function Header() {

    let isAuthenticated = false;
    useEffect(() => {
        isAuthenticated = !!localStorage.getItem("user");
    }, []);


    return (
        <>
            <div className='everything'>
                <Link to="/"><img src="./photos/logo.jpeg" className='logo' /></Link>
                <nav>
                    <div>
                        <ul>
                            <li className='btnCategory'><a>Categories</a></li>
                            <i className="fa fa-angle-down"></i>
                        </ul>
                    </div>

                    <div>
                        <a href="#" className="fa fa-search"></a>
                        <textarea name="search" id="search" className='search' placeholder='Search for brand, model, ...'></textarea>
                    </div>
                    <div className='leftBtns'>
                        <ul>
                            <li><Link to="/sell">Sell</Link></li>
                            <li><Link to="/sell">Help</Link></li>
                            {!isAuthenticated && <li><Link to="/login">Sign in</Link></li>}
                            {isAuthenticated && <li><a>Logout</a></li>}
                        </ul>
                        {/* <ul >
                    <li> <a>Profile</a></li>
                    
                </ul> */}
                    </div>
                </nav>
            </div>
        </>
    )
}