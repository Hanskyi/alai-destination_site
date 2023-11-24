import React from 'react';
import style from '../TravelSliderBlock.module.scss';
import Image from 'next/image';
import { ClassificationMutation } from '@/type';

interface Props {
  item?: ClassificationMutation;
}

const WaysToTravelCard: React.FC<Props> = ({ item }) => {
  return (
    <div className={style.card}>
      <div className={style.card__image__box}>
        <Image
          width={1200}
          height={1000}
          className={style.card__image__box__content}
          src={'http://localhost:1337' + item?.image.url}
          alt="#"
        />
      </div>
      <div className={style.card__body}>
        <h4 className={style.card__title}> {item?.title}</h4>
      </div>
    </div>
  );
};

export default WaysToTravelCard;
