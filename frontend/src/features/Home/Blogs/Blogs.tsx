import React from 'react';
import style from './Blogs.module.scss';
import { useAppSelector } from '@/store/hooks';
import BlogItem from '@/features/Home/Blogs/BlogItem';

const Blogs = () => {
  const article = useAppSelector((state) => state.products.homeData?.homeArticle);

  return (
    <div className={`${style.blogs} container`}>
      <h3 className={style.blogs_title}>{article?.data.title}</h3>

      <div className={style.blogs_cards}>
        {article?.data.blogs.map((blog) => <BlogItem key={blog.id} blog={blog} />)}
      </div>
    </div>
  );
};

export default Blogs;
