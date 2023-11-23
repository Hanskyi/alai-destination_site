import React from 'react';
import style from './Blogs.module.scss';
import Link from 'next/link';

const BlogItem = () => {
  return (
    <div className={style.blog}>
      <Link href="/articles/1">
        <span className={style.blog_date}>21 Mar 2023</span>
        <p className={style.blog_text}>
          Walking the talk: 22 highlights from Intrepid’s 2022 Impact Report
        </p>
        <span className={style.blog_subtext}>The Good Times</span>
      </Link>
    </div>
  );
};

export default BlogItem;
