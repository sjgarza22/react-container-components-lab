import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'AbAlNCTpFdPwVAihA4FaS62brC7TUjXk';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
    constructor() {
        super()
        this.state = {
            reviews: []
        }
    }

    componentDidMount() {
        // const div = document.getElementsByClassName("latest-movie-reviews");
        fetch(URL)
        .then(response => response.json())
        .then(data => {
            this.setState({
                reviews: data.results
            })
        })
    }

    // componentDidUpdate() {
    //     console.log(this.state.reviews)
    //     return (
    //     <div className="latest-movie-reviews">
    //         <MovieReviews movies={this.state.reviews} />
    //     </div>
    //     )
    // }

    render() {
        if(this.state.reviews === []) {
            return <div></div>
        } else {
            return (
                <div className="latest-movie-reviews">
                    <MovieReviews reviews={this.state.reviews} />
                </div>
            )
        }
            
    }
}