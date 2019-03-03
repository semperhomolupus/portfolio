import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import styles from './Game.module.scss'
import {gameSaver} from "../../actions/saveGame";
import {connect} from "react-redux";

class Game extends Component {

    constructor(props) {
        super(props);


        this.keyListener = this.keyListener.bind(this);
        this.movePlayer = this.movePlayer.bind(this);

    }

    componentDidMount(){

        document.addEventListener("keydown", this.keyListener, false);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.keyListener);
    }

    keyListener(e) {
        const keyCode = e.code;
        let {positionY, positionX} = this.props.game.player;

        if (keyCode === "KeyW" || keyCode === "ArrowUp") {
            this.movePlayer(
                positionX,
                --positionY,
            );

        } else if (keyCode === "KeyS" || keyCode === "ArrowDown") {
            this.movePlayer(
                positionX,
                ++positionY,
            );

        } else if (keyCode === "KeyA" || keyCode === "ArrowLeft") {
            this.movePlayer(
                --positionX,
                positionY

            );

        } else if (keyCode === "KeyD" || keyCode === "ArrowRight") {
            this.movePlayer(
                ++positionX,
                positionY

            );

        }
    }

    movePlayer(newPositionX, newPositionY) {
        const {level} = this.props.game;

        let nextFieldIndex = 0;
        let nextField = null;

        level.forEach((item, index) => {
            if (
                item.y === newPositionY &&
                item.x === newPositionX
            ) {
                nextFieldIndex= index;
                nextField = item;
            }
        });

        if (nextField) {
            this.ckeckNewPlace(nextField, nextFieldIndex, newPositionX, newPositionY)
        } else {
            console.log("Некуда идти")
        }
    }

        // Говнокод
    //     if (newPlace.classList.contains("key")) {
    //         let door = document.querySelector('.door');
    //         newPlace.classList.remove("key")
    //         door.classList.remove("door")
    //     }
    //
    //     if (newPlace.classList.contains("aboutGate")) {
    //         this.props.history.push('/about')
    //     }
    //
    //     if (newPlace.classList.contains("portfolioGate")) {
    //         this.props.history.push('/portfolio')
    //     }
    //
    //     if (newPlace.classList.contains("contactsGate")) {
    //         this.props.history.push('/contacts')
    //     }
    //
    // }


    ckeckNewPlace(nextField, nextFieldIndex, nextFieldX, nextFieldY) {
        const fieldItem = nextField.object;
        const fieldSpecialType = nextField.type;
        const canMove = nextField.passable;
        let {level, inventory: {keys}} = this.props.game;
        let newLevel = level;


        if (fieldItem !== null) {
            newLevel[nextFieldIndex].object = null;
            let inventoryItemCount = this.props.game.inventory[fieldItem];

            this.props.gameSaver({
                level: newLevel,
                player: {
                    positionX: nextFieldX,
                    positionY: nextFieldY,
                },
                inventory: {
                    [fieldItem]: ++inventoryItemCount
                }
            })




        } else if (fieldSpecialType === "door" && keys > 0) {
            newLevel[nextFieldIndex].type = null;
            newLevel[nextFieldIndex].passable = true;

            this.props.gameSaver({
                level: newLevel,
                player: {
                    positionX: nextFieldX,
                    positionY: nextFieldY,
                },
                inventory: {
                    keys: --keys
                }
            })


        } else if (canMove) {
            console.log(this.props.game)
            this.props.gameSaver({
                player: {
                    positionX: nextFieldX,
                    positionY: nextFieldY,
                }
            })

        } else {
            console.log('Сюда нельзя!')
        }
    }

//
// ████████A███████████
// █TF.█TT█..█.F.B█.T.█
// P...║.F..███.F.║...C
// █F..█..........█B.F█
// █..B█..F..T███.█████
// ███████....╘█T...FB█
// █T..B███..███..FT.B█
// RSS☺..F.....F......█
// R۩SS...T.TT....B█╘T█
// RRRR████████████████

        render() {

            const {level, player, levelSize} = this.props.game;
            let elements = [];

            level.forEach((field, index) => {
                const fielsBaseClass = styles.field;
                const fieldTypeClass = styles[field.type];
                const fieldObjectClass = styles[field.object];
                let playerClass = null;

                if (field.x === player.positionX && field.y === player.positionY)  {
                    playerClass = styles.player;
                }

                const fieldFinalClass = `${fielsBaseClass} ${fieldTypeClass} ${fieldObjectClass} ${playerClass}`;

                elements.push(
                    <div
                        key={index}
                        className={fieldFinalClass}
                    />
                )
            });

            const levelWidth = levelSize.width * 40 + "px";
            const levelHeight = levelSize.height * 40 + "px";

            let wrapperStyles  = {
                width: levelWidth,
                height: levelHeight
            };

            return (
                <div
                    className={styles.wrapper}
                    style={wrapperStyles}
                >
                    {elements}
                </div>
            );
        }
}


const mapStateToProps = (store) => {
    return {
        game: store.game
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        gameSaver: gameObject => dispatch(gameSaver(gameObject))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Game))