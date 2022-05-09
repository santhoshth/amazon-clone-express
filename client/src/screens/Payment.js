// import { useEffect, useState } from 'react';
import '../styles/Payment.css'
import CheckoutProduct from '../components/CheckoutProduct';
import { Link, useNavigate } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import { useSelector } from 'react-redux';

function Payment() {

    const navigate = useNavigate();
    // const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const { shippingAddress } = cart;

    // const userLogin = useSelector((state) => state.userLogin);
    // const { userInfo } = userLogin;

    const cartTotal = cartItems.reduce((total, item) => total + item.subTotal, 0);
    const cartTotalQuantiy = cartItems.reduce((total, item) => total + item.quantity, 0);


    const handleSubmit = () => {
        navigate('/orders');
    }

    return (
        <div className="payment">
            <div className="payment__container">
                <h2>Checkout (<Link to={'/cart'}>{cartTotalQuantiy}</Link>)</h2>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__content">
                        <p>{shippingAddress.name}</p>
                        <p>{shippingAddress.address}</p>
                        <p>{shippingAddress.city}</p>
                        <p>{shippingAddress.pincode}</p>
                        <p>{shippingAddress.country}</p>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className="payment__content">
                        {cartItems.map((cartItem) => (
                            <CheckoutProduct
                                id={cartItem.product}
                                title={cartItem.title}
                                price={cartItem.price}
                                subTotal={cartItem.subTotal}
                                image={cartItem.image}
                                quantity={cartItem.quantity}
                                countInStock={cartItem.countInStock}
                                paymentPageButton={true}
                            />
                        ))}
                    </div>
                </div>

                <div className="payment__card__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <h4>Card Details</h4>
                        <form onSubmit={handleSubmit}>
                            {/* <CardElement className="payment__card" onChange={handleChange} /> */}
                            <div className="payment__total">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={cartTotal}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={" ₹ "}
                                />

                                <button>
                                    <span>Buy Now</span>
                                </button>
                                {/* <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? "Processing" : "Buy Now"}</span>
                                </button> */}
                            </div>

                            {/* Error div will show only in case of any error */}
                            {/* {error && <div>{error}</div>} */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment