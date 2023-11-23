import React from 'react';
import style from '../TravelSliderBlog.module.scss';
import Image from 'next/image';

interface Props {
    item?: string
}
const WaysToTravelCard: React.FC<Props> = ({item}) => {
  return (
    <div className={style.card}>
      <div className={style.card__image__box}>
        <Image
          width={1200}
          height={1000}
          className={style.card__image__box__content}
          src="https://kartinki.pics/src.php?src=https://kartinki.pics/uploads/posts/2022-02/1645764570_1-kartinkin-net-p-na-profil-kartinki-1.jpg&w=315&h=455"
          alt="#"
        />
      </div>
      <div className={style.card__body}>
          <h4 className={style.card__title}> Walking & Trekking tours</h4>
      </div>
    </div>
  );
};

export default WaysToTravelCard;
