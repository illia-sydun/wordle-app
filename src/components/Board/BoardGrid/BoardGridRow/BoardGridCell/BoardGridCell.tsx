import styles from './BoardGridCell.module.scss';
import { clsx } from 'clsx';
import { CellStatus } from '@shared/types/CellStatus.ts';
import { KeyboardKey } from '@shared/types/KeyboardKey.ts';
import { useBooleanState } from '@shared/hooks/useBooleanState.ts';
import { useDeferredValue, useEffect, useMemo } from 'react';

interface BoardGridCellProps {
    count: number;
    value: KeyboardKey;
    status: CellStatus;
    isActive: boolean;
    isSubmitted: boolean;
}
// @TODO parse CellStatus before using it in styles
export const BoardGridCell = ({
    count,
    value,
    status,
    isActive,
    isSubmitted,
}: BoardGridCellProps) => {
    // @TODO those animations look like anti-pattern
    const flipAnimationState = useBooleanState();
    const pulseAnimationState = useBooleanState();
    const shakeAnimationState = useBooleanState();

    const prevValue = useDeferredValue(value);

    useEffect(() => {
        if (isSubmitted) {
            flipAnimationState.handleSetValue(true);
        }
    }, [isSubmitted]);

    useEffect(() => {
        if (!prevValue && value !== prevValue) {
            pulseAnimationState.handleSetValue(true);
        }
    }, [value]);

    // @TODO type
    const handleAnimationEnd = (e) => {
        flipAnimationState.handleSetFalse();
        pulseAnimationState.handleSetFalse();
        shakeAnimationState.handleSetFalse();

        // @TODO everytime doing that is a bs
        e.target.setAttribute('data-is-flipping-animation', 'false');
        e.target.setAttribute('data-is-pulsing-animation', 'false');
        e.target.setAttribute('data-is-shaking-animation', 'false');
    };

    const computedStyles = useMemo(
        () => ({
            transitionDelay: `${count * 300}ms`,
            animationDelay: `${count * 250}ms`,
        }),
        [count],
    );

    return (
        <div
            className={clsx(styles.container, styles[status], {
                [styles.active]: isActive,
            })}
            style={computedStyles}
            data-is-flipping-animation={flipAnimationState.value}
            data-is-pulsing-animation={pulseAnimationState.value}
            data-is-shaking-animation={shakeAnimationState.value}
            data-is-active-board-grid-cell={isActive}
            onAnimationEnd={handleAnimationEnd}>
            {value}
        </div>
    );
};
