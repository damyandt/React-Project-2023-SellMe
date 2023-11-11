import { Link } from 'react-router-dom';
import { login } from '../services/userService';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const Login = () => {
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const onChange = (e) => {
        setUserData(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();

        login(userData)
            .then(responce => {
                console.log(responce)
                localStorage.setItem('user', userData.email)
                navigate('/catalog')
            })
            .catch((err) => console.log(err))
    }
    return (
        <section>
            <div className="left">
                <form id="login" method="POST" onSubmit={onSubmit}>
                    <h3>Login to Your Acount</h3>
                    <p>Sign in using social networks</p>
                    <div className="icons">
                        <a href="#" className="fa fa-facebook"></a>
                        <a href="#" className="fa fa-instagram"></a>
                        <a href="#" className="fa fa-twitter"></a>
                    </div>
                    <hr className="hr-text gradient" data-content="OR" />
                    <div className='inputs'>
                        <input type="email" id="email" name="email" placeholder="Email" value={userData.email} onChange={onChange} />

                        <input type="password" id="password" name="password" placeholder="Password" value={userData.password} onChange={onChange} />

                        <button>Sign in</button>
                    </div>
                </form>
            </div>
            <div className="right">
                {/* <img className='imgLogin' src="https://4kwallpapers.com/images/wallpapers/beach-aerial-view-waves-ocean-macbook-pro-ios-11-mac-os-3840x2160-6422.jpg" alt='backgroundPhoto' /> */}
                <img className='imgLogin' src="./photos/vilito.jpeg" alt='backgroundPhoto' />
                <p className='textImg'>New Here?</p>
                <p className='textImg1'>Sign up and discover a great amount of new opportunities!</p>

                <Link to="/register"><button className='signUp'>Sign up</button></Link>
            </div>
        </section>
    )
}