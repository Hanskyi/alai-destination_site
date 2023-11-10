import React from 'react';
import style from './Reviews.module.scss';

const ReviewItem = () => {
  return (
    <div className={style.review}>
      <div className={style.review__avatarWrap}>
        <img
          className={style.review__avatar}
          src="https://herpackinglist.com/wp-content/uploads/2015/04/solo-female-traveler.jpeg"
          alt="avatar"
        />
      </div>

      <h5 className={style.review__title}>Flexible Bookings</h5>

      <p className="review__description">
        Travel plans change. We get it – and we're here to help! Learn all about our flexible
        booking options.
      </p>
    </div>
  );
};

export default ReviewItem;
