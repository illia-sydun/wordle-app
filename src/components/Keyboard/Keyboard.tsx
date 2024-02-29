import styles from './Keyboard.module.scss';
import { KeyboardGrid } from './KeyboardGrid';

export const Keyboard = () => {
    return (
        <div className={styles.container}>
            <KeyboardGrid />
        </div>
    );
};
