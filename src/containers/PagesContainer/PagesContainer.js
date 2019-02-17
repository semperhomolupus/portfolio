import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {toggleMusic} from "../../actions/toggleMusic";
import Navigation from "../../components/Navigation/Navigation";
import song from './assets/sadtimes.mp3';
import styles from './PagesContainer.module.scss';

class PagesContainer extends Component {

    toggleAudio() {
        const {music, musicIsActive} = this.props.audio;
        music.src = song;
        music.loop = true;
        musicIsActive ? music.pause() : music.play();
        const newMusicStatus = !musicIsActive;
        this.props.toggleMusicAction(newMusicStatus);
    }

    render() {
        const {musicIsActive} = this.props.audio;
        let audioText = "";
        let audioStyles = "";

        if (musicIsActive) {
            audioText = "Остановить музыку";
            audioStyles = `${styles.audio} ${styles.audioActive}`
        } else {
            audioText = "Включить музыку";
            audioStyles = styles.audio;
        }

        return (
            <div className={styles.pagesWrapper}>
                <header className={styles.header}>
                    <Link to={'/'} className={styles.headerlLogo}>
                        Wolf Frontend
                    </Link>
                    <Navigation/>
                    <button
                        onClick={this.toggleAudio.bind(this)}
                        className={audioStyles}>
                        <span>{audioText}</span>
                        <div></div>
                    </button>
                </header>

                {this.props.children}
            </div>
        )
    }
}


const mapStateToProps = (store) => {
    return {
        audio: store.audio
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleMusicAction: musicIsActive => dispatch(toggleMusic(musicIsActive))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PagesContainer)