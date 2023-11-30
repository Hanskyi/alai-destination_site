import React from 'react';
import style from '../TravelSliderBlock.module.scss';
import Image from 'next/image';
import { ClassificationMutation } from '@/type';
import Link from 'next/link';

interface Props {
  item?: ClassificationMutation;
}

const WaysToTravelCard: React.FC<Props> = ({ item }) => {
  return (
    <>
      <Link href="#" className={style.waysToTravelCard__link}>
        <div className={style.cardWaysToTravelCard}>
          <Image
            width={1200}
            height={1000}
            className={style.cardWaysToTravelCard__image}
            src={'http://localhost:1337' + item?.image.url}
            alt="#"
          />
        </div>
        <div className={style.cardWaysToTravelCard__body}>
          <h4 className={style.cardWaysToTravelCard__title}>{item?.title}</h4>
        </div>
      </Link>
    </>
  );
};

export default WaysToTravelCard;
