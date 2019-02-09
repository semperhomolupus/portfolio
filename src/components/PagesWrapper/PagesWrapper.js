import React, {Component} from "react";

import MainPage from '../MainPage/MainPage';
import PortfolioPage from '../PortfolioPage/PortfolioPage';
// import Logo from '../Logo/Logo';
import styles from './PagesWrapper.module.scss'
import Navigation from "../Navigation/Navigation";

export default class PagesWrapper extends Component {


    render() {

        let activePage = null;
        console.log(this.props.match)


        switch(this.props.match.url) {

            case '/main':
                activePage = <MainPage
                    history={this.props.history}
                />
                break;

            case '/portfolio':
                activePage = <PortfolioPage/>
                break;

        }

        return (
            <div className={styles.pagesWrapper}>
                <header>
                    <div className={styles.headerlLogo}>
                        {/*<Logo/>*/}
                    </div>
                    <Navigation/>
                </header>

                {activePage}
            </div>

        )
    }
}