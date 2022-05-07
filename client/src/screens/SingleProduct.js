import React, { useEffect, useState } from 'react'
import Review from '../components/Review';
import '../styles/SingleProduct.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Rating from '../components/Rating';
import { useDispatch, useSelector } from 'react-redux';
import { listProductDetails } from '../redux/actions/ProductActions';
import Loading from '../components/Loading';
import Error from '../components/Error';

const SingleProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch();

    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        dispatch(listProductDetails(id));
    }, [dispatch, id]);

    const addToCartHandle = (e) => {
        e.preventDefault();
        navigate(`/cart/${id}?quantity=${quantity}`);

        console.log(`ADDED TO CART --- ${product.title}`);
    }

    return (
        <>
            {loading ? (
                <Loading />
            ) : error ? (
                <Error error={error} />
            ) : (
                <>
                    <div className="single__product">
                        <div className="top">
                            <div className="product__image">
                                <img src={product.image} alt="product__image" />
                            </div>
                            <div className="product__details">
                                <h2>{product.title}</h2>
                                <div className="product__container">
                                    <div className="row">
                                        <p>Price</p>
                                        <strong>₹{product.price}</strong>
                                    </div>
                                    <div className="row">
                                        <p>Availability</p>
                                        <strong>{product.countInStock > 0 ? "In Stock" : "Out of Stock"}</strong>
                                    </div>
                                    <div className="row">
                                        <p><Rating value={product.rating} /></p>
                                        <strong>{product.numReviews} reviews</strong>
                                    </div>
                                    {product.countInStock > 0 ? (
                                        <>
                                            <div className="row">
                                                <p>Quantity</p>
                                                <select
                                                    value={quantity}
                                                    onChange={(e) => setQuantity(e.target.value)}
                                                >
                                                    {[...Array(product.countInStock).keys()].map((x) => (
                                                        <option key={x + 1} value={x + 1}>
                                                            {x + 1}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </>
                                    ) : null}
                                </div>
                                {product.countInStock > 0 ? (
                                    <>
                                        <div className="row__button">
                                            <button className="product__button" onClick={e => addToCartHandle(e)}><h3>Add to Cart</h3></button>
                                        </div>
                                    </>
                                ) : null}
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="review">
                                <h2>Reviews</h2>
                                {product.reviews ? product.reviews.map(review =>
                                    <Review
                                        name={review.name}
                                        title={review.title}
                                        comment={review.comment}
                                        rating={review.rating}
                                        date={review.date}
                                    />
                                ) : null}
                                <Review
                                    name="Santhosh"
                                    title="Best product"
                                    comment="worth to buy this is one the best u can get in this price range worth to buy this is one the best u can get in this price rang worth to buy this is one the best u can get in this price rang worth to buy this is one the best u can get in this price rang worth to buy this is one the best u can get in this price rang worth to buy this is one the best u can get in this price rang worth to buy this is one the best u can get in this price rang worth to buy this is one the best u can get in this price rang worth to buy this is one the best u can get in this price rang worth to buy this is one the best u can get in this price rang worth to buy this is one the best u can get in this price rang worth to buy this is one the best u can get in this price rang "
                                    date="02-04-2022"
                                    rating={5}
                                />
                                <Review
                                    name="Santhosh"
                                    title="Best product"
                                    comment="worth to buy this is one the best u can get in this price range worth to buy this is one the best u can get in this price rang worth to buy this is one the best u can get in this price rang worth to buy this is one the best u can get in this price rang worth to buy this is one the best u can get in this price rang worth to buy this is one the best u can get in this price rang worth to buy this is one the best u can get in this price rang worth to buy this is one the best u can get in this price rang worth to buy this is one the best u can get in this price rang worth to buy this is one the best u can get in this price rang worth to buy this is one the best u can get in this price rang worth to buy this is one the best u can get in this price rang "
                                    date="02-04-2022"
                                    rating={5}
                                />
                            </div>
                            <div className="review__login">
                                <h2>Write a Review</h2>
                                {/* <form>
                        <div className="my-4">
                            <strong>Rating</strong>
                            <select className="col-12 bg-light p-3 mt-2 border-0 rounded">
                                <option value="">Select...</option>
                                <option value="1">1 - Poor</option>
                                <option value="2">2 - Fair</option>
                                <option value="3">3 - Good</option>
                                <option value="4">4 - Very Good</option>
                                <option value="5">5 - Excellent</option>
                            </select>
                        </div>
                        <div className="my-4">
                            <strong>Comment</strong>
                            <textarea
                                row="3"
                                className="col-12 bg-light p-3 mt-2 border-0 rounded"
                            ></textarea>
                        </div>
                        <div className="my-3">
                            <button className="col-12 bg-black border-0 p-3 rounded text-white">
                                SUBMIT
                            </button>
                        </div>
                    </form> */}
                                <div className="review__login__element">
                                    <p>Please
                                        <Link className="link" to="/login">
                                            <strong> Login </strong>
                                        </Link>
                                        to write a review</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>)}
        </>
    )
}

export default SingleProduct;
