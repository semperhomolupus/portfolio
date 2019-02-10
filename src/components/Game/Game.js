import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import './Game.scss'

class Game extends Component {

    constructor(props) {
        super(props);
        this.state = {
            player: {
                row: 0,
                column: 0,
            },
            key: false
        }

        this.keyListener = this.keyListener.bind(this);
        this.movePlayer = this.movePlayer.bind(this);

    }

    componentDidMount(){
        console.log("GAME componentDidMount")
        document.addEventListener("keydown", this.keyListener, false);
        const player = document.querySelector(".player");
        const playerRow = player.dataset.row;
        const playerColumn = player.dataset.column;

        this.setState({
            player: {
                row: +playerRow,
                column: +playerColumn
            }
        });
    }

    componentWillUnmount() {
        console.log("GAME componentWillUnmount")
        document.removeEventListener("keydown", this.keyListener);
    }

    keyListener(e) {
        switch(e.code) {
            case "KeyW":
                this.movePlayer(+this.state.player.row - 1, false);
                break;
            case "KeyS":
                this.movePlayer(+this.state.player.row + 1, false);
                break;
            case "KeyD":
                this.movePlayer(false, +this.state.player.column + 1);
                break;
            case "KeyA":
                this.movePlayer(false, +this.state.player.column - 1);
                break;
            default:
                return false;
        }
    }

    movePlayer(row, column) {

        let newRowPosition = row !== false ? row : this.state.player.row;
        let newColumnPosition = column !== false ? column : this.state.player.column;
        let player = document.querySelector('.player');
        let tiles = document.querySelectorAll('td');
        let newPlace;
        console.log(newRowPosition, newColumnPosition)
        for (let i = 0; i < tiles.length; i++) {

            if (+tiles[i].dataset.row === newRowPosition && +tiles[i].dataset.column === +newColumnPosition) {
                newPlace = tiles[i];
            }
        }
        // Говнокод
        if (newPlace.classList.contains("disabled") || newPlace.classList.contains("door")) {
            console.log("Сюда нельзя")
        } else {
            newPlace.classList.add("player")
            player.classList.remove("player");
            this.setState({
                player: {
                    row: newRowPosition,
                    column: newColumnPosition
                }
            });
        }
        // Говнокод
        if (newPlace.classList.contains("key")) {
            let door = document.querySelector('.door');
            newPlace.classList.remove("key")
            door.classList.remove("door")
        }

        if (newPlace.classList.contains("aboutGate")) {
            this.props.history.push('/about')
        }

        if (newPlace.classList.contains("portfolioGate")) {
            this.props.history.push('/portfolio')
        }

        if (newPlace.classList.contains("contactsGate")) {
            this.props.history.push('/contacts')
        }

    }

    render() {
        const level = `
████████A███████████
█TF.█TT█..█.F.B█.T.█
P...║.F..███.F.║...C
█F..█..........█B.F█
█..B█..F..T███.█████
███████....╘█T...FB█
█T..B███..███..F..B█
RSS☺..F.....F......█
R۩SS.....T.....B█╘T█
RRRR████████████████
`

        const transformedString = [];

        for (let i = 0; i < level.length; i++) {
            transformedString.push(level[i])
        }

        let rows = [];
        let row = [];
        let dataRow = 0;
        let dataColumn = 0;

        transformedString.forEach((symbol, index) => {

            if (symbol !== '\n') {
                let className;
                switch (symbol) {
                    case "█":
                        className = "wall disabled";
                        break;
                    case "☺":
                        className = "player";
                        break;
                    case "╘":
                        className = "key";
                        break;
                    case "▼":
                        className = "exit";
                        break;
                    case "║":
                        className = "door";
                        break;
                    case "A":
                        className = "aboutGate";
                        break;
                    case "P":
                        className = "portfolioGate";
                        break;
                    case "C":
                        className = "contactsGate";
                        break;

                    case "B":
                        className = "box disabled";
                        break;
                    case "T":
                        className = "tree disabled";
                        break;

                    case "F":
                        className = "flower ";
                        break;
                    case "R":
                        className = "river disabled";
                        break;
                    case "۩":
                        className = "boat river disabled";
                        break;
                    case "S":
                        className = "sand";
                        break;



                    default:
                        className = "floor";



                    // case "█":
                    //     className = `${styles.wall}`;
                    //     break;
                    // case "@":
                    //     className = `${styles.player}`;
                    //     break;
                    // case "╘":
                    //     className = `${styles.key}`;
                    //     break;
                    // case "▼":
                    //     className = `${styles.exit}`;
                    //     break;
                    // case "║":
                    //     className = `${styles.door}`;
                    //     break;
                    // default:
                    //     className = `${styles.floor}`;
                }

                row.push(<td
                    key={index}
                    className={className}
                    data-column={dataColumn++}
                    data-row={dataRow}
                >{symbol}</td>)

            } else {
                rows.push(row)
                row = [];
                dataColumn = 0;
                dataRow++;
            }

        })

        let generatedLevel = rows.map((row, index) => {
            return (
                <tr key={index}>
                    {row}
                </tr>
            )
        })





        // const getlevel = getRows.map((row, index) => {
        //   return <tr key={index}>{row}</tr>
        // })

        // console.log(getlevel)

        return (
            <div className="wrapper">

                <table className="table">
                    <tbody>
                    {generatedLevel}
                    </tbody>
                </table>
            </div>
        );
    }
}


export default withRouter(Game);