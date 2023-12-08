import React, { useState } from 'react';
import style from './Classifications.module.scss';
import Image from 'next/image';
import playIcon from '@/assets/icon/icon-play.svg';
import { useAppSelector } from '@/store/hooks';
import classificationsBanner from '@/assets/classificationsImages/classification-banner.png';
import { selectClassifications } from '@/features/Classifications/ClassificationsSlice';
import WaysToTravelCard from '@/features/Home/TravelSliderBlock/Components/WaysToTravelCard';
import Reviews from '@/components/ClassificationReviews/Reviews';
import Banner from '@/components/Banner/Banner';

const Classifications = () => {
  const classifications = useAppSelector(selectClassifications);

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayButtonClick = () => {
    setIsVideoPlaying(true);
  };

  return (
    <>
      <div className={style.classificationsBanner}>
        <Banner
          src={classificationsBanner}
          width={1200}
          height={1200}
          alt={'#'}
          title={'Walking & Trekking Tours'}
        />
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
        <div className={style.classificationsInfo__video} style={{ height: ' 486px' }}>
          {isVideoPlaying ? (
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/D4fRDc0ZzHo"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          ) : (
            <>
              <Image
                priority={true}
                src={classificationsBanner}
                alt="#"
                width={1200}
                height={1200}
              />
              <button
                className={style.classificationsInfo__video__button}
                onClick={handlePlayButtonClick}
              >
                <Image src={playIcon} alt="#" />
                Play
              </button>
            </>
          )}
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
