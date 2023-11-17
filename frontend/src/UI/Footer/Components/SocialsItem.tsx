import React from 'react';
import footer from '../Footer.module.scss';
interface Props {
  icon: string;
}
import Image from 'next/image';
import Link from 'next/link';

const SocialsItem: React.FC<Props> = ({ icon }) => {
  return (
    <div className={footer.social__listItem}>
      <Link href="/">
        <Image width={32} height={32} src={icon} alt="social" />
      </Link>
    </div>
  );
};

export default SocialsItem;
