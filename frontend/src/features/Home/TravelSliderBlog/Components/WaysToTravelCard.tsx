import React from 'react';
import style from '../TravelSliderBlog.module.scss';

const WaysToTravelCard = () => {
  return (
    <div className={style.card}>
      <div className={style.card__image__box}>
        <img
          className={style.card__image__box__content}
          src="https://kartinki.pics/src.php?src=https://kartinki.pics/uploads/posts/2022-02/1645764570_1-kartinkin-net-p-na-profil-kartinki-1.jpg&w=315&h=455"
          alt="#"
        />
      </div>
      <h4 className={style.card__title}> Walking & Trekking tours</h4>
    </div>
  );
};

export default WaysToTravelCard;
