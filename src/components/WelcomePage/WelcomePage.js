import React, {Component} from "react";
import TypedEffectButton from '../TypedEffectButton/TypedEffectButton';
import bgVideo from './assets/video.mp4';
import styles from './WelcomePage.module.scss'
import Logo from '../Logo/Logo';

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
                    <Logo/>
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