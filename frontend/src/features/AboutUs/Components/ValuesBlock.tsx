import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import aboutUsStyle from '@/features/AboutUs/AboutUs.module.scss';
import { ICoreValues } from '@/type';
import { GALLERY } from '@/constants';

const imgAnimation = {
  hidden: {
    opacity: 0.5,
    scale: 0,
    duration: 0,
    ease: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    duration: 1,
    ease: [0, 0.71, 0.2, 3],
  },
};

interface Props {
  value: ICoreValues[];
  title: string;
}

const ValuesBlock: React.FC<Props> = ({ value, title }) => {
  return (
    <div className={aboutUsStyle.block}>
      <h1 className={aboutUsStyle.block__title}>{title}</h1>
      <div className={aboutUsStyle.block__boxes}>
        {value.map((box) => (
          <div key={box.id} className={aboutUsStyle.block__boxes_box}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 1, once: true }}
              variants={imgAnimation}
            >
              <Image
                className={aboutUsStyle.block__boxes_img}
                width={94}
                height={94}
                src={GALLERY + box.icon.url}
                alt={`Icon for ${box.title}`}
              />
            </motion.div>
            <h2 className={aboutUsStyle.block__boxes_subTitle}>{box.title}</h2>
            <p className={aboutUsStyle.block__boxes_text}>{box.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ValuesBlock;
