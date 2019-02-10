import React from "react";
import styles from "./IconNinja.module.scss";


const IconNinja = () => {
    return (
        <div className={styles.ninja}>
            <img src={process.env.PUBLIC_URL + 'ninja.webp'} alt="Frontend Ninja"/>
        </div>
    )
}

export default IconNinja;