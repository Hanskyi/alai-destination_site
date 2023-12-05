import React from 'react';
import DetailedTabs from './DetailedTabs/DetailedTabs';
import style from './TourPage.module.scss';
import Gallery from '@/features/TourPage/GalleryBlock/Gallery';
import DescriptionBlock from '@/features/TourPage/DescriptionBlock/DescriptionBlock';
import TourDetails from '@/features/TourPage/TourDetails/TourDetails';
import TourHeroSection from '@/features/TourPage/TourHeroSection/TourHeroSection';
import FaqList from '@/components/FaqList/FaqList';
import { TourDataDetailed } from '@/type';

interface Props {
  tourData: TourDataDetailed;
}

const TourPage: React.FC<Props> = ({ tourData }) => {
  console.log(tourData, 'Det');

  return (
    <div className={style.tour_page}>
      <TourHeroSection
        title={tourData?.title || ''}
        subTitle={tourData?.subTitle || ''}
        mainImage={tourData?.mainImage?.url || ''}
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
            <FaqList faqList={tourData?.faqList || []} />
          </div>
          <TourDetails />
        </div>
      </div>
    </div>
  );
};

export default TourPage;
