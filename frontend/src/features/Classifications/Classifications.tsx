import React from 'react';
import style from './Classifications.module.scss';
import Image from 'next/image';
import classificationsBanner from '@/assets/classificationsImages/classification-banner.png';
import playIcon from '@/assets/icon/icon-play.svg';
import WaysToTravelCard from '@/features/Home/TravelSliderBlog/Components/WaysToTravelCard';

const Classifications = () => {
  return (
    <>
      <div className={style.classificationsBanner}>
        <Image className={style.classificationsBanner__image} src={classificationsBanner} alt="#" />
        <div className={style.classificationsBanner__wrapper}>
          <h3 className={style.classificationsBanner__title}>Explore Kyrgyzstan</h3>
        </div>
      </div>
      <div className={style.classificationsInfo}>
        <h2 className={style.classificationsInfo__title}>
          Each journey may begin with a single step, but some require a few more steps than others.
        </h2>
        <p className={style.classificationsInfo__description}>
          Here’s the idea: we provide you with expert trail guides, accommodation, and porters
          (where necessary); you bring your legs accommodation, and porters (where necessary); you
          bring your legs <span>Kilimanjaro</span> and Patagonia’s windswept trails to a more sedate
          stroll through the rice fields of <span>Vietnam</span> or the
          <span>rugged red hills on the Larapinta Trail</span> , there’s a calf-stretching trip to
          suit every level of fitness and expertise. All you have to do is put one foot in front of
          the other.
        </p>
        <div className={style.classificationsInfo__video}>
          <Image src={classificationsBanner} alt="#" />
          <button className={style.classificationsInfo__video__button}>
            <Image src={playIcon} alt="#" />
            Play
          </button>
        </div>
        <div className={style.classificationsCards}>
          <h3 className={style.classificationsCards__title}>
            Our walking, hiking & trekking trips
          </h3>
          <div className={style.classificationsCards__content}>
            {Array.from({ length: 8 }, (_, index) => (
              <WaysToTravelCard key={index} />
            ))}
          </div>
          <button className={style.classificationsCards__button}>Show all trips</button>
        </div>
      </div>
    </>
  );
};

export default Classifications;
