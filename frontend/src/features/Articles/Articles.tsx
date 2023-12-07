import React from 'react';
import style from './Articles.module.scss';
import articlesBanner from '../../assets/articlesImages/articlesBanner.png';
import { useAppSelector } from '@/store/hooks';
import { selectArticles } from '@/features/Articles/ArticlesSlice';
import ArticlesCard from '@/features/Articles/Components/ArticlesCard';
import Banner from '@/components/Banner/Banner';

const Articles = () => {
  const articles = useAppSelector(selectArticles);

  let title = 'The good stories';
  title = 'The good stories'.toUpperCase();

  return (
    <>
      <div className={style.articlesBanner}>
        <Banner src={articlesBanner} width={1200} height={1200} alt={'#'} title={title} />
      </div>

      <div className="d-flex flex-column align-center">
        <div className={`${style.articleCardContainer} container d-flex f-wrap justify-center`}>
          {articles.map((article) => (
            <ArticlesCard key={article.id} article={article} />
          ))}
        </div>
        <button className={style.articleCardBtn}>view all</button>
      </div>
    </>
  );
};

export default Articles;
