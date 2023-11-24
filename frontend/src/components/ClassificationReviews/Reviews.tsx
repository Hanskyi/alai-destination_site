import React, { useState } from 'react';
import styles from './Reviews.module.scss';
import Rating from '@/components/Rating/Rating';
import { REVIEWS_COUNT } from '@/dummyData';
import FilterByRating from '@/components/ClassificationReviews/components/FilterByRating/FilterByRating';
import ClientReview from '@/components/ClassificationReviews/components/ClientReview/ClientReview';

const Reviews = () => {
  const [rate, setRate] = useState<number>(5);
  const roundedToOneSymbolForStars = (roundedNumber: number): number => {
    return Math.floor(Math.round(roundedNumber) * 10) / 10;
  };

  const roundedToOneSymbol = (roundedNumber: number): number => {
    return Math.floor(roundedNumber * 10) / 10;
  };

  const totalReviews = REVIEWS_COUNT.reduce((sum, review) => sum + review.count, 0);
  const weightedSum = REVIEWS_COUNT.reduce((sum, review) => sum + review.rating * review.count, 0);
  const average = roundedToOneSymbol(weightedSum / totalReviews);

  const percentage = (num: number): number => {
    return (num * 100) / totalReviews;
  };
  return (
    <div className="container">
      <h3 className={styles.reviews__title}>Reviews</h3>

      <div className={styles.reviews__total}>
        <Rating
          size={25}
          isEdit={false}
          value={roundedToOneSymbolForStars(weightedSum / totalReviews)}
        />

        <p>
          <strong>{average}</strong> out of 5 based on {totalReviews} reviews submitted.
        </p>
      </div>

      <div className={styles.reviews}>
        <div className={styles.filterByRating}>
          <h3 className={styles.filterByRating__title}>Filter by rating</h3>
          {REVIEWS_COUNT.map((review) => (
            <FilterByRating
              key={review.rating}
              rating={review.rating}
              ratingCount={review.count}
              fillWidth={percentage(review.count)}
              setRate={setRate}
              rate={rate}
            />
          ))}
        </div>

        <div className="clientsReviews">
          <ClientReview />
          <ClientReview />
          <ClientReview />
          <ClientReview />
          <ClientReview />
          <ClientReview />
          <ClientReview />
          <ClientReview />
          <ClientReview />
          <ClientReview />
          <ClientReview />
          <ClientReview />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
