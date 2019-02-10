import React, {Component} from "react";
import styles from './ContactsPage.module.scss'

export default class ContactsPage extends Component {


    render() {

        return (
            <div className={styles.container}>
                <span className={styles.link}>
                    <a href="mailto:whitebestnik@yandex.ru">whitebestnik@yandex.ru</a>
                </span>
            </div>
        )
    }
}