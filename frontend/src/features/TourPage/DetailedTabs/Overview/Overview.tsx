import React from 'react';
import style from '../DetailedTabs.module.scss';


const tourData = {
    detailed: {
        'Destination': 'Pamir – Alay Mountains, southern Kyrgyzstan, Osh Region',
        'Duration': '8 days / 7 nights',
        'Accommodation': '1 night camping (tents) / 3 nights guest house / 3 nights yurts',
        'Trekking Distance': '106 km',
        'Elevation': 'Max 4,306 meters / Mo 2,186 meters',
        'Total Elevation': ' Gain/Loss: 4435m+ / 4827m-',
        'Possible Months For Trek': 'June – early September',
        'Difficulty': 'Moderate to Difficult',
        'Start End Point': 'Osh city, Kyrgyzstan',
        'Transportation Services': 'If you need additional transportation or private transfer in Kyrgyzstan ' +
            'after your tour ends, just let us know when you book this tour and we can arrange this for you.',
        'Note': 'The length of the tour can be shortened to 4-5-6-7 days according to your time. We offer the Heights of Alay Valley Trek (6 days) that includes most of the stops except for the Tulpar Kol Lake and Peak Lenin Base Camp or the even shorter Heights of Alay Mountains (4 days) that includes the dramatic Sary Mogul mountain pass.'
    },
};

const Overview = () => {
    return (
      <div className="container">
        <div className={`${style.tab_overview} ${style.tab}`}>
            <h3>Tour Overview: Best of Alay Mountains Trek</h3>
            <ul>
                {Object.entries(tourData.detailed).map(([key, value]) => (
                    <li key={key}>
                        <strong>{key}:</strong> {value}
                    </li>
                ))}
            </ul>
        </div>
      </div>
    );
};

export default Overview;
