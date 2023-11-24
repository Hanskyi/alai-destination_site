import React from 'react';
import style from './Reviews.module.scss';
import Image from 'next/image';
import { Review } from '@/type';

interface Props {
  review: Review;
}

const ReviewItem: React.FC<Props> = ({ review }) => {
  return (
    <div className={style.review}>
      <div className={style.review__avatar__wrap}>
        <Image
          width={160}
          height={160}
          className={style.review__avatar}
          src={'http://localhost:1337' + review.profileImage.url}
          alt="avatar"
        />
      </div>

      <h5 className={style.review__title}>{review.title}</h5>

      <p className="review__description">{review.review}</p>
    </div>
  );
};

export default ReviewItem;
