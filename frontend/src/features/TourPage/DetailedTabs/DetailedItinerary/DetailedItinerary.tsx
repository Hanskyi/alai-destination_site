import React from 'react';
import style from '../DetailedTabs.module.scss';

/*interface DayDetails {
    title: string;

    [key: string]: string;
}

interface DetailedDays {
    [key: string]: DayDetails;
}*/

/*
const daysDetailed: { detailed: DetailedDays } = {
    detailed: {
        day_1: {
            title: 'DAY 1: DEPART OSH TO SARY MOGUL VILLAGE',
            'Driving distance': '4 hours',
            Meals: 'L, D,',
            Accommodation: 'Homestay',
            description:
                'Depart from the historic city of Osh, Kyrgyzstan to the village of Sary-Mogul (3,000 meters). There is remarkable scenery along the way to Sary-Mogul, so enjoy the ride! After two and half hours of driving, we stop for a short 4-hour of hiking to the beautiful Isumrudnoe lake. Have lunch and continue driving to Sary-Mogul. After arrival, you can enjoy the incredible views of the 7,000+ meter high snow-capped Pamir Mountains in the distance. We will enjoy a home-cooked dinner and an overnight stay at a family-run guesthouse. In Sary Mogul, there are several small convenience stores for last-minute purchases.\n' +
                '\n' +
                'Note: If you want to arrive in Osh earlier to explore this 3,000+-year-old city filled with ethnically diverse people and cuisines, we can also arrange day trips for you, including walking tours, market visits, foodie tours, or other city tours for you. You can learn more in our comprehensive Osh Travel Guide.',
            img: 'https://visitalay.com/wp-content/uploads/2018/04/homestay_sarymogol.jpg',
            imgTitle: 'Homestay in Sarymogol village',
        },
        day_2: {
            title: 'DAY 2: TREK FROM SARY MOGUL VILLAGE OVER SARY MOGUL PASS (4,306M) TO CAMPSITE',
            'Trekking distance/time': ' 15 km / 7-hours',
            Meals: ' B, L, D,',
            Accommodation: 'Homestay',
            description:
                'After breakfast, we will drive for 30 minutes from Sary Mogul village north to the starting point of the trek. We begin the trek by walking along for about an hour to the first viewpoint. Some parts are a bit challenging as the trail is narrow and the terrain is composed mainly of scree and small pebbles. We will take a break and enjoy the views of the Pamir Mountains from the viewpoint before descending into a valley for lunch. We will break for lunch by a riverbank with glacier views. After lunch, we will head to Sary Mogul Pass at 4,306 meters (1 hour). As you ascend, glaciated peaks and alpine lakes will begin to appear. At the top of the pass, we will see Besh Kol – this viewpoint has stunning views of the alpine lakes and nearby peaks. After descending we will walk down to the campsite at 3,557 meters. Enjoy your dinner under the stars at the yurt camp.',
            img: 'https://visitalay.com/wp-content/uploads/2019/12/Sarymogol_Pass.jpg',
            imgTitle: '',
        },
    },
};
*/

interface Props {
  data: string;
}

const DetailedItinerary: React.FC<Props> = ({ data }) => {
  return (
    <div className="container">
      <div className={style.detailed_itinerary}>
        <div className={style.day_detailed}>
          <div dangerouslySetInnerHTML={{ __html: data }} />
        </div>
      </div>
    </div>
  );
};

export default DetailedItinerary;
