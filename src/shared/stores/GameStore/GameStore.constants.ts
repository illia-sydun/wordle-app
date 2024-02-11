import type { GameStoreState } from './GameStore.types.ts';

export const GAME_STORE_INITIAL_STATE: GameStoreState = {
    answers: Array(6).fill({
        value: Array(5).fill(''),
        isSubmitted: false,
    }),
};
