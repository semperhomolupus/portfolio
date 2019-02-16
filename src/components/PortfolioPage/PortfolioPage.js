import React, {Component} from "react";
import PagesWrapper from "../PagesWrapper/PagesWrapper";
import PageContainer from "../PageContainer/PageContainer";
import IconNinja from '../IconNinja/IconNinja';
import {Link} from 'react-router-dom';
import styles from './PortfolioPage.module.scss'

export default class PortfolioPage extends Component {


    render() {

        return (
            <PagesWrapper>
                <PageContainer haikuType={2}>
                    <div className={styles.container}>

                        <ul className={styles.examples}>
                            <li className={styles.example}>
                                <img src="https://2ch.hk//hw/src/3277376/15446283802060.jpg"  className={styles.image} alt=""/>
                            </li>
                            <li className={styles.example}>
                                <img src="http://alergyia.ru/wp-content/uploads/2016/12/9-4.jpg"  className={styles.image} alt=""/>
                            </li>
                            <li className={styles.example}>
                                <img src="https://scrapclub.com.ua/wp-content/uploads/02-cat-training-NationalGeographic_1484324.ngsversion.1526587209178.adapt_.1900.1.jpg"  className={styles.image} alt=""/>
                            </li>
                            <li className={styles.example}>
                                <img src="https://www.usmagazine.com/wp-content/uploads/2018/06/Smoothie-the-Cat-Instagram-zoom.jpg"  className={styles.image} alt=""/>
                            </li>
                            <li className={styles.example}>
                                <img src="https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a_400x400.jpeg"  className={styles.image} alt=""/>
                            </li>
                            <li className={styles.example}>
                                <img src="https://www.economist.com/sites/default/files/20171216_BKP511_0.jpg"  className={styles.image} alt=""/>
                            </li>
                            <li className={styles.example}>
                                <img src="https://images.pexels.com/photos/326875/pexels-photo-326875.jpeg"  className={styles.image} alt=""/>
                            </li>
                            <li className={styles.example}>
                                <img src="https://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg"  className={styles.image} alt=""/>
                            </li>
                            <li className={styles.example}>
                                <img src="https://www.thesprucepets.com/thmb/qPHlAlsuW6QfqCSmJA3pXg8PNYA=/400x300/filters:no_upscale():max_bytes(150000):strip_icc()/185939148-56a111b03df78cafdaa914ed.jpg"  className={styles.image} alt=""/>
                            </li>
                        </ul>
                    </div>
                </PageContainer>
            </PagesWrapper>
        )
    }
}