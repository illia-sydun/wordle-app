import { BoardGridCell } from './BoardGridCell';
import styles from './BoardGridRow.module.scss';
import { observer } from 'mobx-react-lite';
import { Board } from '@shared/stores/BoardStore/BoardStore.ts';
import { clsx } from 'clsx';

type BoardGridRowProps = {
    row: Board['rows'][number];
};

export const BoardGridRow = observer(function BoardGridRow({
    row,
}: BoardGridRowProps) {
    return (
        <div
            className={clsx(styles.container, styles[row.animationState])}
            onAnimationEnd={row.stopAnimation}>
            {row.cells.map((cell) => {
                return (
                    <BoardGridCell
                        key={`row-${row.index}-cell-${cell.index}`}
                        cell={cell}
                    />
                );
            })}
        </div>
    );
});
