import React, { useState } from 'react';
import FaqItem from '@/components/FaqList/FaqItem';
import styles from './FaqList.module.scss';
import { IFaq } from '../../type';

interface IProps {
  faqList: IFaq[];
}

const FaqList: React.FC<IProps> = ({ faqList }) => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  return (
    <ul className={styles.accordion}>
      {faqList.map((f, idx) => (
        <FaqItem
          key={idx}
          faqItem={f}
          isOpen={idx === currentIndex}
          clickHandler={() => (idx === currentIndex ? setCurrentIndex(null) : setCurrentIndex(idx))}
        />
      ))}
    </ul>
  );
};

export default FaqList;
