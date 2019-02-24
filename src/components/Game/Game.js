import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import styles from './Game.module.scss'

class Game extends Component {

    constructor(props) {
        super(props);
        this.state = {
            levelSize: {
                width: 20,
                height: 10,
            },

            fieldSize: {
                width: 40,
                height: 40,
            },

            player: {
                positionX: 5,
                positionY: 5
            },

            inventory: {
                keys: 0
            },

            level: [
                {
                    x: 1,
                    y: 1,
                    type: "wall",
                    object: null,
                    passable: false
                },

                {
                    x: 2,
                    y: 1,
                    type: "wall",
                    object: null,
                    passable: false
                },

                {
                    x: 3,
                    y: 1,
                    type: "wall",
                    object: null,
                    passable: false
                },

                {
                    x: 4,
                    y: 1,
                    type: "wall",
                    object: null,
                    passable: false
                },

                {
                    x: 5,
                    y: 1,
                    type: "wall",
                    object: null,
                    passable: false
                },

                {
                    x: 6,
                    y: 1,
                    type: "wall",
                    object: null,
                    passable: false
                },

                {
                    x: 7,
                    y: 1,
                    type: "wall",
                    object: null,
                    passable: false
                },

                {
                    x: 8,
                    y: 1,
                    type: "wall",
                    object: null,
                    passable: false
                },

                {
                    x: 9,
                    y: 1,
                    type: "wall",
                    object: null,
                    passable: false
                },

                {
                    x: 10,
                    y: 1,
                    type: "wall",
                    object: null,
                    passable: false
                },

                {
                    x: 11,
                    y: 1,
                    type: "wall",
                    object: null,
                    passable: false
                },

                {
                    x: 12,
                    y: 1,
                    type: "wall",
                    object: null,
                    passable: false
                },

                {
                    x: 13,
                    y: 1,
                    type: "wall",
                    object: null,
                    passable: false
                },

                {
                    x: 14,
                    y: 1,
                    type: "wall",
                    object: null,
                    passable: false
                },

                {
                    x: 15,
                    y: 1,
                    type: "wall",
                    object: null,
                    passable: false
                },

                {
                    x: 16,
                    y: 1,
                    type: "wall",
                    object: null,
                    passable: false
                },

                {
                    x: 17,
                    y: 1,
                    type: "wall",
                    object: null,
                    passable: false
                },

                {
                    x: 18,
                    y: 1,
                    type: "wall",
                    object: null,
                    passable: false
                },

                {
                    x: 19,
                    y: 1,
                    type: "wall",
                    object: null,
                    passable: false
                },

                {
                    x: 20,
                    y: 1,
                    type: "wall",
                    object: null,
                    passable: false
                },








                {
                    x: 1,
                    y: 2,
                    type: "wall",
                    object: null,
                    passable: false
                },

                {
                    x: 2,
                    y: 2,
                    type: "tree",
                    object: null,
                    passable: false
                },

                {
                    x: 3,
                    y: 2,
                    type: "flower",
                    object: null,
                    passable: true
                },

                {
                    x: 4,
                    y: 2,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 5,
                    y: 2,
                    type: "wall",
                    object: null,
                    passable: false
                },

                {
                    x: 6,
                    y: 2,
                    type: "tree",
                    object: null,
                    passable: false
                },

                {
                    x: 7,
                    y: 2,
                    type: "tree",
                    object: null,
                    passable: false
                },

                {
                    x: 8,
                    y: 2,
                    type: "wall",
                    object: null,
                    passable: false
                },

                {
                    x: 9,
                    y: 2,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 10,
                    y: 2,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 11,
                    y: 2,
                    type: "wall",
                    object: null,
                    passable: false
                },

                {
                    x: 12,
                    y: 2,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 13,
                    y: 2,
                    type: "flower",
                    object: null,
                    passable: true
                },

                {
                    x: 14,
                    y: 2,
                    type: "box",
                    object: null,
                    passable: false
                },

                {
                    x: 15,
                    y: 2,
                    type: "wall",
                    object: null,
                    passable: false
                },

                {
                    x: 16,
                    y: 2,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 17,
                    y: 2,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 18,
                    y: 2,
                    type: "tree",
                    object: null,
                    passable: false
                },

                {
                    x: 19,
                    y: 2,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 20,
                    y: 2,
                    type: "wall",
                    object: null,
                    passable: false
                },






                {
                    x: 1,
                    y: 3,
                    type: "wall",
                    object: null,
                    passable: false
                },

                {
                    x: 2,
                    y: 3,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 3,
                    y: 3,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 4,
                    y: 3,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 5,
                    y: 3,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 6,
                    y: 3,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 7,
                    y: 3,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 8,
                    y: 3,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 9,
                    y: 3,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 10,
                    y: 3,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 11,
                    y: 3,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 12,
                    y: 3,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 13,
                    y: 3,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 14,
                    y: 3,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 15,
                    y: 3,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 16,
                    y: 3,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 17,
                    y: 3,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 18,
                    y: 3,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 19,
                    y: 3,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 20,
                    y: 3,
                    type: "wall",
                    object: null,
                    passable: false
                },










                {
                    x: 1,
                    y: 4,
                    type: "wall",
                    object: null,
                    passable: false
                },

                {
                    x: 2,
                    y: 4,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 3,
                    y: 4,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 4,
                    y: 4,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 5,
                    y: 4,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 6,
                    y: 4,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 7,
                    y: 4,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 8,
                    y: 4,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 9,
                    y: 4,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 10,
                    y: 4,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 11,
                    y: 4,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 12,
                    y: 4,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 13,
                    y: 4,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 14,
                    y: 4,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 15,
                    y: 4,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 16,
                    y: 4,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 17,
                    y: 4,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 18,
                    y: 4,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 19,
                    y: 4,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 20,
                    y: 4,
                    type: "wall",
                    object: null,
                    passable: false
                },








                {
                    x: 1,
                    y: 5,
                    type: "wall",
                    object: null,
                    passable: false
                },

                {
                    x: 2,
                    y: 5,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 3,
                    y: 5,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 4,
                    y: 5,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 5,
                    y: 5,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 6,
                    y: 5,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 7,
                    y: 5,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 8,
                    y: 5,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 9,
                    y: 5,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 10,
                    y: 5,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 11,
                    y: 5,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 12,
                    y: 5,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 13,
                    y: 5,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 14,
                    y: 5,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 15,
                    y: 5,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 16,
                    y: 5,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 17,
                    y: 5,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 18,
                    y: 5,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 19,
                    y: 5,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 20,
                    y: 5,
                    type: "wall",
                    object: null,
                    passable: false
                },











                {
                    x: 1,
                    y: 6,
                    type: "wall",
                    object: null,
                    passable: false
                },

                {
                    x: 2,
                    y: 6,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 3,
                    y: 6,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 4,
                    y: 6,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 5,
                    y: 6,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 6,
                    y: 6,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 7,
                    y: 6,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 8,
                    y: 6,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 9,
                    y: 6,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 10,
                    y: 6,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 11,
                    y: 6,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 12,
                    y: 6,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 13,
                    y: 6,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 14,
                    y: 6,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 15,
                    y: 6,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 16,
                    y: 6,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 17,
                    y: 6,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 18,
                    y: 6,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 19,
                    y: 6,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 20,
                    y: 6,
                    type: "wall",
                    object: null,
                    passable: false
                },











                {
                    x: 1,
                    y: 7,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 2,
                    y: 7,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 3,
                    y: 7,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 4,
                    y: 7,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 5,
                    y: 7,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 6,
                    y: 7,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 7,
                    y: 7,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 8,
                    y: 7,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 9,
                    y: 7,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 10,
                    y: 7,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 11,
                    y: 7,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 12,
                    y: 7,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 13,
                    y: 7,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 14,
                    y: 7,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 15,
                    y: 7,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 16,
                    y: 7,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 17,
                    y: 7,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 18,
                    y: 7,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 19,
                    y: 7,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 20,
                    y: 7,
                    type: null,
                    object: null,
                    passable: true
                },












                {
                    x: 1,
                    y: 8,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 2,
                    y: 8,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 3,
                    y: 8,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 4,
                    y: 8,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 5,
                    y: 8,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 6,
                    y: 8,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 7,
                    y: 8,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 8,
                    y: 8,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 9,
                    y: 8,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 10,
                    y: 8,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 11,
                    y: 8,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 12,
                    y: 8,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 13,
                    y: 8,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 14,
                    y: 8,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 15,
                    y: 8,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 16,
                    y: 8,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 17,
                    y: 8,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 18,
                    y: 8,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 19,
                    y: 8,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 20,
                    y: 8,
                    type: null,
                    object: null,
                    passable: true
                },










                {
                    x: 1,
                    y: 9,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 2,
                    y: 9,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 3,
                    y: 9,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 4,
                    y: 9,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 5,
                    y: 9,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 6,
                    y: 9,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 7,
                    y: 9,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 8,
                    y: 9,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 9,
                    y: 9,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 10,
                    y: 9,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 11,
                    y: 9,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 12,
                    y: 9,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 13,
                    y: 9,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 14,
                    y: 9,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 15,
                    y: 9,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 16,
                    y: 9,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 17,
                    y: 9,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 18,
                    y: 9,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 19,
                    y: 9,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 20,
                    y: 9,
                    type: null,
                    object: null,
                    passable: true
                },











                {
                    x: 1,
                    y: 10,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 2,
                    y: 10,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 3,
                    y: 10,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 4,
                    y: 10,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 5,
                    y: 10,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 6,
                    y: 10,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 7,
                    y: 10,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 8,
                    y: 10,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 9,
                    y: 10,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 10,
                    y: 10,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 11,
                    y: 10,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 12,
                    y: 10,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 13,
                    y: 10,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 14,
                    y: 10,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 15,
                    y: 10,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 16,
                    y: 10,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 17,
                    y: 10,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 18,
                    y: 10,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 19,
                    y: 10,
                    type: null,
                    object: null,
                    passable: true
                },

                {
                    x: 20,
                    y:  10,
                    type: null,
                    object: null,
                    passable: true
                },
            ]
        };

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
        let {positionY, positionX} = this.state.player;

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
        const {level} = this.state;

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
        let {level, inventory: {keys}} = this.state;
        let newLevel = level;


        if (fieldItem !== null) {
            newLevel[nextFieldIndex].object = null;

            this.setState({
                level: newLevel,
                player: {
                    positionX: nextFieldX,
                    positionY: nextFieldY,
                },
                inventory: {
                    [fieldItem]: ++this.state.inventory[fieldItem]
                }
            })




        } else if (fieldSpecialType === "door" && keys > 0) {
            newLevel[nextFieldIndex].type = null;
            newLevel[nextFieldIndex].passable = true;

            this.setState({
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
            this.setState({
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
            const {level, player} = this.state;
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
                        data-x={field.x}
                        data-y={field.y}
                        data-passible={field.passable}
                    />
                )
            });

            const levelWidth = this.state.levelSize.width * 40 + "px";
            const levelHeight = this.state.levelSize.height * 40 + "px";

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


export default withRouter(Game);