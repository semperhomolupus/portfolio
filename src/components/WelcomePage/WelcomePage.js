import React, {Component} from "react";
import TypedEffectButton from '../TypedEffectButton/TypedEffectButton';
import bgVideo from './assets/video.mp4';
import styles from './WelcomePage.module.scss'
import Logo from '../Logo/Logo';
import {Link} from 'react-router-dom';

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

                <Link to={'/main'} className={styles.button}>
                    <TypedEffectButton
                        strings={[
                            'Открыть? (Y/N)',
                            'Начать игру? (Y/N)',
                            'Продолжить? (Y/N)'
                        ]}
                    />
                </Link>
            </div>
        )
    }
}