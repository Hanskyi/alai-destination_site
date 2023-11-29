import React from 'react';
import FaqList from '../../../../components/FaqList/FaqList';
import { ITable } from '../../../../type';
import style from './TourDates.module.scss';

interface Props {
  data: ITable[];
}

const TourDates: React.FC<Props> = ({ data }) => {
  console.log(data, 'previewDescription');

  return (
    <div className={style.tour_schedule}>
      <FaqList faqList={data} />
    </div>
  );
};

export default TourDates;
