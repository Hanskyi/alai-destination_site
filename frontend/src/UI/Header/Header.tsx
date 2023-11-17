import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import bookingIcon from '../../assets/header/booking-icon.png';
import logoSmall from '../../assets/header/logo-small.svg';
import phoneIcon from '../../assets/header/phone-icon.png';
import logo from '../../assets/header/logo.svg';
import header from './Header.module.scss';

const Header = () => {
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
    <header className={header.header}>
      <div className={header.headerContainer}>
        <div className={header.headerTop}>
          <Link className={header.logoSmall} href="#">
            <Image src={logoSmall} alt="#" width={100} height={24} priority={true} />
          </Link>
          <div className={header.links}>
            <>
              {renderHeaderTopLinks.map((link, index) => (
                <Link key={index} className={header.headerTopLinks} href={link.href}>
                  <Image
                    width={1200}
                    height={1200}
                    className={header.headerImg}
                    src={link.imgSrc}
                    alt={link.imgAlt}
                    priority={true}
                  />
                </Link>
              ))}
            </>
            <div
              className={`${header.burgerMenu} ${menuOpen ? header.open : ''}`}
              onClick={toggleMenu}
            >
              <div className={header.bar}></div>
              <div className={header.bar}></div>
              <div className={header.bar}></div>
            </div>
          </div>
        </div>
        <div className={header.headerBottom}>
          <div>
            <a className={header.logo} href="#">
              <Image src={logo} alt="logo" width={165} height={70} priority={true} />
            </a>
          </div>
          <div className={header.linksBottom}>
            {largeLinks.map((link, index) => (
              <Link key={index} className={header.headerLink} href={link.href}>
                {link.text}
              </Link>
            ))}
          </div>
          <div className={header.largeScreenLinks}>
            {renderHeaderTopLinks.map((link, index) => (
              <Link key={index} className={header.headerTopLink} href={link.href}>
                <Image
                  className={header.headerImg}
                  src={link.imgSrc}
                  alt={link.imgAlt}
                  priority={true}
                />
                <span className={header.topText}>{link.text}</span>
              </Link>
            ))}
          </div>
          <div className={`${header.linksResponsive} ${menuOpen ? header.open : ''}`}>
            <div className={header.closeButton} onClick={closeMenu}>
              <div>X</div>
            </div>
            <Link className={header.headerLink} href="#">
              Home
            </Link>
            {largeLinks.map((link, index) => (
              <Link key={index} className={header.headerLink} href={link.href}>
                {link.text}
              </Link>
            ))}
            <Link className={header.headerLink} href="#">
              My Booking
            </Link>
          </div>
        </div>
        <div
          className={`${header.backdrop} ${menuOpen ? header.open : ''}`}
          onClick={closeMenu}
        ></div>
      </div>
    </header>
  );
};

export default Header;
