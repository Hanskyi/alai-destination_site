import React, { useState } from 'react';
import style from './Classifications.module.scss';
import Image from 'next/image';
import playIcon from '@/assets/icon/icon-play.svg';
import { useAppSelector } from '@/store/hooks';
import {
  selectClassificationPage,
  selectClassifications,
} from '@/features/Classifications/ClassificationsSlice';
import WaysToTravelCard from '@/features/Home/TravelSliderBlock/Components/WaysToTravelCard';
import Reviews from '@/components/ClassificationReviews/Reviews';
import Banner from '@/components/Banner/Banner';
import { GALLERY } from '@/constants';

const Classifications = () => {
  const classifications = useAppSelector(selectClassifications);

  const content = useAppSelector(selectClassificationPage);
  console.log(content);

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayButtonClick = () => {
    setIsVideoPlaying(true);
  };

  return (
    <>
      <div className={style.classificationsBanner}>
        <Banner
          src={content?.bannerImage.url ? `${GALLERY}${content.bannerImage.url}` : ''}
          width={1200}
          height={1200}
          alt={'#'}
          title={content?.title}
        />
      </div>
      <div className={style.classificationsInfo}>
        <h2 className={style.classificationsInfo__title}>{content?.subTitle}</h2>
        <p className={style.classificationsInfo__description}>{content?.description}</p>
        <div className={style.classificationsInfo__video} style={{ height: ' 486px' }}>
          {isVideoPlaying ? (
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${content?.videoLink}?autoplay=1&rel=0&modestbranding=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          ) : (
            <>
              <Image
                priority={true}
                src={content?.bannerImage.url ? `${GALLERY}${content.bannerImage.url}` : ''}
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
            {classifications.map(
              (category) =>
                category &&
                category.image && (
                  <div className={style.classificationsCards__content__box} key={category.id}>
                    <WaysToTravelCard item={category} />
                  </div>
                ),
            )}
          </div>
          {/*<Reviews />*/}
        </div>
      </div>
    </>
  );
};

export default Classifications;
