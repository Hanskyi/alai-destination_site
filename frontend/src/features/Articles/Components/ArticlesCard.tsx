import React, { useEffect, useState } from 'react';
import style from '../Articles.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { OneArticleData } from '@/type';
import { GALLERY } from '@/constants';

interface Props {
  article: OneArticleData;
}

const ArticlesCard: React.FC<Props> = ({ article }) => {
  const [plainText, setPlainText] = useState<string | null>(null);

  useEffect(() => {
    if (typeof document !== 'undefined' && article) {
      const htmlCode = article.content;
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = htmlCode;
      setPlainText(tempDiv.innerText);
    }
  }, [article.content, article]);

  return (
    <div className={style.articleCard}>
      <Link href={`/articles/${article.id}`}>
        <div className={style.articleCard__image}>
          <Image
            src={GALLERY + article.mainImage.url}
            alt="#"
            width={400}
            height={400}
            className={style.articleCard__image__content}
          />
        </div>
        <div className={style.articleCard__content}>
          <div className={style.articleCard__content__box}>
            <h3 className={style.articleCard__content__title}>{article.title}</h3>
            <div className={style.articleCard__content__text}>
              {plainText && <p className={style.classificationCard__content__text}>{plainText}</p>}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ArticlesCard;
