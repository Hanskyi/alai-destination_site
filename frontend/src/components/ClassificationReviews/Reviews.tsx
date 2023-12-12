import React, { useMemo, useState } from 'react';
import styles from './Reviews.module.scss';
import Rating from '@/components/Rating/Rating';

import FilterByRating from '@/components/ClassificationReviews/components/FilterByRating/FilterByRating';
import ClientReview from '@/components/ClassificationReviews/components/ClientReview/ClientReview';
import { TourReview } from '../../type';
import { useSession } from 'next-auth/react';

interface Props {
  reviews: TourReview[];
}

const Reviews: React.FC<Props> = ({ reviews }) => {
  const [rate, setRate] = useState<number>(0);
  const { data: session } = useSession();

  console.log(reviews)

  // Function to filter reviews based on the selected rate
  const filteredReviews = useMemo(() => {
    let filtered = reviews;

    if (rate !== 0) {
      filtered = reviews.filter((review) => review.rating === rate);
    }

    // Get the last 15 reviews from the filtered list
    return filtered.slice(-10);
  }, [rate, reviews]);

  // Handler to reset the rating filter
  const handleShowAllReviews = () => {
    setRate(0); // Set rate to 0 to show all reviews
  };

  // Function to create an array of objects containing review counts for each rating
  const createReviewsCountArray = (reviews: TourReview[]) => {
    // Initialize an array to store counts for each star rating
    const reviewCounts = Array(5).fill(0);

    // Calculate counts for each rating
    reviews.forEach((review) => {
      reviewCounts[review.rating - 1]++; // Increment the count for the respective star rating
    });

    // Create an array of objects with rating and count properties
    const reviewsCountArray = reviewCounts.map((count, index) => ({
      rating: index + 1,
      count: count,
    }));

    return reviewsCountArray;
  };

  // Call the function and store the resulting array
  const REVIEWS_COUNT = createReviewsCountArray(reviews);

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

          <button className={styles.filterByRating__resetFilter} onClick={handleShowAllReviews}>
            Show All Reviews
          </button>

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
          {reviews &&
            filteredReviews.map((review) => <ClientReview key={review.id} review={review} />)}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
