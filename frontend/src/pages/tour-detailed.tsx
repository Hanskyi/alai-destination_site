import React from 'react';
import DetailedTabs from "../features/TourPage/DetailedTabs/DetailedTabs";
import style from "../features/TourPage/TourPage.module.scss";

const TourPage = () => {
    return (
        <div className={style.tour_page}>
            <div className={style.banner}>
                Banner
            </div>

            <div className="container">


                <div className={style.tour_container}>
                    <div style={{marginBottom: '50px'}}>
                        <h4>Description</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi debitis eaque in quasi
                            suscipit ut! Debitis facere, ipsa magni nemo obcaecati praesentium quia repellendus soluta
                            ut
                            voluptatibus. Aut delectus eius eos expedita hic ipsam iusto labore, mollitia natus quam
                            quidem
                            quis, quisquam repudiandae sed similique sint ullam. Labore, odit.</p>
                    </div>

                    <DetailedTabs/>

                    <div>
                        <h4>Best of Alay Mountains Trek Photo Gallery</h4>
                        <div className={style.gallery_placeholder}>
                            Galley
                        </div>
                    </div>
                </div>


            </div>


        </div>
    );
};

export default TourPage;