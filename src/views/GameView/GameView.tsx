import { Board } from '../../components/Board';
import { Keyboard } from '../../components/Keyboard';
import styles from './GameView.module.scss';
import { useState } from 'react';
import { KeyboardKey } from '@shared/types/KeyboardKey.ts';

const GameView = () => {
    // @TODO how to make it not string but Keyboard[]
    const [inputValue, setInputValue] = useState<string>('');
    const [answers, setAnswers] = useState<KeyboardKey[][]>(
        Array(6).fill(Array(5).fill('')),
    );
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleKeyboardKeyPress = (keyboardKey: KeyboardKey) => {
        if (keyboardKey === 'escape') {
            setInputValue('');
            setCurrentIndex(0);
            setAnswers(Array(6).fill(Array(5).fill('')));
            return;
        }

        if (currentIndex === answers.length) {
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
            setCurrentIndex(currentIndex + 1);
        } else {
            setAnswers([
                ...answers.slice(0, currentIndex),
                [
                    ...inputValueArray,
                    ...Array(5 - inputValueArray.length).fill(''),
                ],
                ...answers.slice(currentIndex + 1),
            ]);
        }

        setInputValue(newInputValue);
    };

    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Wordle</h2>
            <input readOnly type='text' value={inputValue} hidden />
            <div className={styles.board}>
                <Board answers={answers} currentIndex={currentIndex} />
            </div>
            <div className={styles.keyboard}>
                <Keyboard
                    answers={answers}
                    onKeyboardKeyPress={handleKeyboardKeyPress}
                />
            </div>
        </section>
    );
};

export default GameView;
