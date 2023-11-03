import React from 'react';
import BlogItem from "@/components/Blogs/BlogItem";
import './Blogs.scss';

const Blogs = () => {
  return (
    <div className="container blogs">
      <h3 className="blogs__title">How your travel makes a difference</h3>

      <div className="blogs__cards">
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
    </div>
  );
};

export default Blogs;