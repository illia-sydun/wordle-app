import { WORD_DICTIONARY } from '@shared/constants/Word.ts';
import type { GameStoreAction, GameStoreState } from './GameStore.types.ts';
import type { KeyboardKey } from '@shared/types/KeyboardKey.ts';
import { KEYBOARD_KEY } from '@shared/constants/KeyboardKey.ts';

export const generateEmptyAnswer = (): GameStoreState['answers'][number] => ({
    value: Array.from({ length: 5 }, () => '' as KeyboardKey),
    status: 'empty',
});

export const generateEmptyAnswers = (): GameStoreState['answers'] => {
    const answers = Array.from({ length: 6 }, generateEmptyAnswer);
    answers[0].status = 'active';
    return answers;
};

export const generateEmptyKeyState = (): GameStoreState['keyState'] => {
    return Object.values(KEYBOARD_KEY)
        .filter((key) => key.length === 1)
        .reduce(
            (acc, item) => ({
                ...acc,
                [item]: {
                    matched: false,
                    submitted: false,
                    matchedAtWordIndex: -1,
                },
            }),
            {} as GameStoreState['keyState'],
        );
};

export const getGameStoreInitialState = (): GameStoreState => {
    return {
        keyState: generateEmptyKeyState(),
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
    const keyState = { ...state.keyState };

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

            if (action.payload.status === 'submitted') {
                if (answers[action.payload.index + 1]) {
                    answers[action.payload.index + 1].status = 'active';
                }
            }

            if (action.payload.status === 'submitted') {
                answers[action.payload.index].value.forEach((key, i) => {
                    keyState[key].submitted = true;
                    if (keyState[key].matchedAtWordIndex === i) {
                        keyState[key].matched = true;
                    }
                });
            }

            return {
                ...state,
                answers,
            };

        case 'SET_WORD_OF_THE_DAY':
            const wordOfTheDay = action.payload;

            Array.from(wordOfTheDay.word).forEach((char, i) => {
                keyState[char as KeyboardKey].matchedAtWordIndex = i;
            });

            return {
                ...state,
                wordOfTheDay,
                gameStartedAt: Date.now(),
            };

        case 'RESET':
            return getGameStoreInitialState();

        default:
            return state;
    }
};
