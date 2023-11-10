import React from 'react';
import style from './Purpose.module.scss';

const Purpose = () => {
  return (
    <div className={style.purpose}>
      <div className="container">
        <div className={style.purpose__card}>
          <div className={style.purpose__card__informationWrap}>
            <h2 className={style.purpose__card__title}>We’re here to do good</h2>
            <p className={style.purpose__card__text}>
              Responsible travel has always been at the core of what we do. Travelling with us means
              not just better trips for you, it’s better for local communities, better for wildlife
              and better for the planet.
            </p>
            <button type="button" className={style.purpose__card__button}>
              Travel with purpose
            </button>
          </div>

          <div className={style.purpose__card__imgWrap}>
            <img
              className={style.purpose__card__img}
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
