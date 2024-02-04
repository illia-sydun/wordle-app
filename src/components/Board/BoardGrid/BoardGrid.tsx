import { BoardGridRow } from './BoardGridRow';
import styles from './BoardGrid.module.scss';

export const BoardGrid = () => {
    return (
        <div className={styles.container}>
            {Array.from(Array(6)).map((i) => (
                <BoardGridRow key={i} />
            ))}
        </div>
    );
};
