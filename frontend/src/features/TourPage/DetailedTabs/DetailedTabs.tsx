import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Overview from './Overview/Overview';
import DetailedItinerary from './DetailedItinerary/DetailedItinerary';
import BookNow from './BookNow/BookNow';
import style from './DetailedTabs.module.scss';

const DetailedTabs = () => {
  const router = useRouter();
  const { tab } = router.query;
  const [activeTab, setActiveTab] = useState(tab || 'overview');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const renderTabs = () => {
    return (
      <ul className={style.tabs_list}>
        <TabLink tabName="overview" label="Overview" />
        <TabLink tabName="detaileditinerary" label="Detailed Itinerary" />
        <TabLink tabName="booknow" label="Book Now" />
      </ul>
    );
  };

  const TabLink = ({ tabName, label }) => (
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
          {activeTab === 'overview' && <Overview />}
          {activeTab === 'detaileditinerary' && <DetailedItinerary />}
          {activeTab === 'booknow' && <BookNow />}
        </div>
      </div>
    </div>
  );
};

export default DetailedTabs;
