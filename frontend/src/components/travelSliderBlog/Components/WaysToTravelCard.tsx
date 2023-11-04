import React from 'react';
import '../TravelSlider.scss';

const WaysToTravelCard = () => {
    return (
        <div className="card">
            <div className="card__image__box">
                <img className="card__image__box__content__two" src='https://core-renderer-tiles.maps.yandex.net/tiles?l=map&v=23.11.01-1-b231030182430&x=6&y=3&z=3&scale=2.625&lang=ru_RU&client_id=yandex-web-maps&&ads=enabled' alt='#'/>
            </div>
            <h4 className="card__days">11 Days · Comfort</h4>
            <p className="card__description">Best of Antarctica: A White Christmas (Ocean Endeavour)</p>
            <p className="card__price">From <span className="card__price__span">USD $9,990</span></p>
        </div>
    );
};

export default WaysToTravelCard;