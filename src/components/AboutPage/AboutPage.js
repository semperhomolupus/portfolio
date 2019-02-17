import React, {Component} from "react";
import PagesWrapper from "../../containers/PagesContainer/PagesContainer";
import PageContent from "../PageContent/PageContent";
import styles from './AboutPage.module.scss';
import photo from "./assets/photo.jpg";
import react from "./assets/react.png";
import redux from "./assets/redux.png";
import es6 from "./assets/es6.png";
import jquery from "./assets/jquery.png";
import lodash from "./assets/lodash.png";
import pug from "./assets/pug.png";
import sass from "./assets/sass.png";
import less from "./assets/less.png";
import bem from "./assets/bem.png";
import webpack from "./assets/webpack.png";
import gulp from "./assets/gulp.png";
import phaser from "./assets/phaser.png";
import npm from "./assets/npm.png";
import bower from "./assets/bower.png";
import work from "./assets/work.png";

export default class AboutPage extends Component {

    render() {

        return (
            <PagesWrapper>
                <PageContent
                    haikuType={1}
                    title={'Frontend: one love'}
                >
                    <div className={styles.AboutPage}>
                        <div className={styles.AboutPage_info}>
                            <div className={styles.AboutPage_photo}>
                                <img src={photo} className={styles.AboutPage_image} alt="Egor Dyachenko"/>

                            </div>
                            <div className={styles.AboutPage_descr}>
                                <p>
                                    <span className={styles.colored}>Frontend developer</span> из прекрасного Санкт-Петербурга.
                                    Разработка визуальной части сайтов для меня - это прежде всего хобби, давнее увлечение.
                                    Интересоваться этим направлением я начал еще в 2014 году, и некоторое время ходил вокруг да около,
                                    открывая для себя все грани IT - <br/>от контент-менеджмента до SEO.
                                </p>
                                <p>
                                     <span className={styles.colored}>В 2015 году</span> с головой погрузился в изучение верстки, а в 2016 ушел с основной работы и целый год
                                    держался на фрилансе. В стремлении к стабильному доходу устроился <span className={styles.colored}>HTML-верстальщиком</span> в офис в Волгограде, и еще на испытательном сроке понял, что подобная простая и монотонная работа не для меня.
                                    Поблагодарив работодателя, в самом начале 2018 года переехал в <nobr className={styles.colored}>Санкт-Петербург</nobr>, и больше не сходил с пути фронтенд-разработки.
                                </p>

                            </div>
                        </div>

                        <div className={styles.AboutPage_skills}>
                            <div className={styles.AboutPage_skills_box}>
                                <h2 className={styles.AboutPage_skills_title}>JavaScript</h2>
                                <ul className={styles.AboutPage_skills_list}>
                                    <li className={styles.AboutPage_skills_item}>
                                        <img src={react} alt=""/>
                                        <span>React</span>
                                    </li>
                                    <li className={styles.AboutPage_skills_item}>
                                        <img src={redux} alt=""/>
                                        <span>Redux</span>
                                    </li>
                                    <li className={styles.AboutPage_skills_item}>
                                        <img src={es6} alt=""/>
                                        <span>ES 6</span>
                                    </li>
                                    <li className={styles.AboutPage_skills_item}>
                                        <img src={lodash} alt=""/>
                                        <span>Lodash</span>
                                    </li>
                                    <li className={styles.AboutPage_skills_item}>
                                        <img src={phaser} alt=""/>
                                        <span>Phaser</span>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.AboutPage_skills_box}>
                                <h2 className={styles.AboutPage_skills_title}>Верстка</h2>
                                <ul className={styles.AboutPage_skills_list}>
                                    <li className={styles.AboutPage_skills_item}>
                                        <img src={jquery} alt=""/>
                                        <span>jQuery</span>
                                    </li>
                                    <li className={styles.AboutPage_skills_item}>
                                        <img src={pug} alt=""/>
                                        <span>PUG</span>
                                    </li>
                                    <li className={styles.AboutPage_skills_item}>
                                        <img src={sass} alt=""/>
                                        <span>SASS</span>
                                    </li>
                                    <li className={styles.AboutPage_skills_item}>
                                        <img src={less} alt=""/>
                                        <span>LESS</span>
                                    </li>
                                    <li className={styles.AboutPage_skills_item}>
                                        <img src={bem} alt=""/>
                                        <span>BEM</span>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.AboutPage_skills_box}>
                                <h2 className={styles.AboutPage_skills_title}>Окружение</h2>
                                <ul className={styles.AboutPage_skills_list}>
                                    <li className={styles.AboutPage_skills_item}>
                                        <img src={webpack} alt=""/>
                                        <span>Webpack</span>
                                    </li>
                                    <li className={styles.AboutPage_skills_item}>
                                        <img src={gulp} alt=""/>
                                        <span>Gulp</span>
                                    </li>

                                    <li className={styles.AboutPage_skills_item}>
                                        <img src={npm} alt=""/>
                                        <span>NPM</span>
                                    </li>
                                    <li className={styles.AboutPage_skills_item}>
                                        <img src={bower} alt=""/>
                                        <span>Bower</span>
                                    </li>
                                    <li className={styles.AboutPage_skills_item}>
                                        <img src={work} alt=""/>
                                        <span>Editors</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </PageContent>
            </PagesWrapper>
        )
    }
}