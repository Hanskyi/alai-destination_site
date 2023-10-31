import React from 'react';

const ReviewItem = () => {
  return (
    <div className="review">
      <div className="review__avatar-wrap">
        <img
          className="review__avatar"
          src="https://herpackinglist.com/wp-content/uploads/2015/04/solo-female-traveler.jpeg"
          alt="avatar"/>
      </div>

      <h5 className="review__title">Flexible Bookings</h5>

      <p className="review__description">
        Travel plans change. We get it – and we're here to help! Learn all about our flexible booking options.
      </p>
    </div>
  );
};

export default ReviewItem;