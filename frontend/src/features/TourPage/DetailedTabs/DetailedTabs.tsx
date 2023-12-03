import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Overview from './Overview/Overview';
import DetailedItinerary from './DetailedItinerary/DetailedItinerary';
import BookNow from './BookNow/BookNow';
import TourDates from './TourDates/TourDates';
import TourPrice from './TourPrice/TourPrice';
import style from './DetailedTabs.module.scss';
import { ITable } from '@/type';

interface TabLinkProps {
  tabName: string;
  label: string;
}

interface Props {
  overviewCK: string | null;
  detailedDays: string | null;
  tourPrice: string | null;
  scheduleTable: ITable[] | null;
}

const DetailedTabs: React.FC<Props> = ({ overviewCK, detailedDays, tourPrice, scheduleTable }) => {
  const router = useRouter();
  const { tab } = router.query;
  const [activeTab, setActiveTab] = useState(tab || 'overview');

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  const renderTabs = () => {
    return (
      <ul className={style.tabs_list}>
        <TabLink tabName="overview" label="Overview" />
        <TabLink tabName="detaileditinerary" label="Detailed Itinerary" />
        <TabLink tabName="tourprice" label="Tour Price" />
        <TabLink tabName="tourdates" label="Tour Dates" />
        <TabLink tabName="booknow" label="Book Now" />
      </ul>
    );
  };

  const TabLink: React.FC<TabLinkProps> = ({ tabName, label }: TabLinkProps) => (
    <li className={`${style.tabs_list_item} ${activeTab === tabName ? style.current_tab : ''}   `}>
      <button className={style.tabs_list_btn} onClick={() => handleTabClick(tabName)}>
        {label}
      </button>
    </li>
  );

  return (
    <div className={`container ${style.tab_container}`}>
      <div className={style.tabs}>
        <h2>Detailed Tour Information about the Best of Alay Mountains Trek</h2>
        {renderTabs()}

        <div className={style.tabs_wrap}>
          {activeTab === 'overview' && overviewCK !== null && <Overview data={overviewCK} />}
          {activeTab === 'detaileditinerary' && detailedDays !== null && (
            <DetailedItinerary data={detailedDays} />
          )}
          {activeTab === 'tourprice' && tourPrice !== null && <TourPrice data={tourPrice} />}
          {activeTab === 'tourdates' && scheduleTable !== null && (
            <TourDates data={scheduleTable} />
          )}
          {activeTab === 'booknow' && <BookNow />}
        </div>
      </div>
    </div>
  );
};

export default DetailedTabs;
