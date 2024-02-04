import styles from './BoardGridCell.module.scss';
import { clsx } from 'clsx';

const BoardGridCellStatus = {
    EMPTY: 'empty',
    NO_MATCH: 'no_match',
    INDIRECT_MATCH: 'indirect_match',
    DIRECT_MATCH: 'direct_match',
} as const;

type BoardGridCellStatus =
    (typeof BoardGridCellStatus)[keyof typeof BoardGridCellStatus];

interface BoardGridCellProps {
    value: string;
    status: BoardGridCellStatus;
}
export const BoardGridCell = ({ value, status }: BoardGridCellProps) => {
    return (
        <div className={clsx(styles.container, styles[status])}>{value}</div>
    );
};
