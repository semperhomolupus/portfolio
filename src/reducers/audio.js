import {TOGGLE_MUSIC} from '../actions/toggleMusic';

export const initialState = {
    music: new Audio(),
    musicIsActive: false,
};

export function audioReducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_MUSIC:
            return {...state, musicIsActive: action.payload}

        default:
            return state
    }
}