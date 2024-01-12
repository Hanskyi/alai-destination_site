import React from 'react';
import ValuesBlock from '@/features/AboutUs/Components/ValuesBlock';
import CountersBlock from '@/features/AboutUs/Components/CountersBlock';
import Image from 'next/image';
import Link from 'next/link';
import aboutUsStyle from '@/features/AboutUs/AboutUs.module.scss';
import { useAppSelector } from '@/store/hooks';
import { selectAboutUs } from '@/features/AboutUs/AboutUsSlice';
import { GALLERY } from '@/constants';
import Banner from '@/components/Banner/Banner';
import { useTranslations } from 'next-intl';
import Head from 'next/head';

const AboutUsPage = () => {
  const aboutUs = useAppSelector(selectAboutUs);

  const t = useTranslations('AboutUs');
  const headTitle = useTranslations('HeadTitles');

  return (
    aboutUs && (
      <>
        <Head>
          <title>{headTitle('aboutUsPageTitle')}</title>
        </Head>
        <div className={aboutUsStyle.aboutUs__content}>
          <Banner
            src={GALLERY + aboutUs.bannerImage.url}
            width={1200}
            height={1200}
            alt={'#'}
            title={aboutUs.bannerTitle}
            subTitle={aboutUs.bannerSubtitle}
          />
        </div>

        <div className={aboutUsStyle.middleBlock}>
          <div className="container">
            <h1 className={aboutUsStyle.middleBlock__title}>{aboutUs.missionTitle}</h1>
            <p className={aboutUsStyle.middleBlock__text}>{aboutUs.missionDescription}</p>
          </div>

          <div className={aboutUsStyle.valueBlock}>
            <div className="container">
              <ValuesBlock title={aboutUs.valuesTitle} value={aboutUs.coreValues} />
            </div>
          </div>

          <div className={aboutUsStyle.countsBlock}>
            <div className="container">
              <CountersBlock item={aboutUs.counter!} />
            </div>
          </div>

          <div className="container">
            <div className={aboutUsStyle.partnersBlock}>
              <h1 className={aboutUsStyle.partnersBlock__title}>{aboutUs.partnersTitle}</h1>
              <p className={aboutUsStyle.partnersBlock__text}>{aboutUs.partnersDescription}</p>

              <div className={aboutUsStyle.partnersBlock__cards}>
                {aboutUs.partners.map((partner) => (
                  <Link
                    key={partner.id}
                    className={aboutUsStyle.partnersBlock__partner}
                    href={partner.link}
                    target="_blank"
                  >
                    <Image
                      className={aboutUsStyle.partnersBlock__img}
                      width={140}
                      height={70}
                      src={GALLERY + partner.logo.url}
                      alt={partner.logo.name}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className={aboutUsStyle.awardsBlock}>
            <div className="container">
              <h1 className={aboutUsStyle.awardsBlock__title}>{aboutUs.awardsTitle}</h1>
              <div className={aboutUsStyle.awardsBlock__cards}>
                {aboutUs.awardsImages.map((awardImage) => (
                  <div key={awardImage.id} className={aboutUsStyle.awardsBlock__card}>
                    <Image
                      className={aboutUsStyle.awardsBlock__img}
                      width={200}
                      height={115}
                      src={GALLERY + awardImage.url}
                      alt={awardImage.name}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={aboutUsStyle.contactsBlock}>
            <div className="container">
              <h2 className={aboutUsStyle.contactsBlock__title}>{t('contacts')}</h2>
              <div className={aboutUsStyle.contactsBlock__card}>
                <a href="tel:+996550339292" className={aboutUsStyle.contactsBlock__text}>
                  Mob: +996 550 339292
                </a>
                <a
                  href="https://wa.me/996553342428?text=Здравствуйте."
                  target="_blank"
                  className={aboutUsStyle.contactsBlock__text}
                >
                  WhatsApp: +996 550 339292
                </a>
                <a
                  href="mailto:info@example.com"
                  className={aboutUsStyle.contactsBlock__text}
                  target="_blank"
                >
                  E-mail: info@example.com
                </a>
                <p className={aboutUsStyle.contactsBlock__text}>Address: Kyrgyzstan, Bishkek</p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default AboutUsPage;
