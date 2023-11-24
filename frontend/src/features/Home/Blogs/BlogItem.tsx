import React from 'react';
import style from './Blogs.module.scss';
import { Blog } from '@/type';
import Link from 'next/link';
import dayjs from 'dayjs';

interface Props {
  blog: Blog;
}

const BlogItem: React.FC<Props> = ({ blog }) => {
  return (
    <div className={style.blog}>
      <Link href="/articles/1">
        <span className={style.blog_date}>{dayjs(blog.createdAt).format('D MMM YYYY')}</span>
        <p className={style.blog_text}>{blog.title}</p>
        <span className={style.blog_subtext}>{blog.author}</span>
      </Link>
    </div>
  );
};

export default BlogItem;
