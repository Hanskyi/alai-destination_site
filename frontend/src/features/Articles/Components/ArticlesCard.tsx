import React from 'react';
import style from '../Articles.module.scss'
import Image from "next/image";

const ArticlesCard = () => {
    return (
        <div className={style.articleCard}>
            <div className={style.articleCard__image}>
                <img
                    src='https://static-cse.canva.com/blob/847132/paulskorupskas7KLaxLbSXAunsplash2.jpg'
                    alt='#'
                />
            </div>
            <div className={style.articleCArd__content}>
                <h5 className={style.articleCArd__content__title}>This couple is exploring the world one podcast episode at a time </h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores aspernatur blanditiis dolore dolorem doloremque doloribus facilis fuga illo magni minima molestiae, officia optio praesentium quaerat quo reprehenderit sequi soluta?</p>
            </div>
        </div>
    );
};

export default ArticlesCard;