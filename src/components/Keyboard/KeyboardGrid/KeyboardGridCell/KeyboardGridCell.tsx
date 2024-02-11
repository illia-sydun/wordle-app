import styles from './KeyboardGridCell.module.scss';
import { KeyboardKey } from '@shared/types/KeyboardKey.ts';
import { CellStatus } from '@shared/types/CellStatus.ts';
import { clsx } from 'clsx';

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
    const handleOnClick = () => {
        onClick(value);
    };

    return (
        <button
            className={clsx(styles.container, styles[status])}
            style={{ gridArea: value }}
            onClick={handleOnClick}
            data-value={value}>
            {value}
        </button>
    );
};
