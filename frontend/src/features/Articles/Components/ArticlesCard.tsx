import React from 'react';
import style from '../Articles.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { OneArticleData } from '@/type';

interface Props {
  article: OneArticleData;
}

const ArticlesCard: React.FC<Props> = ({ article }) => {
  return (
    <div className={style.articleCard}>
      <Link href={'/articles/1'}>
        <div className={style.articleCard__image}>
          <Image
            src={'http://localhost:1337' + article.mainImage.url}
            alt="#"
            width={400}
            height={400}
            className={style.articleCard__image__content}
          />
        </div>
        <div className={style.articleCard__content}>
          <div className={style.articleCard__content__box}>
            <h3 className={style.articleCard__content__title}>{article.title}</h3>
            {/*<div*/}
            {/*  className={style.articleCard__content__title}*/}
            {/*  dangerouslySetInnerHTML={{ __html: article.title }}*/}
            {/*/>*/}
            <div
              className={style.articleCard__content__text}
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ArticlesCard;
