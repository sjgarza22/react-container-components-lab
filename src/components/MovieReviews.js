// Code MovieReviews Here
import React from 'react';


const MovieReviews = ({reviews}) => (
    <div className="review-list">
        {(reviews !== undefined) ? reviews.map(movie => 
        <div className="review">
            <h5>{movie.display_title}</h5>
        </div>) : console.log(reviews)}
    </div>
)

export default MovieReviews;