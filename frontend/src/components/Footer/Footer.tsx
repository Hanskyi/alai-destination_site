import React from 'react';
import Link from "next/link";
import FooterLogo from '../../assets/footer/logo_footer.png';
import Socials from "./components/Socials";
import Subscribe from "./components/Subscribe";
import FooterNav from "./components/FooterNav";
import './Footer.scss';

const Footer = () => {

    return (
        <div className="footer d-flex flex-column">
            <div className="footer__bottom">
                <div className="container d-flex justify-between align-center">
                    <div className="footer__logo">
                        <Link href="/">
                            <img src={FooterLogo.src} alt="Logo"/>
                        </Link>
                    </div>
                    <Socials/>
                </div>
            </div>
        </div>
    );
};

export default Footer;
