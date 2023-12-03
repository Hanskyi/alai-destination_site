import React from 'react';
import style from './ClassificationsCard.module.scss';
import Image from 'next/image';
import galleryImage from '@/assets/images/gallery_block_images/gallery_image_1.jpg';

const ClassificationsCard = () => {
  return (
    <div className={style.classificationCard}>
      <div className={style.classificationCard__image}>
        <Image
          src={galleryImage.src}
          className={style.classificationCard__image__content}
          width={1200}
          height={1200}
          alt="#"
        />
      </div>
      <div className={style.classificationCard__content}>
        <h5 className={style.classificationCard__content__title}>Tailor-Made trips</h5>
        <p className={style.classificationCard__content__text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque delectus earum, illum
          molestias possimus quam soluta.
        </p>
        <button className={style.classificationCard__content__button}>Learn More</button>
      </div>
    </div>
  );
};

export default ClassificationsCard;
