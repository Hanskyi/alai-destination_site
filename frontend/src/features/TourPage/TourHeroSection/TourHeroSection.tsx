import React from 'react';
import tourStyle from './TourHeroSection.module.scss';
import { GALLERY } from '../../../constants';

interface Props {
  title: string;
  subTitle: string;
  mainImage: string;
}

const TourHeroSection: React.FC<Props> = ({ title, subTitle, mainImage }) => {
  const bannerLink = `url(${GALLERY}${mainImage})`;

  return (
    <div
      className={tourStyle.headlineContent}
      style={{ backgroundImage: bannerLink, backgroundSize: 'cover' }}
    >
      <div className={tourStyle.headlineText}>
        <h1 className={tourStyle.entryTitle}>{title}</h1>
        <h4 className={tourStyle.entrySubtitle}>{subTitle}</h4>
      </div>
    </div>
  );
};

export default TourHeroSection;
