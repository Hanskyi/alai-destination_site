import React from 'react';
import tourDetails from './TourDetails.module.scss';

const TourDetails = () => {
  return (
    <div className={tourDetails.tourDetails}>
      <h2 className={tourDetails.tourDetailsTitle}>tour details</h2>
      <div className={tourDetails.detail}>
        <span className={tourDetails.title}>Tour Type:</span>
        <span className={tourDetails.value}>Trekking</span>
      </div>
      <hr />
      <div className={tourDetails.detail}>
        <span className={tourDetails.title}>Duration:</span>
        <span className={tourDetails.value}>8 Days</span>
      </div>
      <hr />
      <div className={tourDetails.detail}>
        <span className={tourDetails.title}>Participants:</span>
        <span className={tourDetails.value}>1-8 people</span>
      </div>
      <hr />
      <div className={tourDetails.detail}>
        <span className={tourDetails.title}>Price:</span>
        <span className={tourDetails.value}>$0</span>
      </div>
      <hr />
    </div>
  );
};

export default TourDetails;
