import React from 'react';
import blog from './Blogs.module.scss';
const BlogItem = () => {
  return (
    <div className={blog.blogs}>
      <span className={blog.blog__date}>21 Mar 2023</span>
      <p className={blog.blog__text}>
        Walking the talk: 22 highlights from Intrepid’s 2022 Impact Report
      </p>
      <span className={blog.blog__subtext}>The Good Times</span>
    </div>
  );
};

export default BlogItem;
