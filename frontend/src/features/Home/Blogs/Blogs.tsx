import React from 'react';
import BlogItem from './BlogItem';
import { useAppSelector } from '@/store/hooks';
import Link from 'next/link';
import style from './Blogs.module.scss';

const Blogs = () => {
  const article = useAppSelector((state) => state.home.homeData?.homeArticle);
  return (
    <div className={`${style.blogs} container`}>
      <Link href="/articles">
        <h3 className={style.blogs_title}>{article?.data.title}</h3>
      </Link>
      <div className={style.blogs_cards}>
        {article?.data.blogs.map((blog) => <BlogItem key={blog.id} blog={blog} />)}
      </div>
    </div>
  );
};

export default Blogs;
