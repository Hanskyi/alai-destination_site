import React from 'react';
import SocialsItem from './SocialsItem';
import footer from '../Footer.module.scss';
import { useAppSelector } from '@/store/hooks';
import { selectHFData } from '@/features/HeaderFooter/headerFooterSlice';

const Socials = () => {
  const hfData = useAppSelector(selectHFData);

  return (
    <div className={`${footer.social__list} d-flex`}>
      {hfData?.data.socialLinks.map((icon, idx) => <SocialsItem key={idx} icon={icon} />)}
    </div>
  );
};

export default Socials;
