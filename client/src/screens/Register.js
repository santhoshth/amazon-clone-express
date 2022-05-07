import React, { useState } from 'react'
import '../styles/Login.css';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
    window.scrollTo(0, 0);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const register = e => {
        // to avoid refreshing the page on clicking submit
        e.preventDefault();
        navigate('/');
    }

    return (
        <div className="login">
            <Link to='/'>
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" alt='login__logo' />
            </Link>

            <div className="login__container">
                <p className="login__title">Create Account</p>
                <form className="login__form">
                    <h5>Your name</h5>
                    <input type="text" placeholder="First and last name" value={name} onChange={e => setName(e.target.value)} />
                    <h5>Email</h5>
                    <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button type="submit" onClick={e => register(e)}>Sign Up</button>
                </form>
                <p className="login__conditions">By continuing, you agree to Amazon Fake Clone's Conditions of Use and Privacy Notice. </p>
                <p className="login__conditions">
                    Already have an account?
                    <p>
                        <Link className="link link_login" to="/login">
                            Sign in
                        </Link>
                    </p>
                </p>

                {/* <p className="login__registerTitle">New to Amazon?</p>
                <button className="login__registerButton" onClick={e => register(e)}>Create your Amazon account</button> */}
            </div>


        </div>
    )
}

export default Register