import React, {useMemo, useState} from 'react';
import styles from './Reviews.module.scss';
import Rating from '@/components/Rating/Rating';
import FilterByRating from '@/components/ClassificationReviews/components/FilterByRating/FilterByRating';
import ClientReview from '@/components/ClassificationReviews/components/ClientReview/ClientReview';
import {TourReview} from '@/type';
import {useTranslations} from 'next-intl';
import {useAppSelector} from '@/store/hooks';

const MAX_DISPLAYED_REVIEWS = 15;

const Reviews = () => {
  const [rate, setRate] = useState<number>(0);
  const t = useTranslations('ReviewsBlock');

  const { reviews } = useAppSelector((state) => state.tourReview);

  const loading = useAppSelector((state) => state.tourReview.fetchLoading);

  const filteredReviews = useMemo(() => {
    let filtered = reviews || [];

    if (rate !== 0) {
      filtered = (reviews || []).filter((review) => review?.rating === rate);
    }

    return  filtered.slice(-MAX_DISPLAYED_REVIEWS);
  }, [rate, reviews]);

  const handleShowAllReviews = () => {
    setRate(0);
  };

  const createReviewsCountArray = (reviews: TourReview[]) => {
    const reviewCounts = Array(5).fill(0);

    reviews?.forEach((review) => {
      reviewCounts[review.rating - 1]++;
    });

    return reviewCounts.map((count, index) => ({
      rating: index + 1,
      count: count,
    }));
  };

  const REVIEWS_COUNT = createReviewsCountArray(reviews || []);

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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (filteredReviews.length === 0) {
    return (
      <div className="container">
        <h3 className={styles.reviews__title}>{t('title')}</h3>
        {rate !== 0 ? (
          <>
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
            <p className={styles.no_reviews}>No reviews available with {rate} star(s).</p>
            <button className={styles.filterByRating__resetFilter} onClick={handleShowAllReviews}>
              {t('showAll')}
            </button>
          </>
        ) : (
          <p>No reviews available</p>
        )}
      </div>
    );
  }

  return (
    <div className="container">
      <h3 className={styles.reviews__title}>{t('title')}</h3>
      <div className={styles.reviews__total}>
        <Rating
          size={25}
          isEdit={false}
          value={roundedToOneSymbolForStars(weightedSum / totalReviews)}
        />
        <p>
          <strong>{String(average)}</strong>{' '}
          {t('totalReviews', { maxRating: 5, totalRatingCount: totalReviews })}
        </p>
      </div>
      <div className={styles.reviews}>
        <div className={styles.filterByRating}>
          <h3 className={styles.filterByRating__title}>{t('filterByRating')}</h3>
          <button className={styles.filterByRating__resetFilter} onClick={handleShowAllReviews}>
            {t('showAll')}
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
