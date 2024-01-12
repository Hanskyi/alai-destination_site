import React from 'react';
import tourDetails from './TourDetails.module.scss';
import { useTranslations } from 'next-intl';

interface IProps {
  category: string;
  duration: number;
  seats: number;
  price: number;
}

const TourDetails: React.FC<IProps> = ({ category, duration, seats, price }) => {
  const t = useTranslations('TourDetails');
  return (
    <div className={tourDetails.tourDetails}>
      <h2 className={tourDetails.tourDetailsTitle}>{t('title')}</h2>
      <div className={tourDetails.detail}>
        <span className={tourDetails.title}>{t('type')}:</span>
        <span className={tourDetails.value}>{category}</span>
      </div>
      <hr />
      <div className={tourDetails.detail}>
        <span className={tourDetails.title}>{t('duration')}:</span>
        <span className={tourDetails.value}>
          {duration} {t('days')}
        </span>
      </div>
      <hr />
      <div className={tourDetails.detail}>
        <span className={tourDetails.title}>{t('participants')}:</span>
        <span className={tourDetails.value}>
          1-{seats} {t('people')}
        </span>
      </div>
      <hr />
      <div className={tourDetails.detail}>
        <span className={tourDetails.title}>{t('price')}:</span>
        <span className={tourDetails.value}>${price}</span>
      </div>
      <hr />
    </div>
  );
};

export default TourDetails;
