import React from 'react';

const tourData = {
    detailed: {
        destination: 'Pamir – Alay Mountains, southern Kyrgyzstan, Osh Region',
        duration: '8 days / 7 nights',
        Accommodation: '1 night camping (tents) / 3 nights guest house / 3 nights yurts',
    },
};

const DetailedInfo = () => {
    return (
        <div>
            <h2>Detailed Information</h2>
            <ul>
                {Object.entries(tourData.detailed).map(([key, value]) => (
                    <li key={key}>
                        <strong>{key}:</strong> {value}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DetailedInfo;

<div className="cmsmasters_tabs tabs_mode_tab">
    <ul className="cmsmasters_tabs_list">
        <li id="cmsmasters_tabs_list_item_654e1f84bdc39" className="cmsmasters_tabs_list_item current_tab">
            <a href="alai-destination/frontend/src/features/Home/DetailedTabs/DetailedInfo/DetailedInfo#" className="cmsmasters-icon-map-2">
                <span>Overview</span>
            </a>
        </li>
        <li id="cmsmasters_tabs_list_item_654e1f84bdd63" className="cmsmasters_tabs_list_item">
            <a href="alai-destination/frontend/src/features/Home/DetailedTabs/DetailedInfo/DetailedInfo#" className="cmsmasters-icon-chart-1">
                <span>Detailed Itinerary</span>
            </a>
        </li>
        <li id="cmsmasters_tabs_list_item_654e1f84c154f" className="cmsmasters_tabs_list_item">
            <a href="alai-destination/frontend/src/features/Home/DetailedTabs/DetailedInfo/DetailedInfo#" className="cmsmasters-icon-wallet-1">
                <span>Tour Price </span>
            </a>
        </li>
        <li id="cmsmasters_tabs_list_item_654e1f84c1714" className="cmsmasters_tabs_list_item">
            <a href="alai-destination/frontend/src/features/Home/DetailedTabs/DetailedInfo/DetailedInfo#" className="cmsmasters-icon-calendar-3">
                <span>Tour Dates</span>
            </a>
        </li>
        <li id="cmsmasters_tabs_list_item_654e1f84c2f12" className="cmsmasters_tabs_list_item">
            <a href="alai-destination/frontend/src/features/Home/DetailedTabs/DetailedInfo/DetailedInfo#">
                <span>Book Now</span>
            </a>
        </li>
    </ul>
    <div className="cmsmasters_tabs_wrap">
        <div id="cmsmasters_tab_654e1f84bdc39" className="cmsmasters_tab active_tab">
           <DetailedInfo/>
        </div>
        <div id="cmsmasters_tab_654e1f84bdd63" className="cmsmasters_tab">
         <OtherTab1/>
        </div>
        <div id="cmsmasters_tab_654e1f84c154f" className="cmsmasters_tab">
            <OtherTab2/>
        </div>
        <div id="cmsmasters_tab_654e1f84c1714" className="cmsmasters_tab">
            <OtherTab3/>
        </div>
        <div id="cmsmasters_tab_654e1f84c2f12" className="cmsmasters_tab">
            <OtherTab4/>
        </div>
    </div>
</div>