import React, {Component} from "react";
import Navigation from '../Navigation/Navigation';
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
                {/*<Navigation/>*/}
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