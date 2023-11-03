import React from 'react';

const Booking = [
    {title: 'My booking', link: '#'},
    {title: 'Submit trip feedback', link: '#'},
    {title: 'Safe travels hub', link: '#'},
    {title: 'Travel alerts', link: '#'},
    {title: 'Vaccination & testing', link: '#'},
    {title: 'Flexible bookings', link: '#'},
    {title: 'Agent login', link: '#'},
]

const FooterNav = () => {
    return (
        <div className="footer__nav d-flex">
            <div className="footer__nav-col d-flex flex-column">
                <div className="footer__nav-heading">Booking</div>
                <div className="footer__nav-list d-flex flex-column">
                    {
                        Booking.map(item => (
                            <div key={Date.now()} className="footer__nav-list--item">
                                <a href={item.link}>{item.title}</a>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="footer__nav-col d-flex flex-column">
                <div className="footer__nav-heading">Booking</div>
                <div className="footer__nav-list d-flex flex-column">
                    {
                        Booking.map(item => (
                            <div key={Date.now()} className="footer__nav-list--item">
                                <a href={item.link}>{item.title}</a>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="footer__nav-col d-flex flex-column">
                <div className="footer__nav-heading">Booking</div>
                <div className="footer__nav-list d-flex flex-column">
                    {
                        Booking.map(item => (
                            <div key={Date.now()} className="footer__nav-list--item">
                                <a href={item.link}>{item.title}</a>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="footer__nav-col d-flex flex-column">
                <div className="footer__nav-heading">Booking</div>
                <div className="footer__nav-list d-flex flex-column">
                    {
                        Booking.map(item => (
                            <div key={Date.now()} className="footer__nav-list--item">
                                <a href={item.link}>{item.title}</a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default FooterNav;