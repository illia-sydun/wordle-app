import styles from './Keyboard.module.scss';
import { KeyboardGrid } from './KeyboardGrid';
import { KEYBOARD_LAYOUT } from './Keyboard.constants.ts';
import { KeyboardKey } from '@shared/types/KeyboardKey.ts';

type KeyboardProps = {
    answers: KeyboardKey[][];
    onKeyboardKeyPress: (keyboardKey: KeyboardKey) => void;
};

export const Keyboard = ({ answers, onKeyboardKeyPress }: KeyboardProps) => {
    return (
        <div className={styles.container}>
            <KeyboardGrid
                answers={answers}
                keyboardLayout={KEYBOARD_LAYOUT}
                onKeyboardKeyPress={onKeyboardKeyPress}
            />
        </div>
    );
};
