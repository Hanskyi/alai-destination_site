import React from 'react';
import style from '../DetailedTabs.module.scss';

interface Props {
  data: string;
}

const TourDates: React.FC<Props> = ({ data }) => {
  return (
    <div className={style.tour_schedule}>
      <h3>Price for Lenin Peak Base Camp Trek Guided Tour (8 days)</h3>
      <div dangerouslySetInnerHTML={{ __html: data }} />
    </div>
  );
};

export default TourDates;
