import React from 'react';
import style from './Articles.module.scss';
import articlesBanner from '../../assets/articlesImages/articlesBanner.png'
import articlesSmall from '../../assets/articlesImages/articlessSmall.png'
import Image from "next/image";
import ArticlesCard from "@/features/Articles/Components/ArticlesCard";

const Articles = () => {
    return (
        <>
            <div className={style.articlesBanner}>
                <div className={style.articlesBanner__bacdrop}></div>

                <Image
                    className={`${style.articlesBanner__image} ${style.articlesBanner__image__big}`}
                    width={1000}
                    height={100}
                    src={articlesBanner} alt="#"
                />
                <Image
                    className={`${style.articlesBanner__image} ${style.articlesBanner__image__small}`}
                    width={1000} height={100}
                    src={articlesSmall} alt="#"
                />
                <h3 className={style.articlesBanner__title}>THE GOOD STORIES</h3>
            </div>

            <div className='d-flex flex-column align-center'>
                <div className={`${style.articleCardContainer} container d-flex f-wrap justify-center`}>
                    {Array.from({ length: 6 }, (_, index) => (
                        <ArticlesCard key={index} />
                    ))}
                </div>
                <button className={style.articleCardBtn}>view all</button>
            </div>
        </>
    );
};

export default Articles;