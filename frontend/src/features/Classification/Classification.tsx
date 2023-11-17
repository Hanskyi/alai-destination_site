import React from 'react';
import style from './Classification.module.scss';
import classificationBanner from '@/assets/classificationsImages/classification-banner.png';
import ClassificationsCard from '@/features/Classification/components/ClassificationsCard';
import playIcon from '@/assets/icon/icon-play.svg';
import Image from 'next/image';

const Classification = () => {
  return (
    <>
      <div className={style.classificationBanner}>
        <Image className={style.classificationBanner__image} src={classificationBanner} alt="#" />
        <div className={style.classificationBanner__wrapper}>
          <h3 className={style.classificationBanner__title}>Walking & Trekking Tours</h3>
        </div>
      </div>
      <div className={style.classificationInfo}>
        <h2 className={style.classificationInfo__title}>
          Each journey may begin with a single step, but some require a few more steps than others.
        </h2>
        <p className={style.classificationInfo__description}>
          Here’s the idea: we provide you with expert trail guides, accommodation, and porters
          (where necessary); you bring your legs accommodation, and porters (where necessary); you
          bring your legs <span>Kilimanjaro</span> and Patagonia’s windswept trails to a more sedate
          stroll through the rice fields of <span>Vietnam</span> or the
          <span>rugged red hills on the Larapinta Trail</span> , there’s a calf-stretching trip to
          suit every level of fitness and expertise. All you have to do is put one foot in front of
          the other.
        </p>
        <div className={style.classificationInfo__video}>
          <Image src={classificationBanner} alt="#" />
          <button className={style.classificationInfo__video__button}>
            <Image src={playIcon} alt="#" />
            Play
          </button>
        </div>
        <div className={style.classificationCards}>
          <h3 className={style.classificationCards__title}>Our walking, hiking & trekking trips</h3>
          <div className={style.classificationCards__content}>
            {Array.from({ length: 6 }, (_, index) => (
              <ClassificationsCard key={index} />
            ))}
          </div>
          <button className={style.classificationCards__button}>Show more trips</button>
        </div>
      </div>
    </>
  );
};

export default Classification;
