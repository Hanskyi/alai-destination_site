import React from 'react';
import aboutUsStyle from "@/features/AboutUs/AboutUs.module.scss";
import ValuesBlock from "@/features/AboutUs/Components/ValuesBlock";
import CountersBlock from "@/features/AboutUs/Components/CountersBlock";

const AboutUsPage = () => {
  return (
    <>
      <div className={aboutUsStyle.aboutUs__content}>
        <div className="container">
          <div className={aboutUsStyle.text}>
            <h1 className={aboutUsStyle.text__title}>Visit Alay</h1>
            <h4 className={aboutUsStyle.text__subtitle}>
              ADVENTURE TRAVEL & TOURS
            </h4>
          </div>
        </div>
      </div>

      <div className={aboutUsStyle.middleBlock}>
        <div className="container">
          <h1 className={aboutUsStyle.middleBlock__title}>
            Our Mission
          </h1>
          <p className={aboutUsStyle.middleBlock__text}>
            Visit Alay has been promoting tourism in Central Asia since 2008. We began our work as a small travel agency
            offering adventure tours in Alay Mountains of southern Kyrgyzstan. Starting from 2014, we expanded our
            operations beyond Kyrgyzstan to Tajikistan and Uzbekistan. Today, we run adventure and cultural tours across
            Central Asia. Our mission is to promote Central Asia as a leading tourist destination in the world. We
            strongly believe Central Asia has a big tourism potential and can be a main sector of our economy by
            creating thousands of jobs.
          </p>
        </div>

        <div className={aboutUsStyle.valueBlock}>
          <div className="container">
            <ValuesBlock/>
          </div>
        </div>

        <div className={aboutUsStyle.countsBlock}>
          <div className="container">
            <CountersBlock/>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;