'use client';
import React, { useState } from 'react';
import style from './locationRegion.module.scss';
import classificationsStyle from '@/features/Classification/Classification.module.scss';
import Image from 'next/image';
import { useAppSelector } from '@/store/hooks';
import { selectLocationsRegion } from '@/features/LocationsRegion/LocationsRegionSlice';
import { GALLERY } from '@/constants';
import Banner from '@/components/Banner/Banner';
import ToursDisplay from '@/components/ToursDisplay/ToursDisplay';
import { useTranslations } from 'next-intl';

const LocationsRegion: React.FC = () => {
  const content = useAppSelector(selectLocationsRegion);

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const t = useTranslations('LocationID');

  const handlePlayButtonClick = () => {
    setIsVideoPlaying(true);
  };

  return (
    content && (
      <>
        <div className={style.locationBanner}>
          <Banner
            src={GALLERY + content.bannerImage.url}
            width={1200}
            height={1200}
            alt={'#'}
            title={`${content.name}`}
          />
        </div>
        <div className={style.locationDescription}>
          <h2 className={style.locationDescription__title}>{content.title}</h2>
          <p className={style.locationDescription__description}>{content.description}</p>
        </div>
        <div className={classificationsStyle.classificationInfo__video} style={{ height: '486px' }}>
          {isVideoPlaying ? (
            <iframe
              style={{ border: 'none' }}
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${content.videoLink}?si=ELqKiwQhDaaWnzZ3`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          ) : (
            <>
              <Image
                priority={true}
                src={GALLERY + content.bannerImage.url}
                alt="#"
                width={1200}
                height={1200}
              />
              <button
                className={classificationsStyle.classificationInfo__video__button}
                onClick={handlePlayButtonClick}
              >
                Play
              </button>
            </>
          )}
        </div>
        <div className={style.toursBlog}>
          <h3 className={style.toursBlog__title}>
            {t('subtitle')} {content.name}
          </h3>
          <ToursDisplay tours={content.tours} initialCardCount={3} additionalCardCount={3} />
        </div>
      </>
    )
  );
};
export default LocationsRegion;
