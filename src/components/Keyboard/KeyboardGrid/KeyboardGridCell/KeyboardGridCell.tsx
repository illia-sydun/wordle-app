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

    // @TODO type
    const handleTransitionEnd = (e) => {
        clickTransitionState.handleSetFalse();
        e.target.setAttribute('data-is-clicking-transition', 'false');
    };

    const handleOnClick = () => {
        clickTransitionState.handleSetTrue();
        onClick(value);
    };

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
