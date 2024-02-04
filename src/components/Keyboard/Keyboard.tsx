import styles from './Keyboard.module.scss';
import { KeyboardGrid } from './KeyboardGrid';
import { KEYBOARD_KEYS } from './Keyboard.constants.ts';

export const Keyboard = () => {
    return (
        <div className={styles.container}>
            <KeyboardGrid keys={KEYBOARD_KEYS} />
        </div>
    );
};
