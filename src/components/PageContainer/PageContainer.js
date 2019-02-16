import React, {Component} from "react";
import styles from './PageContainer.module.scss';
import IconNinja from "../IconNinja/IconNinja";
import {Link} from "react-router-dom";
import imageType1 from './assets/1.png';
import imageType2 from './assets/2.png';
import imageType3 from './assets/3.png';

export default class PageContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let image;
        let text;

        switch (this.props.haikuType) {
            case 1:
                image = imageType1;
                text = <span className={styles.haiku_text}>
                            Дятел стучит и стучит, <br/>
                            Ищет сухое дерево <br/>
                            Среди вишневых цветов.
                        </span>;
                break;
            case 2:
                image = imageType2;
                text = <span className={styles.haiku_text}>
                            Я шел по мосткам, <br/>и вдруг – <br/>
                            Там, в глубине потока, <br/>
                            Сквозят водяные цветы.
                        </span>;
                break;
            case 3:
                image = imageType3;
                text = <span className={styles.haiku_text}>
                            Чуть забрезжил рассвет. <br/>
                            Ускользнув от бакланов, играют <br/>
                            Рыбы в мелкой воде.
                        </span>;
                break;
        }

        return (
                <div className={styles.container}>
                    <aside className={styles.aside}>
                        <div className={styles.ninja}>
                            <IconNinja/>
                            <Link to={'/main'} className={styles.return}>« Вернуться</Link>
                        </div>
                        <div className={styles.haiku}>
                            {text}
                            <img className={styles.haiku_img} src={image} alt=""/>
                        </div>
                    </aside>

                    <main className={styles.content}>
                        <h1 className={styles.title}>{this.props.title}</h1>
                        <div className={styles.content_wrapper}>
                            {this.props.children}
                        </div>
                    </main>

                </div>
        )
    }
}