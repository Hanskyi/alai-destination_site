import React from 'react';
import Image from 'next/image';
import { useAppSelector } from '@/store/hooks';
import articleBanner from '@/assets/articlesImages/articlesBanner.png';
import Link from 'next/link';
import style from './Purpose.module.scss';

const Purpose = () => {
  const purposeBlock = useAppSelector((state) => state.home.homeData?.purposeBlock);
  return (
    <div className={style.purpose}>
      <div className="container">
        <div className={style.purpose_card}>
          <div className={style.purpose_card_informationWrap}>
            <h2 className={style.purpose_card_title}>{purposeBlock?.data.title}</h2>
            <p className={style.purpose_card_text}>{purposeBlock?.data.description}</p>
            <Link href="/about-us" className={style.purpose_card_button}>
              {purposeBlock?.data.buttonText}
            </Link>
          </div>

          <div className={style.purpose_card_imgWrap}>
            <Image
              width={620}
              height={420}
              priority
              unoptimized
              className={style.purpose_card_img}
              src={
                purposeBlock?.data.purposeImage.url
                  ? 'http://localhost:1337' + purposeBlock?.data.purposeImage.url
                  : articleBanner.src
              }
              alt="Purpose image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purpose;
