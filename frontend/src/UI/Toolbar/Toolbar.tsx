import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import bookingIcon from '@/assets/toolbar/booking-icon.png';
import phoneIcon from '@/assets/toolbar/phone-icon.png';
import logo from '@/assets/toolbar/logo.svg';
import toolbar from './Toolbar.module.scss';

const Toolbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const renderHeaderTopLinks = [
    {
      text: 'My booking',
      href: '#',
      imgSrc: bookingIcon,
      imgAlt: 'My booking',
    },
    {
      text: '+613 94732673',
      href: 'tel:+61394732673',
      imgSrc: phoneIcon,
      imgAlt: '+613 94732673',
    },
  ];

  const largeLinks = [
    { text: 'Destinations', href: '#' },
    { text: 'Ways to travel', href: '#' },
    { text: 'About us', href: '#' },
  ];

  return (
    <header className={toolbar.header}>
      <div className={toolbar.headerContainer}>
        <div className={toolbar.headerTop}>
          <div className={toolbar.links}>
            <>
              {renderHeaderTopLinks.map((link, index) => (
                <Link key={index} className={toolbar.headerTopLinks} href={link.href}>
                  <Image
                    className={toolbar.headerImg}
                    src={link.imgSrc}
                    alt={link.imgAlt}
                    priority={true}
                  />

                </Link>
              ))}
            </>
            <div
              className={`${toolbar.burgerMenu} ${menuOpen ? toolbar.open : ''}`}
              onClick={toggleMenu}
            >
              <div className={toolbar.bar}></div>
              <div className={toolbar.bar}></div>
              <div className={toolbar.bar}></div>
            </div>
          </div>
        </div>
        <div className={toolbar.headerBottom}>
          <div>
            <a className={toolbar.logo} href="#">
              <Image src={logo} alt="logo" width={165} height={70} />
            </a>
          </div>
          <div className={toolbar.linksBottom}>
            {largeLinks.map((link, index) => (
              <Link key={index} className={toolbar.headerLink} href={link.href}>
                {link.text}
              </Link>
            ))}
          </div>
          <div className={toolbar.largeScreenLinks}>
            {renderHeaderTopLinks.map((link, index) => (
              <Link key={index} className={toolbar.headerTopLink} href={link.href}>
                <Image
                  className={toolbar.headerImg}
                  src={link.imgSrc}
                  alt={link.imgAlt}
                />
                <span className={toolbar.topText}>{link.text}</span>
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
            {largeLinks.map((link, index) => (
              <Link key={index} className={toolbar.headerLink} href={link.href}>
                {link.text}
              </Link>
            ))}
            <Link className={toolbar.headerLink} href="#">
              My Booking
            </Link>
          </div>
        </div>
        <div
          className={`${toolbar.backdrop} ${menuOpen ? toolbar.open : ''}`}
          onClick={closeMenu}
        ></div>
      </div>
    </header>
  );
};

export default Toolbar;
