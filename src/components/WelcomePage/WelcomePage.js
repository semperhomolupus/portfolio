import React, {Component} from "react";
import ReactSVG from 'react-svg';
import TypedEffectButton from '../TypedEffectButton/TypedEffectButton';
import bgVideo from './assets/video.mp4';

import wolfSVG from './assets/wolfLogo.svg';
import circleSVG from './assets/circle.svg';
import textSVG from './assets/text.svg';
import styles from './WelcomePage.module.scss'


export default class WelcomePage extends Component {


    render() {

        return (
            <div className={styles.welcome}>
                <video
                    className={styles.video}
                    autoPlay
                    muted
                >
                    <source src={bgVideo} type='video/mp4' />
                </video>

                <div className={styles.logo}>
                    <ReactSVG className={styles.logo_circle} src={circleSVG} />
                    <ReactSVG className={styles.logo_wolf} src={wolfSVG} />
                    <ReactSVG className={styles.logo_text} src={textSVG} />
                </div>
                <div className={styles.button}>
                    <TypedEffectButton
                        strings={[
                            'Открыть? (Y/N)',
                            'Узнать правду? (Y/N)',
                            'Продолжить? (Y/N)'
                        ]}
                    />
                </div>
            </div>
        )
    }
}