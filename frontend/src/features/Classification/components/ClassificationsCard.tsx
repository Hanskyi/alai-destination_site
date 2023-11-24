import React from 'react';
import style from '../Classification.module.scss';
import arrowIcon from '@/assets/icon/icon-arrow.svg';
import Image from 'next/image';

const ClassificationsCard = () => {
  return (
    <div className={style.classificationCard}>
      <div className={style.classificationCard__image}>
        <Image
          src="https://static-cse.canva.com/blob/847132/paulskorupskas7KLaxLbSXAunsplash2.jpg"
          className={style.classificationCard__image__content}
          width={1200}
          height={1200}
          alt="#"
        />
      </div>
      <div className={style.classificationCard__content}>
        <h5 className={style.classificationCard__content__title}>Tailor-Made trips</h5>
        <p className={style.classificationCard__content__text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque delectus earum, illum
          molestias possimus quam soluta.
        </p>
        <button className={style.classificationCard__content__button}>
          Learn More
          <Image src={arrowIcon} alt="#" />
        </button>
      </div>
    </div>
  );
};

export default ClassificationsCard;
