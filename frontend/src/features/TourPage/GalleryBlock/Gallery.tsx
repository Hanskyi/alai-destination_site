import React from 'react';
import GalleryItem from '@/features/TourPage/GalleryBlock/GalleryItem';
import style from './Gallery.module.scss';
import { useTranslations } from 'next-intl';
import { GALLERY } from '@/constants';

interface Image {
    id?: number;
    name: string;
    url: string;
}

interface Props {
    images?: Image[];
}

const Gallery: React.FC<Props> = ({ images = [] }) => {
    const t = useTranslations('TourIdGallery');

    const slides = images.map((image, index) => ({
        src: `${GALLERY}${image.url}`,
        alt: image.name,  // Corrected line
        index,
    }));

    return (
        <div className="container">
            <div className={style.gallery_block}>
                <h3 className={style.gallery_block_title}>
                    Best of Alay Mountains Trek Photo {t('gallery')}
                </h3>

                {images && images.length > 0 && (
                    <div className={style.gallery_block_cards}>
                        {images.map((image) => (
                            <GalleryItem
                                key={image.id}
                                imageUrl={image.url}
                                alt={image.name}
                                slides={slides}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Gallery;
