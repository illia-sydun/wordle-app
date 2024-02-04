import { BoardGridCell } from './BoardGridCell';
import styles from './BoardGridRow.module.scss';

export const BoardGridRow = () => {
    return (
        <div className={styles.container}>
            {Array.from(Array(5)).map((_, i) => (
                <BoardGridCell key={i} value={i.toString()} status='empty' />
            ))}
        </div>
    );
};
