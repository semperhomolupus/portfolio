import React, {Component} from "react";
import PagesWrapper from "../PagesWrapper/PagesWrapper";
import PageContainer from "../PageContainer/PageContainer";


import styles from './ContactsPage.module.scss';

export default class ContactsPage extends Component {


    render() {

        return (
            <PagesWrapper>
                <PageContainer
                    haikuType={3}
                    title={'Интересно? Напишите'}
                >
                    <div className={styles.ContactsPage}>
                        <div className={styles.ContactsPage_descr}>
                            <p>
                                Новые технологии, саморазвитие и достижение новых высот...<br/>
                                Все это возможно только в том случае, если ты открыт для остального мира.
                            </p>
                            <p>
                                Поэтому, если вам есть что предложить - я всегда рад. <br/>
                                Или вы увидели ошибки на сайте или в моих работах, есть мысли как <br/>сделать мой труд лучше?
                                С радостью!
                            </p>
                            <p>
                                Приму любую обратную связь, кроме спама. По этой причине не оставляю в открытом доступе почту.
                                Но вы можете связаться со мной в социальных сетях!
                            </p>
                            <p className={styles.colored}>
                                Good luck!
                            </p>
                            
                            <ul className={styles.socials}>
                                <li>
                                    <a href="https://vk.com/semperhomolupus" rel="noopener noreferrer" target="_blank" className={`${styles.social} ${styles.vk}`}>
                                        Вконтакте
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/egor-dyachenko/" rel="noopener noreferrer" target="_blank" className={`${styles.social} ${styles.linkedin}`}>
                                        Linkedin
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/egor.dyachenko.37" rel="noopener noreferrer" target="_blank" className={`${styles.social} ${styles.facebook}`}>
                                        Facebook
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </PageContainer>
            </PagesWrapper>
        )
    }
}
