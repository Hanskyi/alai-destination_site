import React from 'react';
import Lightbox from 'yet-another-react-lightbox';
import slides from '@/features/TourPage/GalleryBlock/slides';
import NextJsImage from '@/features/TourPage/GalleryBlock/NextJsImage';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/styles.css';
import style from './Gallery.module.scss';

const GalleryItem = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className={style.gallery_card} onClick={() => setOpen(true)}>
      <div className={style.gallery_card_imageWrap}>
        <img
          className={style.gallery_card_image}
          src="https://photos.thetrek.co/wp-content/uploads/2019/08/03125439/dsc06577.jpg"
          alt="Gallery image"
        />
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        render={{ slide: NextJsImage }}
      />
    </div>
  );
};

export default GalleryItem;
