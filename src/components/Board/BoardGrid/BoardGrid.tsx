import { BoardGridRow } from './BoardGridRow';
import styles from './BoardGrid.module.scss';
import { useMobxStores } from '@shared/stores/useMobx.ts';
import { observer } from 'mobx-react-lite';

export const BoardGrid = observer(() => {
    const {
        boardStore: { rows },
    } = useMobxStores();

    return (
        <div className={styles.container}>
            {rows.map((row) => {
                return <BoardGridRow key={`row-${row.index}`} row={row} />;
            })}
        </div>
    );
});
