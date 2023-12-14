import React, { useState } from 'react';
import ClassificationsCard from '@/components/ClassificationsCard/ClassificationsCard';
import style from './ToursDisplay.module.scss';
import { TourLocationRegion } from '@/type';

interface ToursDisplayProps {
  tours: TourLocationRegion[];
  initialCardCount: number;
  additionalCardCount: number;
}

const ToursDisplay: React.FC<ToursDisplayProps> = ({
  tours,
  initialCardCount,
  additionalCardCount,
}) => {
  const [cardCount, setCardCount] = useState(initialCardCount);

  const loadMoreTours = () => {
    setCardCount(cardCount + additionalCardCount);
  };

  const displayedTours = tours?.slice(0, cardCount) || [];

  return (
    <>
      <div className={style.toursDisplay__cards}>
        {displayedTours.length > 0 ? (
          displayedTours.map((item: TourLocationRegion) => (
            <ClassificationsCard
              key={item.id}
              image={item.mainImage}
              id={item.id}
              title={item.title}
              previewDescription={item.previewDescription}
              buttonText={'Read more'}
            />
          ))
        ) : (
          <h3 className={style.toursDisplay__title}>No tours yet</h3>
        )}
      </div>
      {tours && tours.length > cardCount && (
        <button className={style.toursDisplay__button} onClick={loadMoreTours}>
          Show More Tours
        </button>
      )}
    </>
  );
};

export default ToursDisplay;
