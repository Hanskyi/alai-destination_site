import React from 'react';
import style from '../TravelSliderBlock.module.scss';
import Image from 'next/image';
import { Tour } from '@/type';
import Link from 'next/link';

interface Props {
  item: Tour;
}

const GoodTripsCard: React.FC<Props> = ({ item }) => {
  return (
    <Link href={'/tours/1'} className={style.card}>
      <div className={style.card__image__box}>
        <Image
          width={1200}
          height={1200}
          className={style.card__image__box__content__two}
          src={'http://localhost:1337' + item?.mainImage.url}
          alt="#"
        />
      </div>
      <div className={style.card__body}>
        <span className={style.card__days}>
          {item?.duration} days
          <span> {item?.classification.title}</span>
        </span>
        <h4 className={style.card__description}>{item?.title}</h4>
        <p className={style.card__price}>
          From <span className={style.card__price__span}>${item?.price} USD</span>
        </p>
      </div>
    </Link>
  );
};

export default GoodTripsCard;
