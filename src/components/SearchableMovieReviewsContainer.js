import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'AbAlNCTpFdPwVAihA4FaS62brC7TUjXk';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super()
        this.state = {
            searchTerm: "",
            reviews: []
        }
    }

    // componentDidUpdate() {
    //     return <div className="searchable-movie-reviews">{<MovieReviews movies={this.state.reviews} />}</div>
    // }

    handleSearch = (e) => {
        e.preventDefault()
        fetch(URL + `&query=${this.state.searchTerm}`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                reviews: data.results
            })
        })
    }

    sendResults = () => {
        if (this.state.reviews != []){
            return <div className="searchable-movie-reviews"><MovieReviews reviews={this.state.reviews} /></div>
        }
    }

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    render() {
        return (
            <div>
                <div className="form">
                    <form onSubmit={event => this.handleSearch(event)}>
                        <input onChange={event => this.handleChange(event)} type="text" value={this.state.searchTerm} />
                        <input type="submit" />
                    </form>
                </div>
                
                <div className="searchable-movie-reviews">
                    {this.sendResults()}
                </div>
            </div>
            
        )
    }
}