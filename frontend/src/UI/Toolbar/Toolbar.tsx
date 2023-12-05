import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import phoneIcon from '@/assets/toolbar/phone-icon.png';
import enter from '@/assets/toolbar/enter1.png';
import logout from '@/assets/toolbar/logout.png';
import toolbar from './Toolbar.module.scss';
import Backdrop from '@/components/Backdrop/Backdrop';
import { signIn, signOut, useSession } from 'next-auth/react';
import { GALLERY } from '@/constants';
import { IHeaderFooterInfo } from '@/type';

interface IProps {
  hfData: IHeaderFooterInfo | null;
}

const initialMenuState = false;
const initialDestinationsDropdownState = false;
const initialBackdropState = false;

const Toolbar: React.FC<IProps> = ({ hfData }) => {
  const [menuOpen, setMenuOpen] = useState(initialMenuState);
  const [destinationsDropdown, setDestinationsDropdown] = useState(
    initialDestinationsDropdownState,
  );
  const [backdropOpen, setBackdropOpen] = useState(initialBackdropState);

  const { data: session } = useSession();

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
          text: 'Logout',
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
          text: 'Log in',
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
    { text: 'Destinations', href: '/classifications' },
    { text: 'About us', href: '/about-us' },
  ];

  const regionLinks = [
    {
      region: 'Jalal-abad',
      href: '/locations/Jalal-abad',
    },
    {
      region: 'Osh',
      href: '/locations/Osh',
    },
    {
      region: 'Chuy',
      href: '/locations/Chuy',
    },
    {
      region: 'Talas',
      href: '/locations/Talas',
    },
    {
      region: 'Batken',
      href: '/locations/Batken',
    },
    {
      region: 'Issyk-Kul',
      href: '/locations/Issyk-Kul',
    },
    {
      region: 'Naryn',
      href: '/locations/Naryn',
    },
  ];

  const onClickLinkHeader = () => {
    setDestinationsDropdown(!destinationsDropdown);
    setBackdropOpen(!backdropOpen);
  };

  const onClickLinkBurger = () => {
    setDestinationsDropdown(!destinationsDropdown);
  };

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
                    onClick={() => onClickLinkHeader()}
                  >
                    Destinations
                    <span
                      className={`${toolbar.destinations__image} ${
                        destinationsDropdown && toolbar.destinations__image__active
                      }`}
                    ></span>
                  </div>
                  {destinationsDropdown && (
                    <div className={toolbar.dropdown}>
                      <div className={toolbar.dropdown__links}>
                        {regionLinks.map((item, index) => (
                          <Link key={index} className={toolbar.dropdown__link} href={item.href}>
                            {item.region}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                {largeLinks.map((link, index) => (
                  <Link href={link.href} key={index} className={toolbar.headerLink}>
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
                  <div>X</div>
                </div>
                <Link className={toolbar.headerLink} href="#">
                  Home
                </Link>

                <div
                  className={`${toolbar.headerLink} ${toolbar.destinations}}`}
                  onClick={() => onClickLinkBurger()}
                >
                  Destinations
                  <span
                    className={`${toolbar.destinations__image} ${
                      toolbar.destinations__image__burger
                    } ${destinationsDropdown && toolbar.destinations__image__active}`}
                  ></span>
                </div>
                {destinationsDropdown && (
                  <div className={`${toolbar.dropdown} ${toolbar.dropdown__burger}`}>
                    <div className={toolbar.dropdown__links}>
                      {regionLinks.map((item, index) => (
                        <Link key={index} className={toolbar.dropdown__link} href={item.href}>
                          {item.region}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {largeLinks.map((link, index) => (
                  <Link href="#" key={index} className={toolbar.headerLink}>
                    {link.text}
                  </Link>
                ))}

                <Link className={toolbar.headerLink} href="#">
                  My Booking
                </Link>
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
