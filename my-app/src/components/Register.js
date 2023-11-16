import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { AuthContext } from '../contexts/authContext';


export const Register = () => {
    const { onRegisterSubmit } = useContext(AuthContext)
    const { values, changeHandler, onSubmit } = useForm(
        {
            email: "",
            password: "",
            rePassword: "",
        },
        onRegisterSubmit)

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
                        <input type="email"  id="email" name="email" placeholder="Email" value={values.email} onChange={changeHandler} />
                        <input type="password" name='password' id="password" placeholder="Password" value={values.password} onChange={changeHandler} />
                        <input type="password" name='rePassword' id="rePassword" placeholder="Repeat password" value={values.rePassword} onChange={changeHandler} />

                        <button>Sign up</button>
                    </div>
                </form>
            </div>
            <div className="right">
                <img className='imgLogin' src="./photos/vilito.jpeg" alt='backgroundPhoto' />
                <p className='textImg2'>Already have an account?</p>
                <p className='textImg1'>Sign in your profile and start using the opportunities!</p>

                <Link to="/login"><button className='signUp'>Sign in</button></Link>
            </div>
        </section>
    )
}