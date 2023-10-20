import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <section>
            <div className="left">
                <form id="login" method="POST">
                    <h3>Login to Your Acount</h3>
                    <p>Sign in using social networks</p>
                    <div className="icons">
                        <a href="#" class="fa fa-facebook"></a>
                        <a href="#" class="fa fa-instagram"></a>
                        <a href="#" class="fa fa-twitter"></a>
                    </div>
                    <hr class="hr-text gradient" data-content="OR" />
                    <div className='inputs'>
                        <input type="email" id="email" placeholder="Email" />

                        <input type="password" id="password" placeholder="Password" />

                        <button>Sign in</button>
                    </div>
                </form>
            </div>
            <div className="right">
                <img src="https://4kwallpapers.com/images/wallpapers/beach-aerial-view-waves-ocean-macbook-pro-ios-11-mac-os-3840x2160-6422.jpg" alt='backgroundPhoto' />
                <p className='textImg'>New Here?</p>
                <p className='textImg1'>Sign up and discover a great amount of new opportunities!</p>

                <Link to="/register"><button class='signUp'>Sign up</button></Link>
            </div>
        </section>
    )
}