import React, {Component} from "react";
import PagesWrapper from "../PagesWrapper/PagesWrapper";
import PageContainer from "../PageContainer/PageContainer";
import styles from './AboutPage.module.scss';

export default class AboutPage extends Component {

    render() {

        return (
            <PagesWrapper>
                <PageContainer
                    haikuType={1}
                    title={'Front-end one love'}
                >
                    <div className={styles.container}>



                    </div>
                </PageContainer>
            </PagesWrapper>
        )
    }
}