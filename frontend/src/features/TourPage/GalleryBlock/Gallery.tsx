import React from 'react';
import GalleryItem from '@/features/TourPage/GalleryBlock/GalleryItem';
import style from './Gallery.module.scss';

interface Image {
  id: number;
  name: string;
  url: string;
}

interface Props {
  images?: Image[];
}

const Gallery = ({ images = [] }: Props) => {
  return (
    <div className="container">
      <div className={style.gallery_block}>
        <h3 className={style.gallery_block_title}>Best of Alay Mountains Trek Photo Gallery</h3>

        {images && images.length > 0 && (
          <div className={style.gallery_block_cards}>
            {images.map((image) => (
              <GalleryItem key={image.id} imageUrl={image.url} alt={image.name} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
