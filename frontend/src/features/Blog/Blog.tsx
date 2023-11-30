import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import style from './Blog.module.scss';
import { useAppSelector } from '@/store/hooks';
import dayjs from 'dayjs';
import { GALLERY } from '@/constants';
import imageNotAvailable from '@/assets/imageNotAvailable.png';

const Blog = () => {
  const { article } = useAppSelector((state) => state.articles);

  return (
    <div className={`${style.blog} container`}>
      <div className={style.blog_header}>
        <Link href="/articles">
          <span className={style.blog_header_link}>{article?.data.author}</span>
        </Link>
        <h1 className={style.blog_header_title}>{article?.data.title}</h1>
      </div>
      <div className={style.blog_publish}>
        <span className={style.blog_publish_author}>
          written <b>{article?.data.author}</b>
        </span>
        <span className={style.blog_publish_date}>
          {dayjs(article?.data.publishedAt).format('D MMM YYYY')}
        </span>
      </div>
      <div className={style.blog_imageWrap}>
        <Image
          className={style.blog_imageWrap_image}
          width={800}
          height={450}
          priority
          unoptimized
          src={article?.data ? GALLERY + article?.data.mainImage.url : imageNotAvailable}
          alt="Blog image"
        />
      </div>
      <div className={style.detailed_itinerary}>
        <div className={style.day_detailed}>
          <div dangerouslySetInnerHTML={{ __html: article?.data ? article.data.content : '' }} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
