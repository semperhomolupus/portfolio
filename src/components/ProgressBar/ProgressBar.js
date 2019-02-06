import React, {Component} from "react";
import styles from './ProgressBar.module.scss'

export default class ProgressBar extends Component {


    render() {

        return (
            <div className={styles.progress}></div>
        )
    }
}