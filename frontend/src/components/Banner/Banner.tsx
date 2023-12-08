import React, { useEffect, useState } from 'react';
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
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const parallaxStyles = {
    top: `${50 + scrollPosition * 0.1}%`,
  };

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
      <div className={style.banner_wrapper} style={parallaxStyles}>
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
