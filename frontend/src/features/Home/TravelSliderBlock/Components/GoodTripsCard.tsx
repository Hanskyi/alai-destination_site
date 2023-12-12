import React from 'react';
import style from '../TravelSliderBlock.module.scss';
import Image from 'next/image';
import { TourCard } from '@/type';
import Link from 'next/link';

interface Props {
  item: TourCard;
}

const GoodTripsCard: React.FC<Props> = ({ item }) => {
  return (
    <Link href={`/tours/${item?.id}`} className={style.card}>
      <>
        <div className={style.goodTripsCard}>
          <Image
            width={1200}
            height={1200}
            className={style.goodTripsCard__image}
            src={'http://localhost:1337' + item?.mainImage.url}
            alt="#"
          />
        </div>
        <div className={style.goodTripsCard__body}>
          <div className={style.goodTripsCard__body__wrapper}>
            <span className={style.goodTripsCard__body__days}>{item?.duration} days</span>
            <span className={style.goodTripsCard__body__classification}>
              {item?.classification.title}
            </span>
          </div>

          <span className={style.goodTripsCard__body__title}>{item?.title}</span>
          <p className={style.goodTripsCard__body__price}>
            From <span className={style.goodTripsCard__body__price__span}>${item?.price} USD</span>
          </p>
        </div>
      </>
    </Link>
  );
};

export default GoodTripsCard;
