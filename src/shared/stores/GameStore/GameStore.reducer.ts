import type { GameStoreAction, GameStoreState } from './GameStore.types.ts';
import { GAME_STORE_INITIAL_STATE } from './GameStore.constants.ts';

export const GameStoreReducer = (
    state: GameStoreState,
    action: GameStoreAction,
): GameStoreState => {
    switch (action.type) {
        case 'UPDATE_ANSWER':
            const answers: GameStoreState['answers'] = [...state.answers];

            answers[action.payload.index] = {
                ...answers[action.payload.index],
                ...action.payload.answer,
            };

            return {
                ...state,
                answers,
            };

        case 'RESET_ANSWERS':
            return { ...GAME_STORE_INITIAL_STATE };

        default:
            return state;
    }
};
