import styles from './KeyboardGridCell.module.scss';
import { KeyboardKey } from '@shared/types/KeyboardKey.ts';
import { clsx } from 'clsx';
import { observer } from 'mobx-react-lite';
import type { KeyStore } from '@shared/stores/KeyboardStore/KeyStore.ts';
import {
    MdOutlineBackspace,
    MdOutlineKeyboardReturn,
    MdOutlineRestartAlt,
} from 'react-icons/md';
// import useMediaQuery from '@shared/hooks/useMediaQuery.ts';
import useLongPress from '@shared/hooks/useLongPress.ts';
import { useEffect } from 'react';

type KeyboardGridCellProps = {
    cell: KeyStore;
    onClick: (value: KeyboardKey, isLongPress?: boolean) => void;
};

export const KeyboardGridCell = observer(
    ({ cell, onClick }: KeyboardGridCellProps) => {
        // const isMobile = useMediaQuery('screen and (max-width: 650px)');

        const [handlers, { isLongPress }] = useLongPress();

        useEffect(() => {
            if (cell.value === 'backspace' && isLongPress) {
                onClick(cell.value, isLongPress);
            }
        }, [isLongPress]);

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

        const handleStopAllAnimations = () => {
            cell.stopAnimation();
        };

        const renderIcon = () => {
            switch (cell.value) {
                case 'backspace':
                    return <MdOutlineBackspace />;
                case 'enter':
                    return <MdOutlineKeyboardReturn />;
                case 'escape':
                    return <MdOutlineRestartAlt />;
            }
            return undefined;
        };

        return (
            <button
                aria-label={cell.value}
                // @TODO i decided to revert this logic with disabing non clickable keys. it needs to be removed and fixed
                disabled={!cell.isClickable}
                className={clsx(
                    styles.container,
                    styles[cell.status],
                    styles[cell.animationState],
                    styles[cell.value],
                )}
                style={cell.computedStyles}
                onClick={handleOnClick}
                onMouseEnter={startHalfClickAnimation}
                onTransitionEnd={handleStopGenericAnimations}
                onMouseLeave={handleStopAllAnimations}
                onAnimationEnd={handleStopAllAnimations}
                {...handlers}
            >
                {/*{isMobile ? renderIcon() ?? cell.label : cell.label}*/}
                <span className={styles.label}>
                    {renderIcon() ?? cell.label}
                </span>
            </button>
        );
    },
);
