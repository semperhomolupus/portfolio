import React, {Component} from "react";

import MainPage from '../MainPage/MainPage';
import PortfolioPage from '../PortfolioPage/PortfolioPage';
import song from './assets/ministrelosity.mp3';
import styles from './PagesWrapper.module.scss'
import Navigation from "../Navigation/Navigation";
import {Link} from 'react-router-dom';

export default class PagesWrapper extends Component {

    state = {
        myAudio: new Audio
    }

    startAudio() {
        const audio = this.state.myAudio;
        audio.src = song;
        audio.play();


    }

    render() {

        let activePage = null;
        console.log(this.props.match)


        switch(this.props.match.url) {

            case '/main':
                activePage = <MainPage/>
                break;

            case '/portfolio':
                activePage = <PortfolioPage/>
                break;

        }

        return (
            <div className={styles.pagesWrapper}>
                <header className={styles.header}>
                    <Link to={'/'} className={styles.headerlLogo}>
                        Wolf Frontend
                    </Link>
                    <Navigation/>
                    <button
                        onClick={this.startAudio.bind(this)}
                        className={styles.audio}>
                        Старт аудио
                    </button>
                </header>

                {activePage}
            </div>

        )
    }
}