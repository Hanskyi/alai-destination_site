import React from 'react';
import Rating from '@/components/Rating/Rating';
import dayjs from 'dayjs';
import { TourReview } from '../../../../type';
import styles from './ClientReview.module.scss';

interface Props {
  review: TourReview;
}

const ClientReview: React.FC<Props> = ({ review }) => {
  console.log(review, '33');

  return (
    <div className={styles.clientReview}>
      <Rating size={20} isEdit={false} value={review.rating} />
      <div className={styles.clientReview__initials}>
        <div className={styles.clientReview__header}>
          <span className={styles.clientReview__travelerName}>
            <strong>{review.users_permissions_user?.username as string}</strong>
          </span>
          <span className={styles.clientReview__travelDate}>
            Traveled {dayjs('2023-06-15T21:55:59.526Z').format('MMMM YYYY')}
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
