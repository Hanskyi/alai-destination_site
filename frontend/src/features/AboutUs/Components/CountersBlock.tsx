import React, { useCallback, useEffect, useRef } from 'react';
import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';
import aboutUsStyle from '@/features/AboutUs/AboutUs.module.scss';
import { ICounter } from '@/type';
import { GALLERY } from '@/constants';

interface Props {
  item: ICounter[];
}

const CountersBlock: React.FC<Props> = ({ item }) => {
  const count1 = useMotionValue(0);
  const rounded1 = useTransform(count1, Math.round);

  const count2 = useMotionValue(0);
  const rounded2 = useTransform(count2, Math.round);

  const count3 = useMotionValue(0);
  const rounded3 = useTransform(count3, Math.round);

  const countersRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    const element = countersRef.current;

    if (element) {
      const rect = element.getBoundingClientRect() as DOMRect;
      const isInViewport = rect.top < window.innerHeight && rect.bottom >= 0;

      if (isInViewport) {
        animate(count1, 5000, { duration: 2 });
        animate(count2, 64, { duration: 2 });
        animate(count3, 300, { duration: 2 });
      }
    }
  }, [count1, count2, count3]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const imgAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ amount: 1 }}>
      <div className={aboutUsStyle.cards} ref={countersRef}>
        {item.map((counterItem, index) => (
          <div key={counterItem.id} className={aboutUsStyle.cards__card}>
            <Image
              priority={true}
              width={70}
              height={70}
              src={GALLERY + counterItem.icon[0].url}
              alt={`Icon ${counterItem.icon[0].name}`}
            />
            <span className={aboutUsStyle.cards__card__counter}>
              <motion.h1 variants={imgAnimation}>
                {index === 0 ? rounded1 : index === 1 ? rounded2 : rounded3}
              </motion.h1>
            </span>
            <h2 className={aboutUsStyle.cards__card__title}>{counterItem.title}</h2>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default CountersBlock;
