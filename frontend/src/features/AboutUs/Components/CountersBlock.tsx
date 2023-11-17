import React, {useEffect} from 'react';
import {animate, motion, useMotionValue, useTransform} from 'framer-motion';
import Image from "next/image";
import aboutUsStyle from "@/features/AboutUs/AboutUs.module.scss";

import Icon1 from "../../../assets/icon/about-us/icon-1.1.svg";
import Icon2 from "../../../assets/icon/about-us/icon-2.2.svg";
import Icon3 from "../../../assets/icon/about-us/icon-3.3.svg";

const CountersBlock = () => {
  const count1 = useMotionValue(0);
  const rounded1 = useTransform(count1, Math.round);

  const count2 = useMotionValue(0);
  const rounded2 = useTransform(count2, Math.round);

  const count3 = useMotionValue(0);
  const rounded3 = useTransform(count3, Math.round);

  useEffect(() => {
    const animation1 = animate(count1, 5000, {duration: 2});
    const animation2 = animate(count2, 64, {duration: 2});
    const animation3 = animate(count3, 300, {duration: 2});

    return () => {
      animation1.stop();
      animation2.stop();
      animation3.stop();
    };
  }, []);

  return (
    <div className={aboutUsStyle.cards}>
      <div className={aboutUsStyle.cards__card}>
        <Image width={70} height={70} src={Icon1} alt="Icon 1"/>
        <span className={aboutUsStyle.cards__card__counter}>
           <motion.h1>{rounded1}</motion.h1>
        </span>
        <h2 className={aboutUsStyle.cards__card__title}>Number of Customers</h2>
      </div>

      <div className={aboutUsStyle.cards__card}>
        <Image width={70} height={70} src={Icon2} alt="Icon 1"/>
        <span className={aboutUsStyle.cards__card__counter}>
           <motion.h1>{rounded2}</motion.h1>
        </span>
        <h2 className={aboutUsStyle.cards__card__title}>Number of Trips</h2>
      </div>

      <div className={aboutUsStyle.cards__card}>
        <Image width={70} height={70} src={Icon3} alt="Icon 1"/>
        <span className={aboutUsStyle.cards__card__counter}>
          <motion.h1>{rounded3}</motion.h1>
        </span>
        <h2 className={aboutUsStyle.cards__card__title}>Number of Workers</h2>
      </div>
    </div>
  );
};

export default CountersBlock;
