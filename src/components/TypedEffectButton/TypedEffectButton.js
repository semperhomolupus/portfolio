import React, {Component} from "react";
import Typed from 'typed.js';
import styles from './TypedEffectButton.module.scss'

export default class TypedEffectButton extends Component {
    componentDidMount() {
        const { strings } = this.props;
        const options = {
            strings: strings,
            typeSpeed: 60,
            backSpeed: 35,
            backDelay: 1500,
            startDelay: 3000
        };


        this.typed = new Typed(this.el, options);


    }

    componentWillUnmount() {
        this.typed.destroy();
    }


    render() {

        return (
            <button className={styles.block} >
                <div style={{ whiteSpace: 'pre' }}
                     ref={(el) => { this.el = el; }}>
                </div>
            </button>

        )
    }
}