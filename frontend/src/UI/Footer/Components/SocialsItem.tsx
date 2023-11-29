import React from 'react';
import footer from '../Footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { GALLERY } from '@/constants';
import { ISocialLink } from '@/type';

interface Props {
  icon: ISocialLink;
}

const SocialsItem: React.FC<Props> = ({ icon }) => {
  return (
    <div className={footer.social__listItem}>
      <Link href={icon.href}>
        <Image width={32} height={32} src={GALLERY + icon.icon.url} alt={icon.icon.name} />
      </Link>
    </div>
  );
};

export default SocialsItem;
