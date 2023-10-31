import React from 'react';
import ReviewItem from "@/components/Reviews/ReviewItem";
import './Reviews.scss';

const Reviews = () => {
  return (
    <div className="container reviews">
      <h3 className="reviews__title">
        Travel with confidence with the leaders in sustainable adventures for over 30 years.
      </h3>

      <div className="reviews__cards">
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
      </div>
    </div>
  );
};

export default Reviews;