import React from 'react';
import style from './Blogs.module.scss';
const BlogItem = () => {
  return (
    <div className={style.blog}>
      <span className={style.blog_date}>21 Mar 2023</span>
      <p className={style.blog_text}>
        Walking the talk: 22 highlights from Intrepid’s 2022 Impact Report
      </p>
      <span className={style.blog_subtext}>The Good Times</span>
    </div>
  );
};

export default BlogItem;
