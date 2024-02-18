import { ElementRef, useRef } from 'react';
import styles from './KeyboardGrid.module.scss';
import { KeyboardGridCell } from './KeyboardGridCell';
import type { KeyboardKey } from '@shared/types/KeyboardKey.ts';
import type { KeyboardLayout } from '../Keyboard.types.ts';
import type { CellStatus } from '@shared/types/CellStatus.ts';
import { useKeyPress } from '@shared/hooks/useKeyPress.ts';
import { useGameStore } from '@shared/stores/GameStore/useGameStore.ts';
import { clsx } from 'clsx';

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
            `[data-keyboard-grid-cell-value='${keyboardKey}']`,
        );

        if (keyboardGridCell instanceof HTMLButtonElement) {
            keyboardGridCell.click();
        }
    };

    // @TODO it doesn't look good
    useKeyPress((event, keyboardKey) => {
        if (event.target instanceof HTMLBodyElement) {
            handleAnimateKeyboardGridCellClick(keyboardKey);
        }
        if (event.target instanceof HTMLButtonElement) {
            /*
                // @TODO
                I want to get rid of data-atributes at all. how to achieve this?
                1. I use it for animations. Find animation library.
                2. Would it handle mouse events in css file?
                3. I use it in querySelector to trigger animations from other componnets in the app.
                It does look like jquery and I don't like it. What if each item would just have its id
                and i'll trigger those animations thanks to global store like redux?
                but how to make them on-time animations? need to find a solution.

            */
            const keyboardKey: KeyboardKey | null = event.target.getAttribute(
                'data-keyboard-grid-cell-value',
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

    // @TODO styling grid rows?
    return (
        <div className={styles.container} ref={ref}>
            {keyboardLayout.map((row, i) => (
                <div className={clsx(styles.row, styles[`row-${i}`])} key={i}>
                    {row.map((key) => (
                        <KeyboardGridCell
                            key={key}
                            value={key}
                            onClick={onKeyboardKeyPress}
                            status={getStatus(key)}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};
