import React from 'react';
import tourDetails from './TourDetails.module.scss';
import { useTranslations } from 'next-intl';

const TourDetails = () => {
  const t = useTranslations('TourDetails');
  return (
    <div className={tourDetails.tourDetails}>
      <h2 className={tourDetails.tourDetailsTitle}>{t('title')}</h2>
      <div className={tourDetails.detail}>
        <span className={tourDetails.title}>{t('type')}:</span>
        <span className={tourDetails.value}>Trekking</span>
      </div>
      <hr />
      <div className={tourDetails.detail}>
        <span className={tourDetails.title}>{t('duration')}:</span>
        <span className={tourDetails.value}>8 {t('days')}</span>
      </div>
      <hr />
      <div className={tourDetails.detail}>
        <span className={tourDetails.title}>{t('participants')}:</span>
        <span className={tourDetails.value}>1-8 {t('people')}</span>
      </div>
      <hr />
      <div className={tourDetails.detail}>
        <span className={tourDetails.title}>{t('price')}:</span>
        <span className={tourDetails.value}>$0</span>
      </div>
      <hr />
    </div>
  );
};

export default TourDetails;
