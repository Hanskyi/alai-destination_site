import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import aboutUsStyle from '@/features/AboutUs/AboutUs.module.scss';

import Icon1 from '../../../assets/icon/about-us/icon-1.svg';
import Icon2 from '../../../assets/icon/about-us/icon-2.svg';
import Icon3 from '../../../assets/icon/about-us/icon-3.svg';
import Icon4 from '../../../assets/icon/about-us/icon-4.svg';

const icons = [Icon1, Icon2, Icon3, Icon4];

const boxes = [
  {
    title: 'COMMUNITY BASED TOURISM',
    description:
      'We believe that involving locals in tourism will alleviate poverty. We train and support locals to make income from tourism. They offer yurt camps, luggage horses, guiding, and taxi services. In 2022, Visit Alay granted 25000 USD to its camp providers to improve the infrastructure of yurt camps. Almost 300 locals got involved in tourism during summer time.',
  },
  {
    title: 'STAY LOCAL',
    description:
      'We want our guests to get the best local experience by staying at homestays and at authentic yurt camps, getting local food, talking to local guides. We see that sometimes travelers travel far from local culture. We want you to stay close to local life and explore the local traditions and customs of Central Asian people.',
  },
  {
    title: 'GROUPING TRAVELERS',
    description:
      'Traveling is not always cheap, but joining a group reduces the cost. Our staff is there to help you join our group tours to share the costs. Our guests often find it easy and beneficial. By being in a group, you will learn a lot from other fellow travelers. Join one of our groups and leave us with long-lasting memories.',
  },
  {
    title: 'NATURE CARE',
    description:
      'What makes us unique is our nature and traditions. Climate change is affecting our planet. We can’t stay on the side and look how our nature is undermining. So, we have chosen a green tourism path to be in good harmony with our planet.',
  },
];

const ValuesBlock = () => {
  return (
    <div className={aboutUsStyle.block}>
      <h1 className={aboutUsStyle.block__title}>Our Core Values</h1>
      <div className={aboutUsStyle.block__boxes}>
        {boxes.map((box, index) => (
          <motion.div key={index} className={aboutUsStyle.block__boxes_box}>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0, 0.71, 0.2, 3] }}
            >
              <Image
                className={aboutUsStyle.block__boxes_img}
                width={94}
                height={94}
                src={icons[index]}
                alt={`Icon for ${box.title}`}
              />
            </motion.div>
            <h2 className={aboutUsStyle.block__boxes_subTitle}>{box.title}</h2>
            <p className={aboutUsStyle.block__boxes_text}>{box.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ValuesBlock;
