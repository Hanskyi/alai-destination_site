'use client';
import React, { useEffect, useState } from 'react';
import style from './ClassificationsCard.module.scss';
import Image from 'next/image';
import { GALLERY } from '@/constants';
import Link from 'next/link';
import { Image as TypeImage } from '@/type';

interface Props {
  title: string;
  previewDescription?: string;
  image: TypeImage;
  id: number;
  buttonText?: string;
}

const ClassificationsCard: React.FC<Props> = ({
  title,
  previewDescription,
  image,
  id,
  buttonText,
}) => {
  const [plainText, setPlainText] = useState<string | null>(null);

  useEffect(() => {
    if (typeof document !== 'undefined' && previewDescription) {
      const htmlCode = previewDescription;
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = htmlCode;
      setPlainText(tempDiv.innerText);
    }
  }, [previewDescription]);

  return (
    <Link href={`/classifications/${id}`}>
      <div className={style.classificationCard}>
        <div className={style.classificationCard__image}>
          <Image
            src={GALLERY + image?.url}
            className={style.classificationCard__image__content}
            priority
            width={1200}
            height={1200}
            alt="#"
          />
        </div>
        <div className={style.classificationCard__content}>
          <h5 className={style.classificationCard__content__title}>{title}</h5>
          {plainText && <p className={style.classificationCard__content__text}>{plainText}</p>}
          {buttonText && (
            <button className={style.classificationCard__content__button}>{buttonText}</button>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ClassificationsCard;
