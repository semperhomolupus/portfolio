export const TOGGLE_MUSIC = 'TOGGLE_MUSIC';

export function toggleMusic(musicIsActive) {
    return {
        type: TOGGLE_MUSIC,
        payload: musicIsActive
    }
}