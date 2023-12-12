import React, { useState } from 'react';
import style from './Classification.module.scss';
import playIcon from '@/assets/icon/icon-play.svg';
import Image from 'next/image';
import { useAppSelector } from '@/store/hooks';
import { GALLERY } from '@/constants';
import Banner from '@/components/Banner/Banner';
import ToursDisplay from '@/components/ToursDisplay/ToursDisplay';
import { useTranslations } from 'next-intl';

const Classification = () => {
  const { classification } = useAppSelector((state) => state.classification);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const t = useTranslations('ClassificationID');

  const handlePlayButtonClick = () => {
    setIsVideoPlaying(true);
  };

  return (
    classification && (
      <>
        <div className={style.classificationBanner}>
          <Banner
            src={GALLERY + classification.data.image.url}
            width={1200}
            height={1200}
            alt={'#'}
            title={classification.data.title}
          />
        </div>
        <div className={style.classificationInfo}>
          <h2 className={style.classificationInfo__title}>
            Each journey may begin with a single step, but some require a few more steps than
            others.
          </h2>
          <p className={style.classificationInfo__description}>{classification.data.description}</p>
          <div className={style.classificationInfo__video} style={{ height: ' 486px' }}>
            {isVideoPlaying ? (
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${classification?.data.videoLink}?autoplay=1&rel=0&modestbranding=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            ) : (
              <>
                <Image
                  priority={true}
                  src={GALLERY + classification?.data.image.url}
                  alt="#"
                  width={1200}
                  height={1200}
                />
                <button
                  className={style.classificationInfo__video__button}
                  onClick={handlePlayButtonClick}
                >
                  <Image src={playIcon} alt="#" />
                  Play
                </button>
              </>
            )}
          </div>
          <div className={style.classificationCards}>
            <h3 className={style.classificationCards__title}>
              {t('subtitle')} {classification?.data.title}
            </h3>
            <ToursDisplay
              tours={classification.data.tours}
              initialCardCount={3}
              additionalCardCount={3}
            />
          </div>
          {/*<Reviews />*/}
        </div>
      </>
    )
  );
};

export default Classification;
