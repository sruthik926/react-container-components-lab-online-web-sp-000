import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'jzHCVoREwI2hzCbNDI6MeekXoQQq3M5P';
const BASE_URL = `https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
   state = {
     reviews: []
   }
   //
   // // handleSubmit =

   componentDidMount(){
     fetch(BASE_URL)
     .then(response => response.json())
     .then(data => {
       this.setState({
         reviews: data.reviews
       })
     })
   }

  render() {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    );
  }
}


export default LatestMovieReviewsContainer
