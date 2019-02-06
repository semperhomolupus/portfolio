import React, {Component} from "react";
import WelcomePage from '../WelcomePage/WelcomePage';
import styles from './PagesWrapper.module.scss'

export default class PagesWrapper extends Component {


    render() {

        return (
            <ul className={styles.pagesWrapper}>
                <li>
                    <WelcomePage/>
                </li>
            </ul>

        )
    }
}