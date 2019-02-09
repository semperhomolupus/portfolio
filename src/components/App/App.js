import React, {Component} from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import WelcomePage from '../WelcomePage/WelcomePage';
import PagesWrapper from '../PagesWrapper/PagesWrapper';
import styles from './App.module.scss'

export default class App extends Component {


    render() {


        return (
            <Router>
                <div className={styles.app}>

                    <Route path={'/'} exact component={WelcomePage}/>
                    <Route path={'/:page'} component={PagesWrapper}/>

                </div>
            </Router>
        )
    }
}