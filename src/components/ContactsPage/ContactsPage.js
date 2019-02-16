import React, {Component} from "react";
import PagesWrapper from "../PagesWrapper/PagesWrapper";
import PageContainer from "../PageContainer/PageContainer";
import styles from './ContactsPage.module.scss';

export default class ContactsPage extends Component {


    render() {

        return (
            <PagesWrapper>
                <PageContainer haikuType={3}>
                    <div className={styles.container}>

                    </div>
                </PageContainer>
            </PagesWrapper>
        )
    }
}