import React from 'react';
import BlogItem from './BlogItem';
import style from './Blogs.module.scss';

const Blogs = () => {
  return (
    <div className={`${style.blogs} container`}>
      <div className={style.blogs}>
        <h3 className={style.blogs_title}>How your travel makes a difference</h3>

        <div className={style.blogs_cards}>
          <BlogItem />
          <BlogItem />
          <BlogItem />
          <BlogItem />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
