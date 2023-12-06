import React from 'react';
import style from './Classifications.module.scss';
import Image from 'next/image';
import playIcon from '@/assets/icon/icon-play.svg';
import { useAppSelector } from '@/store/hooks';
import classificationsBanner from '@/assets/classificationsImages/classification-banner.png';
import BackdropForBanner from '@/components/BackdropForBanner/BackdropForBanner';
import { selectClassifications } from '@/features/Classifications/ClassificationsSlice';
import WaysToTravelCard from '@/features/Home/TravelSliderBlock/Components/WaysToTravelCard';
import Reviews from '@/components/ClassificationReviews/Reviews';

const Classifications = () => {
  const classifications = useAppSelector(selectClassifications);

  return (
    <>
      <div className={style.classificationsBanner}>
        <Image
          priority={true}
          className={style.classificationsBanner__image}
          src={classificationsBanner}
          width={1200}
          height={1200}
          alt="#"
        />
        <BackdropForBanner />
        <div className={style.classificationsBanner__wrapper}>
          <h3 className={style.classificationsBanner__title}>Walking & Trekking Tours</h3>
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
          <Image priority={true} src={classificationsBanner} alt="#" width={1200} height={1200} />
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
            {classifications.map((category) => (
              <div className={style.classificationsCards__content__box} key={category.id}>
                <WaysToTravelCard item={category} />
              </div>
            ))}
          </div>
          {/*<Reviews />*/}
        </div>
      </div>
    </>
  );
};

export default Classifications;
