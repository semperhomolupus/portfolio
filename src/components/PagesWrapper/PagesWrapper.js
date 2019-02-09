import React, {Component} from "react";
import WelcomePage from '../WelcomePage/WelcomePage';
import MainPage from '../MainPage/MainPage';
import PortfolioPage from '../PortfolioPage/PortfolioPage';


import styles from './PagesWrapper.module.scss'

export default class PagesWrapper extends Component {


    render() {

        return (
            <ul className={styles.pagesWrapper}>
                <li>
                    {/*<WelcomePage/>*/}

                    <MainPage/>

                    {/*<PortfolioPage/>*/}
                </li>
            </ul>

        )
    }
}