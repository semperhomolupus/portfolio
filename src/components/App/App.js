import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import WelcomePage from '../WelcomePage/WelcomePage';

import MainPage from '../MainPage/MainPage';
import PortfolioPage from '../PortfolioPage/PortfolioPage';
import AboutPage from '../AboutPage/AboutPage';
import ContactsPage from '../ContactsPage/ContactsPage';

import styles from './App.module.scss'

export default class App extends Component {


    render() {


        return (
            <Router>
                <div className={styles.app}>
                    <Switch>
                        <Route path={'/'} exact component={WelcomePage}/>
                        <Route path={'/main'} component={MainPage}/>
                        <Route path={'/portfolio'} component={PortfolioPage}/>
                        <Route path={'/about'} component={AboutPage}/>
                        <Route path={'/contacts'} component={ContactsPage}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}