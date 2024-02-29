import styles from './KeyboardGridCell.module.scss';
import { KeyboardKey } from '@shared/types/KeyboardKey.ts';
import { clsx } from 'clsx';
import { observer } from 'mobx-react-lite';
import type { KeyStore } from '@shared/stores/KeyboardStore/KeyStore.ts';

type KeyboardGridCellProps = {
    cell: KeyStore;
    onClick: (value: KeyboardKey) => void;
};

export const KeyboardGridCell = observer(
    ({ cell, onClick }: KeyboardGridCellProps) => {
        const handleOnClick = () => {
            onClick(cell.value);
        };

        const startHalfClickAnimation = () => {
            cell.startAnimation('half_click');
        };

        const handleStopGenericAnimations = () => {
            if (cell.animationState !== 'half_click') {
                cell.stopAnimation();
            }
        };

        const handleStopAllAnimations = () => {
            cell.stopAnimation();
        };

        return (
            <button
                className={clsx(
                    styles.container,
                    styles[cell.status],
                    styles[cell.animationState],
                )}
                style={cell.computedStyles}
                onClick={handleOnClick}
                onMouseEnter={startHalfClickAnimation}
                onFocus={startHalfClickAnimation}
                onTransitionEnd={handleStopGenericAnimations}
                onMouseLeave={handleStopAllAnimations}
                onBlur={handleStopAllAnimations}
                onAnimationEnd={handleStopAllAnimations}>
                {cell.label}
            </button>
        );
    },
);
