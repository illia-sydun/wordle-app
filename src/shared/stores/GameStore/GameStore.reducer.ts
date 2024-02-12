import type { GameStoreAction, GameStoreState } from './GameStore.types.ts';
import { WORD_DICTIONARY } from '@shared/constants/Word.ts';
import { KeyboardKey } from '@shared/types/KeyboardKey.ts';

export const getGameStoreInitialState = (): GameStoreState => ({
    wordOfTheDay: WORD_DICTIONARY[0],
    gameStartedAt: 0,
    answers: Array.from({ length: 6 }, () => ({
        value: Array.from({ length: 5 }, () => '' as KeyboardKey),
        isSubmitted: false,
    })),
});

export const GameStoreReducer = (
    state: GameStoreState,
    action: GameStoreAction,
): GameStoreState => {
    const answers = [...state.answers];
    console.log(action);
    switch (action.type) {
        case 'UPDATE_ANSWER_VALUE':
            answers[action.payload.index].value = action.payload.value;

            return {
                ...state,
                answers,
            };

        case 'SUBMIT_ANSWER':
            answers[action.payload].isSubmitted = true;

            return {
                ...state,
                answers,
            };

        case 'SET_WORD_OF_THE_DAY':
            return {
                ...state,
                wordOfTheDay: action.payload,
                gameStartedAt: Date.now(),
            };

        case 'RESET':
            return getGameStoreInitialState();

        default:
            return state;
    }
};
