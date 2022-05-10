import React, { useEffect, useState } from 'react'
import Review from '../components/Review';
import '../styles/SingleProduct.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Rating from '../components/Rating';
import { useDispatch, useSelector } from 'react-redux';
import { createProductReview, listProductDetails } from '../redux/actions/ProductActions';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { PRODUCT_CREATE_REVIEW_RESET } from '../redux/constants/ProductConstants';

const SingleProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [quantity, setQuantity] = useState(1);
    const [rating, setRating] = useState(0);
    const [title, setTitle] = useState("");
    const [comment, setComment] = useState("");

    const dispatch = useDispatch();

    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const productReviewCreate = useSelector((state) => state.productReviewCreate);
    const {
        loading: loadingCreateReview,
        error: errorCreateReview,
        success: successCreateReview
    } = productReviewCreate;

    useEffect(() => {
        dispatch(listProductDetails(id));
        if (successCreateReview) {
            alert("Review Submitted");
            setRating(0);
            setTitle("");
            setComment("");
            dispatch({ type: PRODUCT_CREATE_REVIEW_RESET })
        }
    }, [dispatch, id, successCreateReview]);

    const addToCartHandle = (e) => {
        e.preventDefault();
        navigate(`/cart/${id}?quantity=${quantity}`);

        console.log(`ADDED TO CART --- ${product.title}`);
    }

    const submitReview = (e) => {
        e.preventDefault();
        dispatch(createProductReview(id, {
            rating, title, comment,
        }))
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
                                        <strong>{product.numReviews}{product.numReviews > 1 ? " Reviews" : " Review"}</strong>
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
                                <h2>{product.reviews.length > 0 ? "Reviews" : "Be the first one to Review"}</h2>
                                {product.reviews.length > 0 ? product.reviews.map(review =>
                                    <Review
                                        key={review._id}
                                        name={review.name}
                                        title={review.title}
                                        comment={review.comment}
                                        rating={review.rating}
                                        date={review.createdAt}
                                    />
                                ) : null}
                            </div>
                            <div className="review__login">
                                <h2>Write a Review</h2>
                                {errorCreateReview ? <Error error={errorCreateReview} /> : null}
                                {loadingCreateReview ? <Loading /> : null}
                                <div className="review__login__element">
                                    {userInfo === null
                                        ? <>
                                            <p>Please
                                                <Link className="link" to={`/login?redirect=/products/${id}`}>
                                                    <strong> Login </strong>
                                                </Link>
                                                to write a review</p>
                                        </>
                                        : <>
                                            <div className="rating__selector">
                                                <p>Rating</p>
                                                <select value={rating} onChange={(e) => setRating(e.target.value)}>
                                                    <option value="">Select...</option>
                                                    <option value="1">1 - Poor</option>
                                                    <option value="2">2 - Fair</option>
                                                    <option value="3">3 - Good</option>
                                                    <option value="4">4 - Very Good</option>
                                                    <option value="5">5 - Excellent</option>
                                                </select>
                                            </div>
                                            <div className="title__input">
                                                <p>Title</p>
                                                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                                            </div>
                                            <div className="comment__editor">
                                                <p>Comment</p>
                                                <textarea row="3" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                                            </div>
                                            <button disabled={loadingCreateReview} className="review__button" onClick={submitReview}>
                                                Submit
                                            </button>
                                        </>}
                                </div>
                            </div>
                        </div>
                    </div>
                </>)}
        </>
    )
}

export default SingleProduct;
