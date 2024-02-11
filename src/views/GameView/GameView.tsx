import { Board } from '../../components/Board';
import { Keyboard } from '../../components/Keyboard';
import styles from './GameView.module.scss';
import { useState } from 'react';
import { KeyboardKey } from '@shared/types/KeyboardKey.ts';
import { useGameStore } from '@shared/stores/GameStore/useGameStore.ts';

const GameView = () => {
    const {
        state: { answers },
        computed: { indexOfCurrentAnswer },
        dispatch,
    } = useGameStore();

    // @TODO how to make it not string but Keyboard[]
    const [inputValue, setInputValue] = useState<string>('');

    const handleKeyboardKeyPress = (keyboardKey: KeyboardKey) => {
        if (keyboardKey === 'escape') {
            setInputValue('');
            dispatch({ type: 'RESET_ANSWERS' });
            return;
        }

        if (indexOfCurrentAnswer === answers.length) {
            return;
        }

        let newInputValue = inputValue;

        if (keyboardKey === 'backspace') {
            newInputValue = newInputValue.slice(0, -1);
        }

        if (keyboardKey.length === 1 && newInputValue.length < 5) {
            newInputValue += keyboardKey;
        }

        const inputValueArray = Array.from(newInputValue);

        if (keyboardKey === 'enter' && newInputValue.length === 5) {
            newInputValue = '';
            dispatch({
                type: 'UPDATE_ANSWER',
                payload: {
                    index: indexOfCurrentAnswer,
                    answer: {
                        isSubmitted: true,
                    },
                },
            });
        } else {
            dispatch({
                type: 'UPDATE_ANSWER',
                payload: {
                    index: indexOfCurrentAnswer,
                    answer: {
                        value: [
                            ...inputValueArray,
                            ...Array(5 - inputValueArray.length).fill(''),
                        ],
                    },
                },
            });
        }

        setInputValue(newInputValue);
    };

    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Wordle</h2>
            <input readOnly type='text' value={inputValue} hidden />
            <div className={styles.board}>
                <Board />
            </div>
            <div className={styles.keyboard}>
                <Keyboard onKeyboardKeyPress={handleKeyboardKeyPress} />
            </div>
        </section>
    );
};

export default GameView;
