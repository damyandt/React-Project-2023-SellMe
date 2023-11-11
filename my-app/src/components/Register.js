import { useState } from 'react';
import { Link } from 'react-router-dom';
import { register } from '../services/userService';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [rePassword, setRePassword] = useState('');

    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    })

    const onChange = (e) => {
        setUserData(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }))
    }

    const onRepassChange = (e) => {
        setRePassword(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (userData.password != rePassword) {
            return alert('Passwords don\'t match!')
        }
        register(userData)
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
                    <h3>Make new Account</h3>
                    <p>Sign up using social networks</p>
                    <div className="icons">
                        <a href="#" className="fa fa-facebook"></a>
                        <a href="#" className="fa fa-instagram"></a>
                        <a href="#" className="fa fa-twitter"></a>
                    </div>
                    <hr className="hr-text gradient" data-content="OR" />
                    <div className='inputs1'>
                        <input type="email" name='email' id="email" placeholder="Email" value={userData.email} onChange={onChange} />
                        <input type="password" name='password' id="password" placeholder="Password" value={userData.password} onChange={onChange} />
                        <input type="password" name='rePassword' id="rePassword" placeholder="Repeat password" value={rePassword} onChange={onRepassChange} />

                        <button>Sign up</button>
                    </div>
                </form>
            </div>
            <div className="right">
                <img className="imgLogin" src="https://4kwallpapers.com/images/wallpapers/beach-aerial-view-waves-ocean-macbook-pro-ios-11-mac-os-3840x2160-6422.jpg" alt='backgroundPhoto' />
                <p className='textImg2'>Already have an account?</p>
                <p className='textImg1'>Sign in your profile and start using the opportunities!</p>

                <Link to="/login"><button className='signUp'>Sign in</button></Link>
            </div>
        </section>
    )
}