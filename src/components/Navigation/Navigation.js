import React, {Component} from "react";
import {NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss'

export default class Navigation extends Component {


    render() {

        return (
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li>
                        <NavLink
                            to={'/main'}
                            className={styles.navItmem}
                            activeClassName={styles.navItemActive}
                        >Главная</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/portfolio'}
                            className={styles.navItmem}
                            activeClassName={styles.navItemActive}
                        >Портфолио</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/about'}
                            className={styles.navItmem}
                            activeClassName={styles.navItemActive}
                        >Обо мне</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/contacts'}
                            className={styles.navItmem}
                            activeClassName={styles.navItemActive}
                        >Контакты</NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}