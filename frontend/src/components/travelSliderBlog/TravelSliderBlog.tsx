import React from 'react';
import "./TravelSlider.scss"
import SwiperBundle from "@/components/travelSliderBlog/Components/SwiperBundle";


const TravelSliderBlog = () => {
    return (
        <div className="container travelSliderBlog">
            <h3 className="travelSliderBlog__title">Small group travel that's good all over.</h3>
            <p className="travelSliderBlog__text" >Good views, good friends and good times on over 1000 trips in more than 100 countries</p>

            <div className='travelSliderBlog__first'>
                <p className="travelSliderBlog__description"> Ways to travel</p>
                <SwiperBundle/>
            </div>

            <div className="travelSliderBlog__second">
                <p className="travelSliderBlog__description"> Good Trips Only for 2023</p>
                <SwiperBundle/>
            </div>
        </div>
    );
};

export default TravelSliderBlog;