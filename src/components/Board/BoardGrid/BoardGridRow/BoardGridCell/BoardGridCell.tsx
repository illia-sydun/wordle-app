import styles from './BoardGridCell.module.scss';
import { clsx } from 'clsx';
import { CellStatus } from '@shared/types/CellStatus.ts';
import { KeyboardKey } from '@shared/types/KeyboardKey.ts';
import { useBooleanState } from '@shared/hooks/useBooleanState.ts';
import { useEffect } from 'react';

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
    const animationState = useBooleanState();

    useEffect(() => {
        animationState.handleSetValue(isSubmitted);
    }, [isSubmitted]);

    return (
        <div
            className={clsx(styles.container, styles[status], {
                [styles.active]: isActive,
            })}
            style={{
                transition: `background-color, border-color 150ms`,
                transitionDelay: `${count * 300}ms`,
                transitionProperty: 'background-color, border-color',
                animationDelay: `${count * 250}ms`,
            }}
            data-is-animated={animationState.value}
            onAnimationEnd={animationState.handleSetFalse}>
            {value}
        </div>
    );
};
