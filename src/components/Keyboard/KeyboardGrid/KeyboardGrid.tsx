import styles from './KeyboardGrid.module.scss';
import { KeyboardGridCell } from './KeyboardGridCell';
import type { KeyboardKey } from '@shared/types/KeyboardKey.ts';
import type { KeyboardLayout } from '../Keyboard.types.ts';
import { useKeyPress } from '@shared/hooks/useKeyPress.ts';
import { clsx } from 'clsx';
import { observer } from 'mobx-react-lite';
import { useMobxStores } from '@shared/stores/useMobx.ts';

type KeyboardGridProps = {
    keyboardLayout: KeyboardLayout;
    onKeyboardKeyPress: (keyboardKey: KeyboardKey) => void;
};

// @TODO styling grid rows?
// why flatKeyboardLayout
// revise useKeyPress

export const KeyboardGrid = observer(
    ({ keyboardLayout, onKeyboardKeyPress }: KeyboardGridProps) => {
        const {
            keyboardStore: { keys },
        } = useMobxStores();

        useKeyPress((event, keyboardKey) => {
            if (!event.repeat && event.target instanceof HTMLBodyElement) {
                onKeyboardKeyPress(keyboardKey);
            }
        }, keyboardLayout.flat());

        return (
            <div className={styles.container}>
                {keyboardLayout.map((row, index) => (
                    <div
                        key={index}
                        className={clsx(styles.row, styles[`row-${index}`])}>
                        {row.map((key) => (
                            <KeyboardGridCell
                                key={`key-${key}}`}
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
