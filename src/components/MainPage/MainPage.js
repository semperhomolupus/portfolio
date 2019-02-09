import React, {Component} from "react";
import styles from './MainPage.module.scss'
import Game from '../Game/Game';

export default class MainPage extends Component {


    render() {

        return (
            <div className={styles.block}>


                <Game/>
            </div>
        )
    }
}