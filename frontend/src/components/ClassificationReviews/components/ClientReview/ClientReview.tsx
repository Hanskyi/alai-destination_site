import React from 'react';
import Rating from '@/components/Rating/Rating';
import dayjs from 'dayjs';
import { TourReview } from '../../../../type';
import styles from './ClientReview.module.scss';

interface Props {
  review: TourReview;
}

const ClientReview: React.FC<Props> = ({ review }) => {
  console.log(review, 'review');

  return (
    <div className={styles.clientReview}>
      <Rating size={20} isEdit={false} value={review.rating} />
      <div className={styles.clientReview__initials}>
        <div className={styles.clientReview__header}>
          <span className={styles.clientReview__travelerName}>
            <strong>{review.displayName}</strong>
          </span>
        </div>
        <p className={styles.clientReview__review}>{review.review}</p>
        <span className={styles.clientReview__submittedDate}>
          Review submitted {dayjs(`${review.createdAt}`).format('DD MMM YYYY')}
        </span>
      </div>
    </div>
  );
};

export default ClientReview;
