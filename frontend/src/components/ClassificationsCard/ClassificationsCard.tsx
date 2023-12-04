'use client';
import React, { useEffect, useState } from 'react';
import style from './ClassificationsCard.module.scss';
import Image from 'next/image';
import { TourLocationRegion } from '@/type';
import { apiUrl, GALLERY } from '@/constants';
import Link from 'next/link';

interface Props {
  tour: TourLocationRegion;
}

const ClassificationsCard: React.FC<Props> = ({ tour }) => {
  const [plainText, setPlainText] = useState<string | null>(null);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const htmlCode = tour.previewDescription;
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = htmlCode;
      setPlainText(tempDiv.innerText);
    }
  }, [tour.previewDescription]);
  console.log(tour.id);
  return (
    <div className={style.classificationCard}>
      <div className={style.classificationCard__image}>
        <Image
          src={GALLERY + tour.mainImage.url}
          className={style.classificationCard__image__content}
          width={1200}
          height={1200}
          alt="#"
        />
      </div>
      <div className={style.classificationCard__content}>
        <h5 className={style.classificationCard__content__title}>{tour.title}</h5>
        <p className={style.classificationCard__content__text}>{plainText}</p>
        <Link href={`/tours/${tour.id}`} className={style.classificationCard__content__button}>
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default ClassificationsCard;
