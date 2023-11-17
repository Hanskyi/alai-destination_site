import React from 'react';
import Rating from '@/components/Rating/Rating';
import styles from './ClientReview.module.scss';
import dayjs from 'dayjs';

// можно добавить локлизацию даты

const ClientReview: React.FC = () => {
  return (
    <div className={styles.clientReview}>
      <Rating size={20} isEdit={false} value={4} />
      <div className={styles.clientReview__initials}>
        <div className={styles.clientReview__header}>
          <span className={styles.clientReview__travelerName}>
            <strong>Catherine</strong>
          </span>
          <span className={styles.clientReview__travelDate}>
            Traveled {dayjs('2023-06-15T21:55:59.526Z').format('MMMM YYYY')}
          </span>
        </div>
        <p className={styles.clientReview__review}>
          This trip was superb. The itinerary, the attention to detail and especially Said Baadoud
          made it so. Said created a sense of community bringing together 8 individuals from 3
          different countries…I learned so much amid an atmosphere of mutual interest and respect.
          We learned, we laughed and did we have fun.
        </p>
        <span className={styles.clientReview__submittedDate}>
          Review submitted {dayjs('2023-06-15T21:55:59.526Z').format('DD MMM YYYY')}
        </span>
      </div>
    </div>
  );
};

export default ClientReview;
