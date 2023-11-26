import React from 'react';
import style from "./locationRegion.module.scss";
import classificationsStyle from "@/features/Classification/Classification.module.scss";
import Image from "next/image";
import locationsBanner from "@/assets/locationImage/locationsBanner.jpg";
import classificationBanner from "@/assets/locationImage/locationsBanner.jpg";
import playIcon from "@/assets/icon/icon-play.svg";
import ClassificationsCard from "@/features/Classification/components/ClassificationsCard";
import ClassificationReviews from "@/components/ClassificationReviews/ClassificationReviews";
import {useParams} from "next/navigation";

const LocationsRegion = () => {
    const {id} = useParams();

    return (
        <>
            <div className={style.locationBanner}>
                <Image className={style.locationBanner__image} src={locationsBanner} alt='#'/>
                <div className={style.locationBanner__wrapper}>
                    <h3 className={style.locationBanner__title}>{id} region</h3>
                </div>
                <div className={style.backdrop}></div>
            </div>
            <div className={style.locationDescription}>
                <h2 className={style.locationDescription__title}>
                    The {id}  region in Kyrgyzstan impresses with its alpine landscapes, historical monuments and the
                    hospitality of the local population.
                </h2>
                <p className={style.locationDescription__description}>
                    The {id}  region in Kyrgyzstan provides unique tourism opportunities for lovers of active recreation. The
                    heart of the region is Lake Issyk-Kul, the splendor of which is surrounded by mountain peaks. Here,
                    tourists can enjoy swimming, water sports and camping in scenic coastal locations.The Chui region in Kyrgyzstan provides unique tourism opportunities for lovers of active recreation. The
                    heart of the region is Lake Issyk-Kul, the splendor of which is surrounded by mountain peaks. Here,
                    tourists can enjoy swimming, water sports and camping in scenic coastal locations.
                </p>
            </div>
            <div className={classificationsStyle.classificationInfo__video}>
                <Image src={classificationBanner} alt="#" />
                <button className={classificationsStyle.classificationInfo__video__button}>
                    <Image src={playIcon} alt="#" />
                    Play
                </button>
            </div>
            <div className={style.toursBlog}>
                <h3 className={style.toursBlog__title}>all tours in the Chui region</h3>
                <div className={style.toursBlog__cards}>
                    {Array.from({ length: 6 }, (_, index) => (
                        <ClassificationsCard key={index} />
                    ))}
                </div>
                <button className={classificationsStyle.classificationCards__button}>Show more trips</button>
            </div>
            <ClassificationReviews/>
        </>
    );
};

export default LocationsRegion;