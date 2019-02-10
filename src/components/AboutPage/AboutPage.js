import React, {Component} from "react";
import IconNinja from "../IconNinja/IconNinja";
import styles from './AboutPage.module.scss'

import {Link} from "react-router-dom";

export default class AboutPage extends Component {


    render() {

        return (
            <div className={styles.container}>

                <aside className={styles.aside}>
                    <div className={styles.pic}>
                        <img src="http://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg" alt="Me"/>
                    </div>

                    <div className={styles.ninja}>
                        <IconNinja/>
                        <Link to={'/main'} className={styles.return}>« Вернуться</Link>
                    </div>
                </aside>
                <main className={styles.main}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos iusto labore laborum maiores natus officia perspiciatis porro quaerat! Commodi, in?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur consequatur culpa delectus dolor fugiat fugit hic in ipsa nulla, odio quae quis quo ratione rem sint sunt! Blanditiis dolore doloremque et ipsam laudantium nobis nulla odit sapiente veniam voluptatem?
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, dolorum eaque ex iusto mollitia nesciunt perspiciatis placeat sapiente tempora veniam! Cum, deleniti dolorem facere magnam minus, modi nobis placeat, porro quod sapiente sed tempora voluptatem voluptatibus. Deleniti deserunt facilis laudantium modi nisi obcaecati, quas quod repudiandae similique sit. Odio, voluptas!
                    </p>
                    <p>
                        <em>
                            <b>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, optio!
                            </b>
                        </em>
                    </p>
                </main>


            </div>
        )
    }
}