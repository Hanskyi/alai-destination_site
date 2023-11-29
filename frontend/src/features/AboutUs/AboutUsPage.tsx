import React from 'react';
import ValuesBlock from '@/features/AboutUs/Components/ValuesBlock';
import CountersBlock from '@/features/AboutUs/Components/CountersBlock';
import Image from 'next/image';
import Kato from '../../assets/icon/about-us/kato.png';

import Alay from '../../assets/icon/about-us/visit_alay.png';
import Osh from '../../assets/icon/about-us/osh.png';
import Karakol from '../../assets/icon/about-us/karakol.png';
import Jyrgalan from '../../assets/icon/about-us/jyrgalan.png';
import Award from '../../assets/icon/about-us/award.png';
import Link from 'next/link';
import aboutUsStyle from '@/features/AboutUs/AboutUs.module.scss';

const AboutUsPage = () => {
  return (
    <>
      <div className={aboutUsStyle.aboutUs__content}>
        <div className="container">
          <div className={aboutUsStyle.text}>
            <h1 className={aboutUsStyle.text__title}>Visit Alay</h1>
            <h4 className={aboutUsStyle.text__subtitle}>ADVENTURE TRAVEL & TOURS</h4>
          </div>
        </div>
      </div>

      <div className={aboutUsStyle.middleBlock}>
        <div className="container">
          <h1 className={aboutUsStyle.middleBlock__title}>Our Mission</h1>
          <p className={aboutUsStyle.middleBlock__text}>
            Visit Alay has been promoting tourism in Central Asia since 2008. We began our work as a
            small travel agency offering adventure tours in Alay Mountains of southern Kyrgyzstan.
            Starting from 2014, we expanded our operations beyond Kyrgyzstan to Tajikistan and
            Uzbekistan. Today, we run adventure and cultural tours across Central Asia. Our mission
            is to promote Central Asia as a leading tourist destination in the world. We strongly
            believe Central Asia has a big tourism potential and can be a main sector of our economy
            by creating thousands of jobs.
          </p>
        </div>

        <div className={aboutUsStyle.valueBlock}>
          <div className="container">
            <ValuesBlock />
          </div>
        </div>

        <div className={aboutUsStyle.countsBlock}>
          <div className="container">
            <CountersBlock />
          </div>
        </div>

        <div className="container">
          <div className={aboutUsStyle.partnersBlock}>
            <h1 className={aboutUsStyle.partnersBlock__title}>Our Trusted Partners</h1>
            <p className={aboutUsStyle.partnersBlock__text}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit Etiam at ipsum at ligula
              vestibulum sodales Sed luctus orci vel nibh aliquam laoreet Aenean accumsan sodales
              Sed luctus orci vel nibh aliquam laoreet Aenean accumsan
            </p>

            <div className={aboutUsStyle.partnersBlock__cards}>
              <Link
                className={aboutUsStyle.partnersBlock__partner}
                href="https://wtk.kato.kg/ru"
                target="_blank"
              >
                <Image
                  className={aboutUsStyle.partnersBlock__img}
                  width={140}
                  height={70}
                  src={Kato}
                  alt="kato"
                />
              </Link>

              <Link
                className={aboutUsStyle.partnersBlock__partner}
                href="https://visitalay.com/"
                target="_blank"
              >
                <Image
                  className={aboutUsStyle.partnersBlock__img}
                  width={140}
                  height={70}
                  src={Alay}
                  alt="visit_alay"
                />
              </Link>

              <Link
                className={aboutUsStyle.partnersBlock__partner}
                href="https://destinationosh.com/ru/"
                target="_blank"
              >
                <Image
                  className={aboutUsStyle.partnersBlock__img}
                  width={140}
                  height={70}
                  src={Osh}
                  alt="osh"
                />
              </Link>

              <Link
                className={aboutUsStyle.partnersBlock__partner}
                href="https://destinationkarakol.com/ru/o-nas/o-destinacii-karakol/"
                target="_blank"
              >
                <Image
                  className={aboutUsStyle.partnersBlock__img}
                  width={140}
                  height={70}
                  src={Karakol}
                  alt="karakol"
                />
              </Link>

              <Link
                className={aboutUsStyle.partnersBlock__partner}
                href="https://jyrgalan.com/ru/"
                target="_blank"
              >
                <Image
                  className={aboutUsStyle.partnersBlock__img}
                  width={140}
                  height={70}
                  src={Jyrgalan}
                  alt="jyrgalan"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className={aboutUsStyle.awardsBlock}>
          <div className="container">
            <h1 className={aboutUsStyle.awardsBlock__title}>AWARDS</h1>
            <div className={aboutUsStyle.awardsBlock__cards}>
              <div className={aboutUsStyle.awardsBlock__card}>
                <Image width={200} height={130} src={Award} alt="Award" />
              </div>

              <div className={aboutUsStyle.awardsBlock__card}>
                <Image width={200} height={130} src={Award} alt="Award" />
              </div>

              <div className={aboutUsStyle.awardsBlock__card}>
                <Image width={200} height={130} src={Award} alt="Award" />
              </div>

              <div className={aboutUsStyle.awardsBlock__card}>
                <Image width={200} height={130} src={Award} alt="Award" />
              </div>

              <div className={aboutUsStyle.awardsBlock__card}>
                <Image width={200} height={130} src={Award} alt="Award" />
              </div>

              <div className={aboutUsStyle.awardsBlock__card}>
                <Image width={200} height={130} src={Award} alt="Award" />
              </div>

              <div className={aboutUsStyle.awardsBlock__card}>
                <Image width={200} height={130} src={Award} alt="Award" />
              </div>
            </div>
          </div>
        </div>
        <div className={aboutUsStyle.contactsBlock}>
          <div className="container d-flex f-wrap justify-between flex-wrap">
            <div className={aboutUsStyle.contactsBlock__card}>
              <h2 className={aboutUsStyle.contactsBlock__title}>Destinations</h2>
              <p className={aboutUsStyle.contactsBlock__text}>
                <Link className={aboutUsStyle.contactsBlock__link} href="#">
                  Issyk-Kul
                </Link>
              </p>
              <p className={aboutUsStyle.contactsBlock__text}>
                <Link className={aboutUsStyle.contactsBlock__link} href="#">
                  Chui
                </Link>
              </p>
              <p className={aboutUsStyle.contactsBlock__text}>
                <Link className={aboutUsStyle.contactsBlock__link} href="#">
                  Osh
                </Link>
              </p>
              <p className={aboutUsStyle.contactsBlock__text}>
                <Link className={aboutUsStyle.contactsBlock__link} href="#">
                  Batken
                </Link>
              </p>
              <p className={aboutUsStyle.contactsBlock__text}>
                <Link className={aboutUsStyle.contactsBlock__link} href="#">
                  Naryn
                </Link>
              </p>
              <p className={aboutUsStyle.contactsBlock__text}>
                <Link className={aboutUsStyle.contactsBlock__link} href="#">
                  Djalal-Abad
                </Link>
              </p>
            </div>

            <div className={aboutUsStyle.contactsBlock__card}>
              <h2 className={aboutUsStyle.contactsBlock__title}>Tours</h2>
              <p className={aboutUsStyle.contactsBlock__text}>
                <Link className={aboutUsStyle.contactsBlock__link} href="#">
                  Treks and Hikes
                </Link>
              </p>
              <p className={aboutUsStyle.contactsBlock__text}>
                <Link className={aboutUsStyle.contactsBlock__link} href="#">
                  Horse Treks
                </Link>
              </p>
              <p className={aboutUsStyle.contactsBlock__text}>
                <Link className={aboutUsStyle.contactsBlock__link} href="#">
                  Pamir Highway Tours
                </Link>
              </p>
              <p className={aboutUsStyle.contactsBlock__text}>
                <Link className={aboutUsStyle.contactsBlock__link} href="#">
                  Cultural Tours
                </Link>
              </p>
            </div>

            <div className={aboutUsStyle.contactsBlock__card}>
              <h2 className={aboutUsStyle.contactsBlock__title}>Core Values</h2>
              <p className={aboutUsStyle.contactsBlock__text}>Community Development Programs</p>
              <p className={aboutUsStyle.contactsBlock__text}>Stay and Eat Local</p>
              <p className={aboutUsStyle.contactsBlock__text}>Helping Travelers</p>
              <p className={aboutUsStyle.contactsBlock__text}>Conserving Nature</p>
            </div>

            <div className={aboutUsStyle.contactsBlock__card}>
              <h2 className={aboutUsStyle.contactsBlock__title}>Contact</h2>
              <p className={aboutUsStyle.contactsBlock__text}>Mob: + +996 550 339292</p>
              <p className={aboutUsStyle.contactsBlock__text}>WhatsApp: + +996 550 339292</p>
              <p className={aboutUsStyle.contactsBlock__text}>E-mail: info@......com</p>
              <p className={aboutUsStyle.contactsBlock__text}>Address: Kyrgyzstan, Bishkek</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
