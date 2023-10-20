import { Link } from 'react-router-dom';

export default function Register() {
    return (
        <section>
            <div className="left">
                <form id="login" method="POST">
                    <h3>Make new Account</h3>
                    <p>Sign up using social networks</p>
                    <div className="icons">
                        <a href="#" class="fa fa-facebook"></a>
                        <a href="#" class="fa fa-instagram"></a>
                        <a href="#" class="fa fa-twitter"></a>
                    </div>
                    <hr class="hr-text gradient" data-content="OR" />
                    <div className='inputs1'>
                        <input type="email" id="email" placeholder="Email" />
                        <input type="password" id="password" placeholder="Password" />
                        <input type="password" id="rePassword" placeholder="Repeat password" />

                        <button>Sign up</button>
                    </div>
                </form>
            </div>
            <div className="right">
                <img src="https://4kwallpapers.com/images/wallpapers/beach-aerial-view-waves-ocean-macbook-pro-ios-11-mac-os-3840x2160-6422.jpg" alt='backgroundPhoto' />
                <p className='textImg2'>Already have an account?</p>
                <p className='textImg1'>Sign in your profile and start using the opportunities!</p>

                <Link to="/login"><button class='signUp'>Sign in</button></Link>
            </div>
        </section>
    )
}