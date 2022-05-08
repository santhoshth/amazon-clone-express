import React, { useState } from 'react'
import '../styles/Profile.css';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link } from 'react-router-dom';

function Profile() {

    return (
        <div className="profile__outer">
            <div className="profile">
                <div className="profile__nav">
                    <Link style={{ textDecoration: 'none' }} to="/account">
                        <p className="profile__account">Your Account</p>
                    </Link>
                    <ArrowRightIcon className="arrow__icon" fontSize='small' />
                    <span>Login & Security</span>
                </div>
                <p className="profile__title">Login & Security</p>
                <div className="profile__list">
                    <div className="profile__list__row">
                        <div className="profile__list__row__left">
                            <span>Name:</span>
                            <p>Santhosh</p>
                        </div>
                        <div className="profile__list__row__left">
                            <span>New Name:</span>
                            <div className="new__input"><input type="text" placeholder="Enter new name" /></div>
                        </div>
                    </div>
                    <div className="profile__list__row">
                        <div className="profile__list__row__left">
                            <span>E-mail:</span>
                            <p>vai22042003@gmail.com</p>
                        </div>
                        <div className="profile__list__row__left">
                            <span>New E-mail:</span>
                            <div className="new__input"><input type="email" placeholder="Enter new name" /></div>
                        </div>
                    </div>
                    <div className="profile__list__row last__row">
                        <div className="profile__list__row__left">
                            <span>Password:</span>
                            <p>*********</p>
                        </div>
                        <div className="profile__list__row__left">
                            <span>New Password:</span>
                            <div className="new__input"><input type="password" placeholder="Enter new name" /></div>
                        </div>
                    </div>
                </div>
                <button className="edit__button">Update</button>
            </div>
        </div>
    )
}

export default Profile