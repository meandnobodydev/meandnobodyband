import React from 'react';
import ReviewCards from './ReviewCards';

const Reviews = () => {
  return (
    <>
    <div className='content' id='review-content'>
      <div id="review-div">
        <div className='wrapper'>
            <ReviewCards/>
          </div>
        </div>
    </div>
    </>
  )
}

export default Reviews