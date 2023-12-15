import React, { useState } from 'react';
import style from './Articles.module.scss';
import articlesBanner from '../../assets/articlesImages/articlesBanner.png';
import { useAppSelector } from '@/store/hooks';
import { selectArticles } from '@/features/Articles/ArticlesSlice';
import ArticlesCard from '@/features/Articles/Components/ArticlesCard';
import Banner from '@/components/Banner/Banner';
import { motion } from 'framer-motion';

const Articles = () => {
  const articles = useAppSelector(selectArticles);
  const [visibleArticles, setVisibleArticles] = useState(3);

  const loadMoreArticles = () => {
    setVisibleArticles((prevCount) => prevCount + 3);
  };

  const displayedArticles = articles.slice(0, visibleArticles);

  let title = 'The good stories';
  title = 'The good stories'.toUpperCase();

  return (
    <>
      <div className={style.articlesBanner}>
        <Banner src={articlesBanner} width={1200} height={1200} alt={'#'} title={title} />
      </div>

      <div className="d-flex flex-column align-center">
        <div className={`${style.articleCardContainer} container d-flex f-wrap justify-center`}>
          {displayedArticles.map((article, i) => (
            <motion.div
              key={article.id}
              initial={{
                opacity: 0,
                translateX: i % 2 === 0 ? -50 : 50,
                translateY: -50,
              }}
              animate={{ opacity: 1, translateX: 0, translateY: 0 }}
              transition={{ duration: 0.3, delay: i * 0.2 }}
            >
              <ArticlesCard key={article.id} article={article} />
            </motion.div>
          ))}
        </div>
        {visibleArticles < articles.length && (
          <button className={style.articleCardBtn} onClick={loadMoreArticles}>
            View More
          </button>
        )}
      </div>
    </>
  );
};

export default Articles;
