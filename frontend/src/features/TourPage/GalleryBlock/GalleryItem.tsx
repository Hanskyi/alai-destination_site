import React from 'react';
import Lightbox from 'yet-another-react-lightbox';
import NextJsImage from '@/features/TourPage/GalleryBlock/NextJsImage';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/styles.css';
import style from './Gallery.module.scss';
import Image from 'next/image';
import { GALLERY } from '../../../constants';

interface GalleryItemProps {
  imageUrl: string;
  alt: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ imageUrl, alt }) => {
  const [open, setOpen] = React.useState(false);

  console.log(imageUrl);
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
          slides={[{ src: imageUrl, alt }]}
          render={{ slide: NextJsImage }}
        />
      )}
    </div>
  );
};

export default GalleryItem;
