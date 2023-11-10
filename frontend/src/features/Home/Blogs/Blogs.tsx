import React from 'react';
import BlogItem from './BlogItem';
import blog from './Blogs.module.scss';

const Blogs = () => {
  return (
    <div className={`${blog.blogs} container`}>
      <h3 className={blog.blogs__title}>How your travel makes a difference</h3>

      <div className={blog.blogs__cards}>
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
    </div>
  );
};

export default Blogs;
