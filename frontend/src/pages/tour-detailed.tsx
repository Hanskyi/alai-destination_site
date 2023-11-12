import React from 'react';
import style from "../features/TourPage/TourPage.module.scss";
import DetailedTabs from "../features/TourPage/DetailedTabs/DetailedTabs";

const TourPage = () => {
    return (
        <div className={style.tour_page}>
            <DetailedTabs/>
        </div>
    );
};

export default TourPage;