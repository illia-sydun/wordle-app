import { clsx } from 'clsx';
import { observer } from 'mobx-react-lite';
import { Board } from '@shared/stores/BoardStore';
import styles from './BoardGridCell.module.scss';

interface BoardGridCellProps {
    cell: Board['rows'][number]['cells'][number];
}

export const BoardGridCell = observer(({ cell }: BoardGridCellProps) => {
    return (
        <div
            className={clsx(
                styles.container,
                styles[cell.status],
                styles[cell.animationState],
                cell.isActive && styles.active,
            )}
            style={cell.computedStyles}
            onAnimationEnd={cell.stopAnimation}
        >
            {cell.value}
        </div>
    );
});
