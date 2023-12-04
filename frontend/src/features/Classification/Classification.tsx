import React, { useState } from 'react';
import style from './Classification.module.scss';
import playIcon from '@/assets/icon/icon-play.svg';
import Image from 'next/image';
import Reviews from '@/components/ClassificationReviews/Reviews';
import ClassificationsCard from '@/components/ClassificationsCard/ClassificationsCard';
import BackdropForBanner from '@/components/BackdropForBanner/BackdropForBanner';
import { useAppSelector } from '@/store/hooks';
import { GALLERY } from '@/constants';

const Classification = () => {
  const { classification } = useAppSelector((state) => state.classification);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayButtonClick = () => {
    setIsVideoPlaying(true);
  };

  return (
    <>
      <div className={style.classificationBanner}>
        <Image
          priority={true}
          className={style.classificationBanner__image}
          src={GALLERY + classification?.data.image.url}
          width={1200}
          height={1200}
          alt="#"
        />
        <BackdropForBanner />
        <div className={style.classificationBanner__wrapper}>
          <h3 className={style.classificationBanner__title}>{classification?.data.title}</h3>
        </div>
      </div>
      <div className={style.classificationInfo}>
        <h2 className={style.classificationInfo__title}>
          Each journey may begin with a single step, but some require a few more steps than others.
        </h2>
        <p className={style.classificationInfo__description}>{classification?.data.description}</p>
        <div className={style.classificationInfo__video} style={{ height: ' 486px' }}>
          {isVideoPlaying ? (
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${classification?.data.videoLink}?si=ELqKiwQhDaaWnzZ3`}
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
          <h3 className={style.classificationCards__title}>Our walking, hiking & trekking trips</h3>
          <div className={style.classificationCards__content}>
            {/*{Array.from({ length: 6 }, (_, index) => (*/}
            {/*  // <ClassificationsCard key={index} />*/}
            {/*))}*/}
          </div>
          <button className={style.classificationCards__button}>Show more trips</button>
        </div>
        <Reviews />
      </div>
    </>
  );
};

export default Classification;
