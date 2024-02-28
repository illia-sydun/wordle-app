import { BoardGridRow } from './BoardGridRow';
import styles from './BoardGrid.module.scss';
import { useMobxStore } from '@shared/stores/useMobxStore.ts';
import { observer } from 'mobx-react-lite';

export const BoardGrid = observer(() => {
    const {
        boardStore: { rows },
    } = useMobxStore();

    return (
        <div className={styles.container}>
            {rows.map((row) => {
                return <BoardGridRow key={`row-${row.index}`} row={row} />;
            })}
        </div>
    );
});
