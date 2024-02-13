import { ElementRef, useRef } from 'react';
import styles from './KeyboardGrid.module.scss';
import { KeyboardGridCell } from './KeyboardGridCell';
import type { KeyboardKey } from '@shared/types/KeyboardKey.ts';
import type { KeyboardLayout } from '../Keyboard.types.ts';
import type { CellStatus } from '@shared/types/CellStatus.ts';
import { useKeyPress } from '@shared/hooks/useKeyPress.ts';
import { useGameStore } from '@shared/stores/GameStore/useGameStore.ts';

type KeyboardGridProps = {
    keyboardLayout: KeyboardLayout;
    onKeyboardKeyPress: (keyboardKey: KeyboardKey) => void;
};

export const KeyboardGrid = ({
    keyboardLayout,
    onKeyboardKeyPress,
}: KeyboardGridProps) => {
    // @TODO why
    const flatKeyboardLayout = keyboardLayout.flat();
    const ref = useRef<ElementRef<'div'>>(null);

    const {
        state: { keyState },
    } = useGameStore();

    // @TODO use hook?
    const handleAnimateKeyboardGridCellClick = (keyboardKey: KeyboardKey) => {
        const keyboardGridCell = ref.current?.querySelector(
            `[data-value='${keyboardKey}']`,
        );

        if (keyboardGridCell instanceof HTMLButtonElement) {
            keyboardGridCell.setAttribute('data-is-clicking-animation', 'true');
            keyboardGridCell.click();
            setTimeout(() => {
                keyboardGridCell.setAttribute(
                    'data-is-clicking-animation',
                    'false',
                );
            }, 250);
        }
    };

    // @TODO it doesn't look good
    useKeyPress((event, keyboardKey) => {
        if (event.target instanceof HTMLBodyElement) {
            handleAnimateKeyboardGridCellClick(keyboardKey);
        }
        if (event.target instanceof HTMLButtonElement) {
            const keyboardKey: KeyboardKey | null = event.target.getAttribute(
                'data-value',
            ) as KeyboardKey;

            if (keyboardKey) {
                event.preventDefault();
                handleAnimateKeyboardGridCellClick(keyboardKey as KeyboardKey);
            }
        }
    }, flatKeyboardLayout);

    const getStatus = (key: KeyboardKey): CellStatus => {
        if (keyState[key]?.found) {
            return 'match';
        }
        if (keyState[key]?.column === -1 && keyState[key]?.visited === true) {
            return 'no_match';
        }
        if (keyState[key]?.column !== -1 && keyState[key]?.visited === true) {
            return 'close_match';
        }
        return 'empty';
    };

    // @TODO flattening keyboardLayout doesn't look good
    return (
        <div className={styles.container} ref={ref}>
            {flatKeyboardLayout.map((key) => (
                <KeyboardGridCell
                    key={key}
                    value={key}
                    onClick={onKeyboardKeyPress}
                    status={getStatus(key)}
                />
            ))}
        </div>
    );
};
