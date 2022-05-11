import React, { useEffect, useState } from 'react'
import '../styles/Login.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './../redux/actions/UserActions.js';
import Error from '../components/Error';

function Login() {
    window.scrollTo(0, 0);
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const redirect = location.search ? location.search.split("=")[1] : "/";

    const userLogin = useSelector((state) => state.userLogin);
    const { error, userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
            navigate(redirect);
        }
    }, [userInfo, navigate, redirect]);

    const signIn = e => {
        // to avoid refreshing the page on clicking submit
        e.preventDefault();
        dispatch(login(email, password));
    }

    return (
        <div className="login">
            <Link to='/'>
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" alt='login__logo' />
            </Link>
            {error ? <Error error={error} /> : null}
            <div className="login__container">
                <p className="login__title">Sign-In</p>
                <form className="login__form">
                    <h5>Email</h5>
                    <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button type="submit" onClick={e => signIn(e)}>Sign In</button>
                </form>
                <p className="login__conditions">By continuing, you agree to Amazon Fake Clone's Conditions of Use and Privacy Notice. </p>
                <p className="login__registerTitle">New to Amazon?</p>
                <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>
                    <button className="login__registerButton" >Create your Amazon account</button>
                </Link>
            </div>


        </div>
    )
}

export default Login