import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../redux/actions/CartActions';
import '../styles/CheckoutProduct.css';

function CheckoutProduct({ id, title, price, rating, image, orderPageButton, paymentPageButton, subTotal, quantity, countInStock }) {

    const dispatch = useDispatch();

    const buttonType = orderPageButton === true ? "Buy it again" : "Delete";

    const removeFromCartHandler = (id) => {
        // TO DO
        dispatch(removeFromCart(id));
        console.log(`${buttonType}d from Cart --- ${title}`);
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="checkoutProduct__image" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">
                    <Link className="link" to={`/products/${id}`}>
                        {title}
                    </Link>
                </p>
                <p className="checkoutProduct__price">
                    <small>₹ </small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__quantity">
                    <p>Quantity</p>
                    <select
                        value={quantity}
                        onChange={(e) => dispatch(addToCart(id, Number(e.target.value)))}
                    >
                        {!paymentPageButton ? [...Array(countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                                {x + 1}
                            </option>
                        )) : <option value={quantity} key={quantity}>{quantity}</option>}
                    </select>
                </div>
                {!paymentPageButton ? (
                    <button className="checkoutProduct__button" onClick={() => removeFromCartHandler(id)}>{buttonType}</button>
                ) : null}

            </div>
            <div className="checkoutProduct__subtotal">
                <small>₹ </small>
                <strong>{subTotal}</strong>
            </div>
        </div>
    )
}

export default CheckoutProduct