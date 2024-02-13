import { WORD_DICTIONARY } from '@shared/constants/Word.ts';
import type { GameStoreAction, GameStoreState } from './GameStore.types.ts';
import type { KeyboardKey } from '@shared/types/KeyboardKey.ts';

export const generateEmptyAnswer = (): GameStoreState['answers'][number] => ({
    value: Array.from({ length: 5 }, () => '' as KeyboardKey),
    status: 'empty',
});

export const generateEmptyAnswers = (): GameStoreState['answers'] => {
    const answers = Array.from({ length: 6 }, generateEmptyAnswer);
    answers[0].status = 'active';
    return answers;
};

export const getGameStoreInitialState = (): GameStoreState => {
    return {
        wordDictionary: WORD_DICTIONARY,
        wordOfTheDay: WORD_DICTIONARY[0],
        gameStartedAt: 0,
        answers: generateEmptyAnswers(),
    };
};

export const GameStoreReducer = (
    state: GameStoreState,
    action: GameStoreAction,
): GameStoreState => {
    const answers = [...state.answers];
    console.log(action);
    switch (action.type) {
        case 'UPDATE_ANSWER_VALUE':
            answers[action.payload.index].value = action.payload.value;
            answers[action.payload.index].status = 'active';

            return {
                ...state,
                answers,
            };

        case 'UPDATE_ANSWER_STATUS':
            answers[action.payload.index].status = action.payload.status;

            if (
                action.payload.status === 'submitted' &&
                answers[action.payload.index + 1]
            ) {
                answers[action.payload.index + 1].status = 'active';
            }

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
