import React, {Component} from "react";
import styles from './MainPage.module.scss'
import Game from '../Game/Game';
import ninjaImg from './assets/ninja.webp';
import wasdImg from './assets/wasd.png';



export default class MainPage extends Component {




    render() {

        return (
            <div className={styles.mainPage}>



                <div className={styles.gameWrapper}>
                    <div className={styles.arrows}>
                        <span className={styles.arrowLeft}>←</span>
                        <span className={styles.arrowTop}>↑</span>
                        <span className={styles.arrowRight}>→</span>
                    </div>

                    <Game/>
                </div>

                <div className={`${styles.block} ${styles.keyboard}`}>
                    <div className={styles.block_image}>
                        <img src={wasdImg} alt="WASD"/>
                    </div>
                    <div className={styles.block_content}>
                        <span className={styles.block_title}>
                            Управляй с клавиатуры
                        </span>
                        <span className={styles.block_descr}>
                            Собери <span>ключи</span> и открой <span>двери</span>. <br/> Но можно и просто кликнуть <span>по&nbsp;кнопке</span>&nbsp;в&nbsp;меню.
                        </span>
                    </div>
                </div>

                <div className={`${styles.block} ${styles.ninja}`}>
                    <div className={styles.block_image}>
                        <img src={ninjaImg} alt="Frontend Ninja"/>
                    </div>
                    <div className={styles.block_content}>
                        <span className={styles.block_title}>
                            Frontend Ninja!
                        </span>
                        <span className={styles.block_descr}>
                            Это ты!
                        </span>
                    </div>

                </div>
            </div>
        )
    }
}