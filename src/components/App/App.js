import React, {Component} from "react";

import ProgressBar from '../ProgressBar/ProgressBar';
import PagesWrapper from '../PagesWrapper/PagesWrapper';
import styles from './App.module.scss'

export default class App extends Component {


    render() {

        const data = {
            activePage: 0
        }

        return (
            <div className={styles.app}>

                <PagesWrapper
                    activePage={data.activePage}
                />
                <ProgressBar
                    activePage={data.activePage}
                />
            </div>
        )
    }
}