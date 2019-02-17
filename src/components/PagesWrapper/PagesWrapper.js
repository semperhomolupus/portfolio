import React, {Component} from "react";
import Navigation from "../Navigation/Navigation";
import {Link} from 'react-router-dom';
import song from './assets/sadtimes.mp3';
import styles from './PagesWrapper.module.scss';

export default class PagesWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            musicIsActive: false
        };

        this.audio = new Audio();
        this.audio.src = song;
        this.audio.loop = true;
    }

    toggleAudio() {
        this.audio.play();
        this.state.musicIsActive ? this.audio.pause() : this.audio.play();
        this.setState({
            musicIsActive: !this.state.musicIsActive
        })
    }

    render() {
        let audioText = "";
        let audioStyles = "";

        if (this.state.musicIsActive) {
            audioText = "Остановить музыку";
            audioStyles = `${styles.audio} ${styles.audioActive}`
        } else {
            audioText = "Включить музыку";
            audioStyles = styles.audio;
        }



        return (
            <div className={styles.pagesWrapper}>
                <header className={styles.header}>
                    <Link to={'/'} className={styles.headerlLogo}>
                        Wolf Frontend
                    </Link>
                    <Navigation/>
                    <button
                        onClick={this.toggleAudio.bind(this)}
                        className={audioStyles}>
                        <span>{audioText}</span>
                        <div></div>
                    </button>
                </header>

                {this.props.children}
            </div>
        )
    }
}