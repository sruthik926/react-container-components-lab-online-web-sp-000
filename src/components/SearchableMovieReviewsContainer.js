import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'jzHCVoREwI2hzCbNDI6MeekXoQQq3M5P';
const BASE_URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}`;



// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {
   state = {
     reviews: [],
     searchTerm: ""
   }

   handleSearchInputChange = event => {
    this.setState({
    searchTerm: event.target.value,
  });
}

    handleSubmit = event => {
      event.preventDefault()
      fetch(BASE_URL.concat(`&query=${this.state.searchTerm}`))
      .then(response => response.json())
      .then(data => {
        this.setState({
          reviews: data.results
        })
      })

    }


  render() {
    return (
      <div className="searchable-movie-reviews">
      <form onSubmit={this.handleSubmit}>
       <input id="searchterm" name="searchterm" type="text" placeholder="Search Review" onChange={this.handleSearchInputChange}/>
          <button type="submit" className="text-center" size="sm">Search Reviews</button>
      </form>
        <div>
        <MovieReviews reviews={this.state.reviews}/>
        </div>
      </div>
    );
  }
}


export default SearchableMovieReviewsContainer
