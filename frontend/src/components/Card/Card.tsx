import React from 'react';
import style from './Card.module.scss';
import Image from 'next/image';
import { Classification } from '@/type';
import Link from 'next/link';
import { GALLERY } from '@/constants';

interface Props {
  title: string;
  duration?: number;
  image: string;
  id: string | number;
  classification?: Classification;
  price?: number;
  categoryCard?: boolean;
}

const Card: React.FC<Props> = (props) => {
  return (
    <Link href={(props.categoryCard ? `/classifications/` : `/tours/`) + props.id}>
      <div className={style.card}>
        <Image
          width={1200}
          height={1200}
          style={{ height: props.categoryCard ? '300px' : '200px' }}
          className={style.card__image}
          src={GALLERY + props.image}
          alt="#"
        />
        <div className={style.card__body}>
          <div>
            {props.duration && (
              <span className={style.card__body__days}>{props.duration} days</span>
            )}
            {props.classification && (
              <span className={style.card__body__classification}>
                {props.classification?.title}
              </span>
            )}
          </div>
          <span className={style.card__body__title}>{props.title}</span>
          {props.price && (
            <p className={style.card__body__price}>
              From <span className={style.card__body__price__span}>${props.price} USD</span>
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Card;
