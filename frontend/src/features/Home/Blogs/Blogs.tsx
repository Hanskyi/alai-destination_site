import React from 'react';
import BlogItem from './BlogItem';
import style from './Blogs.module.scss';
import Link from 'next/link';

const Blogs = () => {
  return (
    <div className={`${style.blogs} container`}>
      <Link href="/articles">
        <h3 className={style.blogs_title}>How your travel makes a difference</h3>
      </Link>

      <div className={style.blogs_cards}>
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
    </div>
  );
};

export default Blogs;
