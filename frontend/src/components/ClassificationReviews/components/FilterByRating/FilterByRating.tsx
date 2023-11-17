import React from 'react';
import styles from './FilterByRating.module.scss';

interface IProps {
  fillWidth: number;
  rating: number;
  ratingCount: number;
  setRate: (value: number) => void;
  rate: number;
}

const FilterByRating: React.FC<IProps> = ({ fillWidth, rating, ratingCount, rate, setRate }) => {
  return (
    <div className={styles.reviewsFilter}>
      <div className={styles.reviewsFilter__item}>
        <button
          className={
            rate === rating
              ? styles.reviewsFilter__button_active
              : styles.reviewsFilter__button_nonactive
          }
          onClick={() => setRate(rating)}
        >
          <span />
        </button>
        <span className={styles.reviewsFilter__rating}>{rating} Star</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="128"
          height="9"
          viewBox="0 0 128 9"
          fill="none"
        >
          <rect x="0.700195" y="1.48047" width="126" height="7" rx="3.5" fill="white" />
          <rect x="0.700195" y="1.48047" width="126" height="7" rx="3.5" stroke="#BEBEBE" />
          <rect
            x="0.200195"
            y="0.980469"
            width={`${fillWidth}%`}
            height="8"
            rx="4"
            fill="#FFBD40"
          />
        </svg>

        <span className="reviews-filter__count">{ratingCount}</span>
      </div>
    </div>
  );
};

export default FilterByRating;
