import React from 'react';
import SocialsItem from './SocialsItem';
import footer from '../Footer.module.scss';
import { IHeaderFooterInfo } from '@/type';

interface IProps {
  hfData: IHeaderFooterInfo | null;
}

const Socials: React.FC<IProps> = ({ hfData }) => {
  return (
    <div className={`${footer.social__list} d-flex`}>
      {hfData?.data.socialLinks.map((icon, idx) => <SocialsItem key={idx} icon={icon} />)}
    </div>
  );
};

export default Socials;
