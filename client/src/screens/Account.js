import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Account.css';

function Account() {
    return (
        <div className="account__outer">
            <div className="account">
                <p className="account__title">Your Account</p>
                <div className="account__element__container">
                    <Link className='link' to="/orders">
                        <div className="account__element">
                            <div className="element__icon">
                                <img className="element__icon" src="https://images-na.ssl-images-amazon.com/images/G/31/x-locale/cs/ya/images/Box._CB485927553_.png" alt="order__icon" />
                            </div>
                            <div className="element__content">
                                <span>Your Orders</span>
                                <p>View Orders, or buy things again</p>
                            </div>
                        </div>
                    </Link>
                    <Link className='link' to="/profile">
                        <div className="account__element">
                            <div className="element__icon">
                                <img className="element__icon" src="https://images-na.ssl-images-amazon.com/images/G/31/x-locale/cs/ya/images/sign-in-lock._CB485931504_.png" alt="security__icon" />
                            </div>
                            <div className="element__content">
                                <span>Login & security</span>
                                <p>Edit login name, email and password</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Account