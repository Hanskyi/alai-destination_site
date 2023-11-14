import React from 'react';
import GalleryItem from '@/features/TourPage/GalleryBlock/GalleryItem';
import style from './Gallery.module.scss';

const Gallery = () => {
  return (
    <div className="container">
      <div className={style.gallery_block}>
        <h3 className={style.gallery_block_title}>Best of Alay Mountains Trek Photo Gallery</h3>

        <div className={style.gallery_block_cards}>
          <GalleryItem />
          <GalleryItem />
          <GalleryItem />
          <GalleryItem />
          <GalleryItem />
          <GalleryItem />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
