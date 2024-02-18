import styles from './Keyboard.module.scss';
import { KeyboardGrid } from './KeyboardGrid';
import { KEYBOARD_LAYOUT } from './Keyboard.constants.ts';
import { KeyboardKey } from '@shared/types/KeyboardKey.ts';
import { useGameStore } from '@shared/stores/GameStore/useGameStore.ts';

export const Keyboard = () => {
    const {
        state: { wordDictionary, answers, keyState },
        computed: {
            isGameOver,
            currentAnswer,
            indexOfCurrentAnswer,
            indexOfCurrentAnswerActiveCell,
        },
        dispatch,
    } = useGameStore();

    // @TODO use hook
    const handleKeyboardKeyPress = (keyboardKey: KeyboardKey) => {
        if (keyboardKey === 'escape') {
            dispatch({ type: 'RESET' });
            return;
        }

        if (isGameOver) {
            return;
        }

        // if (keyboardKey === 'meta') {
        //     return;
        // }

        if (
            keyState[keyboardKey]?.column === -1 &&
            keyState[keyboardKey]?.visited
        ) {
            // @TODO it's a complete bs!
            const activeBoardGridCell = document.querySelector(
                `[data-is-active-board-grid-cell='true']`,
            );

            if (activeBoardGridCell instanceof HTMLDivElement) {
                activeBoardGridCell.setAttribute(
                    'data-is-shaking-animation',
                    'true',
                );
            }

            return;
        }

        const updatedCurrentAnswerValue = [...currentAnswer.value];

        if (keyboardKey === 'backspace') {
            const indexOfCellToClear = updatedCurrentAnswerValue[
                indexOfCurrentAnswerActiveCell
            ]
                ? indexOfCurrentAnswerActiveCell
                : indexOfCurrentAnswerActiveCell - 1;

            if (indexOfCellToClear === -1) {
                return;
            }

            updatedCurrentAnswerValue[indexOfCellToClear] = '' as KeyboardKey;
        }

        if (keyboardKey.length === 1) {
            const indexOfCellToUpdate = updatedCurrentAnswerValue[
                indexOfCurrentAnswerActiveCell
            ]
                ? indexOfCurrentAnswerActiveCell + 1
                : indexOfCurrentAnswerActiveCell;

            if (indexOfCellToUpdate === updatedCurrentAnswerValue.length) {
                return;
            }

            updatedCurrentAnswerValue[indexOfCurrentAnswerActiveCell] =
                keyboardKey;
        }

        if (keyboardKey === 'enter') {
            if (
                !updatedCurrentAnswerValue[updatedCurrentAnswerValue.length - 1]
            ) {
                // @TODO it's a complete bs!!!
                const activeBoardGridRow = document.querySelector(
                    `[data-is-active-board-grid-row='true']`,
                );

                if (activeBoardGridRow instanceof HTMLDivElement) {
                    activeBoardGridRow?.setAttribute(
                        'data-is-shaking-animation',
                        'true',
                    );
                }

                return;
            }

            const isWordFromDictionary = wordDictionary.some(
                (wordDictionary) =>
                    wordDictionary.word === updatedCurrentAnswerValue.join(''),
            );
            const isWordAlreadySubmitted = answers
                .filter((_, index) => index !== indexOfCurrentAnswer)
                .some(
                    (answer) =>
                        answer.value.join('') ===
                        updatedCurrentAnswerValue.join(''),
                );
            const isValidWord = isWordFromDictionary && !isWordAlreadySubmitted;

            /*
                add prop active cell
                add prop for active row
                maybe keep it in store, maybe not
             */
            if (!isValidWord) {
                // @TODO it's a complete bs!!! and copied!!! and doesnt work as theres no active when all cells filled!!
                const activeBoardGridRow = document.querySelector(
                    `[data-is-active-board-grid-row='true']`,
                );

                if (activeBoardGridRow instanceof HTMLDivElement) {
                    activeBoardGridRow?.setAttribute(
                        'data-is-shaking-animation',
                        'true',
                    );
                }
                if (currentAnswer.status !== 'invalid') {
                    dispatch({
                        type: 'UPDATE_ANSWER_STATUS',
                        payload: {
                            index: indexOfCurrentAnswer,
                            status: 'invalid',
                        },
                    });
                }
            } else {
                dispatch({
                    type: 'UPDATE_ANSWER_STATUS',
                    payload: {
                        index: indexOfCurrentAnswer,
                        status: 'submitted',
                    },
                });
            }
        } else {
            dispatch({
                type: 'UPDATE_ANSWER_VALUE',
                payload: {
                    index: indexOfCurrentAnswer,
                    value: updatedCurrentAnswerValue,
                },
            });
        }
    };

    return (
        <div className={styles.container}>
            <KeyboardGrid
                onKeyboardKeyPress={handleKeyboardKeyPress}
                keyboardLayout={KEYBOARD_LAYOUT}
            />
        </div>
    );
};
