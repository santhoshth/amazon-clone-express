import "../styles/Product.css";

function Product({ id, title, price, rating, image }) {

    const addToCart = async () => {
        console.log(`ADDED TO CART --- ${title}`);
    }

    return (
        <div className="product">
            <div className="product__info" key={id}>
                <p>{title}</p>
                <p className="product__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map(() => (
                        <p>⭐</p>
                    ))}
                </div>
            </div>
            <div className="product__image">
                <img src={image} alt="product__image" />
            </div>
            <button className="product__button" onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default Product