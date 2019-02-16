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
                                Если вам интересно то, чем я занимаюсь, и есть что предложить - я всегда рад. <br/>
                                Или вы увидели ошибки на сайте или в моих работах, есть мысли как сделать мой труд лучше?
                                С радостью!
                            </p>
                            <p>
                                Приму любую обратную связь, кроме спама. По этой причине не оставляю в доступе почту.
                                Но вы можете связаться со мной в социальных сетях!
                            </p>
                            <p>
                                Good luck!
                            </p>
                            
                            <ul className={styles.socials}>
                                <li>
                                    <a href="#" className={`${styles.social} ${styles.vk}`}>
                                        Вконтакте
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className={`${styles.social} ${styles.linkedin}`}>
                                        Linkedin
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className={`${styles.social} ${styles.facebook}`}>
                                        Facebook
                                    </a>
                                </li>
                            </ul>
                            <div className={styles.ContactsPage_descr_ps}>
                                From Saint-Petersburg with love  <br/>
                                Egor Dyachenko
                            </div>
                        </div>
                    </div>
                </PageContainer>
            </PagesWrapper>
        )
    }
}
