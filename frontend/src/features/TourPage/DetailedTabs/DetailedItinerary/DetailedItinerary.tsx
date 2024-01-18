import React, { useEffect, useState } from 'react';
import style from '../DetailedTabs.module.scss';

interface Props {
  data: string;
}

const DetailedItinerary: React.FC<Props> = ({ data }) => {
  const [modifiedContent, setModifiedContent] = useState('');

  //Render Video
  useEffect(() => {
    const extractVideoID = (url: string) => {
      const regex =
        /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/ ]{11})/;
      const match = url.match(regex);

      return match ? match[1] : '';
    };

    const cont = data ? data : '';

    if (!cont) {
      return;
    }

    const regex = /<figure class="media"><oembed url="(.*?)"><\/oembed><\/figure>/g;

    let replacedData = cont.replace(regex, (_, url) => {
      const videoID = extractVideoID(url);

      return `<div className="videoWrapper"><iframe width="560" height="315" src="//www.youtube.com/embed/${videoID}" style={{ border: "none" } allowfullscreen></iframe></div>`;
    });

    replacedData = replacedData.replace(
      /localhost:1337/g,
      process.env.NEXT_PUBLIC_API_DOMAIN || 'localhost:1337',
    );

    setModifiedContent(replacedData);
  }, [data]);
  return (
    <div className="container">
      <div className={style.detailed_itinerary}>
        <div className={style.day_detailed}>
          {modifiedContent && <div dangerouslySetInnerHTML={{ __html: modifiedContent }} />}
        </div>
      </div>
    </div>
  );
};

export default DetailedItinerary;
