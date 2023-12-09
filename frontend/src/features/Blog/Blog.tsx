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

  //Render Video
  const renderVideo = () => {
    const content = article?.data ? article.data.content : ''; // Get the content from article data

    if (!content) {
      return null;
    }

    const regex = /<figure class="media"><oembed url="(.*?)"><\/oembed><\/figure>/g;

    const replacedData = content.replace(regex, (match, url) => {
      const videoID = extractVideoID(url);

      return `<div class="videoWrapper"><iframe width="560" height="315" src="//www.youtube.com/embed/${videoID}" frameborder="0" allowfullscreen></iframe></div>`;
    });

    return <div dangerouslySetInnerHTML={{ __html: replacedData }} />;
  };

  const extractVideoID = (url:string) => {
    const regex =
      /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/ ]{11})/;
    const match = url.match(regex);

    return match ? match[1] : '';
  };

  return (
    <div className={`${style.blog} container`}>
      <div className={style.blog_header}>
        <Link href="/articles">
          <span className={style.blog_header_link}>Good Stories</span>
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
      <div className={style.blog_content}>
        {/* Render the replaced content with videos */}
        {renderVideo()}
      </div>
    </div>
  );
};

export default Blog;
