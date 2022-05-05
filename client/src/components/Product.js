import "../styles/Product.css";
import { Link, useNavigate } from 'react-router-dom';
import Rating from "./Rating";

function Product({ id, title, price, rating, image, numReviews, countInStock, category, reviews }) {

    const navigate = useNavigate();
    console.log(id)

    const addToCart = async () => {
        console.log(`ADDED TO CART --- ${title}`);
    }

    const toProduct = () => {
        navigate(`/products/${id}`);
        window.scrollTo({ top: 0 });
    }

    return (
        <div className="product">
            <div className="product__info" key={id}>
                <Link className="link" to={`/products/${id}`}>
                    <p>{title}</p>
                </Link>
                <p className="product__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    <Rating value={rating} />
                </div>
            </div>

            <img src={image} onClick={toProduct} alt="product__image" />

            <button className="product__button" onClick={addToCart}>Add to Cart</button>
        </div >
    )
}

export default Product