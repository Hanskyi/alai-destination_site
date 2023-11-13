import React from 'react';
import tourStyle from './TourHeroSection.module.scss';

const TourHeroSection = () => {
  return (
    <div className={tourStyle.headlineContent}>
      <div className={tourStyle.headlineText}>
        <h1 className={tourStyle.entryTitle}>Best of Alay Mountains Trek</h1>
        <h4 className={tourStyle.entrySubtitle}>
          8 Days Trek in the Pamir-Alay Mountains in Kyrgyzstan
        </h4>
      </div>
    </div>
  );
};

export default TourHeroSection;
