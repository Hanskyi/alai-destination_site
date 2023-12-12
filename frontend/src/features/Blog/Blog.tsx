import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import style from './Blog.module.scss';
import { useAppSelector } from '@/store/hooks';
import dayjs from 'dayjs';
import { GALLERY } from '@/constants';
import imageNotAvailable from '@/assets/imageNotAvailable.png';
import Card from '@/components/Card/Card';
import { SwiperSlide } from 'swiper/react';
import slideStyle from '@/components/SwiperComponent/SwiperComponent.module.scss';
import SwiperComponent from '@/components/SwiperComponent/SwiperComponent';

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

  const extractVideoID = (url: string) => {
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
      <div>
        <div style={{ margin: '0 -30px' }}>
          <div dangerouslySetInnerHTML={{ __html: article?.data ? article.data.content : '' }} />
        </div>
      </div>
      <div style={{ overflow: 'hidden' }}>
        <h2 style={{ marginBottom: '20px' }}>Recommended</h2>
        {article?.data?.tours.length! > 0 ? (
          <SwiperComponent link={'/tours'}>
            {article?.data.tours.map((item) => (
              <SwiperSlide
                className={slideStyle.swiper__slide}
                style={{ border: 'none' }}
                key={item.id}
              >
                <Card key={item.id} image={item.mainImage.url} id={item.id} title={item.title} />
              </SwiperSlide>
            ))}
          </SwiperComponent>
        ) : (
          <h3 className={style.classificationCards__title}>No tours yet!</h3>
        )}
      <div className={style.blog_content}>
        {/* Render the replaced content with videos */}
        {renderVideo()}
      </div>
    </div>
  );
};

export default Blog;
