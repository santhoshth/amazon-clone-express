import React, { useEffect, useState } from 'react'
import '../styles/Profile.css';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from './../redux/actions/CartActions';

function Profile() {
    window.scrollTo(0, 0);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const [name, setName] = useState(shippingAddress?.name);
    const [address, setAddress] = useState(shippingAddress?.address);
    const [city, setCity] = useState(shippingAddress?.city);
    const [pincode, setPincode] = useState(shippingAddress?.pincode);
    const [country, setCountry] = useState(shippingAddress?.country);

    useEffect(() => {
        if (userInfo === null) {
            navigate("/login", { replace: true })
        }
    }, [userInfo, navigate])

    const shippingHandler = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress({ name, address, city, pincode, country }));
        navigate('/payment')
    }

    return (
        <>
            <div className="profile__outer">
                <div className="shipping">
                    <div className="shipping__nav">
                        <Link style={{ textDecoration: 'none' }} to="/cart">
                            <p className="profile__account">Cart</p>
                        </Link>
                        <ArrowRightIcon className="arrow__icon" fontSize='small' />
                        <span>Shipping</span>
                    </div>
                    <div className="shipping__container">
                        <p className="shipping__title">Delivery Address</p>
                        <div className="shipping__list">
                            <div className="shipping__list__row">
                                <div className="shipping__list__row__left">
                                    <span>Full name</span>
                                    <div className="new__input__shipping">
                                        <input
                                            type="text"
                                            required
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="shipping__list__row">
                                <div className="shipping__list__row__left">
                                    <span>Address</span>
                                    <div className="new__input__shipping">
                                        <input
                                            type="email"
                                            required={true}
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="shipping__list__row last__row">
                                <div className="shipping__list__row__left">
                                    <span>City</span>
                                    <div className="new__input__shipping">
                                        <input
                                            type="text"
                                            value={city}
                                            onChange={(e) => setCity(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="shipping__list__row last__row">
                                <div className="shipping__list__row__left">
                                    <span>Pincode</span>
                                    <div className="new__input__shipping">
                                        <input
                                            type="text"
                                            placeholder="6 digits [0-9] PIN code"
                                            value={pincode}
                                            onChange={(e) => setPincode(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="shipping__list__row last__row">
                                <div className="shipping__list__row__left">
                                    <span>Country</span>
                                    <div className="new__input__shipping">
                                        <input
                                            type="text"
                                            value={country}
                                            onChange={(e) => setCountry(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>

                        <button className="edit__button__shipping" onClick={e => shippingHandler(e)}>Continue</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile