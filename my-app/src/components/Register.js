import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Register() {

    const [email, setEmail] = useState('');
    const [password, setPasswoord] = useState('');
    const [rePassword, setRePassword] = useState('');


    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const onPasswordChange = (e) => {
        setPasswoord(e.target.value);
    }
    const onRepassChange = (e) => {
        setRePassword(e.target.value);
    }



    const onSubmit = (e) => {
        e.preventDefault();
        if(password != rePassword) {
            return alert('Passwords don\'t match!')
        }

        localStorage.setItem("user", email);
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
                        <input type="email" id="email" placeholder="Email" value={email} onChange={onEmailChange} />
                        <input type="password" id="password" placeholder="Password" value={password} onChange={onPasswordChange} />
                        <input type="password" id="rePassword" placeholder="Repeat password" value={rePassword} onChange={onRepassChange} />

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