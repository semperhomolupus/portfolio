import {combineReducers} from 'redux';
import {audioReducer} from './audio';
import {gameReducer} from "./game";


export const rootReducer = combineReducers({
    audio: audioReducer,
    game: gameReducer
})