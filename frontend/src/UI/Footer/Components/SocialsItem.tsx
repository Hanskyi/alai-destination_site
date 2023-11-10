import React from 'react';
import footer from '../Footer.module.scss';
interface Props {
  icon: string;
}

const SocialsItem: React.FC<Props> = ({ icon }) => {
  return (
    <div className={footer.social__listItem}>
      <a href="/">
        <img src={icon} alt="social" />
      </a>
    </div>
  );
};

export default SocialsItem;
