import React, {Component} from "react";
import TypedEffectButton from '../TypedEffectButton/TypedEffectButton';
import bgVideo from './assets/video.mp4';
import {Link, withRouter} from 'react-router-dom';
import Logo from '../Logo/Logo';
import styles from './WelcomePage.module.scss'

class WelcomePage extends Component {
    constructor(props) {
        super(props);
        this.keyListener = this.keyListener.bind(this);
    }

    componentDidMount() {
        console.log("WELCOME componentDidMount")
        document.addEventListener("keydown", this.keyListener, false);
    }

    componentWillUnmount() {
        console.log("WELCOME componentWillUnmount")
        document.removeEventListener("keydown", this.keyListener);
    }

    keyListener(e) {
        if (e.code === 'KeyY') {
            this.props.history.push('/main')
        }
    }

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

export default withRouter(WelcomePage);