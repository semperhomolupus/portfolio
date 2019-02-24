import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import WelcomePage from '../../components/WelcomePage/WelcomePage';
import MainPage from '../../components/MainPage/MainPage';
import PortfolioPage from '../../components/PortfolioPage/PortfolioPage';
import AboutPage from '../../components/AboutPage/AboutPage';
import ContactsPage from '../../components/ContactsPage/ContactsPage';
import styles from './App.module.scss'

export default class App extends Component {
    render() {
        return (
            <div className={styles.App}>
                <Router>
                    <Switch>
                        <Route path={'/'} exact component={WelcomePage}/>
                        <Route path={'/main'} component={MainPage}/>
                        <Route path={'/portfolio'} component={PortfolioPage}/>
                        <Route path={'/about'} component={AboutPage}/>
                        <Route path={'/contacts'} component={ContactsPage}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}
