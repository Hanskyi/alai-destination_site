import React from 'react';
import style from '../DetailedTabs.module.scss';

interface Props {
  data: string;
}

const DetailedItinerary: React.FC<Props> = ({ data }) => {
  return (
    <div className="container">
      <div className={style.detailed_itinerary}>
        <div className={style.day_detailed}>
          <div dangerouslySetInnerHTML={{ __html: data }} />
        </div>
      </div>
    </div>
  );
};

export default DetailedItinerary;
