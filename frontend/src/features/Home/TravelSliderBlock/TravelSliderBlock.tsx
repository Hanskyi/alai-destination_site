import React from 'react';
import { useAppSelector } from '@/store/hooks';
import SwiperComponent from '@/components/SwiperComponent/SwiperComponent';
import { SwiperSlide } from 'swiper/react';
import slideStyle from '@/components/SwiperComponent/SwiperComponent.module.scss';
import style from './TravelSliderBlock.module.scss';
import { useTranslations } from 'next-intl';
import Card from '@/components/Card/Card';
import 'swiper/css';

const TravelSliderBlock = () => {
  const homeClassifications = useAppSelector((state) => state.home.homeData?.homeClassification);
  const homeTour = useAppSelector((state) => state.home.homeData?.homeTour);

  const t = useTranslations('HomeCategories');

  return (
    <div className={`${style.travelSliderBlog} container`}>
      <h3 className={style.travelSliderBlog__title}>{t('title')}</h3>
      <p className={style.travelSliderBlog__text}>{t('subTitle')}</p>

      <div className={style.travelSliderBlog__first}>
        <p className={style.travelSliderBlog__description}>{homeClassifications?.data.title}</p>
        <SwiperComponent link={'/classifications'}>
          {homeClassifications?.data.classifications.map((category) => (
            <SwiperSlide className={slideStyle.swiper__slide} key={category.id}>
              <Card
                title={category.title}
                id={category.id}
                image={category.image ? category.image.url : ''}
                categoryCard={true}
              />
            </SwiperSlide>
          ))}
        </SwiperComponent>
      </div>

      <div className="travelSliderBlog__second">
        <p className={style.travelSliderBlog__description}>{homeTour?.data.title}</p>
        <SwiperComponent link={'/tours'}>
          {homeTour?.data.tours.map((tour) => (
            <SwiperSlide className={slideStyle.swiper__slide} key={tour.id}>
              <Card
                id={tour.id}
                title={tour.title}
                price={tour.price}
                image={tour.mainImage.url}
                classification={tour.classification}
                duration={tour.duration}
              />
            </SwiperSlide>
          ))}
        </SwiperComponent>
      </div>
    </div>
  );
};

export default TravelSliderBlock;
