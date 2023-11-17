import React from 'react';
import style from './Purpose.module.scss';
import Image from 'next/image';

const Purpose = () => {
  return (
    <div className={style.purpose}>
      <div className="container">
        <div className={style.purpose_card}>
          <div className={style.purpose_card_informationWrap}>
            <h2 className={style.purpose_card_title}>We’re here to do good</h2>
            <p className={style.purpose_card_text}>
              Responsible travel has always been at the core of what we do. Travelling with us means
              not just better trips for you, it’s better for local communities, better for wildlife
              and better for the planet.
            </p>
            <button type="button" className={style.purpose_card_button}>
              Travel with purpose
            </button>
          </div>

          <div className={style.purpose_card_imgWrap}>
            <Image
              width={1000}
              height={100}
              unoptimized
              className={style.purpose_card_img}
              src="https://i.pinimg.com/originals/0c/5a/14/0c5a140e7ff19f285439e3b3dd439a15.jpg"
              alt="Purpose image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purpose;
