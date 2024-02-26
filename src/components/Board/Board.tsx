import { BoardGrid } from './BoardGrid';
import styles from './Board.module.scss';

export const Board = observer(function Board() {
    return (
        <div className={styles.container}>
            <BoardGrid />
        </div>
    );
});
