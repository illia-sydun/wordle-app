import styles from './KeyboardGrid.module.scss';
import { KeyboardGridCell } from './KeyboardGridCell';
import type { KeyboardKey } from '@shared/types/KeyboardKey.ts';
import type { KeyboardLayout } from '../Keyboard.types.ts';
import { useKeyPress } from '@shared/hooks/useKeyPress.ts';
import { clsx } from 'clsx';
import { observer } from 'mobx-react-lite';
import { useMobxStore } from '@shared/stores/useMobxStore.ts';
import { KEYBOARD_LAYOUT } from '../Keyboard.constants.ts';

// @TODO where to put props?
type KeyboardGridProps = {
    keyboardLayout?: KeyboardLayout;
};

// @TODO styling grid rows?
// why flatKeyboardLayout
// revise useKeyPress

// @TODO mobx who should be responsible for handleKeyPress?

export const KeyboardGrid = observer(
    ({ keyboardLayout = KEYBOARD_LAYOUT }: KeyboardGridProps) => {
        const {
            keyboardStore: { keys },
            handleKeyPress,
        } = useMobxStore();

        const onKeyboardKeyPress = (keyboardKey: KeyboardKey) => {
            handleKeyPress(keyboardKey);
        };

        useKeyPress((event, keyboardKey) => {
            if (!event.repeat) {
                onKeyboardKeyPress(keyboardKey);
            }
        }, keyboardLayout.flat());

        return (
            <div className={styles.container}>
                {keyboardLayout.map((row, index) => (
                    <div
                        key={index}
                        className={clsx(styles.row, styles[`row-${index}`])}
                    >
                        {row.map((key) => (
                            <KeyboardGridCell
                                key={`key-${key}`}
                                cell={keys[key]}
                                onClick={onKeyboardKeyPress}
                            />
                        ))}
                    </div>
                ))}
            </div>
        );
    },
);
