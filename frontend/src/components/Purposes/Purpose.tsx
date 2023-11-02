import React from 'react';
import './Purpose.scss';

const Purpose = () => {
  return (
   <div className="purpose">
     <div className="container">
       <div className="purpose__card">
         <div className="purpose__card__information-wrap">
           <h2 className="purpose__card__title">We’re here to do good</h2>
           <p className="purpose__card__text">
             Responsible travel has always been at the core of what we do.
             Travelling with us means not just better trips for
             you, it’s better for local communities, better for wildlife
             and better for the planet.
           </p>
           <button type="button" className="purpose__card__button">Travel with purpose</button>
         </div>

         <div className="purpose__card__img-wrap">
           <img
             className="purpose__card__img"
             src="https://i.pinimg.com/originals/0c/5a/14/0c5a140e7ff19f285439e3b3dd439a15.jpg"
             alt="Purpose image"
           />
         </div>
       </div>
     </div>
   </div>
  );
};

export default Purpose;