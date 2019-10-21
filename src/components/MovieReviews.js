// Code MovieReviews Here
import React from 'react'

const MovieReviews = (props) => {
  const reviews = props.reviews.map((review, index) => {
     return <li key={index}> {review}  </li>
  });
  return (
    <div>
       {reviews}
    </div>
  );
};



export default MovieReviews
