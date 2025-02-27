'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import phoneIcon from '../../../public/assets/toolbar/phone-icon.png';
import enter from '../../../public/assets/toolbar/enter1.png';
import logout from '../../../public/assets/toolbar/logout.png';
import toolbar from './Toolbar.module.scss';
import Backdrop from '@/components/Backdrop/Backdrop';
import { signIn, signOut, useSession } from 'next-auth/react';
import { GALLERY } from '@/constants';
import { IHeaderFooterInfo, ILocationListShortInfo } from '@/type';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';

interface IProps {
  hfData: IHeaderFooterInfo | null;
  locations: ILocationListShortInfo | null;
}

const initialMenuState = false;
const initialDestinationsDropdownState = false;
const initialBackdropState = false;

const Toolbar: React.FC<IProps> = ({ hfData, locations }) => {
  const [menuOpen, setMenuOpen] = useState(initialMenuState);
  const [destinationsDropdown, setDestinationsDropdown] = useState(
    initialDestinationsDropdownState,
  );
  const [backdropOpen, setBackdropOpen] = useState(initialBackdropState);

  const { data: session } = useSession();

  const t = useTranslations('Header.Navigation');
  const loginStatus = useTranslations('Header.LoginStatus');

  const handleGoogleSignIn = async () => {
    await signIn('google');
  };

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setDestinationsDropdown(false);
    setBackdropOpen(false);
  };

  const renderHeaderTopLinks = session
    ? [
        {
          text: loginStatus('logout'),
          onClick: () => signOut(),
          href: '#',
          imgSrc: logout,
          imgAlt: 'logout',
        },
        {
          text: hfData?.data.mainPhoneNumber,
          href: `tel:${hfData?.data.mainPhoneNumber}`,
          imgSrc: phoneIcon,
          imgAlt: hfData?.data.mainPhoneNumber,
        },
      ]
    : [
        {
          text: loginStatus('login'),
          onClick: handleGoogleSignIn,
          href: '#',
          imgSrc: enter,
          imgAlt: 'login',
        },
        {
          text: hfData?.data.mainPhoneNumber,
          href: `tel:${hfData?.data.mainPhoneNumber}`,
          imgSrc: phoneIcon,
          imgAlt: hfData?.data.mainPhoneNumber,
        },
      ];

  const largeLinks = [
    { text: t('item_2'), href: '/classifications' },
    { text: t('item_3'), href: '/about-us' },
  ];

  const onClickLinkHeader = () => {
    setDestinationsDropdown(!destinationsDropdown);
    setBackdropOpen(!backdropOpen);
  };

  const onClickLinkBurger = () => {
    setDestinationsDropdown(!destinationsDropdown);
  };

  const router = useRouter();

  return (
    hfData && (
      <>
        <header className={toolbar.header}>
          <div className={toolbar.headerContainer}>
            <div className={toolbar.headerTop}>
              <div className={toolbar.links}>
                <>
                  {renderHeaderTopLinks.map((link, index) => (
                    <Link key={index} className={toolbar.headerTopLink} href={link.href}>
                      <Image
                        height={25}
                        width={25}
                        className={toolbar.headerImg}
                        onClick={link.onClick}
                        src={link.imgSrc}
                        alt={link.imgAlt || 'icon'}
                        // priority
                      />
                      <span className={toolbar.topText}>
                        {link.onClick ? (
                          <button className={toolbar.headerButton} onClick={link.onClick}>
                            {link.text}
                          </button>
                        ) : (
                          link.text
                        )}
                      </span>
                    </Link>
                  ))}
                </>

                <div
                  className={`${toolbar.burgerMenu} ${menuOpen ? toolbar.open : ''}`}
                  onClick={toggleMenu}
                >
                  <div className={toolbar.bar} />
                  <div className={toolbar.bar} />
                  <div className={toolbar.bar} />
                </div>
              </div>
            </div>

            <div className={toolbar.headerBottom}>
              <div>
                <Link className={toolbar.logo} href="/">
                  {hfData?.data && (
                    <Image
                      src={GALLERY + hfData?.data.logo.url}
                      alt="logo"
                      width={165}
                      height={70}
                    />
                  )}
                </Link>
              </div>

              <div className={toolbar.linksBottom}>
                <div>
                  <div
                    className={`${toolbar.headerLink} ${toolbar.destinations}`}
                    onClick={onClickLinkHeader}
                  >
                    {t('item_1')}
                    <span
                      className={`${toolbar.destinations__image} ${
                        destinationsDropdown && toolbar.destinations__image__active
                      }`}
                    ></span>
                  </div>
                  {destinationsDropdown && (
                    <div className={toolbar.dropdown}>
                      <div className={toolbar.dropdown__links}>
                        {locations?.data.map((item, index) => (
                          <Link
                            key={index}
                            className={toolbar.dropdown__link}
                            href={'/locations/' + item.id}
                            onClick={closeMenu}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                {largeLinks.map((link, index) => (
                  <Link
                    href={link.href}
                    key={index}
                    className={`${toolbar.headerLink} ${
                      router.pathname === link.href ? toolbar.active : ''
                    }`}
                  >
                    {link.text}
                  </Link>
                ))}
              </div>

              <div className={toolbar.largeScreenLinks}>
                {renderHeaderTopLinks.map((link, index) => (
                  <Link key={index} className={toolbar.headerTopLink} href={link.href}>
                    <Image
                      height={25}
                      width={25}
                      className={toolbar.headerImg}
                      onClick={link.onClick}
                      src={link.imgSrc}
                      alt={link.imgAlt || 'icon'}
                    />
                    <span className={toolbar.topText}>
                      {link.onClick ? (
                        <button className={toolbar.headerButton} onClick={link.onClick}>
                          {link.text}
                        </button>
                      ) : (
                        link.text
                      )}
                    </span>
                  </Link>
                ))}
              </div>

              <div className={`${toolbar.linksResponsive} ${menuOpen ? toolbar.open : ''}`}>
                <div className={toolbar.closeButton} onClick={closeMenu}>
                  <div>&#x2715;</div>
                </div>
                <Link className={toolbar.headerLink} href="/" onClick={closeMenu}>
                  {t('item_4')}
                </Link>

                <div
                  className={`${toolbar.headerLink} ${toolbar.destinations}}`}
                  onClick={() => onClickLinkBurger()}
                >
                  {t('item_1')}
                  <span
                    className={`${toolbar.destinations__image} ${
                      toolbar.destinations__image__burger
                    } ${destinationsDropdown && toolbar.destinations__image__active}`}
                  ></span>
                </div>
                {destinationsDropdown && (
                  <div className={`${toolbar.dropdown} ${toolbar.dropdown__burger}`}>
                    <div className={toolbar.dropdown__links}>
                      {locations?.data.map((item, index) => (
                        <Link
                          key={index}
                          className={toolbar.dropdown__link}
                          href={'/locations/' + item.id}
                          onClick={closeMenu}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {largeLinks.map((link, index) => (
                  <Link
                    href={link.href}
                    key={index}
                    className={toolbar.headerLink}
                    onClick={closeMenu}
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {menuOpen && <Backdrop close={closeMenu} background={'0, 0, 0, 0.55'} />}
        </header>
        {backdropOpen && <Backdrop close={closeMenu} background={'0, 0, 0, 0'} />}
      </>
    )
  );
};

export default Toolbar;
