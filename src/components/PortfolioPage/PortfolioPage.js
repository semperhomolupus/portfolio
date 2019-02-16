import React, {Component} from "react";
import PagesWrapper from "../PagesWrapper/PagesWrapper";
import PageContainer from "../PageContainer/PageContainer";
import styles from './PortfolioPage.module.scss';

import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";

import slide1 from './assets/slide-1.jpg';
import slide2 from './assets/slide-2.jpg';
import slide3 from './assets/slide-3.jpg';
import slide4 from './assets/slide-4.jpg';
import slide5 from './assets/slide-5.jpg';

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
                title: "Сайт компании Panakeia",
                descr: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias assumenda deserunt distinctio eaque itaque molestias nam necessitatibus quas recusandae repellat, sunt totam vel voluptas voluptates voluptatibus!",
                link: "",
                technologies: "ХЗ"
            },
            {
                title: "Многостраничный сайт Афродита",
                descr: "Сайт вымышленного фитнес-клуба. Псс, только не говорите им, что их не существует ;)",
                link: "",
                technologies: "HTML"
            },
            {
                title: "Лендинг компании Lorem",
                descr: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias assumenda deserunt distinctio eaque itaque molestias nam necessitatibus quas recusandae repellat, sunt totam vel voluptas voluptates voluptatibus! Amet delectus et quam.",
                link: "https://semperhomolupus.github.io/loremSite/",
                technologies: "HTML, jQuery"
            }
        ];

        let slide = slides[this.state.activeSlide];


        return (
            <PagesWrapper>
                <PageContainer
                    haikuType={2}
                    title={'Лучшая работа - хобби'}
                >
                    <div className={styles.PortfolioPage}>
                        <div className={styles.PortfolioPage_slider}>
                            <Slider {...settings}>
                                <img src={slide1} alt=""/>
                                <img src={slide2} alt=""/>
                                <img src={slide3} alt=""/>
                                <img src={slide4} alt=""/>
                                <img src={slide5} alt=""/>
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
                </PageContainer>
            </PagesWrapper>
        )
    }
}