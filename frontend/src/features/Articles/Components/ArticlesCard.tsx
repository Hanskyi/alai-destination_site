import React from 'react';
import style from '../Articles.module.scss';

const ArticlesCard = () => {
  return (
    <div className={style.articleCard}>
      <div className={style.articleCard__image}>
        <img
          src="https://static-cse.canva.com/blob/847132/paulskorupskas7KLaxLbSXAunsplash2.jpg"
          alt="#"
          className={style.articleCard__image__content}
        />
      </div>
      <div className={style.articleCard__content}>
        <p className={style.articleCard__content__title}>
          This couple is exploring the world one podcast episode at a time 
        </p>
        <p className={style.articleCard__content__text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores aspernatur
          blanditiis dolore dolorem doloremque doloribus facilis fuga illo magni minima molestiae,
          officia optio praesentium quaerat quo reprehenderit sequi soluta?
        </p>
      </div>
    </div>
  );
};

export default ArticlesCard;
