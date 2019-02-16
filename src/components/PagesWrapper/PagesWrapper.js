import React, {Component} from "react";

import Navigation from "../Navigation/Navigation";
import {Link} from 'react-router-dom';

import song from './assets/ministrelosity.mp3';
import styles from './PagesWrapper.module.scss';


export default class PagesWrapper extends Component {

    state = {
        myAudio: new Audio()
    };

    startAudio() {
        const audio = this.state.myAudio;
        audio.src = song;
        audio.play();
    }

    render() {
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

                {this.props.children}
            </div>

        )
    }
}