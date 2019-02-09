
import React from "react";
import styles from "./Logo.module.scss";
import ReactSVG from 'react-svg';
import circleSVG from "./assets/circle.svg";
import wolfSVG from "./assets/wolfLogo.svg";
import textSVG from "./assets/text.svg";

const Logo = () => {
    return (
        <div className={styles.logo}>
            <ReactSVG className={styles.logo_circle} src={circleSVG} />
            <ReactSVG className={styles.logo_wolf} src={wolfSVG} />
            <ReactSVG className={styles.logo_text} src={textSVG} />
        </div>
    )
}


export default Logo;
