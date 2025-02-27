import React, { useEffect } from 'react';
import DetailedTabs from './DetailedTabs/DetailedTabs';
import style from './TourPage.module.scss';
import Gallery from '@/features/TourPage/GalleryBlock/Gallery';
import DescriptionBlock from '@/features/TourPage/DescriptionBlock/DescriptionBlock';
import TourDetails from '@/features/TourPage/TourDetails/TourDetails';
import FaqList from '@/components/FaqList/FaqList';
import Reviews from '@/components/ClassificationReviews/Reviews';
import ReviewForm from '@/components/ReviewForm/ReviewForm';
import { TourDataDetailed } from '@/type';
import Banner from '@/components/Banner/Banner';
import { GALLERY } from '@/constants';
import { fetchReviewsForTour } from '@/components/ClassificationReviews/TourReviewsThunk';
import { useAppDispatch } from '@/store/hooks';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';

interface Props {
  tourData: TourDataDetailed;
}

const TourPage: React.FC<Props> = ({ tourData }) => {
  const dispatch = useAppDispatch();
  const { locale, query } = useRouter();
  const { id } = query;
  const t = useTranslations('FAQ');

  useEffect(() => {
    if (id) {
      dispatch(fetchReviewsForTour(id as string));
    }
  }, [dispatch, locale, id]);

  return (
    <div className={style.tour_page}>
      <Banner
        src={GALLERY + tourData?.mainImage?.url || ''}
        width={1200}
        height={1200}
        alt={'#'}
        title={tourData?.title || ''}
        subTitle={tourData?.subTitle || ''}
      />
      <div className="container">
        <div className={style.parentContainer}>
          <div className={style.tour_container}>
            <DescriptionBlock data={tourData?.previewDescription || ''} />
            <DetailedTabs
              overviewCK={tourData?.overviewCK || null}
              detailedDays={tourData?.detailedDays || null}
              tourPrice={tourData?.tourPrice || null}
              scheduleTable={tourData?.scheduleTable || null}
            />
            <Gallery images={tourData?.images} />

            <div>
              <h2 style={{ marginLeft: '20px' }}>{t('title')}</h2>
              <FaqList faqList={tourData?.faqList || []} />
            </div>

            <Reviews />
            <hr />
            <ReviewForm tourId={tourData?.id} />
          </div>
          <TourDetails
            category={tourData.classification.title}
            duration={tourData.duration}
            price={tourData.price}
            seats={tourData.seats}
          />
        </div>
      </div>
    </div>
  );
};

export default TourPage;
