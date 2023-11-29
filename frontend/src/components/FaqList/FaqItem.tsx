import React, { useRef } from 'react';
import { IFaq } from '@/type';
import styles from './FaqList.module.scss';

interface IProps {
  faqItem: IFaq;
  isOpen: boolean;
  clickHandler: () => void;
}

const FaqItem: React.FC<IProps> = ({ faqItem, isOpen, clickHandler }) => {
  const itemRef = useRef<HTMLDivElement | null>(null);
  return (
    <li className={styles.accordion__item}>
      <button className={styles.accordion__header} onClick={clickHandler}>
        {faqItem.heading}
        <span
          className={`${styles.accordion__toggler} ${isOpen ? styles.accordion__togglerOpen : ''}`}
        />
      </button>

      <div
        className={`${styles.accordionCollapse}`}
        style={isOpen ? { height: itemRef.current?.scrollHeight } : { height: '0px' }}
      >
        <div className={styles.accordion__body} ref={itemRef}>
          <div dangerouslySetInnerHTML={{ __html: faqItem.body }} />
        </div>
      </div>
    </li>
  );
};

export default FaqItem;
