import React from 'react';
import Image from 'next/image';
import whatsapp from '../../assets/icon/social/wa-whatsapp-icon.svg';
import { motion, Variants } from 'framer-motion';
import styles from './Whatsapp.module.scss';

const Whatsapp = () => {
  const bounceVariants: Variants = {
    initial: { y: -20, opacity: 0 },
    animate: {
      y: [0, -10, 0],
      opacity: [1, 1, 1],
    },
  };
  return (
    <motion.div
      className={styles.whatsapp}
      initial="initial"
      animate="animate"
      variants={bounceVariants}
      transition={{ duration: 0.5 }}
    >
      <a
        href="https://wa.me/996553342428?text=Здравствуйте." // в зависимости от locale менять русский-англ
        target="_blank"
        title="click to contact us"
      >
        <Image
          className={styles.whatsappImage}
          src={whatsapp.src}
          alt="w/a"
          width={40}
          height={40}
        />
      </a>
    </motion.div>
  );
};

export default Whatsapp;
