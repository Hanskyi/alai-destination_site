"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import heartIcon from '../../../public/heart-icon.png';
import bookingIcon from '../../../public/booking-icon.png';
import logoSmall from '../../../public/logo-small.svg';
import phoneIcon from '../../../public/phone-icon.png';
import logo from '../../../public/logo.svg';
import './Header.scss';

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

  const navLinks = [
    { text: 'Destinations', href: '#' },
    { text: 'Ways to travel', href: '#' },
    { text: 'Deals', href: '#' },
    { text: 'Purpose', href: '#' },
  ];

  const largeLinks = [
    { text: 'Destinations', href: '#' },
    { text: 'Ways to travel', href: '#' },
    { text: 'About us', href: '#' },
  ];

  return (
    <header className="header">
      <div className="container">
        <div className="header-top">
          <Link className="logo-small" href="#">
            <Image src={logoSmall} alt="logo" width={100} height={24} priority={true} />
          </Link>
          <div className="links">
            <Link className="header-top-link" href="#">
              <Image className="header-img" src={heartIcon} alt="My Wishlist" priority={true}/>
              <span className="top-text">My Wishlist</span>
            </Link>
            {renderHeaderTopLinks.map((link, index) => (
              <Link key={index} className="header-top-link" href={link.href}>
                <Image className="header-img" src={link.imgSrc} alt={link.imgAlt} priority={true} />
                <span className="top-text">{link.text}</span>
              </Link>
            ))}
            <div className={`burger-menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <a className="logo" href="#">
            <Image src={logo} alt="logo" width={165} height={70} priority={true} />
          </a>
          <div className="links-bottom">
            {navLinks.map((link, index) => (
              <Link key={index} className="header-link" href={link.href}>
                {link.text}
              </Link>
            ))}
            {largeLinks.map((link, index) => (
              <Link key={index} className="header-link-large" href={link.href}>
                {link.text}
              </Link>
            ))}
            <div className="largeScreen-links">
              {renderHeaderTopLinks.map((link, index) => (
                <Link key={index} className="header-top-link" href={link.href}>
                  <Image className="header-img" src={link.imgSrc} alt={link.imgAlt} priority={true} />
                  <span className="top-text">{link.text}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className={`links-responsive ${menuOpen ? 'open' : ''}`}>
            <div className="close-button" onClick={closeMenu}>
              <div className="close-icon">X</div>
            </div>
            <Link className="header-link" href="#">
              Home
            </Link>
            {navLinks.map((link, index) => (
              <Link key={index} className="header-link" href={link.href}>
                {link.text}
              </Link>
            ))}
            <Link className="header-link" href="#">
              My Booking
            </Link>
          </div>
        </div>
        <div className={`backdrop ${menuOpen ? 'open' : ''}`} onClick={closeMenu}></div>
      </div>
    </header>
  );
};

export default Header;
