import styles from './KeyboardGridCell.module.scss';
import { KeyboardKey } from '@shared/types/KeyboardKey.ts';
import { CellStatus } from '@shared/types/CellStatus.ts';
import { clsx } from 'clsx';
import { useBooleanState } from '@shared/hooks/useBooleanState.ts';

type KeyboardGridCellProps = {
    status: CellStatus;
    value: KeyboardKey;
    onClick: (value: KeyboardKey) => void;
};

export const KeyboardGridCell = ({
    value,
    status,
    onClick,
}: KeyboardGridCellProps) => {
    const clickTransitionState = useBooleanState();

    const handleTransitionEnd = () => {
        clickTransitionState.handleSetFalse();
    };

    const handleOnClick = () => {
        clickTransitionState.handleToggle();
        onClick(value);
    };

    // @OTOD theres an issue with transition when click on key with mouse and hold focus
    return (
        <button
            className={clsx(styles.container, styles[status])}
            style={{ gridArea: value }}
            onClick={handleOnClick}
            data-keyboard-grid-cell-value={value}
            data-keyboard-grid-cell-status={status}
            data-is-clicking-transition={clickTransitionState.value}
            onTransitionEnd={handleTransitionEnd}>
            {value}
        </button>
    );
};
