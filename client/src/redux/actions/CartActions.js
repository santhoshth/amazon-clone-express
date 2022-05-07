import axios from "axios"
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/CartConstants"

// ADD TO CART
export const addToCart = (id, quantity) => async (dispatch, getState) => {

    const { data } = await axios.get(`/api/products/${id}`);

    const totalPriceOfProduct = data.price * quantity;

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data._id,
            title: data.title,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            subTotal: totalPriceOfProduct,
            quantity,
        },
    });

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
}

// REMOVE FROM CART
export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id,
    });

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
}