import React from 'react';
import ReviewItem from './ReviewsItem';
import style from './Reviews.module.scss';

const Reviews = () => {
  return (
    <div className={`${style.reviews} container`}>
      <h3 className={style.reviews__title}>
        Travel with confidence with the leaders in sustainable adventures for over 30 years.
      </h3>

      <div className={style.reviews__cards}>
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
      </div>
    </div>
  );
};

export default Reviews;
