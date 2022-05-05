import React, { useState } from 'react'
import '../styles/Login.css';
import { Link, useNavigate } from 'react-router-dom';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const signIn = e => {
        // to avoid refreshing the page on clicking submit
        e.preventDefault();
        navigate('/');
    }

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
                <p className="login__title">Sign-in</p>
                <form className="login__form">
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button type="submit" onClick={e => signIn(e)}>Sign In</button>
                </form>
                <p className="login__conditions">By continuing, you agree to Amazon Fake Clone's Conditions of Use and Privacy Notice. </p>

                <p className="login__registerTitle">New to Amazon?</p>
                <button className="login__registerButton" onClick={e => register(e)}>Create your Amazon account</button>
            </div>


        </div>
    )
}

export default Login