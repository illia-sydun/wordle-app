import styles from './Keyboard.module.scss';
import { KeyboardGrid } from './KeyboardGrid';
import { KEYBOARD_LAYOUT } from './Keyboard.constants.ts';
import { KeyboardKey } from '@shared/types/KeyboardKey.ts';
import { useGameStore } from '@shared/stores/GameStore/useGameStore.ts';

export const Keyboard = () => {
    const {
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
                return;
            }

            dispatch({
                type: 'SUBMIT_ANSWER',
                payload: indexOfCurrentAnswer,
            });
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
