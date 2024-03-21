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
            if (cell.isClickable) {
                cell.startAnimation('half_click');
            }
        };

        const handleStopGenericAnimations = () => {
            if (cell.animationState !== 'half_click') {
                cell.stopAnimation();
            }
        };
        // @TODO something is wrong with animations
        // sometimes shake doesn't run
        const handleStopAllAnimations = () => {
            cell.stopAnimation();
        };

        return (
            <button
                // @TODO data-is-large-key makes sense? maybe use flex for mobile view
                data-is-large-key={cell.isLargeKey}
                // @TODO i decided to revert this logic with disabing non clickable keys. it needs to be removed and fixed
                disabled={!cell.isClickable}
                className={clsx(
                    styles.container,
                    styles[cell.status],
                    styles[cell.animationState],
                )}
                style={cell.computedStyles}
                onClick={handleOnClick}
                onMouseEnter={startHalfClickAnimation}
                onTransitionEnd={handleStopGenericAnimations}
                onMouseLeave={handleStopAllAnimations}
                onAnimationEnd={handleStopAllAnimations}
            >
                {cell.label}
            </button>
        );
    },
);
