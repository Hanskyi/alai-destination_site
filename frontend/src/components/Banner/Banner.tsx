import React from 'react';
import style from './Banner.module.scss';
import Image, { StaticImageData } from 'next/image';
import BackdropForBanner from '@/components/BackdropForBanner/BackdropForBanner';

interface Props {
  src: StaticImageData | string;
  width?: number;
  height?: number;
  alt: string;
  title?: string;
  subTitle?: string;
}

const Banner: React.FC<Props> = ({ src, height, width, alt, title, subTitle }) => {
  return (
    <div className={style.banner}>
      <Image
        priority={true}
        className={style.banner_image}
        src={src}
        width={width}
        height={height}
        alt={alt}
      />
      <div className={style.banner_wrapper}>
        <h1 className={style.banner_title}>{title}</h1>
        <h4 className={style.banner_sub_title}>{subTitle}</h4>
      </div>
      <div className={style.banner_backdrop}>
        <BackdropForBanner />
      </div>
    </div>
  );
};

export default Banner;
