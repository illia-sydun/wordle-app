import { BoardGrid } from './BoardGrid';
import styles from './Board.module.scss';
import { KeyboardKey } from '@shared/types/KeyboardKey.ts';

type BoardProps = {
    answers: KeyboardKey[][];
    currentIndex: number;
};
export const Board = ({ answers, currentIndex }: BoardProps) => {
    return (
        <div className={styles.container}>
            <BoardGrid answers={answers} currentIndex={currentIndex} />
        </div>
    );
};
