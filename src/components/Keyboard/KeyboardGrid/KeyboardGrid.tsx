import styles from './KeyboardGrid.module.scss';
import { KeyboardKey, KeyboardKeys } from '../Keyboard.types.ts';
import { KeyboardGridCell } from './KeyboardGridCell';

type KeyboardGridProps = {
    keys: KeyboardKeys;
};

export const KeyboardGrid = ({ keys }: KeyboardGridProps) => {
    const onClick = (pressedKey: KeyboardKey) => {
        console.log(pressedKey);
    };

    return (
        <div className={styles.container}>
            {keys.flat().map((k) => (
                <KeyboardGridCell key={k} value={k} onClick={onClick} />
            ))}
        </div>
    );
};
