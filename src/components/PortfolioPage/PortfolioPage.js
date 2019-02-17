import React, {Component} from "react";
import PagesWrapper from "../../containers/PagesContainer/PagesContainer";
import PageContent from "../PageContent/PageContent";
import styles from './PortfolioPage.module.scss';

import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";

import slide1 from './assets/slide-1.jpg';
import slide2 from './assets/slide-2.jpg';
import slide3 from './assets/slide-3.png';

export default class PortfolioPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeSlide: 0
        }
    }

    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            afterChange: (index) => {
                this.setState({
                    activeSlide: index
                })
            }
        };

        const slides = [
            {
                title: "Лендинг Soulvibes",
                descr: "Лендинг с настоящим с медиа-плеером! Сделал его еще давным давно за вечерок, а до сих пор глаз радует. Послушайте Skillet, пока изучаете работу :)",
                link: "http://wolf-frontend.ru/p/1/",
                technologies: "HTML, CSS, JavaScript"
            },
            {
                title: "Портал ТИАП",
                descr: "Транспортно-информационный портал, верстка главной страницы портала.",
                link: "https://semperhomolupus.github.io/tiap/",
                technologies: "CSS"
            },
            {
                title: "Лендинг франшизы Recordfit",
                descr: "С целой тонной разнообразных анимаций, сделанных библиотекой WOW.js.",
                link: "http://franchise.recordfit.ru/",
                technologies: "PUG, LESS, jQuery"
            }
        ];

        let slide = slides[this.state.activeSlide];


        return (
            <PagesWrapper>
                <PageContent
                    haikuType={2}
                    title={'Мое хобби, моя работа'}
                >
                    <div className={styles.PortfolioPage}>
                        <div className={styles.PortfolioPage_slider}>
                            <Slider {...settings}>
                                <img src={slide1} alt=""/>
                                <img src={slide2} alt=""/>
                                <img src={slide3} alt=""/>
                            </Slider>
                            <a href={slide.link} target={"_blank"} className={styles.PortfolioPage_seeBtn}>Смотреть</a>
                        </div>
                        <div className={styles.PortfolioPage_content}>
                            <h2 className={styles.PortfolioPage_title}>{slide.title}</h2>
                            <div className={styles.PortfolioPage_info}>
                                <p>
                                    {slide.descr}
                                </p>

                                <div className={styles.PortfolioPage_techologies}>
                                    <p>
                                        Технологии: {slide.technologies}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </PageContent>
            </PagesWrapper>
        )
    }
}