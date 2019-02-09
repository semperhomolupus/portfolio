import React, {Component} from "react";
import styles from './Navigation.module.scss'

export default class Navigation extends Component {


    render() {

        return (
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li className={styles.navItmem}>Портфолио</li>
                    <li className={styles.navItmem}>Обо мне</li>
                    <li className={styles.navItmem}>Контакты</li>
                </ul>
            </nav>
        )
    }
}