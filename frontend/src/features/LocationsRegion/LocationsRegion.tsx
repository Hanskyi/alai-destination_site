import React, { useState } from 'react';
import style from './locationRegion.module.scss';
import classificationsStyle from '@/features/Classification/Classification.module.scss';
import Image from 'next/image';
import playIcon from '@/assets/icon/icon-play.svg';
import Reviews from '@/components/ClassificationReviews/Reviews';
import ClassificationsCard from '@/components/ClassificationsCard/ClassificationsCard';
import BackdropForBanner from '@/components/BackdropForBanner/BackdropForBanner';
import { useAppSelector } from '@/store/hooks';
import { selectLocationsRegion } from '@/features/LocationsRegion/LocationsRegionSlice';
import { GALLERY } from '@/constants';

const LocationsRegion = () => {
  const content = useAppSelector(selectLocationsRegion);

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayButtonClick = () => {
    setIsVideoPlaying(true);
  };

  return (
    <>
      <div className={style.locationBanner}>
        <Image
          width={2000}
          height={2000}
          priority
          className={style.locationBanner__image}
          src={GALLERY + content?.bannerImage.url}
          alt={content?.bannerImage.name!}
        />
        <div className={style.locationBanner__wrapper}>
          <h3 className={style.locationBanner__title}>{content?.name} region</h3>
        </div>
        <BackdropForBanner />
      </div>
      <div className={style.locationDescription}>
        <h2 className={style.locationDescription__title}>{content?.title}</h2>
        <p className={style.locationDescription__description}>{content?.description}</p>
      </div>
      <div className={classificationsStyle.classificationInfo__video} style={{ height: '486px' }}>
        {isVideoPlaying ? (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${content?.videoLink}?si=ELqKiwQhDaaWnzZ3`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        ) : (
          <>
            <Image
              priority={true}
              src={GALLERY + content?.bannerImage.url}
              alt="#"
              width={1200}
              height={1200}
            />
            <button
              className={classificationsStyle.classificationInfo__video__button}
              onClick={handlePlayButtonClick}
            >
              <Image src={playIcon} alt="#" />
              Play
            </button>
          </>
        )}
      </div>
      <div className={style.toursBlog}>
        <h3 className={style.toursBlog__title}>all tours in the Chui region</h3>
        <div className={style.toursBlog__cards}>
          {content?.tours.length! > 0 ? (
            content?.tours.map((item) => <ClassificationsCard key={item.id} tour={item} />)
          ) : (
            <h3 className={style.toursBlog__title}>Not tours yet</h3>
          )}
        </div>
        {content?.tours.length! > 6 && (
          <button className={classificationsStyle.classificationCards__button}>
            Show more trips
          </button>
        )}
      </div>
      {/*<Reviews />*/}
    </>
  );
};

export default LocationsRegion;
