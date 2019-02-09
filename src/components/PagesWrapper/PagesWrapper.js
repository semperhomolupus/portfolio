import React, {Component} from "react";
import WelcomePage from '../WelcomePage/WelcomePage';
import MainPage from '../MainPage/MainPage';
import PortfolioPage from '../PortfolioPage/PortfolioPage';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import styles from './PagesWrapper.module.scss'

export default class PagesWrapper extends Component {


    render() {

        return (
            <div className={styles.pagesWrapper}>
                <div className={styles.headerlLogo}>
                    {/*<Logo/>*/}
                    // todo-me поправить лого
                </div>

                <Navigation/>

                <li>
                    {/*<WelcomePage/>*/}

                    <MainPage/>

                    {/*<PortfolioPage/>*/}
                </li>
            </div>

        )
    }
}