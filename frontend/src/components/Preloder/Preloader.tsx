import React from 'react';
import style from './preloader.module.scss';
import Image from 'next/image';
import preloaderImg from '../../assets/preloaderImage/character_small1.gif';
const Preloader = () => {
  return (
    <>
      <div className={style.preloaderContainer}>
        <div className={style.cloud}>
          <Image width={200} height={150} priority src={preloaderImg} alt="#" />
        </div>
      </div>
    </>
  );
};

export default Preloader;
