import React from 'react';
import Image from 'next/image';
import whatsapp from '../../assets/icon/social/wa-whatsapp-icon.svg';
import { motion, Variants } from 'framer-motion';
import styles from './Whatsapp.module.scss';
import { useRouter } from 'next/router';

interface IProps {
  contactNumber: string;
}

const Whatsapp: React.FC<IProps> = ({ contactNumber }) => {
  const router = useRouter();
  const bounceVariants: Variants = {
    initial: { y: -20, opacity: 0 },
    animate: {
      y: [0, -10, 0],
      opacity: [1, 1, 1],
    },
  };

  const whatsappLink: string = `https://wa.me/${contactNumber}?text=${
    router.locale === 'ru' ? 'Здравствуйте' : 'Hello'
  }.`;
  return (
    <motion.div
      className={styles.whatsapp}
      initial="initial"
      animate="animate"
      variants={bounceVariants}
      transition={{ duration: 0.5 }}
    >
      <a
        href={whatsappLink} // в зависимости от locale менять русский-англ
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
