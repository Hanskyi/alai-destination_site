import React from 'react';
import style from '../TravelSliderBlog.module.scss';
import Image from 'next/image';

const GoodTripsCard = () => {
  return (
    <div className={style.card}>
      <div className={style.card__image__box}>
        <Image
          width={1200}
          height={1200}
          className={style.card__image__box__content__two}
          src="https://core-renderer-tiles.maps.yandex.net/tiles?l=map&v=23.11.01-1-b231030182430&x=6&y=3&z=3&scale=2.625&lang=ru_RU&client_id=yandex-web-maps&&ads=enabled"
          alt="#"
        />
      </div>
      <h4 className={style.card__days}>11 Days · Comfort</h4>
      <p className={style.card__description}>
        Best of Antarctica: A White Christmas (Ocean Endeavour)
      </p>
      <p className={style.card__price}>
        From <span className={style.card__price__span}>USD $9,990</span>
      </p>
    </div>
  );
};

export default GoodTripsCard;
