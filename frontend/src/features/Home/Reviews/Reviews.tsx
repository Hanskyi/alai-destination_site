import React from 'react';
import ReviewItem from './ReviewsItem';
import style from './Reviews.module.scss';
import { useAppSelector } from '@/store/hooks';

const Reviews = () => {
  const reviewBlock = useAppSelector((state) => state.home.homeData?.reviewsBlock);

  return (
    <div className={`${style.reviews} container`}>
      <h3 className={style.reviews__title}>{reviewBlock?.data.title}</h3>

      <div className={style.reviews__cards}>
        {reviewBlock?.data.review.map((review) => <ReviewItem key={review.id} review={review} />)}
      </div>
    </div>
  );
};

export default Reviews;
