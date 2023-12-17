import React from 'react';
import Lightbox from 'yet-another-react-lightbox';
import NextJsImage from '@/features/TourPage/GalleryBlock/NextJsImage';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/styles.css';
import style from './Gallery.module.scss';
import Image from 'next/image';
import { GALLERY } from '@/constants';

interface GalleryItemProps {
  imageUrl: string;
  alt: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ imageUrl, alt }) => {
  const [open, setOpen] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const images = [
    { url: imageUrl, name: alt }, // Assuming 'images' should be an array containing the current image
  ];

  const slides = images.map((image, index) => ({
    src: `${GALLERY}${image.url}`,
    alt: image.name,
  }));

  return (
    <div className={style.gallery_card} onClick={() => setOpen(true)}>
      <div className={style.gallery_card_imageWrap}>
        <Image
          width={270}
          height={168}
          priority={true}
          className={style.gallery_card_image}
          src={`${GALLERY}${imageUrl}`}
          alt={alt}
        />
      </div>

      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={slides}
          render={{ slide: NextJsImage }}
        />
      )}
    </div>
  );
};

export default GalleryItem;
