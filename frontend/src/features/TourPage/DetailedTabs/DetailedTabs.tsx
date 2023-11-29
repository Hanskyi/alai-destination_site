import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Overview from './Overview/Overview';
import DetailedItinerary from './DetailedItinerary/DetailedItinerary';
import BookNow from './BookNow/BookNow';
import TourDates from './TourDates/TourDates';
import TourPrice from './TourPrice/TourPrice';
import axios from 'axios';
import style from './DetailedTabs.module.scss';
import { ITable } from '@/type';

interface TabLinkProps {
  tabName: string;
  label: string;
}

interface TourData {
  overviewCK: string | null;
  detailedDays: string | null;
  tourScheduleCK: string | null;
  tourPrice: string | null;
  scheduleTable: ITable[] | null;
}

const DetailedTabs = () => {
  const router = useRouter();
  const { tab } = router.query;
  const [activeTab, setActiveTab] = useState(tab || 'overview');
  const [tourData, setTourData] = useState<TourData>({
    overviewCK: null,
    detailedDays: null,
    tourScheduleCK: null,
    tourPrice: null,
    scheduleTable: null,
  });

  useEffect(() => {
    const fetchTourData = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/tours/5');
        const data = response.data.data;

        setTourData((prevData) => ({
          ...prevData,
          scheduleTable: data.scheduleTable as ITable[],
        }));
      } catch (error) {
        console.error('Error fetching tour data:', error);
      }
    };

    fetchTourData();
  }, []);

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

  console.log(tourData);

  return (
    <div className={`container ${style.tab_container}`}>
      <div className={style.tabs}>
        <h2>Detailed Tour Information about the Best of Alay Mountains Trek</h2>
        {renderTabs()}

        <div className={style.tabs_wrap}>
          {activeTab === 'overview' && tourData.overviewCK !== null && (
            <Overview data={tourData.overviewCK} />
          )}
          {activeTab === 'detaileditinerary' && tourData.detailedDays !== null && (
            <DetailedItinerary data={tourData.detailedDays} />
          )}
          {activeTab === 'tourprice' && tourData.tourPrice !== null && (
            <TourPrice data={tourData.tourPrice} />
          )}
          {activeTab === 'tourdates' && tourData.scheduleTable !== null && (
            <TourDates data={tourData.scheduleTable} />
          )}

          {activeTab === 'booknow' && <BookNow />}
        </div>
      </div>
    </div>
  );
};

export default DetailedTabs;
