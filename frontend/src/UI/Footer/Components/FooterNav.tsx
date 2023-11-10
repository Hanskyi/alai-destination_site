import React from 'react';
import footer from '../Footer.module.scss';

const Booking = [
  { title: 'My booking', link: '#' },
  { title: 'Submit trip feedback', link: '#' },
  { title: 'Safe travels hub', link: '#' },
  { title: 'Travel alerts', link: '#' },
  { title: 'Vaccination & testing', link: '#' },
  { title: 'Flexible bookings', link: '#' },
  { title: 'Agent login', link: '#' },
];

const FooterNav = () => {
  return (
    <div className={`${footer.footer__nav} d-flex`}>
      <div className={`${footer.footer__navCol} d-flex flex-column`}>
        <div className={footer.footer__navHeading}>Booking</div>
        <div className={`${footer.footer__navList} d-flex flex-column`}>
          {Booking.map((item) => (
            <div key={Date.now()} className={footer.footer__navListItem}>
              <a href={item.link}>{item.title}</a>
            </div>
          ))}
        </div>
      </div>
      <div className={`${footer.footer__navCol} d-flex flex-column`}>
        <div className={footer.footer__navHeading}>Booking</div>
        <div className={`${footer.footer__navList} d-flex flex-column`}>
          {Booking.map((item) => (
            <div key={Date.now()} className={footer.footer__navListItem}>
              <a href={item.link}>{item.title}</a>
            </div>
          ))}
        </div>
      </div>
      <div className={`${footer.footer__navCol} d-flex flex-column`}>
        <div className={footer.footer__navHeading}>Booking</div>
        <div className={`${footer.footer__navList} d-flex flex-column`}>
          {Booking.map((item) => (
            <div key={Date.now()} className={footer.footer__navListItem}>
              <a href={item.link}>{item.title}</a>
            </div>
          ))}
        </div>
      </div>
      <div className={`${footer.footer__navCol}  d-flex flex-column`}>
        <div className={footer.footer__navHeading}>Booking</div>
        <div className={`${footer.footer__navList}  d-flex flex-column`}>
          {Booking.map((item) => (
            <div key={Date.now()} className={footer.footer__navListItem}>
              <a href={item.link}>{item.title}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterNav;
