import React from 'react';
import '../styles/Review.css';
import Rating from './Rating';


function Review({ name, title, message, rating, date }) {
    return (
        <div className="review__element">
            <p className="name">{name}</p>
            <strong>{title}</strong>
            <p><Rating value={rating} text={`${rating} reviews`} /></p>
            <p className="date">{date}</p>
            <p>{message}</p>
        </div>
    )
}

export default Review