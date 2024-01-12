import React from 'react';
import Link from 'next/link';
import FooterLogo from '../../assets/footer/logo_footer.png';
import Socials from './Components/Socials';
import styles from './Footer.module.scss';
import Image from 'next/image';
import { IHeaderFooterInfo } from '@/type';

interface IProps {
  hfData: IHeaderFooterInfo | null;
}

const Footer: React.FC<IProps> = ({ hfData }) => {
  return (
    hfData && (
      <footer className={`${styles.footer} d-flex flex-column`}>
        <div className={styles.footer__bottom}>
          <div
            className={`${styles.footer__bottom__content} container justify-between align-center`}
          >
            <div className={styles.logo__wrapper}>
              <Link href="/">
                <Image width={50} height={86} src={FooterLogo.src} alt="Logo" />
              </Link>
            </div>
            <div className={styles.contactsBlock}>
              <div className={styles.contactsBlock__card}>
                <a href="tel:+996550339292" className={styles.contactsBlock__text}>
                  Mob: +996 550 339292
                </a>
                <a
                  href="https://wa.me/996553342428?text=Здравствуйте."
                  target="_blank"
                  className={styles.contactsBlock__text}
                >
                  WhatsApp: +996 550 339292
                </a>
                <a
                  href="mailto:info@example.com"
                  className={styles.contactsBlock__text}
                  target="_blank"
                >
                  E-mail: info@example.com
                </a>
                <p className={styles.contactsBlock__text}>Address: Kyrgyzstan, Bishkek</p>
              </div>
            </div>
            <Socials hfData={hfData} />
          </div>
        </div>
      </footer>
    )
  );
};

export default Footer;
