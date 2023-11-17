import React from 'react';
import Link from 'next/link';
import FooterLogo from '../../assets/footer/logo_footer.png';
import Socials from './Components/Socials';
import footer from './Footer.module.scss';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={`${footer.footer} d-flex flex-column"`}>
      <div className={footer.footer__bottom}>
        <div className="container d-flex justify-between align-center">
          <div>
            <Link href="/">
              <Image width={50} height={86} src={FooterLogo.src} alt="Logo" />
            </Link>
          </div>
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default Footer;
