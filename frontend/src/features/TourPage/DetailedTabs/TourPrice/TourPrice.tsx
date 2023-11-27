import React from 'react';
import style from './TourPrice.module.scss';

interface Props {
  data: string;
}

const TourPrice: React.FC<Props> = ({ data }) => {
  return (
    <div className={style.tour_price}>
      <div className="container">
        <div dangerouslySetInnerHTML={{ __html: data }} />
      </div>
    </div>
  );
};

export default TourPrice;
