import React from 'react';
import aboutUsStyle from '@/features/AboutUs/AboutUs.module.scss';
import ValuesBlock from '@/features/AboutUs/Components/ValuesBlock';
import CountersBlock from '@/features/AboutUs/Components/CountersBlock';
import Image from "next/image";

import Kato from '../../assets/icon/about-us/kato.png';
import Alay from '../../assets/icon/about-us/visit_alay.png';
import Osh from '../../assets/icon/about-us/osh.png';
import Karakol from '../../assets/icon/about-us/karakol.png';
import Jyrgalan from '../../assets/icon/about-us/jyrgalan.png';
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
            <p className={aboutUsStyle.partnersBlock__text}>Lorem ipsum dolor sit amet
              consectetur adipiscing elit Etiam at ipsum at ligula vestibulum
              sodales Sed luctus orci vel nibh aliquam laoreet Aenean accumsan
              sodales Sed luctus orci vel nibh aliquam laoreet Aenean accumsan</p>

            <div className={aboutUsStyle.partnersBlock__cards}>
                <a className={aboutUsStyle.partnersBlock__partner}
                   href="https://wtk.kato.kg/ru"
                   target="_blank"
                >
                  <Image
                    className={aboutUsStyle.partnersBlock__img}
                    width={140} height={70} src={ Kato } alt="kato" />
                </a>

                <a className={aboutUsStyle.partnersBlock__partner}
                   href="https://visitalay.com/"
                   target="_blank"
                >
                  <Image
                    className={aboutUsStyle.partnersBlock__img}
                    width={140} height={70} src={ Alay } alt="visit_alay" />
                </a>

                <a className={aboutUsStyle.partnersBlock__partner}
                   href="https://destinationosh.com/ru/"
                   target="_blank"
                >
                  <Image
                    className={aboutUsStyle.partnersBlock__img}
                    width={140} height={70} src={ Osh } alt="osh" />
                </a>

                <a className={aboutUsStyle.partnersBlock__partner}
                   href="https://destinationkarakol.com/ru/o-nas/o-destinacii-karakol/"
                   target="_blank"
                >
                  <Image
                    className={aboutUsStyle.partnersBlock__img}
                    width={140} height={70} src={ Karakol } alt="karakol" />
                </a>

                <a className={aboutUsStyle.partnersBlock__partner}
                   href="https://jyrgalan.com/ru/"
                   target="_blank"
                >
                  <Image
                    className={aboutUsStyle.partnersBlock__img}
                    width={140} height={70} src={ Jyrgalan } alt="jyrgalan" />
                </a>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default AboutUsPage;
