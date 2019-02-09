import React, {Component} from "react";
import styles from './MainPage.module.scss'
import Game from '../Game/Game';
import ninjaImg from './assets/ninja.webp';
import wasdImg from './assets/wasd.png';


export default class MainPage extends Component {

    render() {

        return (
            <div className={styles.mainPage}>


                <Game/>

                <div className={styles.wasd}>
                    <img src={wasdImg} alt=""/>
                </div>

                <div className={styles.ninja}>
                    <div className={styles.ninja_image}>
                        <img src={ninjaImg} alt="Frontend Ninja"/>
                    </div>
                    <div>
                        <span className={styles.ninja_title}>
                            Frontend Ninja!
                        </span>
                        <span className={styles.ninja_descr}>
                            It is you!
                        </span>
                    </div>

                </div>
            </div>
        )
    }
}