import React from 'react';
import style from './Purpose.module.scss';
import Image from 'next/image';
import { useAppSelector } from '@/store/hooks';

const Purpose = () => {
  const purposeBlock = useAppSelector((state) => state.products.homeData?.purposeBlock);
  return (
    <div className={style.purpose}>
      <div className="container">
        <div className={style.purpose_card}>
          <div className={style.purpose_card_informationWrap}>
            <h2 className={style.purpose_card_title}>{purposeBlock?.data.title}</h2>
            <p className={style.purpose_card_text}>{purposeBlock?.data.description}</p>
            <button type="button" className={style.purpose_card_button}>
              {purposeBlock?.data.buttonText}
            </button>
          </div>

          <div className={style.purpose_card_imgWrap}>
            <Image
              width={620}
              height={420}
              priority
              unoptimized
              className={style.purpose_card_img}
              src={'http://localhost:1337' + purposeBlock?.data.purposeImage.url}
              alt="Purpose image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purpose;
