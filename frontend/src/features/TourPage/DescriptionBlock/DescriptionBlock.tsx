import React from 'react';
import descriptionStyle from './DescriptionBlock.module.scss';

const DescriptionBlock = () => {
  return (
    <div className={`${descriptionStyle.descriptionBlock} container`}>
      <p className={descriptionStyle.headPara}>
        Discover the Alay Mountains (also known as the Alai Mountains) in southern Kyrgyzstan, one
        of the most stunning mountain regions in the world that is still unknown…for now. Our Best
        of Alay Mountains Trek (8-days) combines some of the best trekking and hiking in Kyrgyzstan
        with stunning mountain landscapes, views of glacier-covered Lenin Peak (7,134 m), high
        altitude adventure, Kyrgyz nomadic culture, and much more.
      </p>

      <p className={descriptionStyle.headPara}>
        Our expert trekking guides will take you on an unforgettable journey through this beautiful,
        off-the-beaten-track Pamir-Alay mountain range in Kyrgyzstan.
      </p>

      <h2 className={descriptionStyle.highlightTitle}>
        Highlights from the Best of Alay Mountains Trek Tour include:
      </h2>

      <ul className={descriptionStyle.listOfHighlights}>
        <li className={descriptionStyle.itemOfHighlight}>
          <strong>
            Beautiful mountain vistas crossing Sary Mogul Pass (4,306 m) and Jiptick Pass (4,185 m)
          </strong>{' '}
          filled with alpine lakes, endless peaks, and the feeling as though you’ve landed on
          another planet.
        </li>
        <li className={descriptionStyle.itemOfHighlight}>
          <strong>Stunning views of glacier-covered Lenin Peak (7,134 m)</strong>, including up
          close at Lenin Peak Base Camp and Traveler’s Pass (4,100 m).
        </li>
        <li className={descriptionStyle.itemOfHighlight}>
          <strong>
            Diverse landscapes, from turquoise alpine lakes and lush green valleys to high desert
            moonscapes
          </strong>{' '}
          and the red rock formations of “Three Dragons Gorge.”
        </li>
        <li className={descriptionStyle.itemOfHighlight}>
          <strong>Sleeping in a traditional yurt</strong> where you’ll have an opportunity to meet
          Kyrgyz shepherds, learn about traditional nomadic culture, and enjoy hearty home-cooked
          meals.
        </li>
        <li className={descriptionStyle.itemOfHighlight}>
          <strong>A commitment to community tourism</strong> so that your tour will benefit local
          communities and families in the Pamir-Alay Mountains.
        </li>
      </ul>

      <p>
        <i>
          <strong>Combine this trek with a Pamir Highway Trip:</strong> If you are interested in
          continuing on the Pamir Highway to or from Tajikistan, you can easily combine this
          trekking tour with one of our other Pamir Highway Trips.
        </i>
      </p>
    </div>
  );
};

export default DescriptionBlock;
